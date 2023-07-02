import styles from './Button.module.css'

type TypeClasses = {
	[key:string]: string
}

export const ClassesButton: TypeClasses = {
	containedprimary: styles.containedPrimary,
	outlinedprimary: styles.outlinedPrimary,
	containedsuccess: styles.containedSuccess,
	outlinesuccess: styles.outlineSuccess,
	containedwarning: styles.containedWarning,
	outlinewarning: styles.outlineWarning,
	containeddanger: styles.containedDanger,
	outlinedanger: styles.outlineDanger
}