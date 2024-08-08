import express, { Request, Response } from 'express';
import Books from '../../models/Book';
import { IUpdateBook } from './protocols';




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
            updateResult,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
