import React from 'react';

import Key from './Key';

import '../style/keyboard.css';

export default class Keyboard extends React.Component {

  render(){
    return(
      <div>
        <div className="row">
          <div className="col s3">

            <Key
              label="C"
              type="normal"
              color="red darken-1"
              onClick={this.props.onClearClick}
            />

          </div>

          <div className="col s3">

            <Key
              label="CE"
              type="normal"
              color="red darken-1"
              onClick={this.props.onClearEntryClick}
            />

          </div>

          <div className="col s3">

            <Key
              label={[<i key="smile" className='material-icons'>insert_emoticon</i>]}
              type="normal"
              color="red darken-1"
              onClick={()=> { }}
            />

          </div>

          <div className="col s3">
            <Key
              label="+"
              type="normal"
              color="grey"
              onClick={this.props.onValueClick}
            />
          </div>
        </div>


        <div className="row">
          <div className="col s3">

            <Key
              label="1"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />

          </div>
          <div className="col s3">

            <Key
              label="2"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />

          </div>
          <div className="col s3">

            <Key
              label="3"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />

          </div>
          <div className="col s3">
            <Key
              label="-"
              type="normal"
              color="grey"
              onClick={this.props.onValueClick}
            />
          </div>
        </div>


        <div className="row">
          <div className="col s3">
            <Key
              label="4"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="5"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="6"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="×"
              type="normal"
              color="grey"
              onClick={this.props.onValueClick}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <Key
              label="7"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="8"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="9"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="÷"
              type="normal"
              color="grey"
              onClick={this.props.onValueClick}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <Key
              label="0"
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="."
              type="normal"
              color="grey darken-1"
              onClick={this.props.onValueClick}
            />
          </div>
          <div className="col s3">
            <Key
              label="="
              type="normal"
              color="blue-grey"
              onClick={this.props.onSolveClick}
            />
          </div>
        </div>


      </div>
    );
  }

}
