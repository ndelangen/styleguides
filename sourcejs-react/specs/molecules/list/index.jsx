import React, { PropTypes } from 'react';

import ListItem from '../listitem';

import baseStyles from './css/base.css';

const List = (props) => {
  return (
    <div className={baseStyles.root}>
      {props.items.map(item => <ListItem key={item.id} {...item} />)}
    </div>
  );
};

List.displayName = 'List';
List.propTypes = {
  items: PropTypes.array
};

export default List;
