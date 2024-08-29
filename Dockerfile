# Stage 1: Build the project with Bun
FROM oven/bun:alpine AS base_image
WORKDIR /app
COPY . .
RUN bun install

# Stage 2: Minimal runtime for running tests
FROM base_image AS test
WORKDIR /app
CMD ["bun", "test"]


# Stage 3: Minimal runtime for running
FROM base_image
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["bun", "start"]
