import { ReactSVG } from 'react-svg';
import { bulletsData } from '../../../../../../store/store';
import style from './GunCalibers.module.scss';
import { useAppDispatch } from '../../../../redux/hooks';
import { setSelectedType,setSelectedId } from '../../../../redux/reducers/SelectedGunSlice';

const GunCalibers = () => {
	const dispatch = useAppDispatch()
	
	return (
		<div className={style.GunTypes}>
			{bulletsData.map((bullet) => {
				return (
					<div className={style.GunType} onClick={()=>{
						dispatch(setSelectedType(bullet.ref))
						dispatch(setSelectedId(1))

					}}>
						<ReactSVG src={bullet.url} draggable={false} className={style.BulletImage} />

						<h4 className={style.name}>{bullet.name}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default GunCalibers;
