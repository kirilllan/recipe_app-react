import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Recipes from "./components/Recipes";

const SHHH = ["25b8aba1", "3ef44dd97a9674210ec3e16e950cc968"];

class App extends Component {
  state = {
    recipes: undefined
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${SHHH[0]}&app_key=${SHHH[1]}&from=0&to=3`);
    
    const data = await api_call.json();
    this.setState({ recipes: data})
 
    this.componentDidMount = () => {
      const json = window.localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({recipes});
    }

    this.componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      window.localStorage.setItem("recipes", recipes);
    }
  }
  render() {
    return (
      <div className="App">
         <Nav />
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
     </div>
    )
  }


}

export default App;
