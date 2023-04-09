import img from './back.png';
import style from './BackGroundImage.module.scss';
const BackGroundImage = () => {
	return <img className={style.BackGroundImage} src={img} alt='back ground' draggable={false} />;
};

export default BackGroundImage;
