import React from 'react'
import styles from "./Card.module.css"
const Card = ({url, title, description}) => {
  return (
    <div className={styles.card_container}>
        <div className={styles.img_container}>
        <img src={url}/>
        </div>
        <div className={styles.content}>
        <div className={styles.card_title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.card_body}>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card