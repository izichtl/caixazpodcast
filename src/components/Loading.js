import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  margin: 250px 0px 0px 0px;
  border-color: black;
`;

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <BeatLoader
          css={override}
          size={20}
          color={'black'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;
