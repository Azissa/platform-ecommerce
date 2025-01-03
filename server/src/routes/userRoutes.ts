import express from "express";
import { getUser,getUserById, postUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUser);
router.get("/userId/", getUserById)
router.post("/createUser", postUser);


export default router;
