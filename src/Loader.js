import React from 'react';

/**
 * @author
 * @function Loader
 **/

const Loader = (props) => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
