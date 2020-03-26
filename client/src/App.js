import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About'
import NoMatch from './components/shared/NoMatch'
import Navbar from './components/shared/Navbar';
import { Container } from 'semantic-ui-react';
import Pokedex from './components/pokemon/Pokedex';

const App = () => (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/pokedex' component={Pokedex} />
        {/* <Route exact path='pokemon/:id' component={PokeShow} /> */}
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
)

export default App;
