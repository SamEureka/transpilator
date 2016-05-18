import React from 'react';

import styles from './Styles'

export default class Err extends React.Component {
  render(){
    return(<div>
        <div style={this.props.displayErr ? styles.error : styles.hidden}>
          {this.props.err}
        </div>
    </div>)
  }
}

// transpilator.io
