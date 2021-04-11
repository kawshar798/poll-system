import PropTypes from "prop-types";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
const PollList = ({ polls, selectedPoll }) => {
  if (polls.length < 0) {
    return <p>There is no poll</p>;
  }

  return (
    <ListGroup>
      {polls !== undefined &&
        polls.map((item) => (
          <ListGroupItem
            key={item.id}
            onClick={() => selectedPoll(item.id)}
            style={{ cursor: "pointer" }}
          >
            {item.title.length > 30 ? item.title.substr(0, 30) : item.title}
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

PollList.propTypes = {
  polls: PropTypes.array.isRequired,
  selectedPoll: PropTypes.func.isRequired,
};

export default PollList;
