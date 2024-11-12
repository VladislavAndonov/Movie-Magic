import { Router } from 'express';

const router = Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

export default router;