import express, { Request, Response } from 'express';
import {Author} from '../../../models/author/author';
import { IUpdateAuthor } from './protocols';

export const updateAuthor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateAuthors: IUpdateAuthor = req.body;

        if (!id) {
            res.status(400).json('Provide an ID');
        }
        const updateResult = await Author.updateOne({ _id: id }, updateAuthors);

        res.status(200).json({
            message: `Author updated successfully`,
            updateResult,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
