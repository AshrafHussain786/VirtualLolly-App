const path = require(`path`)


exports.createPages = async ({ actions, graphql }) => {
  console.log(graphql)
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
  }}}
  `)

  //     // LOLLIES{


  // // console.log(result)
  // const x = ["haris", "saad","anas"];
  //  x.map((indLolly) => {

  //   actions.createPage({
  //     path: `lollies/${indLolly}`,
  //     component: path.resolve(`./src/template/lollyPage.jsx`),
  //   })
  // })


  result.data.LOLLIES.getAllLollies.map((indLolly) => {

    actions.createPage({
      path: `lolly/${indLolly.path}`,
      component: path.resolve(`./src/template/lollyPage.jsx`),
      context: {
        data: indLolly,
      },
    })
  })
}