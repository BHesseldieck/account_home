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

  edit () {
    this.setState({
      edit: !this.state.edit
    })
  }

  render () {
    return (
        <div entryIndex={this.props.index}>
          <p> This is an Entry with amount: {this.props.amount}, date: {JSON.stringify(this.props.date)}, title: {this.props.title}, index: {this.props.index} </p>
          <button onClick={this.delete.bind(this)}> DELETE ME </button>
          <button onClick={this.edit.bind(this)}> EDIT ME </button>
          <EntryEdit editMe={this.state.edit} editPost={this.props.editPost} index={this.props.index}/>
        </div>
      );
  }
}

export default Entry;
