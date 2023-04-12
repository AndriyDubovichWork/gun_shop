import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './GunImage.module.scss';
type GunImagePropsT = {
	gunImg: string;
};

const GunImage = ({ gunImg }: GunImagePropsT) => {
	return (
		<LazyLoadImage
			src={gunImg}
			alt={'gun pic'}
			effect='blur'
			className={style.GunImage}
			draggable={false}
		/>
	);
};

export default GunImage;
