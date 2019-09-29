import { balanceRepository } from '../repositories/index';

const find = async () => balanceRepository.find();

const create = async () => balanceRepository.create();

export { find, create };
