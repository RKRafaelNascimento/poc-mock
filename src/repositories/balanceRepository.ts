import { balance } from '../models/balance';
import IBalance from '../types/IBalance';

const find = () => balance.find();

const create = () => balance.create();

export {
  find,
  create,
};
