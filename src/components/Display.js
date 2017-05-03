import React from 'react';

import '../style/display.css';

export default class Display extends React.Component {

  render(){
    return(
      <div>
        <input className="materialize-textarea display" value={this.props.expression} readOnly/>
      </div>
    );
  }

}
