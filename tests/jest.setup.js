import { setupServer } from "msw/node";
import { resetTestUser } from "./utils";
import * as testlib from "@testing-library/react";

const mockServer = setupServer();
// eslint-disable-next-line fp/no-mutation
global.server = mockServer;

// React testing
global.tlib = testlib;

// eslint-disable-next-line fp/no-nil
beforeAll(() => {
  // Environment variables
  process.env.NEXT_PUBLIC_API_HOST = "http://localhost:8000";

  // eslint-disable-next-line fp/no-mutation
  mockServer.listen();

  resetTestUser();
});

afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
