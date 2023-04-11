import style from './GunName.module.scss';

type GunNamePropsT = {
	name: string;
};

const GunName = ({ name }: GunNamePropsT) => {
	return <h1 className={style.GunName}>{name}</h1>;
};

export default GunName;
