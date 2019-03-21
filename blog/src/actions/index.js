import jsonPlaceholder from '../api/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');   
    dispatch({ type: 'FETCT_POSTS', payload: response});
  };
