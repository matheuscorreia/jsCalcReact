import React from 'react';

import '../style/historyTable.css';

export default class HistoryTable extends React.Component {

  render(){

    let tableInnards = [];

    this.props.history.map(function(item, i){
      tableInnards.push(
        <tr className="tableRow" key={i}>
          <td className="expression">
            {item.expression}
          </td>
          <td className="result right-align">
            {item.result}
          </td>
        </tr>
      );
    });

    return(
      <table className="highlight">
        <tbody>
          {tableInnards}
        </tbody>
      </table>
    );
  }

}
