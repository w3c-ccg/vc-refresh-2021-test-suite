/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const chai = require('chai');

const should = chai.should();

const shouldHaveProperty = ({refreshService, property}) => {
  should.exist(
    refreshService[property],
    `Expected refreshService to have property ${property}`
  );
};

module.exports = {shouldHaveProperty};
