exports.createPages = ({ actions }) => {
  actions.createPage({
    path: `/index.html`,
    component: require.resolve(`./src/templates/index.js`),
  })
}
