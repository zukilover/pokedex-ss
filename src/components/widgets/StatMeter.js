/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import Equalizer from 'react-equalizer';
import StatBox from '../common/StatBox';
import {
  Row,
  Column
} from 'react-foundation';

const StatMeter = (props) => {
  return (
    <Row>
      {
        props.content ?
        props.content.map( ({stat, base_stat}) =>
          <Equalizer className="stat-meter" key={stat.name}>
            <Column medium={4}>
              <StatBox title={stat.name}>
                <div className="progress">
                  <div className="progress-meter" style={{ 'width' : (base_stat/200*100) + '%' }}></div>
                </div>
              </StatBox>
            </Column>
          </Equalizer>
        ) : null
      }
    </Row>
  )
};

StatMeter.PropTypes = {
  content: PropTypes.array
};

StatMeter.defaultProps = {
  content: []
};

export default StatMeter;
