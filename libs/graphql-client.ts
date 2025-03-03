import {
  createClient,
  subscriptionExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient = createWSClient({ url: 'ws://localhost:4000' });

console.log('wsClient', wsClient);

export const client = createClient({
  url: '/api/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || '' };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
});
