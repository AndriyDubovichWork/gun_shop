import { GunsT } from '../../../types/GunsT';
import { useAppSelector } from '../../redux/hooks';
import BackGroundImage from './components/BackGroundImage/BackGroundImage ';
import GunCharacteristics from './components/GunCharacteristics/GunCharacteristics';
import GunImage from './components/GunImage/GunImage';
import GunName from './components/GunName/GunName';
import GunsSelect from './components/GunsSelectArrows/GunsSelect';
import style from './Main.module.scss';

type MainPropsT = {
	gunsData: GunsT;
};

const Main = ({ gunsData }: MainPropsT) => {
	const selectedId = useAppSelector((state) => state.selectedGun.selectedId);
	const selectedType = gunsData[useAppSelector((state) => state.selectedGun.selectedType)];

	return (
		<div className={style.Main}>
			<GunsSelect guns={gunsData.Rifles} />

			<GunName name={selectedType[selectedId].name} />
			<GunImage gunImg={selectedType[selectedId].gunImage} />

			<BackGroundImage backGroundImg={selectedType[selectedId].backGroundImage} />

			<GunCharacteristics characteristics={selectedType[selectedId].characteristics} />
		</div>
	);
};

export default Main;
