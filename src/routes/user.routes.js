import { Router } from "express";
import {
    userGet,
    userAuth,
    usercheck
} from "../controllers/user.js"

let router = Router()

router.route("/get").get(userGet)
router.route("/auth").post(userAuth)
router.route("/check").post(usercheck)


export default router