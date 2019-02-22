import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selectedText: "pokemon",
    selected: <Pokemon />
  }

  handler = (event) => {
    switch (event.target.id) {
      case "pokemon":
        this.setState({selected: <Pokemon />, selectedText: event.target.id})
        break
      case "photo":
        this.setState({selected: <Photos />, selectedText: event.target.id})
        break
      case "cocktail":
        this.setState({selected: <Cocktails />, selectedText: event.target.id})
        break
      case "profile":
        this.setState({selected: <Profile />, selectedText: event.target.id})
        break
    }
  }

  render() {
    return (
      <div>
        <MenuBar selected={this.state.selectedText} handler={this.handler}/>
        {this.state.selected}
      </div>
    )
  }
}

export default MainBox
