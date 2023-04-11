import { Provider } from 'react-redux';
import { gunsData } from '../../store/store';
import style from './AllGunsList.module.scss';
import Main from './layout/Main/Main';
import Sidebar from './layout/Sidebar/Sidebar';
import { store } from './redux/store';
const AllGunsList = () => {
	return (
		<Provider store={store}>
			<div className={style.AllGunsList}>
				<Sidebar
					backgroundColor={gunsData.Rifles[0].colors.primary}
					dividerColor={gunsData.Rifles[0].colors.secondary}
				/>
				<Main gunsData={gunsData} />
			</div>
		</Provider>
	);
};

export default AllGunsList;
