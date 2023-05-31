import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { theme } from '../utils/UIThemes';


const CButton = styled(Button)<ButtonProps>(({theme})=>({
    width:'100%',
    color:'#000',
    backgroundColor:"#2F327D"
}))

interface CustomButtonProps{
    title:string
    type?: string
    style?:React.CSSProperties
}

const mobile = {
  fontSize:'15px',
  height: 4
}

const CustomButton = ({title,style}:CustomButtonProps) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))
  return (
  
    <Button style={style} size = {isScreenSmall? 'small': 'large'} > {title} </Button>
  )
}

export default CustomButton