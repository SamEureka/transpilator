import React from 'react';
import styles from './Styles';

var Footer = React.createClass({
  render: function() {
    return (
        <div style={styles.footer}>
            Made with <a href="http://en.wikipedia.org/wiki/Love" className='fa fa-heart-o fa-lg'></a> by {' '}
            <a href="http://sam.dennon.me">Sam Dennon</a> & <a href="http://mattborn.com/">Matt Born</a> - {' '}
            <a href="http://creativecommons.org/licenses/by/4.0/" className='fa fa-creative-commons fa-lg'></a> - Hosted by {'  '}
            <a className="fa fa-github-alt fa-lg" href="http://www.github.com"> {'  '}</a> Github
        </div>
    )
  }
});

module.exports = Footer;

