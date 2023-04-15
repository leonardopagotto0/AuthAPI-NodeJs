import { Router } from 'express';

import AccountController from '../Controllers/accountController.js';
import tokenSession from '../Middlewares/tokenSession.js';

const router = Router();

router.use(tokenSession);
router.get('/', AccountController.getData)
router.put('/password', AccountController.updatePassword);
router.delete('/', AccountController.deleteAccount)

export default router;