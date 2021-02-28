import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={styles['list-item']}>Good: {good}</li>
    <li className={styles['list-item']}>Neutral: {neutral}</li>
    <li className={styles['list-item']}>Bad: {bad}</li>
    <li className={styles['list-item']}>Total: {total}</li>
    <li className={styles['list-item']}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
