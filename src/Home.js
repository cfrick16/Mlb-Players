
import React, { Component } from "react";
import "./styles.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
      ],
  };
}

  async componentWillMount() {
    let url = "http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27493316%27"

    await fetch(url)
    .then(response => response.json())
    .then(
      (result) => {
      this.setState({
        players: JSON.parse(JSON.stringify(result))["player_info"]["queryResults"]["row"]
      });
      console.log(this.state.players);
      console.log("hello")
  });
  }

  render() {
    return(
    <>

    <div className="wrap">
       <p className="pageTitle">Search for Movies</p>
       <div className="search">

        </div>
    </div>

    </>
  );
    }
}

export default Home;
