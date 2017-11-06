import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

// font-weight 300 is light, 400 is normal, 800 is extra bold
injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Nunito:300,400,800);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito';
    font-weight: 400;
    background-color: grey;
  }
`

const PageWrapper = styled.div`
  padding: 50px 100px;
  background-color: lightgrey;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      greeting: 'Hello',
      participants: ['Mary', 'Joe', 'Anne', 'Mike']
    }
  }

  render() {
    return (
      <PageWrapper>{this.state.greeting}</PageWrapper>
    )
  }
}

export default App;
