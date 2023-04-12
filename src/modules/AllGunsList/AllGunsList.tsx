import { gunsData } from '../../store/store';
import style from './AllGunsList.module.scss';
import Main from './layout/Main/Main';
import Sidebar from './layout/Sidebar/Sidebar';
import { useAppSelector } from './redux/hooks';
const AllGunsList = () => {
	const selectedId = useAppSelector((state) => state.selectedGun.selectedId);
	const selectedType = gunsData[useAppSelector((state) => state.selectedGun.selectedType)];

	return (
		<div className={style.AllGunsList}>
			<Sidebar
				backgroundColor={selectedType[selectedId].colors.primary}
				dividerColor={selectedType[selectedId].colors.secondary}
			/>
			<Main gunsData={gunsData} />
		</div>
	);
};

export default AllGunsList;
