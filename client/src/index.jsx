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
        date: new Date(),
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
    this.setState({
      sum: this.state.entries.reduce((acc, val) => acc += val.amount, 0),
    })
  }

  addEntry (input) {
    this.state.entries.push({
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

  editEntry () {

  }

  render () {
    return (
      <div className="mainDiv">
        <button onClick={this.addEntry.bind(this)}>Add Entry</button>
        <EntryList entries={this.state.entries} delete={this.deleteEntry.bind(this)}/>
        <p> Aktuelles Guthaben ist {this.state.sum} </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
