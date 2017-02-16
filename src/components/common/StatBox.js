/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import LoadingText from './LoadingText';
import TitleCase from '../filters/TitleCase';

const StatBox = (props) => {
  return (
    <table>
      <thead>
      <tr>
        <th>{ props.loading ? <LoadingText /> : <TitleCase text={props.title} />}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          { props.loading ? <LoadingText size={props.isLong ? 2 : 1} isLong={props.isLong} /> : props.children}
        </td>
      </tr>
      </tbody>
    </table>
  )
};

LoadingText.PropTypes = {
  title: PropTypes.string,
  isLong: PropTypes.boolean
};

LoadingText.defaultProps = {
  title: '',
  isLong: false
};

export default StatBox
