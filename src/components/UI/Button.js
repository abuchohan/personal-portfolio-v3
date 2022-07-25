import classes from './Button.module.scss'

const Button = props => {
  return (
    <button onClick={props.file} className={classes.button}>{props.children}</button>
  )
}
export default Button