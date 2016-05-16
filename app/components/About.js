import React from 'react';

import styles from './Styles';

export default class About extends React.Component {
  render(){
    return(
      <div>
        <div
          style={styles.about}
          onClick={this.props.getAbout}>
          //About
        </div>
        <div style={this.props.about ? styles.backCover : styles.hidden} content=" ">
          <div style={this.props.about ? styles.aboutPop : styles.hidden}>
            This is where stuff goes...
          </div>
        </div>
    </div>
    );
  }
}
