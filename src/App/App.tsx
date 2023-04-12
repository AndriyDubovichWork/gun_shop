import { Provider } from 'react-redux';
import AllGunsList from '../modules/AllGunsList/AllGunsList';
import { store } from '../modules/AllGunsList/redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<AllGunsList />
		</Provider>
	);
};

export default App;
