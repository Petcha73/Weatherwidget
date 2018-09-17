import React, { Component } from 'react';

class Menu extends Component {

	render(){

		return(

			<div className="btn-group" role="group" aria-label="...">

  <button type="button" className="btn btn-default bttn {this.props.active} " id="temp" onClick={this.props.getMeasure}>Temp</button>
  <button type="button" className="btn btn-default bttn {this.props.active} "id="rain" onClick={this.props.getMeasure} >Rain</button>
  <button type="button" className="btn btn-default bttn {this.props.active} "id="wind" onClick={this.props.getMeasure}>Wind</button>

			</div>
			
			);
	}

}

export default Menu;