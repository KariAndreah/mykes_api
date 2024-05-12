FROM node:21.4.0-alpine

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY prisma ./prisma


RUN npm install
RUN npx prisma generate

COPY . .

CMD ["npx", "tsx", "./index.ts"]