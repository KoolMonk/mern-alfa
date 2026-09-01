import { Router } from "express";
const userRoutes = Router();
import User from "../models/User.js";

// POST /users
userRoutes.post("/", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// GET /users
userRoutes.get("/", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

export default userRoutes;
