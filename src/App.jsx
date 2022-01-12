import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile"
import SpaceFeed from "./pages/SpaceFeed/SpaceFeed"

const App = () => {
	return (
		<>
			<Navbar />
			<Profile />
			<SpaceFeed />
			<Footer />
		</>
	)
}

export default App
