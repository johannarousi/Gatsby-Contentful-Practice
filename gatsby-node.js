// This is the gatsby node configuration file, which allows us to tap in to a lot of node APIs that gatsby exposes.
// This is what we are gonna use in order to generate that slug and in order to dynamically generate
// those blog post pages
//Before we start using these internal APIs , lets check them out over in the gatsby docs so you know where you can learn more

// Here we set up module.export to export first thing on CreateNode
//how we use this file, we export the functions and these functions get registered to gatsby and run when they are supposed to. In this case our function runs when a new node is created
const path = require("path")

// to generate slugs to our posts
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//     // console.log("@@@@@@@@@@@@@@@@@@@", slug)
//     // console.log(JSON.stringify(node, undefined, 4))
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  // 1. Get path to template
  // 2. Get markdown data
  // 3. Create new pages
}
