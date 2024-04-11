import logo from './logo.svg';
import './App.css';
import CircleButton from './ui-kit/CircleButton';

function App() {
  return (
    <div>
      <div className='buttons'>
        <CircleButton color="red" onClick={() => console.log('Clicked')}>
          Click
        </CircleButton>
        <CircleButton color="blue" onClick={() => console.log('Clicked')}>
          Click
        </CircleButton>
        <CircleButton color="green" onClick={() => console.log('Clicked')}>
          Click
        </CircleButton>

      </div>
    </div>
  );
}

export default App;
