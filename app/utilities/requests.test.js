import { rest } from "msw";
import { getApiUrl } from "./requests";
const { requests } = require("./requests");

const url = "/test";

describe("requests.ts", () => {
  it("getApiUrl function should construct url", () => {
    expect(getApiUrl(url, { track: 1 })).toEqual(
      `http://localhost:8000${url}?track=1`
    );
  });

  it("should support GET with given url and params", () => {
    server.use(
      rest.get(getApiUrl(url), (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ username: "yorma" }));
      })
    );

    return requests.get(url, { age: 1 }).then((data) => {
      expect(data).toEqual({ username: "yorma" });
    });
  });

  it("it should return status -1 if an non http error is encountered", () => {
    server.use(
      rest.get(getApiUrl(url), (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );

    return requests.get(url, { age: 1 }).catch((res) => {
      expect(res.status).toEqual(-1);
    });
  });

  it("it should reject promise when unhandled status code is  encountered", () => {
    server.use(
      rest.get(getApiUrl(url), (req, res, ctx) => {
        return res(ctx.status(418));
      })
    );

    return requests.get(url).catch((res) => {
      expect(res.status).toEqual(418);
    });
  });
});
