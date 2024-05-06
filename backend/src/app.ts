import express, { NextFunction, Request, Response } from "express";
import fileupload from "express-fileupload";
import cors from "cors";
import { router } from "./routes/index.routes";
import errorHandler from "./utils/error";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload({ useTempFiles: true, tempFileDir: "/pictures" }));
app.use(router);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  errorHandler(res);
});
