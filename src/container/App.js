import React from "react";
import { robots } from "../components/robots";
import CardList from '../components/CardList';
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import style from "./App.css";

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
  }
}

  onSearchChange(event) {
    this.setState({searchfield: event.target.value});
  }   

  render() {
  const {robots, searchfield} = this.state;
  const filteredrobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  return !robots.length === 0 ?
 <h1> Loading </h1> : 
 (
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