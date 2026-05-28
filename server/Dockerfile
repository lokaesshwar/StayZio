# Stage 1: Build the TypeScript backend
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all development and production dependencies
RUN npm install

# Copy source code and Prisma schemas
COPY . .

# Generate Prisma client bindings
RUN npx prisma generate

# Compile TypeScript to JavaScript in the dist folder
RUN npm run build

# Stage 2: Runtime image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install only production dependencies for lightweight execution
RUN npm install --only=production

# Copy compiled JavaScript from build stage
COPY --from=builder /app/dist ./dist

# Copy Prisma Client bindings and seed scripts
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Define environment variables
ENV NODE_ENV=production
ENV PORT=3002

EXPOSE 3002

# Run the Express backend
CMD ["node", "dist/src/index.js"]
