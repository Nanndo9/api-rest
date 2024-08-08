import express, { Request, Response } from 'express';
import Books from '../models/Book';

export const test = (req: Request, res: Response) => {
    res.send('Hello Nanndo');
};

export const getBooks = async (req: Request, res: Response) => {
    const listBooks = await Books.find({});
    res.status(200).json(listBooks);
};


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

export interface IUpdateBook {
    editora?: string;
    preco?: number;
    paginas?: number;
}

export const updateBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateBooks: IUpdateBook = req.body;

        if (!id) {
            res.status(400).json('Provide an ID');
        }
        const updateResult = await Books.updateOne({ _id: id }, updateBooks);

        res.status(200).json({
            message: `Book updated successfully`,
            updateResult
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
