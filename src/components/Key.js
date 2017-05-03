import React from 'react';

import '../style/key.css';

export default class Key extends React.Component {
  render(){

    let classname = "waves-effect waves-light btn "+this.props.type+"Key "+ this.props.color;

    return(
      <a className={classname} onClick={() => {this.props.onClick(this.props.label)}}>
        {this.props.label}
      </a>
    );
  }

}
