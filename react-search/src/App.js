import React, {Component} from "react";
// import PropTypes from "prop-types";
import "./App.css";
import TitleList from "./components/TitleList";
import SearchBoxContainer from "./containers/SearchContainer";

class App extends Component {
  componentDidMount(){
    this.props.loadMyMovieList();
    // console.log('results', this.props.myMovieList)
  }

  render() {
    return (
      <div>
        <header className="Header">
          <SearchBoxContainer />
        </header>
        <TitleList 
          title="Search Results" 
          movies={this.props.searchResults} />
        <TitleList 
          title="My Movies" 
          movies={this.props.myMovieList} />
      </div>
    );
  }
}
export default App;