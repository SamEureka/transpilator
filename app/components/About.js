import React from 'react';

//import styles from './Styles';

export default class About extends React.Component {
  render(){
    return(
      <div>
        <div
          style={this.props.styles.about}
          onClick={this.props.getAbout}>
          <span style={this.props.styles.pullLeft}><i className="icon icon-info-circle"></i></span>
        </div>
        <div
          id="backCover"
          style={this.props.about ? this.props.styles.backCover : this.props.styles.hidden}
          onClick={this.props.getAbout}
          content=" "></div>
        <div id="aboutPop" style={this.props.about ? this.props.styles.aboutPop : this.props.styles.offScreen}>
            <i className="icon icon-times icon-lg" style={this.props.about ? this.props.styles.close : this.props.styles.hidden} onClick={this.props.getAbout}/>
            <div style={this.props.about ? this.props.styles.aboutTitle : this.props.styles.hidden}><span style={this.props.styles.aboutRedBrace}>&lt;</span><i className="icon icon-wrench" style={this.props.styles.aboutGrayCog}/><span style={this.props.styles.aboutBlueBrace}>&gt;</span> TRANSPILATOR</div>
            <hr/>
            <h3>Why?</h3>
              <p>
                All too often I find myself opening up a Pen on <a style={this.props.styles.aboutLink} href="http://codepen.io">CodePen</a>,
                or creating a Bin on <a style={this.props.styles.aboutLink} href="http://jsbin.com">JSBin</a>, going through a bunch of setup...
                just so I can see what <span style={this.props.styles.code}>#container.col-md-4(onClick="#")</span> would
                render as using Jade... or what the Markdown
                <span style={this.props.styles.code}>### [Example](https://www.example.com)</span>
                HTML output would be.
              </p>
              <p>
                I wanted an app that was like
                <a style={this.props.styles.aboutLink} href="http://translate.google.com">{' '}Google Translate</a>...
                but for code parsers/transpilers! No setup, just select your parser and start typing!
              </p>
            <h3>How?</h3>
              <ul>
                <li><a style={this.props.styles.aboutLink} href="https://facebook.github.io/react/index.html">React</a>... beacuse awesome</li>
                <li><a style={this.props.styles.aboutLink} href="https://codemirror.net/index.html">CodeMirror</a>... because line numbering had too many edge cases</li>
                <li><a style={this.props.styles.aboutLink} href="http://webpack.github.io/docs/">Webpack</a>... because it's more confusing than <a style={this.props.styles.aboutLink} href="http://gruntjs.com/">Grunt</a>, but makes more sense</li>
                <li><a style={this.props.styles.aboutLink} href="https://trello.com/">Trello</a>... boards & cards are amazing for staying on track, keeping yourself organized!</li>
                <li><a style={this.props.styles.aboutLink} href="https://clipboardjs.com/">Clipboard.js</a>
                  , <a style={this.props.styles.aboutLink} href="https://blueimp.github.io/JavaScript-MD5/"> MD5.js</a>
                  , <a style={this.props.styles.aboutLink} href="https://babeljs.io/"> Babel</a>
                  , <a style={this.props.styles.aboutLink} href="https://markdown-it.github.io/"> Markdown-it</a>
                , and<a style={this.props.styles.aboutLink} href="http://fontawesome.io/"> Font Awesome</a>... made it all so easy!</li>
              </ul>
            <h3>Help?!</h3>
              <p>If you would like to help make TRANSPILATOR even more awesome, just want to see how I did something, or would like to use any of my crap code in your own project... check out:</p>
               <div className="container">
                 <div style={this.props.styles.aboutSpace}><a style={this.props.styles.aboutLink} href="https://trello.com/b/StKxc7fM/transpilator-io"><span className="icon icon-trello icon-2x"/> Trello Board</a></div>
                 <div style={this.props.styles.aboutSpace}><a style={this.props.styles.aboutLink} href="https://github.com/SamEureka/transpilator"><span className="icon icon-github icon-2x"/> GitHub Repo</a></div>
              </div>
            <h3>Thanks!</h3>
              A ton of gratitude and <span className="icon icon-heart-o"/>'s to my mentor <a style={this.props.styles.aboutLink} href="http://mattborn.com"> Matt Born </a> & my advisor <a style={this.props.styles.aboutLink} href="http://twitter.com/prachiniksingh"> Prachi Singh</a> @ <a style={this.props.styles.aboutOLink} href="http://bloc.io/">Bloc.io</a>

            <div><h4 style={this.props.styles.close}><a style={this.props.styles.aboutLink} href="http://samdennon.com">//Sam</a></h4></div>
        </div>

    </div>
    );
  }
}

// transpilator.io
