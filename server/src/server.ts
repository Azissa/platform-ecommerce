import express, { Request, Response } from "express";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { HttpCode, ONE_HUNDRED, ONE_THOUSAND, SIXTY } from "./core/constants";
import { dataSource } from "./core/config/app-data-source";
import router from "./routes/userRoutes";
import cors from 'cors'

interface ServerOptions {
  port: number;
  apiPrefix: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { port } = options;
    this.port = port;
  }

  async start(): Promise<void> {
    //* Middlewares
    this.app.use(express.json()); // parse json in request body (allow raw)
    this.app.use(express.urlencoded({ extended: true })); // allow x-www-form-urlencoded
    this.app.use(compression());
    this.app.use(cors())
    //  limit repeated requests to public APIs
    this.app.use(
      rateLimit({
        max: ONE_HUNDRED,
        windowMs: SIXTY * SIXTY * ONE_THOUSAND,
        message: "Too many requests from this IP, please try again in one hour",
      })
    );

    // Test rest api
    this.app.get("/", (_req: Request, res: Response) => {
      res.status(HttpCode.OK).send({
        message: `Welcome to Initial API! \n Endpoints available at http://localhost:${this.port}/`,
      });
    });


    this.app.use("/api", router);

    dataSource  
      .initialize()
      .then(() => console.log("connected to postgre"))
      .catch((err) => console.error("PostgreSQL connection error:", err));
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}
