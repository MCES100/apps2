export default defineEventHandler(({ context }) => {
    // the type `KVNamespace` comes from the @cloudflare/workers-types package
    const MY_KV: KVNamespace = context.cloudflare.env.MY_KV;
  
    return {
      // ...
    };
  });