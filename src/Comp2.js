import React, { Component } from 'react';
import './App.css';
import DealItem from './DealItem';

export default class Comp2 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="Comp2">
        <div className="layoutFlow">
          <div className="hasNestedComps elList">
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <DealItem appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<div key={row.key}>
                    {itemComp}
                  </div>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
