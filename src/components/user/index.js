import React from "react"
import styles from './user.module.css';

export default function User(props) {
  return (
    <div className={styles.user}>
      <img src={props.avarta} className={styles.avarta} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}
