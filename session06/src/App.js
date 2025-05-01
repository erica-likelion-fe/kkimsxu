import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { Article } from './Article';

function App() {
  return (
    <div className="App">
      <Header text = "출력해라"/>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
