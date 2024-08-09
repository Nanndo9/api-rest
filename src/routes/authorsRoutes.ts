import { Router } from 'express';
import { getAuthor } from '../controllers/author-controller/get-author/getAuthor';
import { addAuthor } from '../controllers/author-controller/create-author/createAuthor';
import { updateAuthor } from '../controllers/author-controller/update-author/updateAuthor';
import { deleteAuthor } from '../controllers/author-controller/delete-author/deleteAuthor';
import { getOneAuthor } from '../controllers/author-controller/get-one-author/getOneAuthor';
;

const router = Router();

router.get('/autores', getAuthor);
router.post('/autores', addAuthor);
router.put('/autores/:id', updateAuthor);
router.delete('/autores/:id', deleteAuthor);
router.get('/autores/:id', getOneAuthor);

export default router;
