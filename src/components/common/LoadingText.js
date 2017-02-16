/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';

const LoadingText = (props) => {
  const text = [
    '.............. ....... ..................',
    '........ ................ ............. ..............',
    '...........'
  ];
  return (
    <div className="loading">
      { Array(props.size).fill('').map( (content, index) =>
        <p className="text-loading" key={index}>
          { props.isLong ? text[index % 2] : text[2] }
        </p>
      )}
    </div>
  )
};

LoadingText.PropTypes = {
  size: PropTypes.number,
  isLong: PropTypes.boolean
};

LoadingText.defaultProps = {
  size: 1,
  isLong: false
};

export default LoadingText;
