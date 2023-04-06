import style from './AllGunsList.module.scss';
import Main from './layout/Main/Main';
import Sidebar from './layout/Sidebar/Sidebar';
const AllGunsList = () => {
	return (
		<div className={style.AllGunsList}>
			<Sidebar backgroundColor='#bfa990' dividerColor='#ad9a84' />
			<Main />
		</div>
	);
};

export default AllGunsList;
