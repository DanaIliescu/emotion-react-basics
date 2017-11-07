import React from 'react'
import { array } from 'prop-types'
import ParticipantItem from './ParticipantItem'

// easiest way to create a React component
// we use object destructuring to get the props
// e.g. props.participants = { participans }
export const Participants = ({ participants }) => (
  participants.map(participant => (
    <ParticipantItem
      key={participant}
      disabled={participant === 'Anne'}
    >
      {participant}
    </ParticipantItem>
  ))
)

// we add types for all the properties we are getting
Participants.propTypes = {
  participants: array
}

export default Participants