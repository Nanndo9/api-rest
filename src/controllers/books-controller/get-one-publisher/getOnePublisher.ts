import express, { Request, Response } from 'express';
import Books from '../../../models/books/Book';
import mongoose from 'mongoose';

export const getOnePublisher = async (req: Request, res: Response) => {
    try {
        const editora = req.query.editora
        const searchAnPublisher = await Books.find({ editora: editora });
        res.status(200).json({
            searchAnPublisher,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
