import styles from './container.module.css'
import cn from 'classnames'

export default function Container({ children }) {
  return <div className={cn(styles['container'])}>{children}</div>
}
