import React from 'react';

class Entry extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
  }

  delete () {
    this.props.delete(this.props.index);
  }

  render () {
    return (
        <div entryIndex={this.props.index}>
          <p> This is an Entry with amount: {this.props.amount}, date: {JSON.stringify(this.props.date)}, title: {this.props.title}, index: {this.props.index} </p>
          <button onClick={this.delete.bind(this)}> DELETE ME </button>
        </div>
      );
  }
}

export default Entry;
