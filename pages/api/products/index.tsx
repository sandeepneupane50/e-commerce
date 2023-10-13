import nc from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import { getProducts, newProduct } from '@/backend/controllers/productControllers';

const handler = nc();

dbConnect();

handler.post(newProduct);
handler.get(getProducts);

export default handler;