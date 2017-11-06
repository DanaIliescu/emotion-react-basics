import styled from 'react-emotion'

// if the prop 'width' exists, apply the value of width
// else apply 50px
export const Wrapper = styled.div`
  width: ${({width}) => width || '50px'};
  background-color: lightsalmon;
  color: white;
`

export default Wrapper