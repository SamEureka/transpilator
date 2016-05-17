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
        <div
          style={this.props.about ? styles.backCover : styles.hidden}
          onClick={this.props.getAbout}
          content=" "></div>
        <div style={this.props.about ? styles.aboutPop : styles.offScreen}>
            <i className="fa fa-times fa-lg" style={this.props.about ? styles.close : styles.hidden} onClick={this.props.getAbout}/>
            <h1 style={this.props.about ? styles.aboutTitle : styles.hidden}><span style={styles.red}>&lt;</span>/<span style={styles.blue}>&gt;</span>TRANSPILATOR</h1>
            <hr/>
            <h2>Why?</h2>
              <p>
                All too often I find myself opening up a Pen on <a style={styles.aboutLink} href="http://codepen.io">CodePen</a>,
                or creating a Bin on <a style={styles.aboutLink} href="http://jsbin.com">JSBin</a>, going through a bunch of setup...
                just so I can see what <span style={styles.code}>#container.col-md-4(onClick="#")</span> would
                render as using Jade... or what the Markdown
                <span style={styles.code}>### [Example](https://www.example.com)</span>
                HTML output would be.
              </p>
              <p>
                I wanted an app that was like
                <a style={styles.aboutLink} href="http://translate.google.com">Google Translate</a>...
                but for code parsers/transpilers! No setup, just select your parser and start typing!
              </p>
            <h2>How?</h2>
              <ul>
                <li>React... beacuse awesome</li>
                <li>CodeMirror... because line numbering had too many edge cases</li>
                <li>Webpack... because it's more confusing than Grunt but makes more sense</li>
                <li>Trello... boards & cards!</li>
                <li>Clipboard.js, MD5.js, Babel, Markdown-it, Font Awesome... made it all so easy!</li>
              </ul>
            <h2>Thanks!</h2>
              My mentor <a style={styles.aboutLink} href="http://mattborn.com"> Matt Born </a> & my advisor <a style={styles.aboutLink} href="http://twitter.com/prachiniksingh"> Prachi Singh</a> @ <a style={styles.aboutOLink} href="http://bloc.io/">Bloc.io</a>

            <div><h3 style={styles.close}>//Sam</h3></div>
        </div>

    </div>
    );
  }
}
