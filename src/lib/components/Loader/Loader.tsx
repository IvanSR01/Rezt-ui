import { FC } from 'react'
import styles from './Loader.module.css'
import { ClassesLoader } from './ClassesLoader'
import clsx from 'clsx'
interface ILoader {
	color?: string
}

const Loader: FC<ILoader> = ({ color }) => {
	return (
		<div
			className={clsx(styles.loader, ClassesLoader[color ? color : 'primary'])}
		></div>
	)
}

export default Loader
