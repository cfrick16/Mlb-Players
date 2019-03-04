import React, { Component } from "react";
import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";


class PlayerCard extends Component {
  constructor(props){
    super(props);
    this.state={
      player: [],
      count: 0,
      flag: false
    };
  }


  async componentDidMount(){
    await fetch("http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27" + this.props.id +"%27")
   .then(response => response.json())
   .then((p) => {
     this.setState({ player: p["player_info"]["queryResults"]["row"]});
   });
 }

   componentWillReceiveProps(props) {
     this.componentDidMount();
   }

  render(){
    if(this.props.id === 0 || this.state.player == null ){
      return (
        <>
        </>
      )
    }
    return(
    <>
      <div className="col-md-4 d-flex">
        <div className="card md-4 box-shadow">
          <div className="card-body d-flex flex-column">
          <img
            className="card-img-top d-flex"
            id="developer-img"
            src={"https://images.pexels.com/photos/163332/baseball-player-game-play-163332.jpeg?cs=srgb&dl=athlete-baseball-baseball-player-163332.jpg&fm=jpg"}
            alt="Card image cap"
            styles="height: 212px !important; width:320px !important"
          />
            <h5 className="card-title">
              {this.state.player["name_display_first_last"]}
            </h5>
            <div className="card-text">
              <b>Team</b>
              <p>{this.state.player["team_name"]}</p>
              <b>Position</b>
              <p>{this.state.player["primary_position_txt"]}</p>
              <b>Height</b>
              <p>{this.state.player["height_feet"]}'{this.state.player["height_inches"]}"</p>
              <b>Age</b>
              <p>{this.state.player["age"]}</p>
            </div>
          </div>
          </div>
      </div>
    <br/>
    </>
  )}
}
export default PlayerCard;
