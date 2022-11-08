import { Router } from 'express';
import { calendar, contacts, email } from './nylas';

export const routes = Router();

routes.use('/calendar', calendar);
routes.use('/contacts', contacts);
routes.use('/email', email);
