import React, { Component } from 'react'
import { injectGlobal } from 'emotion'

// font-weight 300 is light, 400 is normal, 800 is extra bold
injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Nunito:300,400,800);

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    font-weight: 400;
    background-color: grey;
  }
`

class App extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default App;
