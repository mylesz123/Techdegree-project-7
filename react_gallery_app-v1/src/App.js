import React, { useEffect, useState } from 'react';
// import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { buildSearchUrl, withData } from './helpers/index';

import Gallery from './components/Gallery'; //includes Image and NoResults components
import Header from './components/Header';
import Loading from './components/Loading';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    img: [],
    space: [],
    hike: [],
    fireworks: [],
    loading: true
  });

  const { img, space, hike, fireworks, loading } = state;

  const onSearch = (query, key) => {
    axios.get(buildSearchUrl(query))
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            ...{ [key]: response.data.photos.photo },
            loading: false,
          }
        });
      })
      .catch(error => {
        console.error('Error, cannot fetch/parse data', error);
      });
  }

  const populateState = async () => {
    await onSearch('snakes', 'img');
    await onSearch('outerspace', 'space');
    await onSearch('hike', 'hike');
    await onSearch('fireworks', 'fireworks');
  }

  useEffect(() => {
    populateState();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={withData(Search, onSearch)} />
        <Route exact path="/space" component={withData(Search, onSearch)} />
        <Route exact path="/hike" component={withData(Search, onSearch)} />
        <Route exact path="/fireworks" component={withData(Search, onSearch)} />
        <Route exact path="/search" component={withData(Search, onSearch)} />
        <Nav />

        <div className='photo-container'>
          {loading
            ? (<Loading />)
            : (
              <Switch>
                <Route exact path="/" render={() => <Gallery data={img} />} />
                <Route exact path="/space" render={() => <Gallery data={space} />} />
                <Route path="/hike" render={() => <Gallery data={hike} />} />
                <Route path="/fireworks" render={() => <Gallery data={fireworks} />} />
                <Route path="/search" render={() => <Gallery data={img} />} />
                <Route component={NotFound} />
              </Switch>
            )
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
