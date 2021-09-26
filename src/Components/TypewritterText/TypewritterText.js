import Typewriter from 'typewriter-effect';
import classes from './TypewritterText.module.css';

function TypewritterText() {
  return (
    <Typewriter
      options={{
        strings: ['I am a Full Stack Developer.', 'I make Android and IOS applications.'],
        autoStart: true,
        loop: true,
        wrapperClassName: classes.wrapperC,
      }}
    />
  )
}

export default TypewritterText;