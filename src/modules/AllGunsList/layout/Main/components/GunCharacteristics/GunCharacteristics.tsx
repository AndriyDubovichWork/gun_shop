import { CharacteristicT } from '../../../../../types/CharacteristicT';
import GunAttribute from '../GunAttribute/GunAttribute';
import style from './GunCharacteristics.module.scss';

type GunCharacteristicsPropsT = {
	characteristics: CharacteristicT[];
};

const GunCharacteristics = ({ characteristics }: GunCharacteristicsPropsT) => {
	return (
		<div className={style.GunCharacteristics}>
			<h1 className={style.Header}>Characteristics</h1>
			<div className={style.table}>
				{characteristics.map((gun) => {
					return <GunAttribute {...gun} />;
				})}
			</div>
		</div>
	);
};

export default GunCharacteristics;
