import { useState } from 'react';
import './App.scss';
import daynight from './images/dark-theme.svg'

function App() {
  const [value, setValue] = useState([]);
  const [current, setCurrent] = useState('0');
  const handleClick = (arg) => {
    setValue([...value, arg])
  }
  return (
    <div className='content_center'>
      <div className='calc_container'>
        {/* верхняя часть */}
        <div className='upper_part'>
          <img src={daynight} className='toogleTheme' onClick={() => {
            document.body.classList.toggle('dark-theme');
          }}></img>
          <div className='allExample'>{value}</div>
          <div className='result' value={current}>{current}</div>
          <div className="divider"></div>
        </div>
        {/* нижняя часть */}
        <div className='bottom_part'>
          <div className='line'>
            <div className='math_button double' onClick={()=>{
              setValue([]);
              setCurrent(0)
            }}>AC</div>
            <div className='math_button double' onClick={()=>handleClick('plus_minus')}>+/-</div>
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
            <div className='equal_button' onClick={()=> setCurrent(eval(value.join('')))}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;