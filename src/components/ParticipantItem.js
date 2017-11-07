import styled from 'react-emotion'
import { css } from 'emotion'

// creates a css "class" called disabledStyle
const disabledStyle = css`
  color: lightgrey;
  background-color: grey;

  :hover {
    background-color: grey;
    cursor: default;
  }
`

// the disabledStyle will be applied only if disabled is true
export const ParticipantItem = styled.div`
  font-weight: 300;
  padding: 10px;
  
  :hover {
    background-color: salmon;
    cursor: pointer;
  }

  ${({disabled}) => disabled && disabledStyle}
`

export default ParticipantItem