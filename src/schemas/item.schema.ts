import { CreateItem } from '@/protocols';
import Joi from 'joi';

export const createItemSchema = Joi.object<CreateItem>({
    name: Joi.string().required(),
    streaming_id: Joi.number().positive().required(),
    type_id: Joi.number().positive().required(),
    genre: Joi.string().required()
});