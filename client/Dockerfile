# Stage 1: Build the Next.js frontend
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies (development + production)
RUN npm install

# Copy application files
COPY . .

# Build Next.js production bundles
RUN npm run build

# Stage 2: Runtime image
FROM node:18-alpine AS runner

WORKDIR /app

# Define production environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Copy dependency manifests
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built assets and static files from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run", "start"]
