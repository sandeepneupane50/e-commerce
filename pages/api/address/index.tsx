import nc from 'next-connect'
import dbConnect from '@/backend/config/dbConnect';
import {newAddress} from '@/backend/controllers/addressController';

const handler = nc();

dbConnect();

handler.post(newAddress);

export default handler;