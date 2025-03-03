import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import * as graphqlWs from 'graphql-ws/use/ws';
import { schema } from './route';

const server = createServer({
  keepAlive: true,
});

const wsServer = new WebSocketServer({
  server,
  port: 4000,
  backlog: 100,
  clientTracking: true,
});

graphqlWs.useServer({ schema }, wsServer);

server.listen(4000, () => {
  console.log('GraphQL Subscription Server is running on ws://localhost:4000');
});
