import React, { Component } from 'react';

class Cities extends Component {


/*
			<li name="newyork" onClick={this.props.getMeasure} >New-York</li>
			<li name="berlin" onClick={this.props.getMeasure} >Berlin</li>
			<li name="bogota" onClick={this.props.getMeasure} >Bogota</li>
			*/
			render(){

			

				return(



					<div className="list-group">




					<p className="cityTitle  ">Cities</p>
					<a id="paris" onClick={this.props.getMeasure} className="list-group-item list-group-item-action city " >{this.props.paris} Paris {this.props.paris}  </a>
					<a id="newyork" onClick={this.props.getMeasure} className="list-group-item list-group-item-action city "> {this.props.newyork} New-York {this.props.newyork}</a>
					<a id="berlin" onClick={this.props.getMeasure} className="list-group-item list-group-item-action city " > {this.props.berlin} Berlin {this.props.berlin}</a>
					<a id="london" onClick={this.props.getMeasure} className="list-group-item list-group-item-action city ">{this.props.london}London{this.props.london}</a>



					</div>
					);
			}

		}

		export default Cities;