FROM node:22-slim

# Install build tools for native packages (optional)
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

# DO NOT COPY THE REST OF THE APP — let docker-compose volume do it

EXPOSE 3000

CMD ["npm", "run", "dev"]
