"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const helloWorld = async (req, res) => {
    const { body, method } = req;
    if (method === "GET")
        res.send("Hello, World!");
    if (method === "POST" && body.name)
        res.send(`Hello, ${body.name}!`);
};
exports.helloWorld = helloWorld;
