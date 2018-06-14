import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
// import Post from './post';

class PostsIndex extends Component {
    componentDidMount() {
      // componentWillMount doesn't ensure that the data will be fetched
      // before this component mounts because fetch is an asynchronous call.
      // If this app is rendered on the server, componentWillMount will be called twice:
      // once on the server and another other on the client.
      //
      // componentDidMount will ensure that only data will be fetched from
      // the client and the naming convention will serve as a reminder to set up
      // an initial state because the asynchronous call only occur after this component
      // has been mounted.
        this.props.dispatch(fetchPosts());
    }

    // renderPosts() {
    //     return this.props.posts.map((post, index) => {
    //         return (
    //             <article key={post.sys.id}>
    //               <img src="https://placebear.com/800/500" alt=""/>
    //               <h3 className="article-title">{post.fields.title}</h3>
    //               <p className="article-description">{post.fields.description}</p>
    //               <p className="article-content">{post.fields.content}</p>
    //             </article>
    //         );
    //     });
    // }

    renderPostsCompact() {
      return this.props.posts.map((post, index) => {
          return (
            <div className="post-card" key={post.sys.id}>
              <Link to={{pathname: `/post/${post.sys.id}`}}>
                <article>
                  <img src="https://placebear.com/300/100"/>
                  <h3 className="article-title">{post.fields.title}</h3>
                  <p className="article-description">{post.fields.description}</p>
                </article>
              </Link>
            </div>
          );
      });
    }

    render() {
      const { posts, loading, error, imagesLoaded, imagesError } = this.props;

      if (loading) {
        return (
          <div className="loader-wrapper">
              <div className="loader"></div>
          </div>
        )
      } else if (error) {
        return <div>Sorry, we are experiencing technical difficulties. Please try again later.</div>
      }

      return(
        <div>
          <h2 className="header">True Botanicals</h2>
          <div className="posts-tiles fade-in">
            <div className="posts-compact">{this.renderPostsCompact()}</div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  posts: state.posts.all,
  loading: state.posts.loading,
  error: state.posts.error
});

export default connect(mapStateToProps)(PostsIndex);
