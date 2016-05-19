import React from 'react';

//import styles from './Styles'

export default class Err extends React.Component {
  render(){
    return(<div>
        <div style={this.props.displayErr ? this.props.styles.error : this.props.styles.hidden}>
          {this.props.err}
        </div>
    </div>)
  }
}

// transpilator.io
