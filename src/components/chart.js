import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  function average(data) {
    return Math.round(data.reduce((acc, cur) => acc + cur, 0) / data.length);
  }

  return (
    <div>
      <Sparklines data={props.data} width={180} height={120} margin={5}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
