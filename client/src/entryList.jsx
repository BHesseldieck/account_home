import React from 'react';
import Entry from './entry.jsx';

var EntryList = (props) => (
  <div className="entry-list">
    {props.entries.map((item, index) => (
      <Entry key={index.toString()} amount={item.amount} date={item.date} title={item.title} index={index} delete={props.delete} editPost={props.editPost}/>
      ))
    }
  </div>
);

EntryList.propTypes = {
  entries: React.PropTypes.array.isRequired
};

export default EntryList;
