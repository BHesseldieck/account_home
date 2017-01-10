import React from 'react';

class EntryEdit extends React.Component {

  constructor (props) {
    super(props);
    this.props = props
  }
  
  render () {
    if (this.props.editMe) {
      return (
        <div>
          <form>
            First name: <input type="text" name="fname"/><br/>
            Last name: <input type="text" name="lname"/><br/>
            <button onClick={this.props.editPost.call(this, this.props.index, )}> Change </button>
          </form>
        </div>
        );
    }
    return <div/>;
  }
} 



export default EntryEdit;
