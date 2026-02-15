FROM node:22-slim AS builder

WORKDIR /workspace

COPY package*.json ./
COPY nx.json ./
COPY tsconfig*.json ./
COPY jest.config.ts ./
COPY jest.preset.js ./
COPY .eslint* ./

COPY apps/executor ./apps/executor
COPY libs/shared ./libs/shared
COPY libs/pulsar ./libs/pulsar

RUN npm install
RUN apt-get update && apt-get install -y protobuf-compiler
RUN npx nx build executor

FROM node:22-slim AS runner
WORKDIR /app

COPY --from=builder /workspace/package.json ./

COPY --from=builder /workspace/apps/executor/package.json ./apps/executor/package.json

COPY --from=builder /workspace/libs/shared/package.json ./libs/shared/package.json
COPY --from=builder /workspace/libs/pulsar/package.json ./libs/pulsar/package.json
COPY --from=builder /workspace/package-lock.json ./

ENV NODE_ENV=production

RUN npm ci

COPY --from=builder /workspace/dist ./dist

CMD ["node", "dist/apps/executor/main.js"]