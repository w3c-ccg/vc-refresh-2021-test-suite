export const testVc = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1'
  ],
  type: ['VerifiableCredential'],
  credentialSubject: {
    id: 'did:key:z6MkhTNL7i2etLerDK8Acz5t528giE5KA4p75T6ka1E1D74r'
  },
  refreshService: {
    id: 'https://example.edu/refresh/3732',
    type: 'ManualRefreshService2018',
  }
};
