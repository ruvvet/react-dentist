import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
import Nav from './components/Nav';
import ProcedureDetails from './components/ProcedureDetails';
import './App.css';

function App() {
  const proceduresList = [
    { name: 'something', id: 0, description: 'BYE' },
    { name: 'something1', id: 1, description: 'BYE1' },
    { name: 'something2', id: 2, description: 'BYE2' },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* first define the path, and then the component which should be active on that path */}
        {/* putting 'exact' means only show for /, don't append */}
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route
          exact
          path="/procedures"
          render={() => {
            return <Procedures proceduresList={proceduresList} />;
          }}
        />
        <Route
          path="/procedures/:id"
          render={(route) => {
            // const id= route.match.params.id
            // const target = procedureList.find((p)=>p.id ===parseInt(id))
            // return <ProcedureDetails procedure={target}/>


            return (
              <ProcedureDetails
                procedure={proceduresList[parseInt(route.match.params.id)]}
              />
            );
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
