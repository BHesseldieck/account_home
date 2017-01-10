import React from 'react';

class EntryEdit extends React.Component {

  constructor (props) {
    super(props);
    this.props = props;
    this.data = {};
  }

  editDone () {
    this.props.editPost(this.props.index, this.data);
    this.props.swapEdit();
  }

  changeAmount (event) {
    this.data.amount = Number(event.target.value);
  }

  changeTitle (event) {
    this.data.title = event.target.value;
  }

  changeDate (event) {
    this.data.date = new Date(event.target.value);
  }
  
  render () {
    if (this.props.editMe) {
      return (
        <div>
            Amount: <input type="number" defaultValue={this.props.data.amount} name="amount" onChange={this.changeAmount.bind(this)}/><br/>
            Title: <input type="text" defaultValue={this.props.data.title} name="title" onChange={this.changeTitle.bind(this)}/><br/>
            Date: <input type="date" defaultValue={this.props.data.date.toJSON().slice(0,10)} name="date" onChange={this.changeDate.bind(this)}/><br/>
            <button onClick={this.editDone.bind(this)}> Change </button>
        </div>
        );
    }
    return <div/>;
  }
} 



export default EntryEdit;
