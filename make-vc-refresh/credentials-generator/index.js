/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import vc from '@digitalbazaar/vc';
import {join} from 'path';
import {
  getDidKey,
  writeJson,
} from './helpers.js';
import {testVc as credential} from './refresh2021vc.js';
import {Ed25519Signature2020} from './TestEd25519Signature2020.js';
import {documentLoader} from './documentLoader.js';
import {klona} from 'klona';

const credentialsPath = join(process.cwd(), 'credentials');

// this will generate the signed Vcs for the test
const main = async () => {
  if(!process.env.DID_KEY_SECRET) {
    throw new Error(`ENV variable DID_KEY_SECRET is required.`);
  }
  console.log('generating credentials');
  const {methodFor} = await getDidKey();
  const key = methodFor({purpose: 'capabilityInvocation'});
  const vcs = await Promise.all([
    _issuedVc(key)
  ]);
  console.log('writing Vcs to /credentials');
  await Promise.all(vcs.map(({path, data}) => writeJson({path, data})));
  console.log(`${vcs.length} credentials generated`);
};

async function _issuedVc(key) {
  const suite = new Ed25519Signature2020({key});
  console.log({key});
  const _credential = klona(credential);
  _credential.issuer = key.controller;
  const signedVc = await vc.issue({
    credential: _credential,
    suite,
    documentLoader
  });
  return {path: `${credentialsPath}/issuedVc.json`, data: signedVc};
}

// run main by calling node ./credentials-generator
main();
