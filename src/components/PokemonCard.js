import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontside: true
  }

  toggleFrontOrBack = () => {
    console.log("clicked")
    this.setState({
      frontside: !this.state.frontside
    })
  }

  render() {
    const img = this.state.frontside ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    return (
      <Card onClick={this.toggleFrontOrBack}>
        <div>
          <div className="image">
            <img src={img} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
