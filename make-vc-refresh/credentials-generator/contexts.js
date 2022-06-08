/**
 *
 *  Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
*/
'use strict';

import ed25519Ctx from 'ed25519-signature-2020-context';
import didCtx from '@digitalcredentials/did-context';
import credentialsCtx from 'credentials-context';
import credentialExamplesCtx from
  '@digitalbazaar/vc/lib/contexts/vc-examples-v1.js';
import odrlCtx from '@digitalbazaar/vc/lib/contexts/odrl.js';
import refreshContext from 'vc-refresh-2021-context';
console.log({refreshContext});
export const contextMap = new Map();

// add contexts for the documentLoader
contextMap.set(ed25519Ctx.constants.CONTEXT_URL, ed25519Ctx.CONTEXT);
contextMap.set(
  didCtx.constants.DID_CONTEXT_URL,
  didCtx.contexts.get(
    didCtx.constants.DID_CONTEXT_URL)
);
contextMap.set(
  credentialsCtx.constants.CONTEXT_URL,
  credentialsCtx.contexts.get(
    credentialsCtx.constants.CONTEXT_URL)
);
contextMap.set(
  refreshContext.constants.CONTEXT_URL_V1,
  refreshContext.contexts.get(
    refreshContext.constants.CONTEXT_URL_V1)
);

contextMap.set(
  'https://www.w3.org/2018/credentials/examples/v1',
  credentialExamplesCtx
);
contextMap.set(
  'https://www.w3.org/ns/odrl.jsonld',
  odrlCtx
);
