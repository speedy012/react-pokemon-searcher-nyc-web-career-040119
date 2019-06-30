import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemons =() => {
    return this.props.pokemons.map(pokemon => {
      const hp = pokemon.stats.find(stat => stat.name === "hp").value
      return <PokemonCard key={pokemon.id} pokemon={pokemon} hp={hp}/>
    })
  }

  render() {
    // console.log(this.props.pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
