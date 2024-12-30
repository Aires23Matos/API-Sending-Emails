import { Router } from "express";
import SendEmailController from "../controller/SendEmailController";


const router = new Router();

router.post('/send-email', SendEmailController);
