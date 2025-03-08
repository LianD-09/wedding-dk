import { WebSocketServer } from 'ws';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const wss = new WebSocketServer({ port: 4000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // send initial comments
  prisma.comment.findMany().then((comments) => {
    ws.send(JSON.stringify({ type: 'INIT', comments }));
  });

  ws.on('message', async (message) => {
    const data = JSON.parse(message.toString());

    if (data.type === 'NEW_COMMENT') {
      const comment = await prisma.comment.create({
        data: {
          author: data?.comment?.author,
          message: data?.comment?.message,
        },
      });

      // broadcast comment to all clients
      wss.clients.forEach((client) => {
        client.send(JSON.stringify({ type: 'NEW_COMMENT', comment }));
      });
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server started on port 4000');
