import './App.css';

function App() {
  return (
    <div>
    <div onClick={() => {
      document.body.classList.toggle('dark-theme');
    }}>
      switch
    </div>
    </div>
  );
}

export default App;