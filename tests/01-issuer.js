/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const chai = require('chai');
const {filterByTag} = require('vc-api-test-suite-implementations');
const {shouldHaveProperty} = require('./assertions');

const should = chai.should();
// only tests implementations that's issuer supports Vc-Refresh
const tag = 'Vc-Refresh';
const {match, nonMatch} = filterByTag({issuerTags: [tag]});


describe('Issuer Tests', function () {
const summaries = new Set();
  this.summary = summaries;
  const reportData = [];
  // this will tell the report
  // to make an interop matrix with this suite
  this.matrix = true;
  this.report = true;
  this.implemented = [...match.keys()];
  this.notImplemented = [...nonMatch.keys()];
  this.rowLabel = 'Test Name';
  this.columnLabel = 'Issuer';
  // the reportData will be displayed under the test title
  this.reportData = reportData;
  for(const [name, implementation] of match) {
    describe(name, function() {
      let issuedVc;
      let refreshService;
      before(async function() {
        const issuer = implementation.issuers.find(
          issuer => issuer.tags.has(tag));
        const body = createRequestBody({issuer});
        const {data} = await issuer.issue({body});
        issuedVc = data;
        refreshService = data?.refreshService || {};
      });
      it('MUST have property `refreshService`', function() {
        should.exist(issuedVc, 'expected a Vc to be issued.');
        should.exist(issuedVc.refreshService, 'expected Vc to have property refreshService.');
        issuedVc.refreshService.should.be.an('object', 'expected vc.refreshService to be an object.');
      })
      it('refreshService MUST contain type', function() {
        shouldHaveProperty({refreshService, property: 'type'});
      })
      it('`refreshService.type` MUST be either MediatedRefresh2021 or UnmediatedRefresh2021', function() {
        const {type = ''} = refreshService.
        type.should.be.oneOf(
          ['MediatedRefresh2021','UnmediatedRefresh2021'],
          'Expected refreshService.type to be either MediatedRefresh2021 or UnmediatedRefresh2021');
      })
      it('refreshService MUST contain url', function() {
        shouldHaveProperty({refreshService, property: 'url'});
      })

    })
  }
})
