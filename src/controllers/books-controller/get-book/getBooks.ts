import express, { Request, Response } from 'express';
import Books from '../../../models/books/Book';

export const getBooks = async (req: Request, res: Response) => {
    const listBooks = await Books.find({});
    res.status(200).json(listBooks);
};
