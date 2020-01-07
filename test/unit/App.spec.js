import React from 'react';
import {mount} from 'enzyme';
import Utils from '../utils';

import App from '../../src/App';
const name = 'Larry';

describe('App', () => {
    it('Renders App Component', () => {
        const Component = mount(<App />);
        expect(Utils.findElement(Component, 'app-component').text()).toContain(
            'Hello, I am ' + name
        );
    });
});
