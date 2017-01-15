import React from 'react';
import { Button } from 'react-bootstrap';

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
            Amount: <input className="inAm" type="number" defaultValue={this.props.data.amount} name="amount" onChange={this.changeAmount.bind(this)}/><br/>
            Title: <input className="inTi" type="text" defaultValue={this.props.data.title} name="title" onChange={this.changeTitle.bind(this)}/><br/>
            Date: <input className="inDa" type="date" defaultValue={this.props.data.date.toJSON().slice(0,10)} name="date" onChange={this.changeDate.bind(this)}/><br/>
            <Button className="changeBtn" onClick={this.editDone.bind(this)} bsStyle="primary"> Change </Button>
        </div>
        );
    }
    return (
      <div>
        <Button className="optionsBtn" onClick={this.props.delete} bsStyle="primary" bsSize="xsmall"> DELETE ME </Button>
        <Button className="optionsBtn editBtn" onClick={this.props.swapEdit} bsStyle="primary" bsSize="xsmall"> EDIT ME </Button>
      </div>
      );
  }
} 



export default EntryEdit;
