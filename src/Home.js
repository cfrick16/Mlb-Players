
import React, { Component } from "react";
import "./styles.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
      ],
  };
}

  async componentWillMount() {
    let url = "https://api.mysportsfeeds.com/v2.0/pull/mlb/2016/player_stats_totals.json"

    await fetch(url)
    .then(response => response.json())
    .then(
      (result) => {
      this.setState({
        movies: JSON.parse(JSON.stringify(result))
      });
      console.log(this.state.movies);
      //console.log("hello")
  });
  }

  render() {
    return(
    <>

    <div class="wrap">
       <p class="pageTitle">Search for Movies</p>
       <div class="search">

        </div>
    </div>

    </>
  );
    }
}

export default Home;
