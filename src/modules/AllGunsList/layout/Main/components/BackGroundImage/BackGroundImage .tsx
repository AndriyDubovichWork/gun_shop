import style from './BackGroundImage.module.scss';

type BackGroundImagePropsT = { backGroundImg: string };

const BackGroundImage = ({ backGroundImg }: BackGroundImagePropsT) => {
	return (
		<img
			className={style.BackGroundImage}
			src={backGroundImg}
			alt='back ground'
			draggable={false}
		/>
	);
};

export default BackGroundImage;
