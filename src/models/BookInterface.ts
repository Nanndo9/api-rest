import mongoose, { Types } from 'mongoose';


export interface IBooks {
    id: Types.ObjectId;
    titulo: string;
    editora: string;
    preco: number;
    paginas: number;
}
