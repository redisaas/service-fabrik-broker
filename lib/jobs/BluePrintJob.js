'use strict';

const logger = require('../logger');
const BaseJob = require('./BaseJob');

class BluePrintJob extends BaseJob {
  constructor() {
    super();
  }

  static run(job, done) {
    logger.info(`Starting blueprint Job with Job atttrs: ${JSON.stringify(job.attrs.data)} @ ${new Date()}`);
    this.runSucceeded({
      status: 'success'
    }, job, done);
  }
}

module.exports = BluePrintJob;