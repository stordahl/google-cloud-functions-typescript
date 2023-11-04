"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.describe)("helloWorld", () => {
    // First, we test the GET method code path in our function
    (0, vitest_1.it)("should call the response's send method", async () => {
        const mocks = getMocks("GET");
        const spy = vitest_1.vi.spyOn(mocks.res, "send");
        await (0, _1.helloWorld)(mocks.req, mocks.res);
        (0, vitest_1.expect)(spy).toHaveBeenCalledWith("Hello, World!");
    });
    // Second, we test the POST method code path in our function
    (0, vitest_1.it)("should call the response's send method and return a message containing the value of body.name", async () => {
        const mocks = getMocks("POST");
        const spy = vitest_1.vi.spyOn(mocks.res, "send");
        await (0, _1.helloWorld)(mocks.req, mocks.res);
        (0, vitest_1.expect)(spy).toHaveBeenCalledWith("Hello, Jacob!");
    });
});
const getMocks = (method) => {
    return {
        req: { body: { name: "Jacob" }, method, query: {} },
        res: {
            send: vitest_1.vi.fn(),
        },
    };
};
