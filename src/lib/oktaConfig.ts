export const oktaConfig = {
    clientId: '<0oaeykdjxwUbJ9ivz5d7>',
    issuer: 'https://dev-24484422.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}