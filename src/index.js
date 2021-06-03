import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';
class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return (
      <div>
        <Loader message="Please trun on your location to see the result" />
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
