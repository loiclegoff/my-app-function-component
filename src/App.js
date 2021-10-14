import { useState } from 'react';
import './lib/bootstrap-4.5.3-dist/css/bootstrap.min.css'

function App(props) {
  // set the initial title value with injected props
  const [title, setTitle] = useState(props.title)
  const [mouseOverNum, setMouseOverNum] = useState(0)

  //function with the event as parameter
  const handleChangeTitle = (e) => setTitle(e.target.value)
  const handleMouseOverTitle = () => setMouseOverNum(mouseOverNum + 1)

  return (
    <div className="App">
      <h1>
        this is my first React Component{' '}
        <span className='badge badge-primary'>
          {mouseOverNum}
        </span>
      </h1>
      <label htmlFor='titleInput'>Title</label>
      <input
        type='text'
        className='form-control'
        id='titleInput'
        onChange={handleChangeTitle}
        value={title}
      />
      <div onMouseOver={handleMouseOverTitle}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default App;
