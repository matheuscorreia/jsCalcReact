import React from 'react';
import Keyboard from './Keyboard';
import Display from './Display';
import HistoryTable from './HistoryTable';

import '../style/calculator.css';

export default class Calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      exp: '',
      history: [],
      easterEggIndex: 0,
    };
  }

  handleValueClick(value){
    let expUpdated = this.state.exp.slice();

    expUpdated += value;

    this.setState({exp: expUpdated});
  }

  handleClearClick(){
    this.setState({exp: ''});
  }

  handleClearEntryClick(){
    let expUpdated = this.state.exp.slice();

    expUpdated = expUpdated.slice(0,-1);

    this.setState({exp: expUpdated});
  }

  handleSolveClick(){
    let expUpdated = this.state.exp.slice();

    let expReplaced = expUpdated.replace(/×/g, '*');
    expReplaced = expReplaced.replace(/÷/g, '/');

    let result;
    let historyEntry = null;

    try{

      result = this.solveExpression(expReplaced) + '';

      historyEntry = {
        expression: expUpdated,
        result: result
      }
    }catch(err){
      result = '';
    }

    if(historyEntry !== null){
      let h = this.state.history.slice();
      h.push(historyEntry);
      this.setState({exp: result, history: h});
    }else{
      this.setState({exp: result});
    }
  }

  handleEasterEggClick(){
    alert('oi');
  }

  solveExpression(exp){
    return eval(exp);
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h4 className="center-align"><i className="material-icons heart">favorite</i></h4>
          </div>
        </div>

        <div className="row">
          <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
            <div className="calculator-body grey darken-3">
              <Display expression={this.state.exp} />
              <Keyboard
                onValueClick={this.handleValueClick.bind(this)}
                onClearClick={this.handleClearClick.bind(this)}
                onClearEntryClick={this.handleClearEntryClick.bind(this)}
                onSolveClick={this.handleSolveClick.bind(this)}
                onEasterEggClick={this.handleEasterEggClick.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s10 m8 l6 offset-s1 offset-m2 offset-l3">
            <HistoryTable history={this.state.history}/>
          </div>
        </div>
      </div>
    );
  }
}
