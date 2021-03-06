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
        <th>
          {
            props.loading ? <LoadingText /> :
            (
              <span>
                <i className={'fi-' + props.icon}></i>
                <TitleCase text={props.title} />
              </span>
            )
          }
        </th>
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

StatBox.PropTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  isLong: PropTypes.boolean
};

StatBox.defaultProps = {
  title: '',
  icon: 'info',
  isLong: false
};

export default StatBox
