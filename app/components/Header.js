import React from 'react';
import styles from './Styles';

var Header = React.createClass({
  handleSelectChange (e) {
    this.props.app.setState({
      transpiler: e.target.value,
      err: '',
    });
  },
  render: function() {
    return (
      <header style={styles.header}>
        <i style={styles.red} className="fa fa-code "></i>
        <i style={styles.blue} className="fa fa-code"></i>
        <span>TRANSPILATOR</span>

      </header>
    )
  }
});

module.exports = Header;
