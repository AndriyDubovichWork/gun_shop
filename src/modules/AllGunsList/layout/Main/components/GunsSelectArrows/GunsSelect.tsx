import { GunT } from '../../../../../types/GunT';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setSelectedId } from '../../../../redux/reducers/SelectedGunSlice';
import arrow from './assets/arrow.svg';
import style from './GunsSelect.module.scss';

type GunsSelectPropsT = {
	guns: GunT[];
};

const GunsSelect = ({ guns }: GunsSelectPropsT) => {
	const selectedId = useAppSelector((state) => state.selectedGun.selectedId);
	const dispatch = useAppDispatch();

	const ChangeIdByValue = (value: number) => {
		// if value is in specific limits
		if ((value > 0 && selectedId < guns.length - 1) || (value < 0 && selectedId > 0)) {
			dispatch(setSelectedId(selectedId + value));
		}
	};
	return (
		<div className={style.GunsSelect}>
			<div className={style.Options}>
				<div
					className={style.previous}
					onClick={() => {
						ChangeIdByValue(-1);
					}}
				>
					{guns[selectedId - 1]?.name || ''}
				</div>
				<img
					draggable={false}
					className={style.leftArrow}
					src={arrow}
					alt='left arrow'
					onClick={() => {
						ChangeIdByValue(-1);
					}}
				/>
				<div className={style.current}>{guns[selectedId].name}</div>
				<img
					draggable={false}
					className={style.rightArrow}
					src={arrow}
					alt='right arrow'
					style={{ transform: 'scaleX(-1)' }}
					onClick={() => {
						ChangeIdByValue(1);
					}}
				/>
				<div
					className={style.next}
					onClick={() => {
						ChangeIdByValue(1);
					}}
				>
					{guns[selectedId + 1]?.name || ''}
				</div>
			</div>
		</div>
	);
};

export default GunsSelect;
