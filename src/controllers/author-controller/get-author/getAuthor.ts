import express, { Request, Response } from 'express';
import { Author } from '../../../models/author/author';

export const getAuthor = async (req: Request, res: Response) => {
    const listAuthor = await Author.find({});
    res.status(200).json(listAuthor);
};
