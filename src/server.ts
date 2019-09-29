import fastify from 'fastify';
import * as routes from './routers/index';
import startMongo from './infrastructure/mongoDB/client';

const server = fastify({});

for (const i in routes) {
  server.register(routes[i]);
}

const start = async () => {
  try {
    // await startMongo();
    await server.listen(3005, '0.0.0.0');
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});
process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
