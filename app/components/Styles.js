const styles = {
  error: {
    position: 'fixed',
    left: '2vw',
    bottom: '2vw',
    backgroundColor: 'pink',
    color: 'red',
    padding: '0.3rem',
    width: '90vw',
    zIndex: 200,
  },
  blue: {
    color: 'steelblue'
  },
  red: {
    color: 'rgba(225, 55, 55,0.8)'
  },
  pick: {
    position: 'fixed',
    right: '51vw',
    top: '5rem',
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    padding: '0.2rem',
    backgroundColor: '#FFF',
    border: '1px solid #CCC',
    zIndex: 100,
    color: '#999',
},
  footer: {
    position: 'fixed',
    bottom: '0.8rem',
    right: '0.8rem',
    textDecoration: 'none',
    color: 'rgba(55,55,55,0.6)',
    fontFamily: 'Lato',
    fontSize: '0.8rem',
    zIndex: 201,
  },
  hidden: {
    display: 'none',
  },
  gravImage: {
    borderRadius: '25px',
    cursor: 'pointer',
  },
  gravInput: {
    resize: 'none',
    width: '300px',
    height: '2rem',
    backgroundColor: '#FFF',
    border: 0,
    borderRadius: '2px',
    color: '#333',
    fontFamily: 'Source Code Pro',
    fontSize: '1.1rem',
    verticalAlign: 'middle',
    marginRight: '6px',
    marginTop: '6px',
  },
  gravContainer: {
    display: 'flex',
    position: 'absolute',
    float: 'right',
    right: '1rem',
  },
  container: {
    display: 'flex',
  },
  title: {
    width: '50vw',
    fontFamily: ['Brandon-Grotesque', 'Lato', 'sans-serif'],
    fontSize: '2rem',
    paddingLeft: '2rem',
    paddingBottom: '0.5rem',
  },
  clipButton: {
    backgroundColor: '#FFF',
    border: '1px solid #CCC',
    shadow: 0,
    borderRadius: '3px',
    padding: '5px',
    position: 'absolute',
    right: '1rem',
    top: '5rem',
    zIndex: 1000,
    color: '#999',
  },
};

module.exports = styles;
