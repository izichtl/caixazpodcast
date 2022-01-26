import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;


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
          
          size={20}
          color={'black'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;
