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
      in: '',
      out: '',
      err: '',
      transpiler: 'coffee',
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      if (this.state.transpiler === 'jsx') {
        this.setState({
          in: 'JSX here... JavaScript over there -->',
          out: babel.transform(code, {
            stage: 0,
            loose: 'all'
          }).code,

        })
      } else if (this.state.transpiler === 'jade'){
        this.setState({
          in: 'Jade here... HTML over there -->',
          out: jade.render(code, {
            pretty: ' ',

          }),
        })
      } else {
        this.setState({
          in: 'CoffeeScript here... JavaScript over there -->',
          out: CoffeeScript.compile(code, {
            bare:true,

          }),
        })
      }
    }
    catch(err) {
      this.setState({err: " Syntax error: " + err.message})
    }
  }
  componentDidMount () {
    document.getElementById('inputArea').addEventListener('keydown', tabInsert, false);
  }
  componentWillUnmount () {
    document.getElementById('inputArea').removeEventListener('keydown', tabInsert, false);
  }
  render() {
    // console.log('App:render', this.state);
    return (
    <div>
      <Header app={this} />
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
