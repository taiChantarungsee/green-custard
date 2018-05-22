import React, {Component} from 'react';

class Post extends Component {
	render() {
		return(
			<div>
				{this.props.post.id}
				{this.props.post.title}
				{this.props.post.body}
			</div>
		);
	}
};

export default Post;