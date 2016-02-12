import React from 'react';
import styles from './Styles';

var Header = React.createClass({
  render: function() {
    return (
      <header style={styles.header}>
        <i style={styles.red} className="fa fa-code "></i>
        <i style={styles.blue} className="fa fa-code"></i>
        <span>TRANSPILATOR</span>
        <div style={styles.pick}> Jade
          <i className='fa fa-caret-down'></i>
        </div>
      </header>
    )
  }
});

module.exports = Header;