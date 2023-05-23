import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 mt-5">
              I am home page
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
