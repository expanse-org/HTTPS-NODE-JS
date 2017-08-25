# HTTPS-NODE-JS

## Getting Started
Start your expanse node.

`gexp --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --rpcapi="eth,net,web3,utils" --maxpeers 200 console`

## Install PM2
`npm install -g pm2`

## Start HTTPS NODE PROXY
```
cd HTTPS-NODE-JS
pm2 start index.js
```
