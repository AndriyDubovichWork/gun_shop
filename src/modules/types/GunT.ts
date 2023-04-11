import { CharacteristicT } from './CharacteristicT';

export type GunT = {
	name: string;
	gunImage: string;
	backGroundImage: string;
	characteristics: CharacteristicT[];
	colors: {
		primary: string;
		secondary: string;
	};
};
