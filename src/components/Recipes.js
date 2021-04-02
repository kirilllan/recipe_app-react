import React from 'react';

const Recipes = props => (
  <div className="container">
    <div className="row">
      { props.recipes && props.recipes.hits.map(recipee => {
          return (
            <div key={recipee.recipe.label} className="col-md-4" style={{marginBottom:"2rem"}}>
              <div className="recipes__box">
              <img className="recipe__box-img" src= {recipee.recipe.image} alt={recipee.recipe.label}/>
              <div className="recipe__text">
                <h5 className="recipes__title">{recipee.recipe.label.length < 20 ? `{recipee.recipe.label}` : `${recipee.recipe.label.substring(0, 25)}...`}</h5>
                <p className="recipes__subtitle">Publisher: <span>{recipee.recipe.source}</span></p>
                </div>
                <button className="recipe_buttons">View Recipe</button>
              </div>
            </div>
          )
        }) }
    </div>
    {/* { props.recipes && props.recipes.hits.map(recipee => {
          console.log(recipee.recipe.label)
          return (
            <div key={ recipee.recipe.calories }>
              <img src= {recipee.recipe.image} alt={recipee.recipe.label}/>
               <p>{ recipee.recipe.label }</p>
            </div>
          )
        }) } */}
  </div>
);

export default Recipes;