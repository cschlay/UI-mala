import { setupServer } from "msw/node";
import { resetTestUser } from "./utils";

const mockServer = setupServer();
// eslint-disable-next-line fp/no-mutation
global.server = mockServer;

// eslint-disable-next-line fp/no-nil
beforeAll(() => {
  // eslint-disable-next-line fp/no-mutation
  process.env.API_HOST = "http://localhost:8000";
  mockServer.listen();

  resetTestUser();
});

afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
