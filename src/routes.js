import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import Post from './components/post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    {/* <Route path="/post/:id" component={Post}/> */}
  </Route>
);
