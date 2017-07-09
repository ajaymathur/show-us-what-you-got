import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

describe('Header', () => {
    const header = shallow(<Header/>);
    const instance = new Header();

    it('displays font awesome icon bars', () => {
        expect(header.find('header div').text()).toMatch(/FontAwesome/);
    });

    it('calls set state', () => {
        instance.setState = jest.fn();
        instance.toggleMenu();
        expect(instance.setState).toBeCalled;
    });
});
