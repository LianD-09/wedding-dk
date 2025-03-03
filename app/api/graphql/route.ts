import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { createSchema, createYoga } from 'graphql-yoga';

const prisma = new PrismaClient();
const pubsub = new PubSub();
const COMMENT_ADDED = 'COMMENT_ADDED';

const typeDefs = `
  type Comment {
   id: ID!
   author: String!
   message: String!
   createdAt: String!
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {
    addComment(author: String!, message: String!): Comment!
  }

  type Subscription {
    commentAdded: Comment!
  }
`;

const resolvers = {
  Query: {
    comments: async () =>
      await prisma.comment.findMany({ orderBy: { createdAt: 'desc' } }),
  },
  Mutation: {
    addComment: async (
      _: unknown,
      { author, message }: { author: string; message: string },
    ) => {
      const comment = await prisma.comment.create({
        data: { author, message },
      });
      pubsub.publish(COMMENT_ADDED, { commentAdded: comment });
      return comment;
    },
  },
  Subscription: {
    commentAdded: {
      subscribe: () => pubsub.asyncIterableIterator([COMMENT_ADDED]),
    },
  },
};

// Create Yoga GraphQL Server
export const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({
  schema: schema,
  graphqlEndpoint: '/api/graphql',
});

export { yoga as GET, yoga as POST };
