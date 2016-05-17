import React from 'react';

import styles from './Styles';
import Gravatar from './Gravatar';

export default class Header extends React.Component {
  render(){
    return (
      <div style={styles.header}>
        <div style={styles.title}>
          <span style={styles.redBrace}>&lt;</span><i className="icon icon-wrench" style={styles.grayCog}/><span style={styles.blueBrace}>&gt;</span> TRANSPILATOR
        </div>
        <Gravatar handleInput={this.props.handleInput}
        handleSubmit={this.props.handleSubmit}
        handleClick={this.props.handleClick}
        enterId={this.props.enterId}
        grav={this.props.grav}/>
      </div>
    )
  }
}


// &lt;
// &gt;
