import { Types } from 'mongoose';

export interface IAuthorSchema {
    id: Types.ObjectId;
    nome: string;
    nacionalidade: string;
}
