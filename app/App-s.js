// Import the modules
import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
// import CodeMirror from 'codemirror';
// import Clipboard from 'clipboard';

import Gravatar from './components/Gravatar';
import Pick from './components/Pick';
import Error from './components/Error';
import config from './components/Config';
import styles from './components/Styles';
import Footer from './components/Footer';
// import Header from './components/Header';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      rendered: '',
      selected: 'jade',
      email: '',
      grav: '',
      enterId: false,
      err: '',
      displayErr: false,
    }
  }

  getInputConfig(){
    switch (this.state.selected){
      case "jade":
        return config.jadeConfig;
      case "markdown":
        return config.markdownConfig;
      case "jsx":
        return config.jsxConfig;
      case "coffee":
        return config.coffeeConfig;
      case "live":
        return config.liveConfig;
    }
  }

  getOutputConfig(){
    switch (this.state.selected){
      case "jade":
        return config.htmlConfig;
      case "markdown":
        return config.htmlConfig;
      case "jsx":
        return config.javascriptConfig;
      case "coffee":
        return config.javascriptConfig;
      case "live":
        return config.javascriptConfig;
    }
  }


  checkLocalStorage() {
    const email = localStorage.getItem('email');
    if (!email) {
      this.setState({
        'enterId': true
      })
    } else {
      this.setState({
        'email': email,
        'grav': md5(email),
      });
    }
  }

  handleGravClick() {
    this.state.enterId === false ?
      this.setState({
        enterId: true
      }) :
      this.setState({
        enterId: false
      });
  }

  handleGravInput(e) {
    e.preventDefault();
    const input = e.target.value;
    this.setState({
      email: input,
      grav: input === '' ? '' : md5(input),
    });
    localStorage.setItem('email', input);
  }

  handleGravSubmit(e){
    e.preventDefault();
    this.setState({'enterId': false});
  }


  handleSelectChange(e){
    let picked = e.target.value;
    this.setState({
      'selected': picked,
      'text': '',
      'rendered': ''
    });
  }

  renderJade(e){
    const code = jade.render(e, {
      pretty: ' '
    });
    this.setState({
      'text': e,
      'rendered': code,
      'displayErr': false
    });
  }

  renderCoffeeScript(e){
    const code = CoffeeScript.compile(e, {
      bare: true
    });
    this.setState({
      'text': e,
      'rendered': code,
      'displayErr': false
    });
  }

  renderJSX(e){
    const output = Babel.transform(e, { presets: ['es2015','react'] }).code;
    this.setState({
      'text': e,
      'rendered': output,
      'displayErr': false
    });
  }

  renderMarkdown(e){
    const md = window.markdownit();
    const yay = md.render(e);
    this.setState({
      'text': e,
      'rendered': yay,
      'displayErr': false
    });
  }

  renderLiveScript(e){
    const code = LiveScript.compile(e, {
      bare: true
    });
    this.setState({
      'text': e,
      'rendered': code,
      'displayErr': false
    });
  }

  update(e) {
    try {
      switch (this.state.selected){
        case 'jade':
          return this.renderJade(e);
        case "markdown":
          return this.renderMarkdown(e);
        case "jsx":
          return this.renderJSX(e);
        case "coffee":
          return this.renderCoffeeScript(e);
        case "live":
          return this.renderLiveScript(e);
      };
    }
    catch(err) {
      this.setState({
        err: " Syntax error: " + err.message,
        displayErr: true
      });

    }
  }

  componentWillMount(){
    this.checkLocalStorage();
  }

  componentDidMount() {
    const btn = document.getElementById('clipButton');
    const clipboard = new Clipboard(btn);
    const editorOut = CodeMirror.fromTextArea(this.refs.editorOut, this.getOutputConfig());
    const editorIn = CodeMirror.fromTextArea(this.refs.editorIn, this.getInputConfig());
    editorIn.on("change", function() {
      const temp = editorIn.doc.getValue();
      this.update(temp);
      editorOut.doc.setValue(this.state.rendered);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Gravatar
          handleInput={this.handleGravInput.bind(this)}
          handleSubmit={this.handleGravSubmit.bind(this)}
          handleClick={this.handleGravClick.bind(this)}
          enterId={this.state.enterId}
          grav={this.state.grav}
          />
        <Pick handleSelect={this.handleSelectChange.bind(this)}/>
        <h2>{'</>'}TRANSPILATOR</h2>
      <div className="container">
        <textarea
          className='codemirror'
          ref='editorIn'
          id='input'/>
        <button
          id="clipButton"
          data-clipboard-text={this.state.rendered}
          alt="Copy to clipboard">
          <span className="cl fa fa-clipboard fa-2x"/>
        </button>
        <textarea
          className='codemirror'
          ref='editorOut'
          id='output'>
        </textarea>
      </div>
        <Error
          err={this.state.err}
          displayErr={this.state.displayErr} />
        <Footer />
    </div>)
  }
}

module.exports = App;
