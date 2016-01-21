// Import the modules
var React = require('react');
var ReactDOM = require('react-dom');
var jade = require('jade');

// All the styles in one object
var styles = {
  text: {
    width: '50%',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    marginTop: '2.5rem',
    padding: 10,
    backgroundColor: 'rgba(240,240,240,0.5)',
    color: '#222'
  },
  header: {
    backgroundColor: 'rgba(70,130,180,0.1)',
    position: 'fixed',
    top: 0,
    color: '#666',
    height: '2.6rem',
    width: '100vw',
    fontFamily: 'Varela',
    fontSize: '2rem',
    paddingLeft: 10
  },
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 2,
    height: '1.5rem',
    overflow: 'auto',
    backgroundColor: 'rgba(193, 66, 66, 0.3)',
    color: 'red',
    fontSize: '1.1em',
    borderRadius: '3px',
    borderTop: '1px dotted red',
    borderRight: '1px dotted red',
    borderBottom: '1px dotted red',
    WebkitTransition: 'width 1s ease',
    transition: 'width 1s ease',
    transitionDelay: '1s'
    },
  pre: {
    backgroundColor: 'rgba(70,130,180,0.2)',
    width: '50%',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    marginTop: '2.5rem',
    padding: 10,
    color: '#222',
    overflow: 'auto',
    whiteSpace: 'pre-wrap'
    },
  cont: {
    height: '100vh', 
    display: 'flex'
  },
  blue: {
    color: 'steelblue'
  },
  pick: {
    position: 'absolute',
    right: 20,
    top: 11
  }
};

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      in: 'Type yer Jade here...',
      out: '',
      err: ''
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
        <i style={styles.blue} className="fa fa-code"></i> transpilator <i style={styles.blue} className="fa fa-code"></i>
      <select style={styles.pick} name="select">
        <option value="value1">Jade</option> 
        <option value="value2">CoffeeScript</option>
        <option value="value3">ES2015 (Babel)</option>
        <option value="value4">React/JSX (Babel)</option>
  
</select></header>  
      <div className="container" style={styles.cont}>
          <textarea id="boom" style={styles.text} placeholder={this.state.in}
          onChange={this.update}></textarea>
          <pre style={styles.pre}>{this.state.out}</pre>
            <footer style={styles.footer}>{this.state.err}</footer>
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