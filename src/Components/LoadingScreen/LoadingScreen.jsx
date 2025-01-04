import React from 'react'
import styles from './LoadingScreen.module.scss'

export default function LoadingScreen() {
  return (
   <>
    <div id='loadingScreen' className={`${styles.loading_screen}`}>
        <div id="content">
            <h2 className={`${styles.loading_brand} animate__animated animate__zoomIn`}>om</h2>
        </div>
    </div>
   </>
  )
}
