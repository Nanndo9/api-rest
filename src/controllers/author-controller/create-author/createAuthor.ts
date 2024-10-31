import express, { Request, Response } from 'express';
import { Author } from '../../../models/author/author';
export const addAuthor = async (req: Request, res: Response) => {
    try {
        const { nome, nacionalidade } = req.body;

        if (!nome || !nacionalidade) {
            return res.json(`Please enter the fields The fields are required`);
        }

        const createAuthor = await Author.create({
            nome,
            nacionalidade,
        });
        res.status(201).json({
            message: 'Successfully created',
            book: createAuthor,
        });
    } catch (error) {
        console.error(`Error creating the book: ${error}`);
        res.status(500).json({
            message: 'Internal server error.',
            error: error,
        });
    }
};
