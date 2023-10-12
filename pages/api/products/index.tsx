import nc from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import { getProduct, newProduct } from '@/backend/controllers/productControllers';

const handler = nc();

dbConnect();

handler.post(newProduct);
handler.get(getProduct);

export default handler;