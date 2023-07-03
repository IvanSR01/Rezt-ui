import styles from './Loader.module.css'

type TypeClasses = {
	[key: string]: string
}

export const ClassesLoader: TypeClasses = {
	primary: styles.primary,
	success: styles.success,
	warning: styles.warning,
	danger: styles.danger,
	light: styles.light,
	dark: styles.dark
}
