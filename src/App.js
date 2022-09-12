import Navbar from './components/Navbar';
import itemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Navbar>
      </Navbar>
      <itemListContainer>
        Hola soy el itemListContainer!!
      </itemListContainer>
      <Counter init={0} stock={10}>
      </Counter>

    </div>
  );
}

export default App;
