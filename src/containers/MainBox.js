import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: 'profile',
  }


  render() {


    const detailsToDisplay = () => {
      switch(this.state.selected) {
        case "profile":
        return <Profile />;
        break;
        case "photo":
        return <Photos />;
        break;
        case "cocktail":
        return <Cocktails />;
        break;
        case "pokemon":
        return <Pokemon />;
        break;
      }
    }

    const menuClicker = (e) => {
      this.setState({
        selected: e.target.id
      })
    }
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar selected={this.state.selected} menuClicker={menuClicker}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
