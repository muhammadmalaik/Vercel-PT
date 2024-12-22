import React from 'react'
import Input from '../Form/Form'
import styles from './Card.module.css'
const Card = ({ Image, Heading, Para}) => {
  return (
    <div className={styles.divContainer}>
      <div>
        <img className={styles.img} src={Image} />
        <h2>{Heading}</h2>
        <p>{Para}</p>
      </div>
    </div>
  )
}

export default Card