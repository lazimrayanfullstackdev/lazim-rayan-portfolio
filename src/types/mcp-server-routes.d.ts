// Type augmentation for TanStack Start server routes used by @lovable.dev/mcp-js.
// The installed @tanstack/router-core types do not include the `server` option on
// createFileRoute, but the runtime (start-server-core) reads route.options.server.
// This declaration makes the generated MCP routes type-check without editing them.

declare module "@tanstack/router-core" {
  interface FilebaseRouteOptionsInterface<
    TRegister = any,
    TParentRoute = any,
    TId extends string = string,
    TPath extends string = string,
    TSearchValidator = undefined,
    TParams = {},
    TLoaderDeps extends Record<string, any> = {},
    TLoaderFn = undefined,
    TRouterContext = {},
    TRouteContextFn = any,
    TBeforeLoadFn = any,
    TRemountDepsFn = any,
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
