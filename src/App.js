import { useState } from 'react';
import { Badge, Form } from 'react-bootstrap'

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
        <Badge variant='primary'>
          {mouseOverNum}
        </Badge>
      </h1>
      <Form.Label>Title</Form.Label>
      <Form.Control
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
