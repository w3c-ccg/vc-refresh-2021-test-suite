export const testVc = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/vc-refresh-2021/v1"
  ],
  "type": ["VerifiableCredential"],
  "credentialSubject": {
    "id": "did:key:z6MkhTNL7i2etLerDK8Acz5t528giE5KA4p75T6ka1E1D74r"
  },
  "refreshService": {
    "type": "UnmediatedRefresh2021",
    "url": "https://example.edu/workflows/refresh-degree",
    "validAfter": "2021-09-01T19:23:24Z",
    "validUntil": "2022-02-01T19:23:24Z"
  }
};
