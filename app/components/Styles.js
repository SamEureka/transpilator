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
    fontFamily: 'Brandon+Grotesque',
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

module.exports = styles;