import React from 'react'
import { Card, CardHeader } from "@material-ui/core";

function Error({ errorMessage }) {
  return (
    <Card raised>
      <CardHeader subheader={errorMessage} />
    </Card>
  )
}

export default Error