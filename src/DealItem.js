import React, { Component } from 'react';
import './App.css';

export default class DealItem extends Component {

  // Properties used by this component:
  // descriptionOfDeal, name, URL

  constructor(props) {
    super(props);
    
    this.state = {
      full_link: ''
    };


  }

  componentDidMount() {
    var link = this.props.URL;
    if (!link.startsWith("https://") && !link.startsWith(" http://")) {
      link = "http://" + link;
    }
    this.setState({full_link: link})
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onClick_elDeal_link = (ev) => {

    window.open(this.state.full_link, '_blank');
  }

  dealHover = (ev) => {

  }

  render() {

    const shortlink = this.state.full_link.split("/")[2];
    console.log(this.props.URL)
    console.log(this.state.full_link)
    console.log(shortlink);

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
    
    const value_poster_name = this.props.Name;
    
    const style_elPoster_name = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_deal_link = this.props.URL;
    
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
          
          <div className="elPoster_name">
            <div className="baseFont" style={style_elPoster_name}>
              <div>{value_poster_name !== undefined ? value_poster_name : (<span className="propValueMissing">{this.props.locStrings.dealitem_text2_163221}</span>)}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.props.locStrings.dealitem_text2_347944}</div>
            </div>
          </div>
          
          <div className="elText">
            <div className="systemFontItalic" style={style_elText}>
              <div>{this.props.locStrings.dealitem_text_537553}</div>
            </div>
          </div>
          
          <div className="elDeal_link">
            <div className="systemFontBold" style={style_elDeal_link}  onHover={this.dealHover} onClick={this.onClick_elDeal_link} >
              <label title={this.state.full_link}>{shortlink !== undefined ? shortlink : (<span className="propValueMissing">{this.props.locStrings.dealitem_text_1035144}</span>)}</label>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
