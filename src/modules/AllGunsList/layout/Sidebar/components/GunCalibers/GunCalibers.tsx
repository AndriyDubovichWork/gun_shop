import { bulletsData } from '../../../../../../store/store';
import style from './GunCalibers.module.scss';

const GunCalibers = () => {
	return (
		<div className={style.GunTypes}>
			{bulletsData.map((bullet) => {
				return (
					<div className={style.GunType}>
						<img
							draggable={false}
							src={bullet.url}
							alt={bullet.name}
							className={style.BulletImage}
						/>
						<h4 className={style.name}>{bullet.name}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default GunCalibers;
