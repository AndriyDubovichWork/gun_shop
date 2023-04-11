import style from './GunAttribute.module.scss';

type GunAttributePropsT = {
	name: string;
	value: string;
};

const GunAttribute = ({ name, value }: GunAttributePropsT) => {
	return (
		<div className={style.Attribute}>
			<h2 className={style.AttributeName}>{name}:</h2>
			<h2 className={style.AttributeValue}>{value}</h2>
		</div>
	);
};

export default GunAttribute;
