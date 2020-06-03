import React, { Component } from 'react';
import './App.css';

export default class DealItem extends Component {

  // Properties used by this component:
  // descriptionOfDeal, URL

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

  onClick_elDeal_link = (ev) => {
    window.open(this.props.URL, '_blank');
  
  }
  
  
  render() {
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'rgba(152, 230, 227, 0.7486)',
      borderRadius: '17.0px',
     };
    
    const value_deal_description = this.props.DescriptionOfDeal;
    
    const style_elDeal_description = {
      fontSize: 17.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elDeal_link = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="DealItem">
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className="elDeal_description">
            <div className="systemFontBold" style={style_elDeal_description}>
              <div>{value_deal_description !== undefined ? value_deal_description : (<span className="propValueMissing">{this.props.locStrings.dealitem_text_197304}</span>)}</div>
            </div>
          </div>
          
          <div className="elText">
            <div className="systemFontItalic" style={style_elText}>
              <div>{this.props.locStrings.dealitem_text_537553}</div>
            </div>
          </div>
          
          <div className="elDeal_link">
            <div className="systemFontBold" style={style_elDeal_link} onClick={this.onClick_elDeal_link} >
              <div>{this.props.locStrings.dealitem_text_1035144}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
