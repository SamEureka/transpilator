import React from 'react';

import styles from './Styles'

class Error extends React.Component {
  render(){
    return(<div>
        <div
          style={this.props.displayErr ? styles.error : styles.hidden}>{this.props.err}</div>
    </div>)
  }
}

module.exports = Error;
