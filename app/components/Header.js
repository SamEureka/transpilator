import React from 'react';

// import styles from './Styles';
import Gravatar from './Gravatar';

export default class Header extends React.Component {
  render(){
    return (
      <div style={this.props.styles.header}>
        <div style={this.props.styles.title}>
          <span style={this.props.styles.redBrace}>&lt;</span><i className="icon icon-wrench" style={this.props.styles.grayCog}/><span style={this.props.styles.blueBrace}>&gt;</span> TRANSPILATOR
        </div>
        <Gravatar handleInput={this.props.handleInput}
        handleSubmit={this.props.handleSubmit}
        handleClick={this.props.handleClick}
        enterId={this.props.enterId}
        grav={this.props.grav}
        styles={this.props.styles}/>
      </div>
    )
  }
}

// transpilator.io
