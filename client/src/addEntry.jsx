import React from 'react';
import { Button } from 'react-bootstrap';

class AddEntry extends React.Component {

  constructor (props) {
    super(props);
    this.props = props;
    this.data = {};
    this.state = {
      amountSet: false,
      titleSet: false,
    }
  }

  addDone () {
    if (this.data.date === undefined) {
      this.data.date = new Date();
    }
    this.props.addEntry(this.data);
    this.props.swapAdd();
    this.data = {};
    this.setState({amountSet: false, titleSet: false});
  }

  addAmount (event) {
    this.data.amount = Number(event.target.value);
    this.setState({ amountSet: true });
  }

  addTitle (event) {
    this.data.title = event.target.value;
    this.setState({ titleSet: true });
  }

  addDate (event) {
    this.data.date = new Date(event.target.value);
  }

  render () {
    if (this.props.addMe) {
      return (
          <div>
            <div className="addForm">
              Amount: <input type="number" placeholder="How much?" name="amount" onChange={this.addAmount.bind(this)}/><br/>
              Title: <input type="text" placeholder="Name it" name="title" onChange={this.addTitle.bind(this)}/><br/>
              Date: <input type="date" defaultValue={new Date().toJSON().slice(0,10)} name="date" onChange={this.addDate.bind(this)}/><br/>
            </div>
            <div className="addEntryBtn"><Button onClick={this.addDone.bind(this)} disabled={!this.state.amountSet || !this.state.titleSet} bsStyle="primary" bsSize="large">Add</Button></div>
          </div>
        );
    }
    return ( <div><Button onClick={this.props.swapAdd} className="addBtn" bsStyle="danger" bsSize="large" block>Add Entry</Button></div> );
  }

}

export default AddEntry;
