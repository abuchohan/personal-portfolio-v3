import styles from './Footer.module.scss'

import githubLogo from './Assets/github-logo.png'
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div>Dont be a stranger - <br />
            <a href="mailto:abuchohan@hotmail.co.uk">abuchohan@hotmail.co.uk </a>
        </div>
        <a href="https://github.com/abuchohan">
            <img src={githubLogo} alt="github logo"/>
        </a>
    </div>
  )
}
export default Footer