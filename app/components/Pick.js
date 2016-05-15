import React from 'react';

import styles from './Styles';

class Pick extends React.Component {
  render(){
    return (
        <select style={styles.pick} onChange={this.props.handleSelect}>
          <option value="jade">Jade</option>
          <option value="jsx">React/JSX</option>
          <option value="coffee">CoffeeScript</option>
          <option value="live">LiveScript</option>
          <option value="markdown">Markdown</option>
        </select>
    );
  }
}

module.exports = Pick;
