import express, { Request, Response } from 'express';
import { Author } from '../../../models/author/author';

export const getOneAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const searchAnAuthor = await Author.findOne({ _id: id });
        res.status(200).json({
            searchAnAuthor,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
