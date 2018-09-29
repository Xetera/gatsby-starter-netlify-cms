import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class RecipePage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: recipes } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Recettes</h1>
            </div>
            {recipes.map(({ node: recipe }) => (
              <div
                className="content"
                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                key={recipe.frontmatter.title}
              >
                <img src={recipe.frontmatter.image} style={{ width: "185px" }} />
                <p>
                  {/* <Link className="has-text-primary" to={recipe.fields.slug}> */}
                  {recipe.frontmatter.title}
                  {/* </Link> */}
                  <small>{recipe.frontmatter.date}</small>
                </p>
                <p>
                  {recipe.title}
                  <br />
                  Prepare: {recipe.frontmatter.prepare_time}
                  <br />
                  Cook: {recipe.frontmatter.cook_time}
                  <br />
                  Servings: {recipe.frontmatter.servings}
                  <br />
                  <br />
                  {/* <Link className="button is-small" to={recipe.fields.slug}>
                    See recipe →
                  </Link> */}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

RecipePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query RecipeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "recipe-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
            title
            image
            heading
            prepare_time
            cook_time
            servings
            full_image
            vegetables {
              text
            }
          }
        }
      }
    }
  }
`;
