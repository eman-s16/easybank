import './App.css';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Serveries from './Components/Serveries/Serveries.js';
import Articles from './Components/Articles/Articles.js';
import Footer from './Components/Footer/Footer.js';
function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Serveries />
			<Articles />
			<Footer/>
		</div>
	);
}

export default App;
