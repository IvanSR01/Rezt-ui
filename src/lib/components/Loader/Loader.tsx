import { FC } from 'react'
import styles from './Loader.module.css'
import clsx from 'clsx'
interface ILoader {
	color?: string
}
type TypeClasses = {
	[key: string]: string
}
const Loader: FC<ILoader> = ({ color }) => {
	console.log(color ? color : 'primary')
	const ClassesLoader: TypeClasses = {
		'primary': styles.primary,
		'success': styles.success,
		'warning': styles.warning,
		'danger': styles.danger,
		'light': styles.light,
		'dark': styles.dark
	}
	return (
		<div className={clsx(styles.loader, ClassesLoader[color ? color : 'primary'])}>
			
		</div>
	)
}

export default Loader
