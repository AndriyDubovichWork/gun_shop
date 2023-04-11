import { GunsT } from '../modules/types/GunsT';

export const gunsData: GunsT = {
	AssaultRifles: [
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
export const bulletsData = [
	{ url: require('./bulletsImgs/sniperRifle.svg'), name: 'Sniper Rifle' },
	{ url: require('./bulletsImgs/rifle.svg'), name: 'Rifle' },
	{ url: require('./bulletsImgs/smg.svg'), name: 'SMG' },
	{ url: require('./bulletsImgs/pistol.svg'), name: 'Pistol' },
];
