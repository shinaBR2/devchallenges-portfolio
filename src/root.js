import React from 'react';
import Shell from './Shell';

const initialState = {
  theme: 'light'
};

const GlobalContext = React.createContext({
  ...initialState
});

class RootElement extends React.Component {
  state = {
    ...initialState
  };

  render = () => {
    const { firebase, user } = this.state;
    return (
      <GlobalContext.Provider value={{ firebase, user }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  };
}

export const withFirebase = (Component) => (props) => (
  <GlobalContext.Consumer>
    {({ theme }) => <Component {...props} theme={theme} />}
  </GlobalContext.Consumer>
);

export const wrapPageElement = ({ element }) => <Shell>{element}</Shell>;

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
);
