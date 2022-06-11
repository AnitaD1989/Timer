import styles from './FormattedTime.module.scss';

const FormattedTime = props => {

  const seconds = (timeInSeconds) => {
    let pad = (num, size) => {
      return ('000' + num).slice(size * -1);
    },

    time = parseFloat(timeInSeconds).toFixed(2),
    hours = Math.floor(time / 60 /60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-2);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + '.' + pad(milliseconds, 2);
  }
  
  return(
    <div className={styles.time}>{seconds(props.children)}</div>
  )
};

export default FormattedTime;