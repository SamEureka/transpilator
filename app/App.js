// Import the modules
var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('./components/Styles');
var Footer = require('./components/Footer');
var Header = require('./components/Header');
var tabInsert = require('./components/Helpers');
//var CoffeeScript = require('coffee-script');
//var jade = require('jade');

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
      this.setState({ // ,
        // out: jade.render(code, {
        //   pretty: ' '
        // }),
        // out: CoffeeScript.compile(code, {bare:true}),
        out: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: '',
      })
    }
    catch(err) {
      this.setState({err: " Syntax error: " + err.message})
    }
  }
  componentWillMount () {
    window.addEventListener('keydown', tabInsert, false);
  }
  componentWillUnmount () {
    window.removeEventListener('keydown', tabInsert, false);
  }
  render() {
    return (
    <div>
      <Header />
      <div className="container" style={styles.cont}>
        <textarea
          id="inputArea"
          style={styles.text}
          placeholder={this.state.in}
          onChange={this.update}>
        </textarea>
        <pre style={styles.pre}>{this.state.out}</pre>
          <div style={styles.error}>{this.state.err}</div>
          <Footer />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
