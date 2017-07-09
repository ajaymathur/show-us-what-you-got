import React from 'react';
import Menu from './menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
    const menu = shallow(<Menu closeMenu={() => { }} />);
    const instance = new Menu();

    beforeEach(function () {
        global.fetch = jest.fn();
    });

    it('call fetchMenu on component did mount', () => {
        instance.fetchMenu = jest.fn();
        instance.componentDidMount();
        expect(instance.fetchMenu).toBeCalled;
    });

    it('joinClassNames joins the arguments in space separated string', () => {
        const result = instance.joinClassNames('hello', 'world');
        expect(result).toEqual('hello world');
    });

    it('calls api to fetch menu data on call to fetchMenu', () => {
        instance.setState = jest.fn();
        instance.fetchMenu();
        expect(global.fetch).toBeCalled;
    });

    it('toggleInnerMenu', () => {
        instance.setState = jest.fn();
        instance.state = { menu: [{ submenuOpen: false }] };
        instance.toggleInnerMenu(0);
        expect(instance.setState).toBeCalled;
    });
});
