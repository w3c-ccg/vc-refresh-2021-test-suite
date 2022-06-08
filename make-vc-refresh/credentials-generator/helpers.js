/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import * as didKey from '@digitalbazaar/did-method-key';
import {writeFile} from 'fs';
import {promisify} from 'util';
import {decodeSecretKeySeed} from 'bnid';

const didKeyDriver = didKey.driver();

export const asyncWriteFile = promisify(writeFile);

/**
 * Writes a json file to disc.
 *
 * @param {object} options - Options to use.
 * @param {string} options.path - A path to write to.
 * @param {object} options.data - A JSON Object.
 *
 * @returns {Promise} Resolves on write.
 */
export const writeJson = async ({path, data}) => {
  return asyncWriteFile(path, JSON.stringify(data, null, 2));
};

/**
 * Takes in a bs58 mutlicodec multibase seed and returns a did key.
 *
 * @param {object} options - Options to use.
 * @param {string} [options.seedMultiBase=_seed] - A bs58 encoded string.
 *
 * @returns {Promise<object>} - Returns the resulting did key driver result.
 */
export const getDidKey = async ({
  seedMultiBase = process.env.DID_KEY_SECRET
} = {}) => {
  // convert multibase seed to Uint8Array
  const seed = decodeSecretKeySeed({secretKeySeed: seedMultiBase});
  return didKeyDriver.generate({seed});
};
