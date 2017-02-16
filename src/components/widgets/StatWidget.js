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

const StatWidget = (props) => {
  return (
    <Row>
      <Equalizer>
        <Column medium={4}>
          <StatBox title="Weight">
            {props.content.weight / 10} kg
          </StatBox>
        </Column>
      </Equalizer>
      <Equalizer>
        <Column medium={4}>
          <StatBox title="Height">
            {props.content.height / 10} m
          </StatBox>
        </Column>
      </Equalizer>
      <Equalizer>
        <Column medium={4}>
          <StatBox title="Abilities">
            <div className="contain-ability">
              {
                props.content.abilities ?
                props.content.abilities.map( ({ability}) =>
                  <span className="label label-ability" key={ability.name}>{ability.name.replace(/-/, ' ')}</span>
                ) : null
              }
            </div>
          </StatBox>
        </Column>
      </Equalizer>
    </Row>
  )
};

StatWidget.PropTypes = {
  content: PropTypes.object
};

StatWidget.defaultProps = {
  content: {}
};

export default StatWidget;
