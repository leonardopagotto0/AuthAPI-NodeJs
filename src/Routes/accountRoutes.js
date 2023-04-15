import { Router } from 'express';

import AccountController from '../Controllers/accountController.js';
import tokenSession from '../Middlewares/tokenSession.js';

const router = Router();

router.use(tokenSession);
router.put('/password', AccountController.updatePassword);

export default router;