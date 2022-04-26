import React from 'react';
import {
  dataFormat,
  dateWithHour,
  dateWithoutHour,
} from '../../helpers/dataFormatServices';
import styles from '../../styles/ItemDetails.module.scss';
import { Button } from '../Button/Button';
import { ItemDetailsProps } from './Types';

export const ItemDetails: React.FC<ItemDetailsProps> = ({
  launches,
  name,
  successActive,
  startDate,
  details,
  launchRocketName,
  launchBadge,
  launchFailures,
  rocketHeight,
  rocketMass,
}) => {
  return (
    //  common code for launch & rocket
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.status}>
        <p>
          <b>{launches ? 'Status: ' : 'Active: '}</b>
        </p>
        {successActive ? (
          <p className={styles.success}>{launches ? 'Success' : 'Yes'}</p>
        ) : (
          <p className={styles.fail}>{launches ? 'Failure' : 'No'}</p>
        )}
      </div>
      <p>
        <b>Start date: </b>
        {launches ? dateWithHour(startDate) : dateWithoutHour(startDate)}
      </p>
      {/* code only for launch */}
      {launches && (
        <>
          <p>
            <b>Rocket: </b>
            {launchRocketName}
          </p>
          {!successActive && (
            <div className={styles.details}>
              <b>Failures:</b>
              <br />
              time: {launchFailures![0].time} s
              <br />
              altitude:{' '}
              {launchFailures![0].altitude !== null
                ? launchFailures![0].altitude
                : 0}{' '}
              m
              <br />
              reason: {launchFailures![0].reason}
            </div>
          )}
          {launchBadge !== null && <img src={launchBadge} alt='launch badge' />}
        </>
      )}
      {/* code only for rocket */}
      {!launches && (
        <>
          <p>
            <b>Height: </b>
            {rocketHeight} m
          </p>
          <p>
            <b>Mass: </b>
            {dataFormat(rocketMass!)} kg
          </p>
        </>
      )}
      {/* common code for launch & rocket */}
      {details !== null && (
        <p className={styles.details}>
          <b>Details: </b>
          <br />
          {details}.
        </p>
      )}
      <Button name='&larr; Go back' to={launches ? '/launches' : '/rockets'} />
    </div>
  );
};
