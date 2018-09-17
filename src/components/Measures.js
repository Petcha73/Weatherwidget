import React, { Component } from 'react';

class Measures extends Component {

	render(){

		return(

			<div>

			<table className="table">
			<thead className="tableHead">
			<tr>
			<th scope="col">{this.props.r1c1}</th>
			<th scope="col">{this.props.r1c2}</th> 
			<th scope="col">{this.props.r1c3}</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>{this.props.r2c1}</td>
			<td>{this.props.r2c2}</td> 
			<td>{this.props.r2c3}</td>
			</tr>
			<tr>
			<td>{this.props.r3c1}</td>
			<td>{this.props.r3c2}</td> 
			<td>{this.props.r3c3}</td>
			</tr>
			<tr>
			<td>{this.props.r4c1}</td>
			<td>{this.props.r4c2}</td> 
			<td>{this.props.r4c3}</td>
			</tr>
			</tbody>
			</table>

			</div>
			);
	}

}

export default Measures;