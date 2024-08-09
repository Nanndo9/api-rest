import express, { Request, Response } from 'express';
import { Author } from '../../../models/author/author';

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json('Provide an ID');
        }
        const AuthorDelete = await Author.deleteOne({ _id: id });
        res.status(200).json({
            message: `Author successfully deleted`,
            AuthorDelete,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
