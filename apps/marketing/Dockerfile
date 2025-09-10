# Stage 1: Base - Setup Node.js and pnpm
# We use a specific Node.js version based on your package.json engines field.
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Stage 2: Pruning - Create a pruned Turborepo subset
# This stage creates a minimal version of the monorepo that only includes
# the necessary files to build the 'marketing' app.
FROM base AS pruner
WORKDIR /repo

# Copy the root configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy the source code for all packages and apps
# This is necessary for turbo to correctly determine the dependency graph.
COPY packages /repo/packages
COPY apps/marketing ./apps/marketing

# Generate a pruned subset of the monorepo for the 'marketing' app.
# Output will be placed into a directory named 'out' in the working directory.
RUN pnpm dlx turbo prune --scope=marketing --docker

# Stage 3: Build - Build the marketing application
# This stage uses the pruned files from the previous stage to build the app.
FROM base AS builder
WORKDIR /repo

# Copy the pruned files from the 'pruner' stage
COPY --from=pruner /repo/out/json/ .
COPY --from=pruner /repo/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /repo/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /repo/out/full/ .

# Install dependencies using the pruned lockfile
RUN pnpm install --frozen-lockfile

# Build the marketing app. Turbo will use its cache and only build what's necessary.
# The `dotenv-cli` is a dev dependency at the root, so we use `pnpm --` to run the script.
RUN pnpm --filter=marketing build

# Stage 4: Runner - Serve the application with Nginx
# This final stage creates a small, production-ready image.
FROM nginx:1.27.0-alpine AS runner
WORKDIR /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY apps/marketing/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the 'builder' stage
COPY --from=builder /repo/apps/marketing/dist .

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
