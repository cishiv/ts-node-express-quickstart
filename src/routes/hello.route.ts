import express, { Request, Response } from "express";
import { getHello } from "../controllers/hello.controller";

export const helloRouter = express.Router();

helloRouter.get("/hello", getHello);
