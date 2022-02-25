import "dotenv/config";
import "./db";
import "./models/Word";
import "./models/User";
import express, { Request, Response } from "express";
import morgan from "morgan";
import path from "path";

const app = express();
const buildAddress = path.join(__dirname, "..", "client/build/");

//전역 middleware 선언부
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(buildAddress));

app.get("*", (req: Request, res: Response) => {
  return res.sendFile(buildAddress + "index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 4000🛡️
  ################################################
`);
});
