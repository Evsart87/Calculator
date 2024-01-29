import './App.css';
import design from './images/design.jpg'

function App() {
  const handleClick = (arg) => {
    console.log(arg);
  }
  return (
    <div className='content_center'>
      <img src={design}></img>
      <div className='calc_container'>
        <div className='upper_part'>
          <div class="divider"></div>
        </div>
        <div className='bottom_part'>
          <div className='line'>
            <div className='math_button' onClick={()=>handleClick('reset')}>AC</div>
            <div className='math_button' onClick={()=>handleClick('plus_minus')}>+/-</div>
            <div className='math_button' onClick={()=>handleClick('%')}>%</div>
            <div className='math_button' onClick={()=>handleClick('/')}>/</div>
          </div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </div>
  );
}

export default App;