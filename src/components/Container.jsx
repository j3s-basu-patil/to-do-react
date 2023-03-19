import { Card } from '@mui/material'
import React from 'react'

function Container(props) {
  return (
    <Card style={{
        minWidth:'50%',
        padding:'10px',
        margin:'5px',
    }}>
        {props.children}
    </Card>
  )
}

export default Container