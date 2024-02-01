import './App.scss';
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
          <div className='line'>
            <div className='math_button without_back' onClick={()=>handleClick('7')}>7</div>
            <div className='math_button without_back' onClick={()=>handleClick('8')}>8</div>
            <div className='math_button without_back' onClick={()=>handleClick('9')}>9</div>
            <div className='math_button' onClick={()=>handleClick('*')}>X</div>
          </div>
          <div className='line'>
            <div className='math_button without_back' onClick={()=>handleClick('4')}>4</div>
            <div className='math_button without_back' onClick={()=>handleClick('5')}>5</div>
            <div className='math_button without_back' onClick={()=>handleClick('6')}>6</div>
            <div className='math_button' onClick={()=>handleClick('-')}>-</div>
          </div>
          <div className='line'>
            <div className='math_button without_back' onClick={()=>handleClick('1')}>1</div>
            <div className='math_button without_back' onClick={()=>handleClick('2')}>2</div>
            <div className='math_button without_back' onClick={()=>handleClick('3')}>3</div>
            <div className='math_button' onClick={()=>handleClick('+')}>+</div>
          </div>
          <div className='line'>
            <div className='math_button without_back' onClick={()=>handleClick('0')}>0</div>
            <div className='math_button without_back' onClick={()=>handleClick(',')}>,</div>
            <div className='math_button without_back' onClick={()=>handleClick('=')}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;