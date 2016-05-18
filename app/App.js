import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/jade/jade';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/keymap/sublime';
import Clip from 'clipboard';
// import _ from 'lodash';

import Gravatar from './components/Gravatar';
import Header from './components/Header';
import Footer from './components/Footer';
import config from './components/Config';
import styles from './components/Styles';
import About from './components/About';
import Pick from './components/Pick';
import Err from './components/Err';

let editorOut = {};
let editorIn = {};


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      rendered: '',
      selected: 'jade',
      email: '',
      grav: '',
      enterId: false,
      err: '',
      displayErr: false,
      about: false,
      h:'',
      w:'',
      clipped: false,
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
    }
  }

  getOutputConfig(){
    switch (this.state.selected){
      case "jade":
        return config.htmlConfig;
      case "markdown":
        return config.htmlConfig;
      case "jsx":
        return config.htmlConfig;
      case "coffee":
        return config.htmlConfig;
    }
  }

  getAbout(){
    if(!this.state.about){
      this.setState({about: true});
    } else {
      this.setState({about: false});
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

  // handleClipClick(e){
  //   const clipToggle = (e) =>{
  //     e.target. ?
  //     this.setState({clipped:true}):
  //     this.setState({clipped:false});}
  //   _.delay(function(arg){
  //     clipToggle(arg);
  //   }, 500, false);
  // }

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
      };
    }
    catch(err) {
      this.setState({
        err: " Syntax error: " + err.message,
        displayErr: true
      });

    }
  }

  viewportCheck(){
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({h,w});
  }

  componentWillMount(){
    this.checkLocalStorage();
    this.viewportCheck();
  }

  componentDidMount() {
    window.addEventListener('resize', this.viewportCheck.bind(this));
    const btn = document.getElementById('clipButton');
    const clipboard = new Clip(btn);
    editorOut = CodeMirror.fromTextArea(this.refs.editorOut, this.getOutputConfig());
    editorIn = CodeMirror.fromTextArea(this.refs.editorIn, this.getInputConfig());
    editorIn.on("change", function() {
      const temp = editorIn.doc.getValue();
      this.update(temp);
      editorOut.doc.setValue(this.state.rendered);
    }.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.viewportCheck.bind(this));
  }

  render() {
    return (
      <div>

        <Header
          handleInput={this.handleGravInput.bind(this)}
          handleSubmit={this.handleGravSubmit.bind(this)}
          handleClick={this.handleGravClick.bind(this)}
          enterId={this.state.enterId}
          grav={this.state.grav}/>
        <Pick handleSelect={this.handleSelectChange.bind(this)}/>

        <div style={styles.editorContainer}>
          <textarea
            className='codemirror'
            ref='editorIn'
            id='input'></textarea>
          <button
            id="clipButton"
            style={styles.clipButton}
            data-clipboard-text={this.state.rendered}
            alt="Copy to clipboard">
              <span className="cl icon icon-clipboard"/>
          </button>
          <textarea
            className='codemirror'
            ref='editorOut'
            id='output'>
          </textarea>
        </div>
        <Err
          err={this.state.err}
          displayErr={this.state.displayErr} />
        <Footer />
        <About
          getAbout={this.getAbout.bind(this)}
          about={this.state.about}/>
    </div>)
  }
}
