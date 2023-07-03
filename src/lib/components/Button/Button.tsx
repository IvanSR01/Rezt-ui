import { FC, MouseEvent, ReactNode } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'
import { ClassesButton } from './ClassesButton'
interface IButton {
	children: ReactNode
	variant?: string
	color?: string
	onClick?: (value?: any) => void
	disabled?: boolean
	className?: string
}

const Button: FC<IButton> = ({
	children,
	variant,
	color,
	disabled,
	onClick,
	className = ''
}) => {
	const classes: string =
		(variant ? variant : 'contained') + (color ? color : 'primary')

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (disabled || !onClick) return
		onClick && onClick(e)
	}

	if (!children) return
	const textButton = children.toString().toUpperCase()
	return (
		<div>
			<button
				disabled={disabled}
				className={clsx(styles.button, ClassesButton[classes], className)}
				onClick={handleClick}
			>
				{textButton}
			</button>
		</div>
	)
}

export default Button
