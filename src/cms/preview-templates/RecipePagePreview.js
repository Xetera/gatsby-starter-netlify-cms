import React from 'react'
import PropTypes from 'prop-types'
import { RecipePageTemplate } from '../../templates/recipe-page'

const RecipePagePreview = ({ entry, getAsset }) => {
  const entryVegetables = entry.getIn(['data', 'vegetables'])
  const vegetables = entryVegetables ? entryVegetables.toJS() : []

  const entrySteps = entry.getIn(['data', 'steps'])
  const steps = entrySteps ? entrySteps.toJS() : []

  const entryIngredients = entry.getIn(['data', 'ingredients'])
  const ingredients = entryIngredients ? entryIngredients.toJS() : []

  return (
    <RecipePageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      prepareTime={entry.getIn(['data', 'prepare_time'])}
      cookTime={entry.getIn(['data', 'cook_time'])}
      servings={entry.getIn(['data', 'servings'])}
      fullImage={entry.getIn(['data', 'full_image'])}
      vegetables={vegetables}
      steps={steps}
      ingredients={ingredients}
    />
  )
}

RecipePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default RecipePagePreview
