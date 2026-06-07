import React from 'react'
import styles from './Header.module.css'

const header = () => {
  return (
    <div className = {styles.header}>
      <h3>Aditya's Larp</h3>
      <button>Touch me</button>
    </div>
  )
}

export default header
