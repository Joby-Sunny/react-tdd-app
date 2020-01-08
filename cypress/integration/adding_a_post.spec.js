import {testId} from '../../utils';

const AddPost = {
    title: 'Title of the Post',
    description: 'This is the description of the post.'
};

describe('Testing all Feature for the Home Page :: ', () => {
    it('Adding a Post to the Post List', () => {
        cy.visit('http://localhost:1234/');
        cy.get(testId('addPostWindow')).should('not.exist');
        cy.get(testId('addPostButton')).click();
        cy.get(testId('addPostTitle')).type(AddPost.title);
        cy.get(testId('addPostDescripton')).type(AddPost.description);
        cy.get(testId('savePostButton')).click();
        cy.get(testId('addPostWindow')).click();
        cy.contains(AddPost.title);
        cy.contains(AddPost.description.substring(0, 300));
    });
});
