
import React, { Component } from "react";
import "./styles.css";
import PlayerCard from "./PlayerCard.js";
import { Container, Row } from 'reactstrap';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      flag: false,
      page: 0,
      search: ""
  };
}

  get_player = (count) =>{
    let index = count + this.state.page;
    if(this.state.players[index] == null || index >= this.state.players.length){
      return 0;
    }

    return this.state.players[index]["player_id"];
  }

  nextPage = () =>{
    let old_page = this.state.page;
    this.setState({page: old_page + 12});
  }

  prevPage = () =>{
    let old_page = this.state.page;
    if(old_page < 12)
      this.setState({page: 0})
    else
      this.setState({page: old_page - 12});
  }

  handleSearchButton = () => {
    this.setState ({
      players: [],
      flag: true,
      page: 0,
      search: this.refs.query.value
  });
    this.componentWillMount()
  }
   async componentWillMount() {
    let player_id_info_url = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27"+ this.state.search + "%25%27&search_player_all.col_in=player_id";
     await fetch(player_id_info_url)
    .then(response => response.json())
    .then((all_players) =>  {
      this.setState({
        players: all_players["search_player_all"]["queryResults"]["row"],
        flag: true
      });

    })
    this.forceUpdate();
  }


  render() {
    return(
    <>

    <div className="head">
    	<div className="page-header">
          <Row>
              <b className="pageTitle">Find MLB Players</b>
          </Row>
      </div>
      <div className="search">
        <Row>
          <input ref="query" type="text" className="searchTerm" placeholder="Search a Player by name"></input>
          <button type="submit" className="searchButton"  onClick={this.handleSearchButton}> Enter </button>
        </Row>
      </div>
    </div>
    <Container>
      <Row>
        <PlayerCard id={this.get_player(0)}/>
        <PlayerCard id={this.get_player(1)}/>
        <PlayerCard id={this.get_player(2)}/>
      </Row>
      <Row>
        <PlayerCard id={this.get_player(3)}/>
        <PlayerCard id={this.get_player(4)}/>
        <PlayerCard id={this.get_player(5)}/>
      </Row>
      <Row>
        <PlayerCard id={this.get_player(6)}/>
        <PlayerCard id={this.get_player(7)}/>
        <PlayerCard id={this.get_player(8)}/>
      </Row>
      <Row>
        <PlayerCard id={this.get_player(9)}/>
        <PlayerCard id={this.get_player(10)}/>
        <PlayerCard id={this.get_player(11)}/>
      </Row>
    </Container>
    <button onClick={this.prevPage}>Previous</button>
    <button onClick={this.nextPage}>Next</button>
    </>
  );
    }
}

export default Home;
