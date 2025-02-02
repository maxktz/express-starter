import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./context";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/", (req, res) => {
  res.send("Health check");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
