import { FC, ReactNode } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'
import { ClassesButton } from './ClassesButton'
interface IButton {
	children: ReactNode
	variant?: string
	color?: string
}

const Button: FC<IButton> = ({ children, variant, color }) => {
	const classes: string = (variant ? variant : 'contained') + (color ? color : 'primary')
	console.log(classes)
	
	if (!children) return
	const textButton = children.toString().toUpperCase()
	return (
		<div>
			<button className={clsx(styles.button, ClassesButton[classes])}>
				{textButton}
			</button>
		</div>
	)
}

export default Button
