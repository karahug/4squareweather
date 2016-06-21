import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { App } from '../../src/components/app';

describe('<App>', () => {
    describe('render()', () => {
        const wrapper = shallow(<App/>);
        
        it('renders the search bar', () => {
            expect(wrapper.find('ConnectedForm')).to.have.length(1);
        });
        
        it('does not render locations', () => {
           expect(wrapper.find('Connect(LocationsContainer)')).to.have.length(0); 
        });
        
        it('does not render LocationInfo', () => {
           expect(wrapper.find('LocationInfo')).to.have.length(0); 
        });
        
        describe('when locations is not empty', () => {
            const locations = [{name: 'London bridge', location:{lat: '35', lng: '139'}}];
            const wrapper = shallow(<App locations={locations}/>);
            it('renders locations', () => {
                expect(wrapper.find('Connect(Locations)')).to.have.length(1);
            });
            
            describe('when location is selected', () => {
                const wrapper = shallow(<App locations={locations} selected={locations[0]}/>);
                it('renders LocationInfo', () => {
                    expect(wrapper.find('LocationInfo')).to.have.length(1);
                });
            });
        });
    });
});