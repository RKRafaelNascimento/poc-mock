
import { balanceService } from '../services/index';

async function balanceRouter(fastify, options) {
  fastify.get('/balances/:phoneNumber', options, async (request, reply) => {
    try {
      const response = await balanceService.find();
      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
    }
  });
  fastify.post('/balances/:phoneNumber', options, async (request, reply) => {
    try {
      const response = await balanceService.create();
      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
    }
  });
}
export { balanceRouter };
