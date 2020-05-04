'use strict'

const { log } = require('../config')
const action = {}
const moment = require('moment')
moment().format()

/**
 * Validate Token
 */
action.webhook = (req, res) => {
  log.debug('webhook route requested')
  log.debug(req.params)
  log.debug(JSON.stringify(req.params))
  res.status(200).end()
}

module.exports = action
