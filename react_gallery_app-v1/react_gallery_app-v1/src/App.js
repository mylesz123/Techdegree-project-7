import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery'; //includes Image and NoResults components
import Header from './components/Header';
import Loadme from './components/Loadme';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import SearchMe from './components/SearchMe';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiKey from './config';
import axios from 'axios';

class App extends Component {
  //to set up states
  constructor() {
    super();
    this.state = {
      img: [],
      outspace: [],
      hike: [],
      fw: [],
      loading: true
    };
  }
  // Mounting components
  componentDidMount() {
    this.anySearch('snakes');
    this.outspaceSearch('outerspace');
    this.hikeSearch('hike');
    this.fwSearch('fireworks');
  }

  // Search function to find whatever you are looking for
  anySearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          img: response.data.photos.photo,
          loading: false
        });
    })
    .catch(error => {
      console.log('Error, cannot fetch/parse data', error);
    });
  }

  // outer space Search
  outspaceSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        outspace: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error, cannot fetch/parse data', error);
    });
  }

  // lizard Search
  hikeSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        hike: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error, cannot fetch/parse data', error);
    });
  }

// elephant Search
  fwSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        fw: response.data.photos.photo,
        loading: false
      });
    })
      .catch(error => {
        console.log('Error, cannot fetch/parse data', error);
    });
  }

  // Renders page adding in components
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Header />
              <Route exact path="/" component={() => <SearchMe onSearch={this.anySearch} />} />
              <Route exact path="/outspace" component={() => <SearchMe onSearch={this.outspaceSearch} />} />
              <Route exact path="/hike" component={() => <SearchMe onSearch={this.hikeSearch} />} />
              <Route exact path="/fireworks" component={() => <SearchMe onSearch={this.fwSearch} />}/>
              <Route exact path="/search" component={() => <SearchMe onSearch={this.performSearch} />} />
            <Nav />
          </div>

          <div className='photo-container'>
            {
              (this.state.loading)
              ? <Loadme /> :
              <div>
                <Switch>
                  <Route exact path="/" render={() => <Gallery data={this.state.img} />} />
                  <Route exact path="/outspace" render={() => <Gallery data={this.state.outspace} />} />
                  <Route path="/hike" render={() => <Gallery data={this.state.hike} />} />
                  <Route path="/fireworks" render={() => <Gallery data={this.state.fw} />} />
                  <Route path="/search" render={() => <Gallery data={this.state.img} />} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  } //end render
}

export default App;
