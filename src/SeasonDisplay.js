import React from 'react';
import './SeasonDispaly.css';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'Summer' ? 'Let hit the Beach' : "Burr, it's chilly!";
  const icon = season === 'Summer' ? 'sun' : 'snowflake';
  console.log(season);

  return (
    <div>
      <i className={`icon-left ${icon} icon massive`}></i>
      <h1 className="text">{text}</h1>
      <i className={`icon-right ${icon} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
