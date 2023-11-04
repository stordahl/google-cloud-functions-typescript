import { type HttpFunction } from "@google-cloud/functions-framework";

export const helloWorld: HttpFunction = async (req, res): Promise<void> => {
    const { body, method } = req;
    
    if(method === "GET") res.send("Hello, World!");
    if(method === "POST" && body.name) res.send(`Hello, ${body.name}!`)
};
