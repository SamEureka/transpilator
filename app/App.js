// Import the modules
var React = require('react');
var ReactDOM = require('react-dom');
var jade = require('jade');

var OtherComponent = require('./components/OtherComponent');

// All the styles in one object
var styles = {
  text: {
    position: 'fixed',
    width: '48.01vw',
    height: '100vh',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    top: '3.5rem',
    left: 0,
    paddingTop: 10,
    paddingRight: '1vw',
    paddingLeft: '1vw',
    backgroundColor: 'rgba(70,130,180,0.1)',
    color: '#222',
    resize: 'none',
    overflow: 'auto',
    border: 0
  },
pre: {
    position: 'fixed',
    backgroundColor: 'rgba(70,230,180,0.2)',
    width: '48.01vw',
    height: '100vh',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    top: '2.4rem',
    right: 0,
    paddingTop: 10,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    color: '#222',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    overflow: 'auto',
    },
  header: {
    backgroundColor: 'rgba(240,240,240,0.5)',
    position: 'fixed',
    top: 0,
    color: '#666',
    height: '3rem',
    width: '100vw',
    fontFamily: 'Varela',
    fontSize: '2rem',
    paddingLeft: '0.5rem',
    paddingTop: '0.5rem'
  },
  error: {
    position: 'fixed',
    left: 0,
    bottom: 2,
    height: 'auto',
    overflow: 'auto',
    backgroundColor: 'rgb(244, 164, 165)',
    color: 'red',
    fontSize: '1.1em',
    borderRadius: '3px',
    borderTop: '1px dotted red',
    borderRight: '1px dotted red',
    borderBottom: '1px dotted red',
    zIndex: 1
    },
  cont: {
    height: '100vh', 
    display: 'flex'
  },
  blue: {
    color: 'steelblue'
  },
  red: {
    color: 'rgba(225, 55, 55,0.5)'
  },
  green: {
    color: 'rgba(50,250,55,0.2)'
  },
  pick: {
    position: 'fixed',
    right: '1rem',
    top: '0.7rem',
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    padding: '0.2rem',
    backgroundColor: 'rgba(240,240,240,0.8)',
  },
  footer: {
    position: 'fixed',
    bottom: '0.8rem',
    right: '0.8rem',
    textDecoration: 'none',
    color: 'rgba(55,55,55,0.6)',
    fontFamily: 'Lato',
    fontSize: '0.8rem',
  }
};

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      in: 'Jade here... HTML over there -->',
      out: '',
      err: '',
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        out: jade.render(code, {
          pretty: ' '
        }),
        err: ''
      })
    }
    catch(err) {
      this.setState({err: " Syntax error: " + err.message})
    }
  }
  render() {
    return (
    <div>
      <header style={styles.header}>
        <i style={styles.red} className="fa fa-code"></i>
        <i style={styles.blue} className="fa fa-code"></i>
        <span>{' '}transpilator</span>
        <div style={styles.pick}> Select <i className='fa fa-caret-down'></i></div>
      </header>
      <div className="container" style={styles.cont}>
        <textarea id="boom" style={styles.text} placeholder={this.state.in}
          onChange={this.update}></textarea>
        <pre style={styles.pre}>{this.state.out}</pre>
          <div style={styles.error}>{this.state.err}</div>
        <div style={styles.footer}>
            Made with <a href="http://en.wikipedia.org/wiki/Love" className='fa fa-heart-o fa-lg'></a> by {' '}
            <a href="http://sam.dennon.me">Sam Dennon</a> & <a href="http://mattborn.com/">Matt Born</a> - {' '}
            <a href="http://creativecommons.org/licenses/by/4.0/" className='fa fa-creative-commons fa-lg'></a> - Hosted by {'  '}
            <a className="fa fa-github-alt fa-lg" href="http://www.github.com"> {'  '}Github</a> 
        </div>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));

// Because we don't want to tab out of the textarea!
document.getElementById('boom').addEventListener('keydown', function(e){
  if(e.keyCode === 9){
    var start = this.selectionStart;
    var end = this.selectionEnd;
    var target = e.target;
    var value = target.value;
    target.value = value.substring(0, start)
          + "  "
          + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
    e.preventDefault();
  }
},false);