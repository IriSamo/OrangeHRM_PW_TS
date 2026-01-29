import { BasePage } from "./pages/BasePage";

type FlowChain<P> = {
  [K in keyof P]:
    P[K] extends (...args: infer A) => Promise<any>
      ? (...args: A) => FlowChain<any>
      : never;
} & {
  run(): Promise<P>;
};

export function flow<P extends BasePage>(page: P): FlowChain<P> {
  let chain: Promise<any> = Promise.resolve(page);

  const proxy = new Proxy(
    {},
    {
      get(_, prop: string | symbol) {
        if (prop === 'then') {
          return undefined;
        }

        if (prop === 'run') {
          return () => chain as Promise<P>;
        }

        return (...args: any[]) => {
          chain = chain.then(instance => {
            const fn = (instance as any)[prop];

            if (typeof fn !== 'function') {
              throw new Error(
                `Flow error: method "${String(prop)}" does not exist on ${instance.constructor.name}`
              );
            }

            return fn.apply(instance, args);
          });

          return proxy;
        };
      },
    }
  );

  return proxy as FlowChain<P>;
}
