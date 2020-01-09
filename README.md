# Readme Winiswap ![language](https://img.shields.io/badge/language-javascript-blue.svg)

> Winiswap is a wine exchange

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Support](#hammer_and_wrench-support)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## :package: Installation

### First check if you have YARN installed

Before installing this Readme Generator you need to check if you have `Node.js`and `YARN` installed on your computer.

To check if you have `Node.js` installed, run this command in your terminal:

```sh
node -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the [next section](#then-install-the-readme-generator).

```sh
v10.18.0
```

To confirm that you have `YARN` installed you can run this command in your terminal:

```sh
yarn -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the [next section](#then-install-the-readme-generator).

```sh
1.21.1
```

If `Node.js` or `YARN` is not installed you can install them on [this link](https://nodejs.org/en/)

Don't forget to update `YARN` after installing `Node.js`:

### Then install winiswap

```sh
yarn install
```

## :rocket: Usage

1- 
    Then, you can modify the .env file

    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_PROVIDER_URL=https://mainnet.infura.io/v3/XXXXXXXX
    REACT_APP_TOKEN_NAME=MTB18
    REACT_APP_TOKEN_SUPPLY=16384
    REACT_APP_TOKEN_ADDRESS=0x1bcfd19f541eb62c8cfebe53fe72bf2afc35a255
    REACT_APP_REDEEM_MESSAGE='You can redeem your MTB18 tokens for bottles of wine, starting on May 6, 2021.'

2- 
    Insert images: nfc.png, sent.png and test.png to src/components/Gallery

3-

```sh
yarn start
```

## :hammer_and_wrench: Support

Please [open an issue](https://github.com/OpenVino/winiswap) for support.

## :memo: Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/leonard-henriquez/readme-boilerplate/compare/).

## :scroll: License

[MIT](LICENSE)