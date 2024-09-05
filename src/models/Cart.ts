import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
});

export const Cart = model('Cart', cartSchema);