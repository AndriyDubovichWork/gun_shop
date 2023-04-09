import img from './FnScar.png';
import style from './GunImage.module.scss';
const GunImage = () => {
	return <img src={img} alt={'gun pic'} className={style.GunImage} draggable={false} />;
};

export default GunImage;
