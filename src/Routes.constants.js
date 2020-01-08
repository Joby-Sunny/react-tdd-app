import HomePage from './Routes/HomePage';
import PostPage from './Routes/PostPage';
export default {
    homePage: {path: '/', exact: false, component: HomePage},
    postPage: {path: '/posts', exact: false, component: PostPage}
};
