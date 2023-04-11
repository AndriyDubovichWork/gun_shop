import logo from './assets/logo.svg';
import GunCalibers from './components/GunCalibers/GunCalibers';
import style from './Sidebar.module.scss';

type SidebarPropsT = {
	backgroundColor: string;
	dividerColor: string;
};

const Sidebar = ({ backgroundColor, dividerColor }: SidebarPropsT) => {
	return (
		<div className={style.Sidebar} style={{ backgroundColor }}>
			<img src={logo} alt='logo' className={style.Logo} draggable={false} />
			<div className={style.Divider} style={{ backgroundColor: dividerColor }} />
			<GunCalibers />
		</div>
	);
};

export default Sidebar;
