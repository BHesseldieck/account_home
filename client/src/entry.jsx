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
        <div className="entry">
          <span className="titleC">{this.props.title}</span> 
          <span className={"amountC " + (this.props.amount >= 0 ? 'greenColor' : 'redColor')}>{this.props.amount} €</span><br/>
          <span className="dateC">{this.props.date.getDate() + '/' + this.props.date.getMonth() + 1 + '/' + this.props.date.getFullYear()}</span>
          <EntryEdit editMe={this.state.edit} swapEdit={this.swapEdit.bind(this)} editPost={this.props.editPost} index={this.props.index} data={this.props} delete={this.delete.bind(this)} />
        </div>
      );
  }
}

export default Entry;
