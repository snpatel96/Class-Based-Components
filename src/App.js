import React from 'react';

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos),
      (err) => console.log(err)
    );

    return <div>Latitude</div>;
  }
}

export default App;
