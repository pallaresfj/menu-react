import MenuBar from './components/MenuBar';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Componente4 from './components/Componente4';

import { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  const [compDinamico, setCompDinamico] = useState(<Componente1 />);

  const onOptionClicked = function (evt) {
    evt.preventDefault();
    if (evt.target.name === "comp1") {
      setCompDinamico(<Componente1 />);
    } else {
      if (evt.target.name === "comp2") { setCompDinamico(<Componente2 />); }
      else {
        if (evt.target.name === "comp3") { setCompDinamico(<Componente3 />); }
        else {
          setCompDinamico(<Componente4 />);
        }
      }
    }
  }


  return (
    <Fragment>
      <MenuBar onOptionClicked={onOptionClicked} />
      <Container>
        <div className="card mt-5">
          <div className="card-body">
            {compDinamico}
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
