import { useState } from 'react';
import './lib/bootstrap-4.5.3-dist/css/bootstrap.min.css'

function App(props) {
  // set the initial title value with injected props
  const [title, setTitle] = useState(props.title)

  //function with the event as parameter
  const handleChangeTitle = (e) => setTitle(e.target.value)

  return (
    <div className="App">
      <h1>
        this is my first React Component{' '}
      </h1>
      <label htmlFor='titleInput'>Title</label>
      <input
        type='text'
        className='form-control'
        id='titleInput'
        onChange={handleChangeTitle}
        value={title}
      />
      <h3>{title}</h3>
    </div>
  );
}

export default App;
