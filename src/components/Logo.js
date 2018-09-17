import React, { Component } from 'react';
import logoImg from '../img/logoNetatmo.png';

class Logo extends Component {

	render(){

		return(

			<div>

			<img className="logoImg" src={logoImg} alt="Logo"/>

			</div>
			);
		}

	}

	export default Logo;