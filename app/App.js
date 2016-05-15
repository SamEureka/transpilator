// Import the modules
import React from 'react';
import ReactDOM from 'react-dom';
import md5 from 'md5';
// import CodeMirror from 'codemirror';
// import Clipboard from 'clipboard';

const config = {
  htmlConfig: {
    readOnly: 'nocursor',
    lineWrapping: true,
    tabSize: '2',
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'default',
    styleActiveLine: true,
    matchBrackets: true,
    mode: {
      name: "htmlmixed",
      alignCDATA: true,
    },
  },
    jsxConfig: {
    lineWrapping: true,
    smartIndent: false,
    indentWithTabs: true,
    tabSize: '2',
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'default',
    styleActiveLine: true,
    matchBrackets: true,
    mode: "jsx"
  },
  jadeConfig: {
    keyMap: "sublime",
    smartIndent: false,
    indentWithTabs: true,
    lineWrapping: true,
    tabSize: '2',
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'default',
    styleActiveLine: true,
    matchBrackets: true,
    mode: {
      name: "jade",
      alignCDATA: true,
    },
  },
  markdownConfig: {
    lineWrapping: true,
    smartIndent: false,
    indentWithTabs: true,
    tabSize: '2',
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'default',
    styleActiveLine: true,
    matchBrackets: true,
    mode: {
      name: "markdown"
    },
  },
  javascriptConfig: {
    lineWrapping: true,
    smartIndent: false,
    indentWithTabs: true,
    tabSize: '2',
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'default',
    styleActiveLine: true,
    matchBrackets: true,
    mode: {
      name: "javascript"
    }
  },
};

class App extends React.Component {
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
        return config.htmlConfig;
      case "coffee":
        return config.htmlConfig;
      case "live":
        return config.htmlConfig;
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
        <h2 id="title"><i className="blue fa fa-code"></i>{' '}TRANSPILATOR</h2>
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
    </div>)
  }
}

class Gravatar extends React.Component {

  getGravImg() {
    return `http://www.gravatar.com/avatar/${this.props.grav}?s=50`;
  }

  render() {
    const styles = {
      image: {
        borderRadius: '25px',
        cursor: 'pointer',
      },
      boom: {
        resize: 'none',
        width: '300px',
        height: '2rem',
        backgroundColor: '#EEE',
        border: 0,
        borderRadius: '2px',
        color: '#333',
        fontFamily: 'Source Code Pro',
        fontSize: '1.1rem',
        verticalAlign: 'middle',
      },
      container: {
        display: 'flex',
        position: 'absolute',
        float: 'right',
        right: '1rem',
      },
      hidden: {
        display: 'none',
      },
    }
    return (<div>
      <div style={styles.container}>
        <form
          onSubmit={this.props.handleSubmit}>
          <input
            id="gravInput"
            type="text"
            style={this.props.enterId
              ? styles.boom
              : styles.hidden}
            placeholder="Enter Gravatar Id"
            onChange={this.props.handleInput} />
        </form>
        <div>
          <img
            id="grav"
            style={styles.image}
            onClick={this.props.handleClick}
            src={this.getGravImg()} />
        </div>
      </div>
    </div>)
  }
}

class Pick extends React.Component {
  render(){
    const styles = {
      pick: {
        position: 'fixed',
        right: '51vw',
        top: '5rem',
        fontFamily: 'Source Code Pro',
        fontSize: '1.2rem',
        padding: '0.2rem',
        backgroundColor: '#FFF',
        border: 'none',
        zIndex: 100,
  },
    }
    return (
          <select style={styles.pick} onChange={this.props.handleSelect}>
          <option value="jade">Jade</option>
          <option value="jsx">React/JSX</option>
          <option value="coffee">CoffeeScript</option>
          <option value="live">LiveScript</option>
          <option value="markdown">Markdown</option>
        </select>
    );
  }
}

class Error extends React.Component {
  render(){
    const styles = {
      error: {
        position: 'fixed',
        left: '2vw',
        bottom: '2vw',
        backgroundColor: 'pink',
        color: 'red',
        padding: '0.3rem',
        width: '90vw',
        zIndex: '200',
      },
      hidden: {
        display: 'none',
      }
    }
    return(<div>
        <div
          style={this.props.displayErr ? styles.error : styles.hidden}>{this.props.err}</div>
    </div>)
  }
}


module.exports = App;
