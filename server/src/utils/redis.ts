import { createClient } from "redis";

// Define a unified interface for our Redis client wrapper
export interface IRedisClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: { EX?: number }): Promise<string>;
  del(key: string): Promise<number>;
  flushAll(): Promise<string>;
}

let redisClient: IRedisClient;

// Function to establish a sandboxed local in-memory storage fallback
const setupMockClient = () => {
  const store = new Map<string, string>();
  
  redisClient = {
    get: async (key: string) => {
      console.log(`[MOCK-REDIS] GET key: ${key}`);
      return store.get(key) || null;
    },
    set: async (key: string, value: string, options?: { EX?: number }) => {
      console.log(`[MOCK-REDIS] SET key: ${key}`);
      store.set(key, value);
      
      // Handle Time-To-Live (TTL) expiration in sandbox mode
      if (options?.EX) {
        setTimeout(() => {
          store.delete(key);
          console.log(`[MOCK-REDIS] EXPIRED key: ${key}`);
        }, options.EX * 1000);
      }
      return "OK";
    },
    del: async (key: string) => {
      console.log(`[MOCK-REDIS] DEL key: ${key}`);
      const existed = store.has(key);
      store.delete(key);
      return existed ? 1 : 0;
    },
    flushAll: async () => {
      console.log(`[MOCK-REDIS] FLUSHALL`);
      store.clear();
      return "OK";
    }
  };
  
  console.log("Redis client initialized in Sandbox/Offline Mock mode successfully.");
};

// Main initialization block
if (process.env.REDIS_URL) {
  console.log(`Attempting to connect to real Redis cluster at: ${process.env.REDIS_URL}`);
  
  const client = createClient({
    url: process.env.REDIS_URL,
  });

  client.on("error", (err) => {
    console.error("Redis Client Connection Error:", err.message);
  });

  client.on("connect", () => {
    console.log("Redis connection established successfully.");
  });

  // Attempt async connection
  client.connect()
    .then(() => {
      redisClient = client as any;
    })
    .catch((err) => {
      console.error("Redis connection failed, falling back to mock client:", err.message);
      setupMockClient();
    });
} else {
  console.log("No REDIS_URL detected in environment variables. Falling back to sandbox.");
  setupMockClient();
}

export { redisClient };
