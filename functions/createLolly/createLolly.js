const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    lolly: String!
  }
  type Lolly {
    recipientName: String!
    senderName: String!
    message: String!
    topColor: String!
    mediumColor: String!
    bottomColor: String!
    path: String!
  }

  type Mutation {
    createLolly(recipientName: String!, message: String!,senderName: String!, topColor: String!,mediumColor: String!,bottomColor: String!): Lolly
  }
`

const resolvers = {
  Query: {
    lolly: () => {
      return 'Hello, world!'
    },
  },
  Mutation: {
    createLolly: (_, args) => {
      console.log(args)
      return args;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
