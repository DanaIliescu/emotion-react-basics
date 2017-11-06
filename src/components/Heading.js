import styled from 'react-emotion'

// even if you don't have a lot of styling, it makes sense to make a new file
// and importing it in multiple other files
// rather than repeating code
export const Heading = styled.h1`
  font-weight: 800;
  padding: 20px 10px 10px 10px;
`

export default Heading