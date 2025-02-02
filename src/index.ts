import { appRouter } from "./routers";
import { createContext } from "./context";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (c) => {
  return c.text("Hello!");
});

app.use(
  "/trpc",
  trpcServer({
    router: appRouter,
    createContext,
  })
);

/**
 * https://hono.dev/getting-started/bun#change-port-number
 */
export default {
  port: 4000,
  fetch: app.fetch,
};
