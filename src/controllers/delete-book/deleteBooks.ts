import express, { Request, Response } from 'express';
import Books from '../../models/Book';

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json('Provide an ID');
        }
        const bookDelete = await Books.deleteOne({ _id: id });
        res.status(200).json({
            message: `Book successfully deleted`,
            bookDelete,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
