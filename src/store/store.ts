import { bulletsDataT } from '../modules/types/bulletsDataT';
import { GunsT } from '../modules/types/GunsT';

export const gunsData: GunsT = {
	Rifles: [
		{
			name: 'FN Scar',
			gunImage: require('./guns/FnScar.png'),
			backGroundImage: require('./backGround/desert.png'),
			characteristics: [
				{
					name: 'Length',
					value: '889 mm (35.0 in) - 635 mm (25.0 in)',
				},
				{
					name: 'Rate of fire',
					value: '625 RPM',
				},
				{
					name: 'Mass',
					value: '3.29 kg (7.3 lb)',
				},
				{
					name: 'Barrel length',
					value: '355 mm (14.0 in)',
				},
				{
					name: 'Effective firing range',
					value: '500 m (550 yd)',
				},
				{
					name: 'Cartridge:',
					value: '5.56×45mm NATO',
				},
			],
			colors: {
				primary: '#bfa990',
				secondary: '#ad9a84',
			},
		},
		{
			name: 'M4A1',
			gunImage: require('./guns/M4A1.png'),
			backGroundImage: require('./backGround/desert1.jpg'),
			characteristics: [
				{
					name: 'Length',
					value: '33 in (838 mm)',
				},
				{
					name: 'Rate of fire',
					value: '700–950 RPM',
				},
				{
					name: 'Mass',
					value: '6.43 lb (2.92 kg)',
				},
				{
					name: 'Barrel length',
					value: '14.5 in (368 mm)',
				},
				{
					name: 'Effective firing range',
					value: '500 m (550 yd)',
				},
				{
					name: 'Cartridge:',
					value: '5.56×45mm NATO',
				},
			],
			colors: {
				primary: '#2F333E',
				secondary: '#1E2027',
			},
		},
		{
			name: 'Honey Badger',
			gunImage: require('./guns/AAC Honey Badger.png'),
			backGroundImage: require('./backGround/desert1.jpg'),
			characteristics: [
				{
					name: 'Length',
					value: '24-29 in (61-73.7 cm)',
				},
				{
					name: 'Rate of fire',
					value: '800 RPM',
				},
				{
					name: 'Mass',
					value: '6.5 lbs (2.9 kg)',
				},
				{
					name: 'Barrel length',
					value: '6 in (15.2 cm)',
				},
				{
					name: 'Effective firing range',
					value: '200 metres (660 ft)',
				},
				{
					name: 'Cartridge:',
					value: '5.56×45mm NATO',
				},
			],
			colors: {
				primary: '#bdb296fe',
				secondary: '#bdb29ffe',
			},
		},
		{
			name: 'AK 47',
			gunImage: require('./guns/ak47.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '880 mm (35 in) - 645 mm (25.4 in)',
				},
				{
					name: 'Rate of fire',
					value: '600 RPM',
				},
				{
					name: 'Mass',
					value: '3.47 kg (7.7 lb)',
				},
				{
					name: 'Barrel length',
					value: '415 mm (16.3 in)',
				},
				{
					name: 'Effective firing range',
					value: '350 m (380 yd)',
				},
				{
					name: 'Cartridge:',
					value: '7.62×39mm',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'AKM',
			gunImage: require('./guns/AKM.png'),
			backGroundImage: require('./backGround/mountain1.jpg'),
			characteristics: [
				{
					name: 'Length',
					value: '34.6 in (88 cm)',
				},
				{
					name: 'Rate of fire',
					value: '600 RPM',
				},
				{
					name: 'Mass',
					value: '7.9 lbs (3.6 kg)',
				},
				{
					name: 'Barrel length',
					value: '16.3 in (41.5 cm)',
				},
				{
					name: 'Effective firing range',
					value: '350 m (380 yd)',
				},
				{
					name: 'Cartridge:',
					value: '7.62x39mm',
				},
			],
			colors: {
				primary: '#363639',
				secondary: '#49494D',
			},
		},
		{
			name: 'AK 74',
			gunImage: require('./guns/ak74.png'),
			backGroundImage: require('./backGround/mountain2.jpg'),
			characteristics: [
				{
					name: 'Length',
					value: '37 in (94 cm)',
				},
				{
					name: 'Rate of fire',
					value: '600–650 RPM',
				},
				{
					name: 'Mass',
					value: '6.5 lbs (3 kg)',
				},
				{
					name: 'Barrel length',
					value: '16.3 in (41.5 cm)',
				},
				{
					name: 'Effective firing range',
					value: '500 m (540 yd)',
				},
				{
					name: 'Cartridge:',
					value: '5.45x39mm',
				},
			],
			colors: {
				primary: '#74727A',
				secondary: '#9A97A2',
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
