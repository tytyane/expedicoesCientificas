import { Router } from "express";
import {
    store
} from '../controllers/expedition_controller.js'

const router = Router()

router.post('/', store)

export default router