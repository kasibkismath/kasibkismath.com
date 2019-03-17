import React from 'react';
import profilePic from '../assets/profile-pic.jpeg';
import twitterIcon from '../assets/twitter.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    const imageClick = () => {
      window.open('https://mobile.twitter.com/kasibkismath', '_blank');
    };
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Full Stack Developer{' '}
          {/* <a href="https://mobile.twitter.com/kasibkismath"> */}
          <img
            src={twitterIcon}
            alt={`Kasib Kismath Twitter`}
            style={{
              marginBottom: rhythm(-0.5),
              width: rhythm(1.5),
              height: rhythm(1.5),
              cursor: 'pointer',
            }}
            onClick={() => imageClick()}
          />
          {/* </a> */}
        </p>
      </div>
    );
  }
}

export default Bio;
