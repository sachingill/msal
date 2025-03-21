export const environment = {
  production: false,
  msalConfig: {
      auth: {
          clientId: '<CLIENT_ID>',
          authority: 'https://login.microsoftonline.com/<TENANT_ID>',
      }
  },
  apiConfig: {
      scopes: ['User.Read'],
      uri: 'https://graph.microsoft.com/v1.0/me'
  }
};
