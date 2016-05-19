// Picks random color from an array
// const getColor = () => {
//   const n = Math.floor(Math.random()* (5-0+1))+0;
//   const c =['#C1F0F0','#BADA55', '#EEEEEE', '#B6A5E8', '#CCCCCC', '#ffcce6'];
//   return c[n];
// };

const styles = {
  error: {
    position: 'fixed',
    left: 0,
    bottom: '2rem',
    backgroundColor: 'pink',
    color: 'red',
    padding: '0.3rem',
    paddingLeft: '2rem',
    width: '100%',
    zIndex: 200,
  },
  grayCog:{
    color: '#666',
    fontSize: '1.5rem',
  },
  blueBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '1.5rem',
    color: 'steelblue',
  },
  redBrace: {
    fontFamily: 'Source Code Pro',
    fontSize: '1.5rem',
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
    right: '45vw',
    top: '3.1rem',
    fontFamily: 'Lato',
    fontSize: '0.8rem',
    padding: '0.2rem',
    backgroundColor: '#FFF',
    borderRadius: 0,
    border: '1px solid #CCC',
    zIndex: 100,
    color: '#888',
},
  pullLeft: {
    float: 'left',
    paddingLeft: '0.5rem',
  },
  pullRight: {
    float: 'right',
    paddingRight: '0.5rem',
  },
  footer: {
    width: '100vw',
    minWidth: '320px',
    height: '1.1rem',
    borderTop: '1px solid #CCC',
    position: 'fixed',
    bottom: 0,
    left: 0,
    textDecoration: 'none',
    backgroundColor: '#333',
    paddingTop: '0.2rem',
    color: '#EEE',
    fontFamily: 'Lato',
    fontSize: '0.6rem',
    verticalAlign: 'middle',
    zIndex: 201,
  },
  aboutGrayCog:{
    color: '#666',
    //fontSize: '2rem',
  },
  aboutPop:{
    position: 'fixed',
    width: '90vw',
    maxWidth: '300px',
    height: '90vh',
    fontSize: '0.8rem',
    borderRadius: '10px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    backgroundColor: '#FFF',
    padding: '1.5rem',
    top: '-10',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1337,
    transition: 'top 1s',
    overflow: 'scroll'
  },
  offScreen: {
    position: 'fixed',
    width: '90vw',
    maxWidth: '300px',
    height: '90vh',
    fontSize: '0.8rem',
    borderRadius: '10px',
    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.37)',
    backgroundColor: '#FFF',
    padding: '1.5rem',
    top: '-1300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'top 0.5s',
    zIndex: 1337
  },
  about: {
    position: 'fixed',
    height: '1.1rem',
    bottom: 0,
    left: 0,
    textDecoration: 'none',
    paddingTop: '1rem',
    color: '#EEE',
    fontFamily: 'Lato',
    fontSize: '0.8rem',
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
    display: 'none',
  },
  gravInput: {
    display: 'none',
  },
  gravContainer: {
    display: 'none',
  },
  editorContainer: {
    display: 'flex',
    position: 'fixed',
    fontSize: '0.8rem',
    top: '5rem',
    left: 0,
    bottom: '2rem',
    width: '100%',
  },
  container: {
    display: 'flex',
  },
  title: {
    fontFamily: ['Brandon-Grotesque', 'Lato', 'sans-serif'],
    fontSize: '2rem',
    paddingLeft: '1.5rem',
    cursor: 'default',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '2.9rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    // Random BG color, kinda silly
    // backgroundColor: getColor(),
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
    top: '3.2rem',
    zIndex: 1000,
    fontSize: '1rem',
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
    transition: 'z-index 1s ease-in-out',
  },
  noBackCover: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(80,80,80,0.0)',
    zIndex: -1,
    transitionDelay: '500ms',
    transition: 'z-index 1s ease-in-out',
  },
  code: {
    fontSize: '0.8rem',
    backgroundColor: '#EEE',
    color: 'red',
    fontFamily: 'Source Code Pro',
    padding: '1px',
  },
};

module.exports = styles;

// transpilator.io
