import { GunsT } from "./GunsT";

export type bulletDataT = {
	url: string;
	name: string;
	ref:keyof GunsT;
};
export type bulletsDataT = bulletDataT[];
