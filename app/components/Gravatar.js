import React from 'react';

import styles from './Styles';

export class Gravatar extends React.Component {

  getGravImg() {
    const GRAV_URL_BEGIN = 'http://www.gravatar.com/avatar/'
    const GRAV_URL_END = '?s=50' // image size in pixels
    return `${GRAV_URL_BEGIN}${this.props.grav}${GRAV_URL_END}`;
  }

  render() {
    return (<div>
      <div style={styles.container}>
        <form
          onSubmit={this.props.handleSubmit}>
          <input
            id="gravInput"
            type="text"
            style={this.props.enterId
              ? styles.gravInput
              : styles.hidden}
            placeholder="Enter Gravatar Id"
            onChange={this.props.handleInput} />
        </form>
        <div>
          <img
            id="grav"
            style={styles.image}
            onClick={this.props.handleClick}
            src={this.getGravImg()} />
        </div>
      </div>
    </div>)
  }
}
