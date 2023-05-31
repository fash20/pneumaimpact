import { Button, withStyles } from '@material-ui/core'
import React, { Children, ReactNode } from 'react'

interface ButtonProps{
    classes: string
    children: ReactNode
}

const styles = {
    default:{
        borderRadius: 40,
        textTranform: 'none'
        
    }
}

const BrandButton = ({classes , children}:ButtonProps) => {
  return (
    <Button variant='contained' >
        {children}
    </Button>
  )
}
export default BrandButton
// export default withStyles(styles)(BrandButton)