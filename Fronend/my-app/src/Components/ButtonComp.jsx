import { MenuButton } from '@chakra-ui/react'
import React from 'react'
import styles from "./ButtonComp.module.css"
function ButtonComp({name}) {
  return (
    <a className={styles.ancker}   >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {name}
   </a>
  )
}

export default ButtonComp