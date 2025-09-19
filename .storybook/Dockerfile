# Stage 1: Base - Setup Node.js and pnpm
# We use a specific Node.js version based on your package.json engines field.
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Stage 2: Builder - Build storybook-static
FROM base AS builder
WORKDIR /repo

# Copy the root configuration files
COPY . /repo/

# Install dependencies using lockfile
RUN pnpm install --frozen-lockfile

# Generate static files of all **/.storybook including the one at root and in subfolder recursively.
# Output at ./storybook-static/
RUN pnpm run storybook:build

# Stage 3: Runner - Serve the application with Nginx
# This final stage creates a small, production-ready image.
FROM nginx:1.27.0-alpine AS runner
WORKDIR /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY .storybook/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the 'builder' stage
COPY --from=builder /repo/storybook-static/ .

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
