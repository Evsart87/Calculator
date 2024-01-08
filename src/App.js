import './App.css';

function App() {
  return (
    <div>
    <div onClick={() => {
      document.body.classList.toggle('dark-theme');
    }}>
      свитч тут был, а это фолс ветка
    </div>
    </div>
  );
}

export default App;