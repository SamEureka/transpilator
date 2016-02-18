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
        <select style={styles.pick} onChange={this.handleSelectChange}>
          <option value="jade">Jade</option>
          <option value="jsx">JSX</option>
          <option value="coffee">CoffeeScript</option>
        </select>
      </header>
    )
  }
});

module.exports = Header;