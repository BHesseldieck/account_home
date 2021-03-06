import React from 'react';
import ReactDOM from 'react-dom';
import EntryList from './entryList.jsx';
import AddEntry from './addEntry.jsx';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sum: 0,
      addMe: false,
      entries: [{
        amount: -350,
        date: new Date( Number(new Date()) - 100000),
        title: 'new Entry',
      },
      {
        amount: 650,
        date: new Date(),
        title: 'second Entry',
      },
      {
        amount: -350,
        date: new Date( Number(new Date()) - 100000),
        title: 'new Entry',
      },
      {
        amount: 650,
        date: new Date(),
        title: 'second Entry',
      },
      {
        amount: -350,
        date: new Date( Number(new Date()) - 100000),
        title: 'new Entry',
      },
      {
        amount: 650,
        date: new Date(),
        title: 'second Entry',
      },
      {
        amount: -350,
        date: new Date( Number(new Date()) - 100000),
        title: 'new Entry',
      },
      {
        amount: 650,
        date: new Date(),
        title: 'second Entry',
      }]
    }
  }

  componentWillMount() {
    this.updateSum();
  }

  updateSum () {
    // currently recalculating, maybe fix to add argument's amount
    this.setState({
      sum: this.state.entries.reduce((acc, val) => acc += val.amount, 0)
    })
  }

  updateOrder () {
    this.setState({
      entries: this.state.entries.sort((a,b) => b.date - a.date)
    })
  }

  addEntry (input) {
    this.state.entries.unshift(input);
    this.updateOrder();
    this.updateSum();
  }

  swapAdd () {
    this.setState({
      addMe: !this.state.addMe
    })
  }

  deleteEntry (entryIndex) {
    this.state.entries.splice(entryIndex,1);
    this.updateSum();
  }

  editEntry (entryIndex, obj) {
    for (var key in obj) {
      this.state.entries[entryIndex][key] = obj[key];
    }
    this.updateOrder();
    this.updateSum();
  }

  render () {
    return (
      <div className="mainDiv">
        <div className="head">
          <Button className="backBtn" bsSize="large"> Back </Button>
        </div>
        <div className="list">
          <EntryList entries={this.state.entries} delete={this.deleteEntry.bind(this)} editPost={this.editEntry.bind(this)} />
        </div>
        <div className="bottom">
          <AddEntry addMe={this.state.addMe} addEntry={this.addEntry.bind(this)} swapAdd={this.swapAdd.bind(this)} />
          <span className="sum"> Current Balance is: </span> 
          <div className={"sumAmount " + (this.state.sum >= 0 ? 'greenColor' : 'redColor') }>{this.state.sum} €</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
