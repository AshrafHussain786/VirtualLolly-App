const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {

  const result = await graphql(`
  query MyQuery{
    LOLLIES{
    getAllLollies{
      recipientName
      senderName
      message
      topColor
      mediumColor
      bottomColor
      path
    }
  }}
  `)

  console.log(result)


  result.data.LOLLIES.getAllLollies.map((indLolly) => {

    actions.createPage({
      path: `lollies/${indLolly.path}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        path: indLolly,
      },
    })
  })
}