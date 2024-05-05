import { Response, Request } from "express"

const sayHello = (req:Request,res: Response) => {
    res.status(200).send("hello from login")
}


export { sayHello }