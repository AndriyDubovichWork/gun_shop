import pistol from './bullets/pistol.svg';
import rifle from './bullets/rifle.svg';
import smg from './bullets/smg.svg';
import sniperRifle from './bullets/sniperRifle.svg';
import style from './GunTypes.module.scss';

const GunTypes = () => {
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

export default GunTypes;
