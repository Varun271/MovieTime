import React from "react";

import { BookComponent } from "../components/BookComponent";

export class Book extends React.Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      id: props.match.params.id,
    };
  }

  render() {
    console.log(this.state.id);
    return (
      <div>
        <BookComponent id={this.state.id} />
      </div>
    );
  }
}
