import React from 'react';

//import styles from './Styles';

export default class Footer extends React.Component {
  render() {
    return (
        <div style={this.props.styles.footer}>
            <span style={this.props.styles.pullRight}>Made with <a href="http://en.wikipedia.org/wiki/Love" className='icon icon-heart-o icon-lg'></a> by {' '}
            <a href="http://samdennon.com">Sam Dennon</a> & <a href="http://mattborn.com/">Matt Born</a> - {' '}
            Hosted by Github {'  '}<a className="icon icon-github icon-lg" href="http://www.github.com"></a></span>
        </div>
    );
  }
}

// transpilator.io
