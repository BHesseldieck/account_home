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

  addEntry () {
    
  }

  deleteEntry (entryIndex) {
    this.state.entries.splice(entryIndex,1);
    this.updateSum();
  }

  render () {
    return (
      <div className="mainDiv">
        <p> Hello World! </p>
        <EntryList entries={this.state.entries} delete={this.deleteEntry.bind(this)}/>
        <p> Aktuelles Guthaben ist {this.state.sum} </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
