import React from 'react'
import styles from './NotFount.module.scss'

export default function NotFound() {
  return (
   <>
    <div className="row">
        <div className="col-12">
            <div>
                <h2 className={`${styles.notfound_header}`}>Not Found</h2>
                <p className={`${styles.notfound_text}`}>This page doesn't exist</p>
            </div>
        </div>

    </div>
   </>
  )
}
