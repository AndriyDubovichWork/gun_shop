import { useState } from 'react';
import arrow from './assets/arrow.svg';
import style from './GunsSelect.module.scss';
const GunsSelect = () => {
	const guns = ['helo', 'hi', 'bye', 'lol men you are looking for'];
	const [selectedId, setSelectedId] = useState(1);
	return (
		<div className={style.GunsSelect}>
			<div className={style.Options}>
				<div className={style.previous}>{guns[selectedId - 1]}</div>
				<img
					className={style.leftArrow}
					src={arrow}
					alt='left arrow'
					onClick={() => {
						setSelectedId(selectedId - 1);
					}}
				/>
				<div className={style.current}>{guns[selectedId]}</div>
				<img
					className={style.rightArrow}
					src={arrow}
					alt='right arrow'
					style={{ transform: 'scaleX(-1)' }}
					onClick={() => {
						setSelectedId(selectedId + 1);
					}}
				/>
				<div className={style.next}>{guns[selectedId + 1]}</div>
			</div>
		</div>
	);
};

export default GunsSelect;
