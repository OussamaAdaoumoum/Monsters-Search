import "./App.css";
import { Component } from "react";
import Cardlist from "./Components/card-list/card-list.component";
import Search from "./Components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      array2: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, array2: users };
        })
      );
  }

  onSearchChange = (event) => {
    var target = event.target.value.toLocaleLowerCase();
    var filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(target);
    });
    this.setState(
      () => {
        return { array2: filteredMonsters };
      },
      () => {
        console.log(this.state.monsters);
      }
    );
  };

  render() {
    console.log("this is the render");
    //    const { monsters, array2 } = this.state;
    return (
      <div key={this.state.monsters.id}>
        <h1 className="app_header">ROLODEX MONSTERS</h1>
        <Search
          monsters={this.state.array2}
          onSearchChange={this.onSearchChange}
          className="monsters-search-box"
          placeHolder="type a monster"
        />
        <Cardlist monsters={this.state.array2} />
      </div>
    );
  }
}
export default App;
