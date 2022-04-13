import { helloRouter } from "../routes/hello.route";
import { sayHello } from "../service/hello.service";

export const getHello = async (req: Request, res: Response): Promise<any> => {
  const hello: string = await sayHello();
  res.status(200).send({
    message: "hello",
  });
};