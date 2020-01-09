import {testId} from '../../utils';
import HomeConst from '../../src/Routes/HomePage/index.constants';

const AddPost = {
    title: 'Title of the Post',
    description: 'This is the description of the post.'
};

describe('Testing all Feature for the Home Page :: ', () => {
    it('Adding a Post to the Post List', () => {
        cy.visit('http://localhost:1234/');
        cy.get(testId(HomeConst.addPostWindow)).should('not.exist');
        cy.get(testId(HomeConst.addPostButton)).click();
        cy.get(testId(HomeConst.addPostTitle)).type(AddPost.title);
        cy.get(testId(HomeConst.addPostDescription)).type(AddPost.description);
        cy.get(testId(HomeConst.savePostButton)).click();
        cy.get(testId(HomeConst.addPostWindow)).should('not.exist');
        cy.contains(AddPost.title);
        cy.contains(AddPost.description.substring(0, 300));
    });
});
