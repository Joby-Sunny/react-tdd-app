import React from 'react';
import {shallow} from 'enzyme';
import {testId} from '../../utils';

import App from '../../src/App';
import AppConst from '../../src/App.constants';

describe('App', () => {
    it('Renders App Component', () => {
        const Component = shallow(<App />);
        expect(Component.find(testId(AppConst.app)).length).toBe(1);
    });
});
