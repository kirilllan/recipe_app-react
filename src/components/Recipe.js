import React from 'react';
import { Link } from "react-router-dom";

const SHHH = ["25b8aba1", "3ef44dd97a9674210ec3e16e950cc968"];

class Recipe extends React.Component {
  state = {
    activeRecipe: undefined
  }
  
componentDidMount = async () => {
    const title = this.props.location.state.recipe || '';
    console.log(this.props)
    const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${SHHH[0]}&app_key=${SHHH[1]}`);
    
    const res = await req.json();
    /* this.setState({ activeRecipe: res.hits[0].recipe }) */
    this.setState({
      activeRecipe: res.hits[res.hits.findIndex(i => i.recipe.label == this.props.location.state.recipe)].recipe
    })
    console.log(this.state.activeRecipe)
    
}

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        { this.state.activeRecipe &&
          <div className="active-recipe">
          <img className="active-recipe__img" src={recipe.image} alt={recipe.label} />
          <h3 className="active-recipe__title">{recipe.label }</h3>
          <h4 className="active-recipe__publisher">Publisher: <span>{recipe.source}</span></h4>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>

        }
      </div>
    )
  }
}

export default Recipe;