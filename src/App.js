
import './App.css';
import './index.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import History from './components/History';
import Projects from './components/Projects';
import References from './components/References';
import Summary from './components/Summary';
import Technologies from './components/Technologies';

function App() {
  return (
<>

<Header />
<Navbar />
<Summary />
<Technologies />
<History />
<Projects />
<References />

</>
  );
}

export default App;
