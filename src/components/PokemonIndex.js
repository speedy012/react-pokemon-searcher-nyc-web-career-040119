import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemons: [],
    searchInput: ""
  }
  //use string because it is what is inside of the search bar


  addPokemon = (newPokemon) => {
  // all pokemon state: this.state.pokemon
  // the pokemon to add: the state of the form
    this.setState({
      pokemon: [...this.state.pokemons, newPokemon]
    })
  }

  updateSearchInput =(e) => {
    console.log(e.target.value)
    this.setState({
      searchInput: e.target.value
    })

  }

  componentWillMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemons => {
      this.setState({pokemons: pokemons})
    })
  }

  render() {
    const filteredPokemon = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
    })
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.updateSearchInput} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={filteredPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
