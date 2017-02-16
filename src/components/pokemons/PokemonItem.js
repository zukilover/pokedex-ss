/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { Column } from 'react-foundation';

const PokemonItem = (props) => {
  return (
    <Column large={3}>
      <div className="card">
        <div className="card-section text-center">
          <h4>{props.pokemon.name}</h4>
          {props.children}
        </div>
      </div>
      {
        props.isDetail ?
          <div className="callout">
            <p><strong>Types</strong></p>
            {
              props.pokemon.types ?
              props.pokemon.types.map( ({type}) =>
                <span className="label label-type" key={type.name}>{type.name}</span>
              ) : null
            }
          </div> : null
      }
    </Column>
  );
};

export default PokemonItem;
