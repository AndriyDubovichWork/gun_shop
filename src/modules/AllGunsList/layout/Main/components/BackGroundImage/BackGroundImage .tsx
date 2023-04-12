import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './BackGroundImage.module.scss';

type BackGroundImagePropsT = { backGroundImg: string };

const BackGroundImage = ({ backGroundImg }: BackGroundImagePropsT) => {
	return (
		<LazyLoadImage
			className={style.BackGroundImage}
			src={backGroundImg}
			alt='back ground'
			draggable={false}
			effect='blur'
		/>
	);
};

export default BackGroundImage;
