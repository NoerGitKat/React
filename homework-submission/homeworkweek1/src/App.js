import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import lists from "./sources/lists.json";
import List from "./components/list/List";

class App extends Component {
  state = {
    // I am putting the imported lists data file into state
    list: lists
  };

  render() {
    return (
      <div className="App">
        {
          // Here I am mapping through lists array to create an instance of every object within it
          // I am assigning the content of each list to an instance of the <List /> component in the prop 'listProp'
        }
        {this.state.list.map((list, i) => <List listProp={list} key={i}/> )}
      </div>
    );
  }
}

export default App;
