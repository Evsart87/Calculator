import './App.css';

function App() {
  return (
    <div>
    <div onClick={() => {
      document.body.classList.toggle('dark-theme');
    }}>
      я все нахрен сломаю
    </div>
    </div>
  );
}

export default App;