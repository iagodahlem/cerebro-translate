# cerebro-translate

[![Build Status](https://travis-ci.org/iagodahlem/cerebro-translate.svg?branch=master)](https://travis-ci.org/iagodahlem/cerebro-translate)

> [Cerebro](http://cerebroapp.com/) plugin for translate using Google Translate API.

![Cerebro Translate Plugin Screenshot](screenshot.png)

## Usage

In Cerebro, type `translate en pt phrase` and the translation will be shown in the result below. You can specify an source and target language respectively. If you pass only target, the source will be set to _auto_, if you don't specify any language, the source will be set to _auto_, and target to _en_.

## Features

- Translate using any language passing as argument.

## Features Coming

- Add the ability to set default source and target languages.
- Add `translate langs` to show availaible languages.
- Add `translate help` to show usage help.
- Add debounce when typing.
- Save history of results to show when type just `translate`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://iagodahlem.mit-license.org/) © Iago Dahlem
