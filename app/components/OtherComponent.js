var React = require('react');

class OtherComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      root: {
        color: 'red',
        fontSize: 200,
      },
    };
    return <div style={styles.root}>Other component</div>;
  }
}

module.exports = OtherComponent;