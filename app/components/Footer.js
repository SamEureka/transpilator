import React from 'react';

import styles from './Styles';

export default class Footer extends React.Component {
  render() {
    return (
        <div style={styles.footer}>
            Made with <a href="http://en.wikipedia.org/wiki/Love" className='fa fa-heart-o fa-lg'></a> by {' '}
            <a href="http://sam.dennon.me">Sam Dennon</a> & <a href="http://mattborn.com/">Matt Born</a> - {' '}
            Hosted by Github {'  '}<a className="fa fa-github fa-lg" href="http://www.github.com"></a>
        </div>
    );
  }
}
