import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepoList from './RepoList';

configure({ adapter: new Adapter() });

const defaultProps = {
  repos: []
}, RepoListLayout = (props) => <RepoList {...defaultProps} {...props} />;

describe('Render RepoListLayout', () => {
  it('render correctly RepoListLayout component', () => {
    const RepoListLayoutComponent = renderer.create(<RepoListLayout />).toJSON();
    expect(RepoListLayoutComponent).toMatchSnapshot();
  });

  it('render correctly required prop repos', () => {
    const props = {
      repos: [
        {
          archived: false,
          forks: 0,
          created_at: '2016-06-04T17:57:07Z',
          name: 'test1'
        },
        {
          archived: false,
          forks: 0,
          created_at: '2016-06-04T17:57:07Z',
          name: 'test2'
        }
      ]
    },
      RepoListLayoutComponent = mount(<RepoListLayout {...props} />);
    expect(RepoListLayoutComponent.find('.md-cell--6').length).toEqual(2);
});

});