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
      input: '',
      output: '',
      err: '',
      transpiler: 'jade',
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      if (this.state.transpiler === 'jsx') {
        this.setState({
          input: '',
          output: babel.transform(code, {
            stage: 0,
            loose: 'all'
          }).code,
          err: '.',
        })
      } else if (this.state.transpiler === 'jade'){
        this.setState({
          input: '',

          output: jade.render(code, {
            pretty: ' ',
          }),
          err: '',
        })
      } else {
        this.setState({
          input: '',
          output: CoffeeScript.compile(code, {
            bare:true,
          }),
          err: '',
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
    console.log('App:render', this.state);
    return (
    <div>
      <Header app={this} />
      <div className="container" style={styles.cont}>
        <select style={styles.pick} onChange={this.handleSelectChange}>
          <option value="jade">Jade</option>
          <option value="jsx">JSX</option>
          <option value="coffee">CoffeeScript</option>
        </select>
        <textarea
          id="inputArea"
          style={styles.text}
          placeholder={this.state.placeholder}
          onChange={this.update}>
        </textarea>
        <pre style={styles.pre}>{this.state.output}</pre>
          <div style={styles.error}>{this.state.err}</div>
          <Footer />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
