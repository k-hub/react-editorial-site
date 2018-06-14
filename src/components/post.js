import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
        <article key={this.props.sys.id}>
          <img src="https://placebear.com/800/500" alt=""/>
          <h3 className="article-title">{this.props.fields.title}</h3>
          <p className="article-description">{this.props.fields.description}</p>
          <p className="article-content">{this.props.fields.content}</p>
        </article>
    );
  }
}

export default Post;
