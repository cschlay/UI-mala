import { rest } from "msw";
import { AUTH_TOKEN_NAME } from "../../settings";
import { getApiUrl, requests } from "./requests";
import Cookies from "js-cookie";

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

  it("it should include authorization headers if cookie exist", () => {
    Cookies.set(AUTH_TOKEN_NAME, "j0gf8h12");
    server.use(
      rest.get(getApiUrl(url), (req, res, ctx) => {
        if (req.headers.get("Authorization")) {
          return res(ctx.status(200), ctx.json({}));
        }
        return res(ctx.status(401));
      })
    );
    return requests.get(url);
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
