import express, { Request, Response } from 'express';
import Books from '../../../models/books/Book';
import { Author } from '../../../models/author/author';

export const addBooks = async (req: Request, res: Response) => {
    try {
        const newBook = req.body;
        const authorfound = await Author.findById(newBook.autor);
        if (!authorfound) {
            return res.status(404).json({ message: 'Author not found' });
        }
         const fullBook = { ...newBook, autor: { ...authorfound } };

        const createBook = await Books.create(fullBook);

        res.status(201).json({
            message: 'Successfully created',
            book: createBook,
        });
    } catch (error) {
        console.error(`Error creating the book: ${error}`);
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
