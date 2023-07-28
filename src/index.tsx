import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app';
import auth0Config from 'config/auth0.json';
import { AuthProvider } from 'providers';
import reportWebVitals from 'reportWebVitals';
import history from 'utils/history';

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const root = createRoot(document.getElementById('root')!);

const auth0ProviderConfig = {
  ...auth0Config,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
  }
}

root.render(
  <React.StrictMode>
    <Auth0Provider {...auth0ProviderConfig}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
