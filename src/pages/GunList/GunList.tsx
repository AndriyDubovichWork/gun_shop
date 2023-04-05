import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import style from './GunList.module.scss';
const GunList = () => {
	return (
		<div className={style.GunList}>
			<Sidebar backgroundColor='#bfa990' dividerColor='#ad9a84' />
			<Main />
		</div>
	);
};

export default GunList;
