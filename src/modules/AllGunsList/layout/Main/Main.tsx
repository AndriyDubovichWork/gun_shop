import data from './../../../../store/store';
import BackGroundImage from './components/BackGroundImage/BackGroundImage ';
import GunCharacteristics from './components/GunCharacteristics/GunCharacteristics';
import GunImage from './components/GunImage/GunImage';
import GunName from './components/GunName/GunName';
import GunsSelect from './components/GunsSelectArrows/GunsSelect';
import style from './Main.module.scss';
const Main = () => {
	return (
		<div className={style.Main}>
			<GunsSelect guns={data.AssaultRifles} />

			<GunName name={data.AssaultRifles[0].name} />
			<GunImage gunImg={data.AssaultRifles[0].gunImage} />

			<BackGroundImage backGroundImg={data.AssaultRifles[0].backGroundImage} />

			<GunCharacteristics characteristics={data.AssaultRifles[0].characteristics} />
		</div>
	);
};

export default Main;
