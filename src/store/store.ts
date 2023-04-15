import { bulletsDataT } from '../modules/types/bulletsDataT';
import { GunsT } from '../modules/types/GunsT';

export const gunsData: GunsT = {
	SniperRifles: [
		{
			name: 'AWP',
			gunImage: require('./guns/AWP.png'),
			backGroundImage: require('./backGround/desert.png'),
			characteristics: [
				{
					name: 'Length',
					value: '40 in (101.6 cm)',
				},
				{
					name: 'Rate of fire',
					value: '41 RPM',
				},
				{
					name: 'Mass',
					value: '13.4 lbs (6.1 kg)',
				},
				{
					name: 'Barrel length',
					value: '16 in (40.6 cm)',
				},
				{
					name: 'Effective firing range',
					value: '500 m (550 yd)',
				},
				{
					name: 'Cartridge:',
					value: '7.62x51mm NATO',
				},
			],
			colors: {
				primary: '#bfa990',
				secondary: '#ad9a84',
			},
		},
		{
			name: 'CZ 750',
			gunImage: require('./guns/CZ750.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '48 in (122 cm)',
				},
				{
					name: 'Rate of fire',
					value: '30 RPM',
				},
				{
					name: 'Mass',
					value: '12.8 lbs (5.8 kg)',
				},
				{
					name: 'Barrel length',
					value: '26 in (66 cm)',
				},
				{
					name: 'Effective firing range',
					value: '800 m (875 yd)',
				},
				{
					name: 'Cartridge:',
					value: '7.62x51mm NATO',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'ASW',
			gunImage: require('./guns/ASW.png'),
			backGroundImage: require('./backGround/desert.png'),
			characteristics: [
				{
					name: 'Length',
					value: '30 in (70 cm)',
				},
				{
					name: 'Rate of fire',
					value: '30 RPM',
				},
				{
					name: 'Mass',
					value: '15.5 lbs (7 kg)',
				},
				{
					name: 'Barrel length',
					value: '20 in (50.8 cm)',
				},
				{
					name: 'Effective firing range',
					value: '800 m (875 yd)',
				},
				{
					name: 'Cartridge:',
					value: '.338 Lapua Magnum',
				},
			],
			colors: {
				primary: '#bfa990',
				secondary: '#ad9a84',
			},
		},
		
	],
	Rifles: [
		{
			name: 'M4A1',
			gunImage: require('./guns/M4A1.png'),
			backGroundImage: require('./backGround/Mountain.png'),
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
			name: 'Honey Badger',
			gunImage: require('./guns/AAC Honey Badger.png'),
			backGroundImage: require('./backGround/desert.png'),
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
			backGroundImage: require('./backGround/Mountain.png'),
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
			backGroundImage: require('./backGround/Mountain.png'),
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
	SMGs: [
		{
			name: 'SIG-Sauer',
			gunImage: require('./guns/SIG-Sauer MPX.png'),
			backGroundImage:  require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '16.9 in (42.8 cm)',
				},
				{
					name: 'Rate of fire',
					value: '850 RPM',
				},
				{
					name: 'Mass',
					value: '5 lbs (2.3 kg)',
				},
				{
					name: 'Barrel length',
					value: '8 in (20.3 cm)',
				},
				{
					name: 'Effective firing range',
					value: '20 m (25 yd)',
				},
				{
					name: 'Cartridge:',
					value: '9x19mm',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'Steyr TMP',
			gunImage: require('./guns/Steyr TMP.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '11.1 in (28.2 cm)',
				},
				{
					name: 'Rate of fire',
					value: '850–900 RPM',
				},
				{
					name: 'Mass',
					value: '2.9 lbs (1.3 kg)',
				},
				{
					name: 'Barrel length',
					value: '5.12 in (13 cm)',
				},
				{
					name: 'Effective firing range',
					value: '100 m (110 yd)',
				},
				{
					name: 'Cartridge:',
					value: '9x19mm',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'Kimel AP-9',
			gunImage: require('./guns/Kimel AP-9.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '11.9 in (30.2 cm)',
				},
				{
					name: 'Rate of fire',
					value: '800–850 RPM',
				},
				{
					name: 'Mass',
					value: '3.5 lbs (1.6 kg)',
				},
				{
					name: 'Barrel length',
					value: '5 in (12.7 cm)',
				},
				{
					name: 'Effective firing range',
					value: '50 m (55 yd)',
				},
				{
					name: 'Cartridge:',
					value: '9x19mm',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
	],
	Pistols: [
		{
			name: 'M1911',
			gunImage: require('./guns/M1911.png'),
			backGroundImage:  require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '8.5 in (216 mm)',
				},
				{
					name: 'Rate of fire',
					value: '900- 1000 RPM',
				},
				{
					name: 'Mass',
					value: '2.4 lbs (1,100 g) ',
				},
				{
					name: 'Barrel length',
					value: ' 5.03 in (127 mm)',
				},
				{
					name: 'Effective firing range',
					value: '50 m (55 yards)',
				},
				{
					name: 'Cartridge:',
					value: '.45 ACP',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'Glock17',
			gunImage: require('./guns/Glock17.png'),
			backGroundImage: require('./backGround/Mountain.png'),
			characteristics: [
				{
					name: 'Length',
					value: '8.03 in (204 mm)',
				},
				{
					name: 'Rate of fire',
					value: '600  RPM',
				},
				{
					name: 'Mass',
					value: '625 g (22.05 oz)',
				},
				{
					name: 'Barrel length',
					value: '114 mm (4.49 in)',
				},
				{
					name: 'Effective firing range',
					value: '50 m (55 yd)',
				},
				{
					name: 'Cartridge:',
					value: '9x19mm',
				},
			],
			colors: {
				primary: '#393A3E',
				secondary: '#494B50',
			},
		},
		{
			name: 'desert Eagle',
			gunImage: require('./guns/desertEagle.png'),
			backGroundImage: require('./backGround/desert.png'),
			characteristics: [
				{
					name: 'Length',
					value: '10.6 in (269.2 mm)',
				},
				{
					name: 'Rate of fire',
					value: '267 RPM',
				},
				{
					name: 'Mass',
					value: '3.9 lb (1,769.0 g)',
				},
				{
					name: 'Barrel length',
					value: '6 in (152.4 mm)',
				},
				{
					name: 'Effective firing range',
					value: '201 meters (220 yd)',
				},
				{
					name: 'Cartridge:',
					value: '.50 Action Express',
				},
			],
			colors: {
				primary: '#bfa990',
				secondary: '#ad9a84',
			},
		},
	],
};
export const bulletsData: bulletsDataT = [
	{ url: require('./bulletsImgs/sniperRifle.svg').default, name: 'Sniper Rifle',ref:'SniperRifles' },
	{ url: require('./bulletsImgs/rifle.svg').default, name: 'Rifle',ref:'Rifles' },
	{ url: require('./bulletsImgs/smg.svg').default, name: 'SMG',ref:'SMGs' },
	{ url: require('./bulletsImgs/pistol.svg').default, name: 'Pistol',ref:'Pistols' },
];
