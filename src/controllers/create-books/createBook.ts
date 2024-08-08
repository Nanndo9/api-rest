import express, { Request, Response } from 'express';
import Books from '../../models/Book';


export const addBooks = async (req: Request, res: Response) => {
    try {
        const { titulo, editora, preco, paginas } = req.body;

        if (
            !titulo ||
            !editora ||
            preco === undefined ||
            paginas === undefined
        ) {
            return res.json(`Please enter the fields The fields are required`);
        }

        const createBook = await Books.create({
            titulo,
            editora,
            preco,
            paginas,
        });

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
