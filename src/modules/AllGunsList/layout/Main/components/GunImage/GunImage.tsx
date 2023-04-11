import style from './GunImage.module.scss';

type GunImagePropsT = {
	gunImg: string;
};

const GunImage = ({ gunImg }: GunImagePropsT) => {
	return <img src={gunImg} alt={'gun pic'} className={style.GunImage} draggable={false} />;
};

export default GunImage;
