const { ApolloServer, gql } = require("apollo-server-lambda");
faunadb = require("faunadb"),
axios = require("axios")
q = faunadb.query;

// AllLollies: [Lolly!]
const typeDefs = gql`
  type Query: {
    getLollyBySlug(path: String!): Lolly
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
    createLolly(
      recipientName: String!
      message: String!
      senderName: String!
      topColor: String!
      mediumColor: String!
      bottomColor: String!
      path: String!
    ): Lolly!
  }
`;

const Client = new faunadb.Client({
  secret:"fnAD6uH78FACAXQt4Xqf5rXsT4plCVUYGul68PEm",
});


const resolvers = {
   Query: {

  //   AllLollies: async () => {
  //     console.log("hitt")
  //     try {
        
  //       const result = await Client.query(
  //         q.Map(
  //           q.Paginate(q.Match(q.Index("Lolly"))),
  //           q.Lambda((lolly) => {
  //             console.log(lolly)
  //             q.Get(lolly)})
  //         )
  //       );

  //       return result.data.map((lolly) => {
  //         return {
  //           recipientName: lolly.data.recipientName,
  //           message: lolly.data.message,
  //           senderName: lolly.data.senderName,
  //           topColor: lolly.data.topColor,
  //           mediumColor: lolly.data.mediumColor,
  //           bottomColor: lolly.data.bottomColor,
  //           path: lolly.data.path,
  //         };
  //       });
  //     } catch (error) {
  //       return error.toString();
  //     }},
    
    getLollyBySlug: async (_, { path }) => {
      try {
        const result = await Client.query(
          q.Get(q.Match(q.Index("Lolly"), path))
        );
        return result.data;
      } catch (error) {
        return error.toString();
      }
    },
  },
  
  
  Mutation: {
    createLolly: async(_, args) => {
      console.log(args)
      try {
    

        const result = await Client.query(
          q.Create(q.Collection("Lolly"), {
            data: args,
          })
        );

        console.log(result)

        // axios
        //   .post(process.env.NETLIFY_HOOK_URL)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.error(error);
        //   });

        // return result.data;
        return data.args
      } catch (error) {
        return error.toString();
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
