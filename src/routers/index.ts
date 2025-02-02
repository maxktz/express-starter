import { createTRPCRouter } from "../trpc";
import { exampleRouter } from "./example";

/**
 * This is the primary router for server.
 *
 * All routers in `routers/` should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
