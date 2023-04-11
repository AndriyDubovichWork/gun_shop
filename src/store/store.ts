import { bulletsDataT } from '../modules/types/bulletsDataT';
import { GunsT } from '../modules/types/GunsT';

export const gunsData: GunsT = {
	Rifles: [
		{
			name: 'fn Scar',
			gunImage: require('./guns/FnScar.png'),
			backGroundImage: require('./backGround/desert.png'),
			characteristics: [
				{
					name: 'hi',
					value: '123',
				},
			],
			colors: {
				primary: '#bfa990',
				secondary: '#ad9a84',
			},
		},
		{
			name: 'Honey Badger',
			gunImage: require('./guns/AAC Honey Badger.png'),
			backGroundImage: require('./backGround/desert1.jpg'),
			characteristics: [
				{
					name: 'hi',
					value: '123',
				},
			],
			colors: {
				primary: '',
				secondary: '',
			},
		},
		{
			name: 'fn Scar',
			gunImage: require('./guns/FnScar.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'hi',
					value: '123',
				},
			],
			colors: {
				primary: '',
				secondary: '',
			},
		},
	],
};
export const bulletsData: bulletsDataT = [
	{ url: require('./bulletsImgs/sniperRifle.svg').default, name: 'Sniper Rifle' },
	{ url: require('./bulletsImgs/rifle.svg').default, name: 'Rifle' },
	{ url: require('./bulletsImgs/smg.svg').default, name: 'SMG' },
	{ url: require('./bulletsImgs/pistol.svg').default, name: 'Pistol' },
];
