import { balance } from '../models/balance';

const find = async () => balance.find();

const create = async () => balance.create();

export {
  find,
  create,
};
