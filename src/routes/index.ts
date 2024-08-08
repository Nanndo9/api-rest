import { Router } from 'express';
import { getBooks } from '../controllers/get-book/getBooks';
import { addBooks } from '../controllers/create-books/createBook';
import { updateBook } from '../controllers/update-books/updateBooks';
import { deleteBook } from '../controllers/delete-book/deleteBooks';
import { getOneBook } from '../controllers/get-one-books/getOneBooks';


const router = Router();

router.get('/livros', getBooks);
router.post('/livros', addBooks);
router.put('/livros/:id', updateBook);
router.delete('/livros/:id', deleteBook);
router.get('/livros/:id', getOneBook);

export default router;
