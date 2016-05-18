import React from 'react';

import styles from './Styles';

export default class Pick extends React.Component {
  render(){
    return (
          <select style={styles.pick} onChange={this.props.handleSelect}>
          <option value="jade">Jade</option>
          <option value="markdown">Markdown</option>
          <option value="jsx">React/JSX</option>
          <option value="coffee">CoffeeScript</option>
        </select>
    );
  }
}

// transpilator.io
