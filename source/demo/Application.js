/**
 Copyright (C) 03/01/17  Loïs Postula
 */
import React, { Component } from 'react'
import styles from './demo.css'
import {ReactSmartTable} from '../index'

export default class Application extends Component {
  render () {
    return (
      <div className={styles.demo}>
        <div className={styles.headerRow}>
          <div className={styles.logoRow}>
            <div className={styles.Container}>
              <img
                alt='React Smart Table'
                className={styles.logo}
                src='https://raw.githubusercontent.com/loispostula/react-smart-table/master/source/static/logo.png'
              />
              <div className={styles.PrimaryLogoText}>
                React
              </div>
              <div className={styles.SecondaryLogoText}>
                Smart Table
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <ReactSmartTable

          />
        </div>
      </div>
    )
  }
}
