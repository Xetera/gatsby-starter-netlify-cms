import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import pot from "../img/hot-kitchen-pot.svg";
import knife from "../img/big-knife.svg";
import people from "../img/multiple-users-silhouette.svg";

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
                <div
                  style={{
                    color: "#574D3F",
                    fontSize: "18px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: "18px"
                  }}
                >
                  {recipe.frontmatter.title}
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: "0 0 185px" }}>
                    <img src={recipe.frontmatter.image} style={{ width: "185px" }} />
                  </div>
                  <div style={{ flex: "1 0 auto", marginLeft: "20px" }}>
                    <img src={knife} style={{ width: "20px", marginRight: "8px" }} /> {recipe.frontmatter.prepare_time}m
                    preparation
                    <br />
                    <img src={pot} style={{ width: "20px", marginRight: "8px" }} /> {recipe.frontmatter.cook_time}m
                    cooking
                    <br />
                    <img src={people} style={{ width: "20px", marginRight: "8px" }} /> {recipe.frontmatter.servings}{" "}
                    servings
                  </div>
                </div>
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
