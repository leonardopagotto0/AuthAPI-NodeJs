import { Router } from 'express';

import authRoutes from './authRoutes.js';
import tokenRoutes from './tokenRoutes.js';
import accountRoutes from './accountRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/token', tokenRoutes);
router.use('/account', accountRoutes);

export default router;