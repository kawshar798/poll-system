import React from "react";
import { Col, Container, Row } from "reactstrap";
import shortid from "shortid";
import "./App.css";
import MainContent from "./components/Main-content";
import Sidebar from "./components/Sidebar";
import Polls from "./data/Polls.js";
class  App extends  React.Component {
  state = {
    polls:[],
    selectedPoll:{},
    searchKey:''

  }

  componentDidMount(){

    this.setState({polls:Polls})
  }


  createPoll = (poll) =>{
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];
    this.setState({polls:this.state.polls.concat(poll)})

  }

  selectedPoll = (pollId) => {

    const poll = this.state.polls.find(item=>item.id === pollId);
    this.setState({selectedPoll:poll})
    console.log(this.state.selectedPoll)
    
  }


  
  handleSearch = (searchKey)=>{

  }
  
  render(){
    return (
      <Container>
        <Row>
          <Col md={4}>
           <Sidebar polls={this.state.polls} selectedPoll={this.selectedPoll} createNewPoll={this.createPoll}/>
          </Col>
          <Col md={8}>
            <MainContent />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
