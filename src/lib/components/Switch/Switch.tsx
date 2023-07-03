import { FC } from 'react'
import styles from './Switch.module.css'

interface ISwitch {
	value: boolean
	setValue?: (value: any) => void
}

const Switch: FC<ISwitch> = ({ value, setValue }) => {
	return (
		<label className={styles.switch}>
			<input type='checkbox' checked={value} onChange={setValue}/>
			<span className={styles.slider} />
		</label>
	)
}

export default Switch
