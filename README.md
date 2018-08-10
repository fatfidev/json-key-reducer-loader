## json-key-reducer-loader

A Webpack loader that receives a JSON object and returns only the keys specified in the whitelist. The original use case comes from using [truffle-soliidty-loader](https://github.com/ConsenSys/truffle-solidity-loader), that returns a json object. Not all keys are necessary for production, hence this module was created to remove unnecessary keys.

## Installation

`$ npm install --save-dev json-key-reducer-loader`

Add the appropriate config to your `loaders` section of your Webpack 4 config and specify the whitelisted keys to return. It must be after the `json-loader` because webpack processes loaders right to left.

```javascript
[
  {
    loader: 'json-loader'
  },
  {
    loader: 'json-key-reducer-loader',
    options: {
      whitelist: ['abi', 'compiler', 'network', 'schemaVersion', 'updatedAt']
    }
  }
]
```

## Example

A full example that process solidity files.

```javascript
{
  module: {
    rules: [
      {
        test: /\.sol/,
        use: [
          {
            loader: 'json-loader'
          },
          {
            loader: 'json-key-reducer-loader',
            options: {
              whitelist: ['abi', 'compiler', 'network', 'schemaVersion', 'updatedAt']
            }
          },
          {
            loader: 'truffle-solidity-loader',
            options: {
              network: 'ganache',
            }
          }
        ]
      }
    ]
  }
}
```

### Loader options

  - `whitelist`: Keys to return