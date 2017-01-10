import React from 'react';
import EntryEdit from './entryEdit.jsx';

class Entry extends React.Component {
  constructor (props) {
    super(props);
    this.props = props;
    this.state = {
      edit: false,
    };
  }

  delete () {
    this.props.delete(this.props.index);
  }

  swapEdit () {
    this.setState({
      edit: !this.state.edit
    })
  }

  render () {
    return (
        <div entryIndex={this.props.index}>
          <p> This is an Entry with amount: {this.props.amount}, date: {JSON.stringify(this.props.date.toJSON().slice(0,10))}, title: {this.props.title}, index: {this.props.index} </p>
          <button onClick={this.delete.bind(this)}> DELETE ME </button>
          <button onClick={this.swapEdit.bind(this)}> EDIT ME </button>
          <EntryEdit editMe={this.state.edit} swapEdit={this.swapEdit.bind(this)} editPost={this.props.editPost} index={this.props.index} data={this.props} />
        </div>
      );
  }
}

export default Entry;
