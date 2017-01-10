import React from 'react';
import ReactDOM from 'react-dom';
import EntryList from './entryList.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sum: 0,
      entries: [{
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
    this.state.entries.unshift({
        amount: 100,
        date: new Date(),
        title: 'added Entry',
      });
    this.updateSum();
  }

  deleteEntry (entryIndex) {
    this.state.entries.splice(entryIndex,1);
    this.updateSum();
  }

  editEntry (entryIndex, obj) {
    console.log(entryIndex, obj);
    for (var key in obj) {
      this.state.entries[entryIndex][key] = obj[key];
    }
    console.log(JSON.stringify(this.state));
    this.updateOrder();
    this.updateSum();
  }

  render () {
    return (
      <div className="mainDiv">
        <button onClick={this.addEntry.bind(this)}>Add Entry</button>
        <EntryList entries={this.state.entries} delete={this.deleteEntry.bind(this)} editPost={this.editEntry.bind(this)} />
        <p> Aktuelles Guthaben ist {this.state.sum} </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
