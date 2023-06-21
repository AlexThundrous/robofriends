import React from "react";
// import { robots } from "../components/robots";
import CardList from '../components/CardList';
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
  }
}

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users").then( response => response.json).then(users => this.setState({robots: users}))
}

  onSearchChange(event) {
    this.setState({searchfield: event.target.value}); // gives value of what is searched (target.value) setState is mandatory to change searchfield we always use this and not this.state.searchfield = ...
  }   

  render() {
  const filteredrobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //we use filtered robots in form of function since elsewise it takes this as the html input and not the react component
  })
  return(
    <div class="App">
       <h1> RoboFriends </h1>
       <Searchbox searchChange = {(event) => {this.onSearchChange(event)}}/>
       <br />
       <Scroll>
       <CardList robots = {filteredrobots} />
       </Scroll>
    </div>
  );
}
}

export default App;