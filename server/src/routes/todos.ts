import { Router } from 'express';
import * as todosControllers from '../controllers/todos';

const router = Router();

router.get('/', (req, res) => {
    res.send(todosControllers.list())
});
router.post('/', (req, res) => {
    const item = todosControllers.create(req.body);
    console.log(item)
    res.send(item);
});

export default router;
