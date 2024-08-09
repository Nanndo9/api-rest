import { Router } from 'express';
import { getBooks } from '../controllers/books-controller/get-book/getBooks';
import { addBooks } from '../controllers/books-controller/create-books/createBook';
import { updateBook } from '../controllers/books-controller/update-books/updateBooks';
import { deleteBook } from '../controllers/books-controller/delete-book/deleteBooks';
import { getOneBook } from '../controllers/books-controller/get-one-books/getOneBooks';

const router = Router();

router.get('/livros', getBooks);
router.post('/livros', addBooks);
router.put('/livros/:id', updateBook);
router.delete('/livros/:id', deleteBook);
router.get('/livros/:id', getOneBook);

export default router;
