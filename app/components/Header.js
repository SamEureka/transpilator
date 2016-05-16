import React from 'react';

import styles from './Styles';

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.title}>
          <span style={styles.red}>&lt;</span>/<span style={styles.blue}>&gt;</span> TRANSPILATOR
        </div>
      </div>
    )
  }
}
