import mongoose from 'mongoose';

const balanceSchema = new mongoose.Schema({
  phoneNumber: { type: String, index: true, unique: true },
  data: JSON,
  type: String,
});

const balance = mongoose.model('balances', balanceSchema);

export { balanceSchema, balance };
