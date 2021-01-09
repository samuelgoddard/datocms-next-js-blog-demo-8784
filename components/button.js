import styles from './button.module.css'
import Link from 'next/link'
import cn from 'classnames'

export default function Button({error, success, link, children}) {
  return (
    <Link href={link ? link : '#'}>
      <a
        type="button"
        className={cn(styles['btn'], { [styles['btn--error']]: error, [styles['btn--success']]: success })}
      >
        {children}
      </a>
    </Link>
  )
}
