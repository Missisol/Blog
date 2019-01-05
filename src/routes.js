import CommentsContainer from 'containers/CommentsContainer';
import CommentContainer from 'containers/CommentContainer';
import HomePage from 'components/HomePage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsContainer,
  },
  {
    path: '/comments/:id',
    exact: true,
    component: CommentContainer,
  }
];