import BackGroundImage from './components/BackGroundImage/BackGroundImage ';
import GunCharacteristics from './components/GunCharacteristics/GunCharacteristics';
import GunImage from './components/GunImage/GunImage';
import GunName from './components/GunName/GunName';
import GunsSelect from './components/GunsSelectArrows/GunsSelect';
import style from './Main.module.scss';
const Main = () => {
	return (
		<div className={style.Main}>
			<GunsSelect />
			<GunName />
			<BackGroundImage />
			<GunImage />
			<GunCharacteristics />
		</div>
	);
};

export default Main;
