/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
import React from 'react';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  clicketyClack(text, minTypeSpeed, maxTypeSpeed, initDelay) {
    let str = '';
    let typeSpeed = 0;

    text.split('').forEach(c => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        this.setState({ text: str });
      }, initDelay + typeSpeed);
    });
  }

  componentDidMount() {
    const {
      text, minTypeSpeed, maxTypeSpeed, initDelay,
    } = this.state;
    this.clicketyClack(
      text,
      minTypeSpeed,
      maxTypeSpeed,
      initDelay,
    );
  }

  render() {
    const { text } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        {text}
        <span>&nbsp;</span>
      </div>
    );
  }
}

Typewriter.defaultProps = {
  text: 'Give me something to type!',
  minTypeSpeed: 100,
  maxTypeSpeed: 180,
  initDelay: 700,
};

export default Typewriter;
