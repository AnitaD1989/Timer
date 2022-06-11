import styles from './Button.module.scss';

const Button = props => {

  return(
    <div className={styles.button_wrapper}>
      <button className={styles.button} onClick={props.value}>{props.children}</button>
    </div>
  )
};
export default Button;