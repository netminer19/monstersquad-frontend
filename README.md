# [Ω Olympus Frontend](https://app.olympusdao.finance/)
This is the front-end repo for Olympus that allows users be part of the future of Greece. 

**_ Note We're currently in the process of switching to TypeScript. Please read  this  guide on how to use TypeScript for this repository. https://github.com/OlympusDAO/olympus-frontend/wiki/TypeScript-Refactor-General-Guidelines _**

##  🔧 Setting up Local Development

Required: 
- [Node v14](https://nodejs.org/download/release/latest-v14.x/)  
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 
- [Git](https://git-scm.com/downloads)


```bash
$ git clone https://github.com/OlympusDAO/olympusdao.git
$ cd olympusdao

# set up your environment variables
# read the comments in the .env files for what is required/optional
$ cp .env.example .env

# fill in your own values in .env, then =>
$ yarn
$ yarn start
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!

## Rinkeby Testing

**Rinkeby faucet for sOHM:**
[Lives here](https://rinkeby.etherscan.io/address/0x800B3d87b77361F0D1d903246cA1F51b5acb43c9#writeContract), to retrieve test sOHM click `Connect to Web3` and use function #3: `dripSOHM`. After connecting to web3, click `Write` to execute and 10 sOHM will automatically be transferred to your connected wallet.

Note: The faucet is limited to one transfer per wallet every 6500 blocks (~1 day)

**Rinkeby faucet for WETH:**
[Wrap rinkeby eth on rinkeby uniswap](https://app.uniswap.org/#/swap)

**Rinkeby faucets for LUSD, FRAX & DAI can be taken from rinkeby etherscan:**

1. Go to `src/helpers/AllBonds.ts`
2. then copy the rinkeby `reserveAddress` for the applicable bond & navigate to that contract on rinkeby etherscan. 
3. On Rinkeby etherscan use the `mint` function. You can use the number helper for 10^18 & then add four more zeros for 10,000 units of whichever reserve you are minting.

## Avax Fuji Testnet
1. [avax faucet](https://faucet.avax-test.network/)
2. [explorer](https://explorer.avax-test.network/)

## Architecture/Layout
The app is written in [React](https://reactjs.org/) using [Redux](https://redux.js.org/) as the state container. 

The files/folder structure are a  **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./src/
├── App.jsx       // Main app page
├── abi/          // Contract ABIs from etherscan.io
├── actions/      // Redux actions 
├── assets/       // Static assets (SVGs)
├── components/   // Reusable individual components
├── constants.js/ // Mainnet Addresses & common ABI
├── contracts/    // TODO: The contracts be here as submodules
├── helpers/      // Helper methods to use in the app
├── hooks/        // Shared reactHooks
├── themes/       // Style sheets for dark vs light theme
└── views/        // Individual Views
```

## Application translation

Olympus uses [linguijs](https://github.com/lingui/js-lingui) to manage translation.

The language files are located in a submodule deployed in `src/locales/translations`. This submodule points to the [olympus translation repository](https://github.com/OlympusDAO/olympus-translations)

In order to mark text for translation you can use:
- The <Trans> component in jsx templates eg. `<Trans>Translate me!</Trans>`
- The t function in javascript code and jsx templates. ``` t`Translate me` ```
You can also add comments for the translators. eg.
```
t({
	id: "do_bond",
	comment: "The action of bonding (verb)",
})
```


When new texts are created or existing texts are modified in the application please leave a message in the OlympusDao app-translation channel for the translators to translate them.

## 🚀 Deployment
Auto deployed on [Fleek.co](http://fleek.co/) fronted by [Cloudflare](https://www.cloudflare.com/). Since it is hosted via IPFS there is no running "server" component and we don't have server sided business logic. Users are served an `index.html` and javascript to run our applications. 

_**TODO**: TheGraph implementation/how/why we use it._


### Continuous deployment
Commits to the follow branches are automatically deployed to their respective URLs.
| Branch | URL |
| --- | --- |
| master | https://app.olympusdao.finance |
| deploy | https://staging.olympusdao.finance |

**Pull Requests**:
Each PR into master will get its own custom URL that is visible on the PR page. QA & validate changes on that URL before merging into the deploy branch. 


## 👏🏽 Contributing Guidelines 

We keep an updated list of bugs/feature requests in [Github Issues](https://github.com/OlympusDAO/olympusdao/issues). 


![GitHub issues](https://img.shields.io/github/issues/olympusdao/olympusdao?style=flat-square)

Filter by ["good first issue"](https://github.com/OlympusDAO/olympusdao/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) to get your feet wet!
Once you submit a PR, our CI will generate a temporary testing URL where you can validate your changes. Tag any of the gatekeepers on the review to merge them into master. 

*__NOTE__*: For big changes associated with feature releases/milestones, they will be merged onto the `develop` branch for more thorough QA before a final merge to `master`


**Defenders of the code**: 

Only the following people have merge access for the master branch. 
* [@Girth Brooks](https://github.com/dwjanus)
* [@Unbanksy](https://github.com/unbanksy)
* [@ZayenX](https://github.com/lolchocotaco)


## 🗣 Community

* [Join our Discord](https://discord.gg/gGZUMVDuhQ) and ask how you can get involved with the DAO!

Etherscan Verified Contracts

Successfully verified contract SquadERC20Token on Etherscan. https://ropsten.etherscan.io/address/0xB03e6f031A5514b86649C43295cec9b3F9aE23eF#code

Successfully verified contract Staking on Etherscan. https://ropsten.etherscan.io/address/0x7e67112629f72F3e9c11e9D23C3a42B29e637516#code

Successfully verified contract StakingWarmup on Etherscan. https://ropsten.etherscan.io/address/0xFf5794c115AC69D5E1223C2c340508D3b410197B#code

Successfully verified contract StakingHelper on Etherscan. https://ropsten.etherscan.io/address/0x82F7211532cad1342c4beF612DAb6D986B1D1268#code

Successfully verified contract StakingDistributor on Etherscan. https://ropsten.etherscan.io/address/0xd1aB71bf8f8FDD6d62D0690b8687af16c65Ab61E#code

Successfully verified contract Treasury on Etherscan. https://ropsten.etherscan.io/address/0xAd08b5941Cd538f4CFEdd749E91bAC8Ff8855130#code

Successfully verified contract sSquadERC20 on Etherscan. https://ropsten.etherscan.io/address/0xA9F199A3a20feDeF309E7De6b1b896DAD3e97312#code

Successfully verified contract DAIBondDepository on Etherscan. https://ropsten.etherscan.io/address/0x458312Ac5243c9E7920420fdC5aD2D2d9EC15FA1#code

Successfully verified contract FRAXBondDepository on Etherscan. https://ropsten.etherscan.io/address/0x05F268751Eec1Fb75E71ef1A65511CeA2b5B83Ee#code

Successfully verified contract DAI on Etherscan. https://ropsten.etherscan.io/address/0x53D2fB4333acC88Ca2074Eb4a10c59E956655956#code

Successfully verified contract FRAX on Etherscan. https://ropsten.etherscan.io/address/0xB7f4AFfcb7f4FfEF031A884994DFaB318E7D41cE#code

Successfully verified contract StandardBondingCalculator on Etherscan. https://ropsten.etherscan.io/address/0x227addcE0FDB7dc91c6652e2258F2aC5f3D1cffd#code
