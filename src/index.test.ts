import { type Request, type Response } from "@google-cloud/functions-framework"
import { describe, it, expect, vi } from "vitest";
import { helloWorld } from ".";

describe("helloWorld", () => {
    // First, we test the GET method code path in our function
    it("should call the response's send method", async () => {
        const mocks = getMocks("GET");
        const spy = vi.spyOn(mocks.res, "send");
        await helloWorld(mocks.req, mocks.res);
        expect(spy).toHaveBeenCalledWith("Hello, World!");
    });
    // Second, we test the POST method code path in our function
    it("should call the response's send method and return a message containing the value of body.name", async () => {
        const mocks = getMocks("POST");
        const spy = vi.spyOn(mocks.res, "send");
        await helloWorld(mocks.req, mocks.res);
        expect(spy).toHaveBeenCalledWith("Hello, Jacob!");
    });
});

const getMocks = (method: string) => {
    return {
        req: { body: { name: "Jacob" }, method, query: {} } as unknown as Request,
        res: {
            send: vi.fn(),
        } as unknown as Response,
    };
};
