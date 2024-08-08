import { Router } from 'express';
import { addBooks, getBooks, test, updateBook } from '../controllers';

const router = Router();

router.get('/', test);

router.get('/livros', getBooks);
router.post('/livros', addBooks);
router.put("/livros/:id",updateBook)











export default router;
