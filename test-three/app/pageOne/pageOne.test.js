import React from 'react';
import PageOne from './pageOne';
import { render } from 'enzyme';

describe('component displays heading', () => {
    const pageOne = render(<PageOne />);
    it('displays heading', () => {
        expect(pageOne.find('h1').text()).toEqual('This is Page one');
    })
});
