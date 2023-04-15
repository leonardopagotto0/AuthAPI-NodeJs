import { Router } from 'express';

import authRoutes from './authRoutes.js';
import tokenRoutes from './tokenRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/token', tokenRoutes);

export default router;