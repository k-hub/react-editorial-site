import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
       const request =axios.get('https://cdn.contentful.com/spaces/liw71xf5jo1c/entries?access_token=15656085d39fc38835069bf8727270d8d6cf8b7c91a3c611c277a1d536e5a927&content_type=reactTutorialPost');
          return {
                type: FETCH_POSTS,
                payload: request
            };
}
