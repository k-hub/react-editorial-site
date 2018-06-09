import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        return this.props.posts.map((post, index) => {
            return (
                <article key={post.sys.id}>
                <img src="https://placebear.com/800/500" alt=""/>
                <h3 className="article-title">{post.fields.title}</h3>
                <p className="article-description">{post.fields.description}</p>
                <p className="article-content">{post.fields.content}</p>
                </article>
            );
        });
    }
    render() {
        return(
            <div>
            <h2 className="header">True Botanicals</h2>
              <div className="posts">{this.renderPosts()}</div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {posts: state.posts.all };
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
