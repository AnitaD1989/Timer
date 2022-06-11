import { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button';
import Container from './components/Container/Container';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(preValue => preValue + 0.01);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  const reset = () => {
    setTime(0);
    setTimer(0);
  }

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);


  return (
    <Container>
      <FormattedTime>{time}</FormattedTime>
      <Button value={start}>start</Button>
      <Button value={stop}>stop</Button>
      <Button value={reset}>reset</Button>
    </Container>
  );
};

export default App;
