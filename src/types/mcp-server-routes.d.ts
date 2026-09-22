// Type augmentation for TanStack Start server routes used by @lovable.dev/mcp-js.
// The installed @tanstack/router-core types don't declare the `server` option on
// createFileRoute, but the runtime (start-server-core) reads route.options.server.
// This makes the generated MCP routes type-check without editing them.
import type { AnyContext, AnyRoute } from "@tanstack/router-core";

declare module "@tanstack/router-core" {
  interface FilebaseRouteOptionsInterface<
    TRegister,
    TParentRoute extends AnyRoute = AnyRoute,
    TId extends string = string,
    TPath extends string = string,
    TSearchValidator = undefined,
    TParams = {},
    TLoaderDeps extends Record<string, any> = {},
    TLoaderFn = undefined,
    TRouterContext = {},
    TRouteContextFn = AnyContext,
    TBeforeLoadFn = AnyContext,
    TRemountDepsFn = AnyContext,
    TSSR = unknown,
    TServerMiddlewares = unknown,
    THandlers = undefined,
  > {
    server?: {
      handlers?: Record<string, (...args: Array<any>) => any>;
      middleware?: any;
    };
  }
}

export {};
