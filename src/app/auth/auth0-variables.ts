interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'fbHeNaiAXtjRjpiZoAvYQRZsyfbrKMqP',
    domain: 'movemberchallenge.auth0.com',
    callbackURL: 'http://localhost:4200/challenge'
  };
