const pick = require('lodash.pick')
const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  'type': 'object',
  'required': ['whitelist'],
  'properties': {
    'whitelist': {
      'items': [
        { 'type': 'string' }
      ]
    }
  },
  'additionalProperties': false
}

module.exports = function (source, map, meta) {
  const WebpackOptions = getOptions(this) || {}
  validateOptions(schema, WebpackOptions, 'json-key-mapper')
  const result = pick(JSON.parse(source), WebpackOptions.whitelist)
  return this.callback(null, JSON.stringify(result))
}
