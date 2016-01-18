var React = require('react');
var ReactDOM = require('react-dom');
var jade = require('jade');

let styles = {
  text: {
    width: '50%',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    margin: 0,
    padding: 10,
    color: '#222'
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
    borderBottom: '1px dotted red'
    },
  pre: {
    backgroundColor: '#DDD',
    width: '50%',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    margin: 0,
    padding: 10,
    color: '#222'
    },
  cont: {
    height: '100vh', 
    display: 'flex'
  }
}

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
      this.setState({err: "Syntax error: " + err.message})
      }
  }
  render() {
    return (
    <div>
      <footer style={styles.footer}>{this.state.err}</footer>
        <div className="container" style={styles.cont}>
          <textarea style={styles.text} placeholder={this.state.in}
          onChange={this.update}></textarea>
          <pre style={styles.pre}>{this.state.out}</pre>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));