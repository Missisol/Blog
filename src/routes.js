import HomePage from 'components/HomePage';
import PostPageContainer from 'containers/PostsPageContainer';
import OnePostContainer from 'containers/OnePostContainer';
import UsersContainer from 'containers/UsersContainer'

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/posts',
    exact: true,
    component: PostPageContainer,
  },
  {
    path: '/post/:_id',
    exact: true,
    component: OnePostContainer,
  },
  {
    path: '/users',
    exact: true,
    component: UsersContainer,
  },
];