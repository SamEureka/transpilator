import React from 'react';

// import styles from './Styles';

export default class Gravatar extends React.Component {

  getGravImg() {
    return `http://www.gravatar.com/avatar/${this.props.grav}?s=40`;
  }

  render() {
    return (<div>
      <div style={this.props.styles.gravContainer}>
        <form
          onSubmit={this.props.handleSubmit}>
          <input
            id="gravInput"
            type="text"
            style={this.props.enterId
              ? this.props.styles.gravInput
              : this.props.styles.hidden}
            placeholder="Enter Gravatar Id"
            onChange={this.props.handleInput} />
        </form>
        <div>
          <img
            id="grav"
            style={this.props.styles.gravImage}
            onClick={this.props.handleClick}
            src={this.getGravImg()} />
        </div>
      </div>
    </div>)
  }
}

// transpilator.io
