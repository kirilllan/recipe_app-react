import React from 'react';

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
    return (
      <h1>Recipe cooomponent!</h1>
    )
  }
}

export default Recipe;