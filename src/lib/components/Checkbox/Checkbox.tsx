import { FC } from 'react'
import styles from './Checkbox.module.css'

interface ICheckBox {
	value: boolean
	setValue?: (value: any) => void
}

const Checkbox: FC<ICheckBox> = ({ value, setValue }) => {
	return (
		<label className={styles.container}>
			<input type='checkbox' checked={value} onChange={setValue}/>
			<div className={styles.checkmark}></div>
		</label>
	)
}

export default Checkbox
