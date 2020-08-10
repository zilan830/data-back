FROM registry.op.simbalink.cn/bigbang-open/node_base:1.0

COPY . /app/

WORKDIR /app
RUN npm install
RUN npm run dev

EXPOSE 7001