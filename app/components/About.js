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
                <a style={styles.aboutLink} href="http://translate.google.com">{' '}Google Translate</a>...
                but for code parsers/transpilers! No setup, just select your parser and start typing!
              </p>
            <h2>How?</h2>
              <ul>
                <li><a style={styles.aboutLink} href="https://facebook.github.io/react/index.html">React</a>... beacuse awesome</li>
                <li><a style={styles.aboutLink} href="https://codemirror.net/index.html">CodeMirror</a>... because line numbering had too many edge cases</li>
                <li><a style={styles.aboutLink} href="http://webpack.github.io/docs/">Webpack</a>... because it's more confusing than <a style={styles.aboutLink} href="http://gruntjs.com/">Grunt</a> but makes more sense</li>
                <li><a style={styles.aboutLink} href="https://trello.com/">Trello</a>... boards & cards are amazing for staying on track, keeping yourself organized!</li>
                <li><a style={styles.aboutLink} href="https://clipboardjs.com/">Clipboard.js</a>
                  , <a style={styles.aboutLink} href="https://blueimp.github.io/JavaScript-MD5/"> MD5.js</a>
                  , <a style={styles.aboutLink} href="https://babeljs.io/"> Babel</a>
                  , <a style={styles.aboutLink} href="https://markdown-it.github.io/"> Markdown-it</a>
                , and<a style={styles.aboutLink} href="http://fontawesome.io/"> Font Awesome</a>... made it all so easy!</li>
              </ul>
            <h2>Help?!</h2>
              <p>If you would like to help make TRANSPILATOR even more awesome, just want to see how I did something, or would like to use any of my crap code in your own project... check out:</p>
               <div className="container">
                 <div style={styles.aboutSpace}><a style={styles.aboutLink} href="https://trello.com/b/StKxc7fM/transpilator-io"><span className="fa fa-trello fa-2x"/> Trello Board</a></div>
                 <div style={styles.aboutSpace}><a style={styles.aboutLink} href="https://github.com/SamEureka/transpilator"><span className="fa fa-github fa-2x"/> GitHub Repo</a></div>
              </div>
            <h2>Thanks!</h2>
              A ton of gratitude and <span className="fa fa-heart-o"/>'s to my mentor <a style={styles.aboutLink} href="http://mattborn.com"> Matt Born </a> & my advisor <a style={styles.aboutLink} href="http://twitter.com/prachiniksingh"> Prachi Singh</a> @ <a style={styles.aboutOLink} href="http://bloc.io/">Bloc.io</a>

            <div><h3 style={styles.close}>//Sam</h3></div>
        </div>

    </div>
    );
  }
}
