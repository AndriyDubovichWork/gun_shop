import pistol from './bulletsImgs/pistol.svg';
import rifle from './bulletsImgs/rifle.svg';
import smg from './bulletsImgs/smg.svg';
import sniperRifle from './bulletsImgs/sniperRifle.svg';
import style from './GunCalibers.module.scss';

const GunCalibers = () => {
	const bullets = [
		{ url: sniperRifle, name: 'Sniper Rifle' },
		{ url: rifle, name: 'Rifle' },
		{ url: smg, name: 'SMG' },
		{ url: pistol, name: 'Pistol' },
	];
	return (
		<div className={style.GunTypes}>
			{bullets.map((bullet) => {
				return (
					<div className={style.GunType}>
						<img src={bullet.url} alt='cannot load img' className={style.BulletImage} />
						<h4 className={style.name}>{bullet.name}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default GunCalibers;
