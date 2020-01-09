import React from 'react';
import {mount} from 'enzyme';
import {testId} from '../../utils';

import HomePage from '../../src/Routes/HomePage';
import HomeConst from '../../src/Routes/HomePage/index.constants';

describe('Home Page Route', () => {
    beforeAll(() => {
        const div = document.createElement('div');
        div.id = 'modal-root';
        window.domNode = div;
        document.body.appendChild(div);
    });
    describe(':: On Initial Page Load', () => {
        const Component = mount(<HomePage />, {attachTo: window.domNode});
        const AddPostButton = Component.find(testId(HomeConst.addPostButton));

        it('Renders Add Post Button', () => {
            expect(AddPostButton.length).toBe(1);
        });

        it('Does not Render Add Post Window by default', () => {
            expect(Component.find(testId(HomeConst.addPostWindow)).length).toBe(0);
        });

        it('Render PostList Component', () => {
            expect(Component.find(testId(HomeConst.postList)).length).toBe(1);
        });
    });
    describe(':: Display Add New Post Widow on demand', () => {
        const Component = mount(<HomePage />, {attachTo: window.domNode});
        const AddPostButton = Component.find(testId(HomeConst.addPostButton));

        it('Render Add Post Window on Button Click', () => {
            AddPostButton.simulate('click');
            expect(Component.find(testId(HomeConst.addPostWindow)).length).toBe(1);
        });
    });
});
