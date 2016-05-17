const styles = {
  error: {
    position: 'fixed',
    left: 0,
    bottom: '2rem',
    backgroundColor: 'pink',
    color: 'red',
    padding: '0.3rem',
    paddingLeft: '2rem',
    width: '100vw',
    zIndex: 200,
  },
  grayCog:{
    color: '#666',
  },
  blueBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '2.5rem',
    color: 'steelblue',
  },
  redBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '2.5rem',
    color: 'rgba(225, 55, 55,0.8)'
  },
  aboutBlueBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '1.5rem',
    color: 'steelblue',
  },
  aboutRedBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '1.5rem',
    color: 'rgba(225, 55, 55,0.8)'
  },
  pick: {
    position: 'fixed',
    right: '51vw',
    top: '4rem',
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    padding: '0.2rem',
    backgroundColor: '#FFF',
    borderRadius: 0,
    border: '1px solid #CCC',
    zIndex: 100,
    color: '#888',
},
  pullLeft: {
    float: 'left',
    paddingLeft: '1rem',
  },
  pullRight: {
    float: 'right',
    paddingRight: '1rem',
  },
  footer: {
    width: '100vw',
    height: '1.5rem',
    borderTop: '1px solid #CCC',
    position: 'fixed',
    bottom: 0,
    left: 0,
    textDecoration: 'none',
    backgroundColor: '#333',
    paddingTop: '0.5rem',
    color: '#EEE',
    fontFamily: 'Lato',
    fontSize: '1rem',
    verticalAlign: 'middle',
    zIndex: 201,
  },
  aboutGrayCog:{
    color: '#666',
  },
  aboutPop:{
    position: 'fixed',
    width: '70vw',
    maxWidth: '760px',
    maxHeight: '90vh',
    fontSize: '1rem',
    borderRadius: '10px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    backgroundColor: '#FFF',
    padding: '1.5rem',
    bottom: '2vh',
    left: '2vw',
    zIndex: 1337,
    transition: '0.5s',
    overflow: 'scroll'
  },
  about: {
    position: 'fixed',
    height: '1.5rem',
    bottom: 0,
    left: 0,
    textDecoration: 'none',
    paddingTop: '0.5rem',
    color: '#EEE',
    fontFamily: 'Lato',
    fontSize: '1rem',
    zIndex: 201,
    cursor: 'pointer',
  },
  aboutTitle: {
    fontFamily: 'Brandon-Grotesque',
    fontSize: '1.5rem',
  },
  aboutLink: {
    fontSize: '1rem',
    color: 'steelblue',
    fontFamily: 'Lato',
  },
  aboutOLink: {
    fontSize: '1rem',
    color: 'orangered',
  },
  aboutSpace: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
  },
  close: {
    position: 'relative',
    float: 'right',
    cursor: 'pointer',
  },
  hidden: {
    display: 'none',
    transition: '1s',
  },
  gravImage: {
    cursor: 'pointer',
    zIndex: 4000,
  },
  gravInput: {
    resize: 'none',
    width: '15rem',
    height: '2rem',
    backgroundColor: '#FFF',
    border: '1px solid #CCC',
    borderRadius: '2px',
    color: '#333',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    verticalAlign: 'middle',
    marginRight: '6px',
  },
  gravContainer: {
    display: 'flex',
    position: 'fixed',
    top: '1vh',
    right: '1rem',
  },
  editorContainer: {
    display: 'flex',
    position: 'fixed',
    top: '3.5rem',
    left: 0,
    bottom: '2rem',
    width: '100vw',
  },
  container: {
    display: 'flex',
  },
  title: {
    width: '50vw',
    fontFamily: ['Brandon-Grotesque', 'Lato', 'sans-serif'],
    fontSize: '2.2rem',
    paddingLeft: '1rem',
    cursor: 'default',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '3.5rem',
    backgroundColor: '#EEE',
    borderBottom: '1px solid #CCC',
  },
  clipButton: {
    backgroundColor: '#FFF',
    border: '1px solid #CCC',
    shadow: 0,
    borderRadius: '3px',
    paddingLeft: '4px',
    paddingRight: '4px',
    position: 'fixed',
    right: '1rem',
    top: '4rem',
    zIndex: 1000,
    fontSize: '1.2rem',
    color: '#888',
  },
  backCover: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(80,80,80,0.8)',
    zIndex: 1336,
    transition: 'background-color 1s ease-in-out',
  },
  noBackCover: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(80,80,80,0.0)',
    zIndex: -336,
    transition: 'background-color 1s ease-in-out',
  },
  code: {
    fontSize: '0.8rem',
    backgroundColor: '#FFF',
    border: '1px dotted #999',
    borderRadius: '5px',
    color: 'maroon',
    fontFamily: 'Source Code Pro',
    padding: '1px',
    margin: '2px',
  },
  offScreen: {
    position: 'fixed',
    width: '70vw',
    fontSize: '1rem',
    lineHeight: '1.8rem',
    borderRadius: '10px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    backgroundColor: '#EEE',
    padding: '1.5rem',
    bottom: '-100rem',
    left: '-100rem',
    zIndex: 1337,
    transition: '0.5s',
  },
};

module.exports = styles;
