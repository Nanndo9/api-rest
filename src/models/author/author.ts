import mongoose from 'mongoose';
import { IAuthorSchema } from './AuthorInterface';

const authorSchema = new mongoose.Schema<IAuthorSchema>(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: String, required: true },
        nacionalidade: { type: String },
    },
    { versionKey: false }
);

const Author = mongoose.model<IAuthorSchema>('authors', authorSchema);

export { Author, authorSchema };
