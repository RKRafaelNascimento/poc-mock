import fastify from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';


const server: fastify.FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify();


const start = async () => {
  try {
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
