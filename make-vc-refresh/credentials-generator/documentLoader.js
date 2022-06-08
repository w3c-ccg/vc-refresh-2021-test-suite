/**
 *
 *  Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
*/
'use strict';

import {JsonLdDocumentLoader} from 'jsonld-document-loader';
import {contextMap} from './contexts.js';
const jdl = new JsonLdDocumentLoader();

// add contexts to documentLoad
for(const [key, value] of contextMap) {
  jdl.addStatic(key, value);
}

export const documentLoader = jdl.build();
