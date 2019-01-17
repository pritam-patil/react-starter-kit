import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes';
import createStore from './store';
import ThemeSettings from './theme';
import './index.scss';

const APP_THEME = createMuiTheme(ThemeSettings);
const store = createStore();

const App = () => (
  <MuiThemeProvider theme={APP_THEME}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>
);
export default App;
ReactDOM.render(<App />, document.getElementById('react-root'));
