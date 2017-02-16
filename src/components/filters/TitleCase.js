/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';

const TitleCase = (props) => {
  let words = props.text.split('-');
  let title = words.map( word =>
    word.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  );
  title = title.join(' ');
  return (
    <span>{ title }</span>
  )
};

export default TitleCase
