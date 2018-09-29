import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import Features from '../components/Features'
// import Testimonials from '../components/Testimonials'
// import Pricing from '../components/Pricing'

export const RecipePageTemplate = ({
  image,
  title,
  heading,
  description,
  fullImage,
  vegetables,
  steps,
  ingredients
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="full-width-image-container margin-top-0" style={{ backgroundImage: `url(${image})` }}>
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                    backgroundColor: "#f40",
                    color: "white",
                    padding: "1rem"
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                  <p>{description}</p>
                </div>
              </div>
              {/* <Features gridItems={intro.blurbs} /> */}
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">{/* {main.heading} */}</h3>
                  {/* <p>{main.description}</p> */}
                </div>
              </div>
              {/* <Testimonials testimonials={testimonials} /> */}
              <div className="full-width-image-container" style={{ backgroundImage: `url(${fullImage})` }} />
              <h2 className="has-text-weight-semibold is-size-2">{/* {pricing.heading} */}</h2>
              {/* <p className="is-size-5">{pricing.description}</p> */}
              {/* <Pricing data={pricing.plans} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

RecipePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  fullImage: PropTypes.string,
  vegetables: PropTypes.array,
  steps: PropTypes.array,
  ingredients: PropTypes.array
};

const RecipePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <RecipePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        fullImage={frontmatter.full_image}
        vegetables={frontmatter.vegetables}
        steps={frontmatter.steps}
        ingredients={frontmatter.ingredients}
      />
    </Layout>
  );
};

RecipePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default RecipePage;

export const RecipePageQuery = graphql`
  query RecipePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        full_image
        vegetables {
          text
        }
        steps {
          text
        }
        ingredients {
          text
        }
      }
    }
  }
`;
