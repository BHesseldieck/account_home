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
        <div>
          <p> This is an Entry with amount: {this.props.amount}, date: {this.props.date.getDate() + '/' 
          + this.props.date.getMonth() + 1 + '/' + this.props.date.getFullYear()}, title: {this.props.title}, index: {this.props.index} </p>
          <button onClick={this.delete.bind(this)}> DELETE ME </button>
          <button onClick={this.swapEdit.bind(this)}> EDIT ME </button>
          <EntryEdit editMe={this.state.edit} swapEdit={this.swapEdit.bind(this)} editPost={this.props.editPost} index={this.props.index} data={this.props} />
        </div>
      );
  }
}

export default Entry;
