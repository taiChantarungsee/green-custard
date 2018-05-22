import React, {Component} from 'react';

class Forms extends Component {
	render() {
		return(
			<form onSubmit={this.props.getUser}>
			  <input type="text" name="user" placeholder="User"/>
			  <button>Select</button> 
			</form>
		);
	}
};

export default Forms;