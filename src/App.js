import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import LiveMatches from './components/live-matches';
import { API_CACHE_TIME, API_URL } from './constants';
import './styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      liveMatches: []
    };
  }

  componentDidMount() {
    this.getLiveMatches();
  }

  getLiveMatches() {
    const currentTime = new Date().getTime();
    const lastFetchedTime = localStorage.getItem('fetchedTime');
    let data = localStorage.getItem('data');
    
    if (!lastFetchedTime || parseInt(lastFetchedTime) + API_CACHE_TIME < currentTime) {
      fetch(API_URL).then(response => response.json())
        .then(data => {
          this.setState({ liveMatches: data, isLoading: false })
          localStorage.setItem('data', JSON.stringify(data))
          localStorage.setItem('fetchedTime', currentTime)
        })
        .catch(error => this.setState({ error, isLoading: false }));
    } else {
      this.setState({ liveMatches: JSON.parse(data), isLoading: false })
    }
  }


  render() {
    const { isLoading } = this.state;
    return (
      <div className='matches-container'>
        { isLoading ? 
        <Spinner name="line-scale" color="green" />
        : <LiveMatches liveMatches={this.state.liveMatches}/>} 
      </div>
    );
  }
}

export default App;
