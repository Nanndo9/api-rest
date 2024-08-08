import express, { Request, Response } from 'express';
import Books from '../../models/Book';


export const getOneBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const searchAnBook = await Books.findOne({ _id: id });
        res.status(200).json({
            searchAnBook,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
