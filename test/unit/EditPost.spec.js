import React from 'react';
import {mount} from 'enzyme';
import {testId} from '../../utils/index';

import EditPost from '../../src/components/EditPost';
import HomeConst from '../../src/Routes/HomePage/index.constants';

const sampleOutput = {
    title: 'hello',
    description: 'world'
};

describe('EditPage Component', () => {
    const EditPostProps = {
        dataTest: HomeConst.addPostWindow,
        savePost: jest.fn()
    };
    const Component = mount(<EditPost {...EditPostProps} />);
    const TitleInput = Component.find(testId(HomeConst.addPostTitle));
    const DescriptionInput = Component.find(
        testId(HomeConst.addPostDescription)
    );
    const SaveButton = Component.find(testId(HomeConst.savePostButton));
    it('Renders Post title Input', () => {
        expect(TitleInput.length).toBe(1);
    });
    it('Renders Post Description Input', () => {
        expect(DescriptionInput.length).toBe(1);
    });
    it('Renders Save Post Button', () => {
        expect(SaveButton.length).toBe(1);
    });
    it('Save Post is called with Proper params', () => {
        TitleInput.simulate('change', {
            target: {
                value: sampleOutput.title,
                name: 'title'
            }
        });
        DescriptionInput.simulate('change', {
            target: {
                value: sampleOutput.description,
                name: 'description'
            }
        });
        SaveButton.simulate('click');
        expect(Component.props().savePost).toHaveBeenCalledWith(sampleOutput);
    });
});
