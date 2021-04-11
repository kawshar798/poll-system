import React, { Component } from "react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import PollForm from "../Poll-form";
import PollList from "./Poll_list";

class Sidebar extends Component {
  state = {
    openModal: false,
  };
  toggleModel = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };
  render() {
    return (
      <div style={{ background: "#efefef", padding: "10px" }}>
        <div className="d-flex mb-5">
          <Input
            type="search"
            placeholder="Search"
            value={this.props.searchKey}
            onChange={(e) => this.props.handleSearch(e.target.value)}
          />

          <Button color="success" className="ml-2" onClick={this.toggleModel}>
            new
          </Button>
        </div>

        <h3>List of Poll</h3>
        <hr />

        <PollList
          polls={this.props.polls}
          selectedPoll={this.props.selectedPoll}
        />

        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggleModel}
          unmountOnClose={true}
        >
          <ModalHeader toggle={this.toggleModel}>
           Create Poll
          </ModalHeader>

          <ModalBody>
           <PollForm  submit={this.props.createNewPoll}/>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Sidebar;
