import React from 'react'
import styled from 'styled-components'

import { Controls } from './Redeem'

const WorksFrame = styled.div`
  width: 100%;
  padding: 24px;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  /* line-height: 170%; */
  /* text-align: center; */
`
const Title = styled.p`
  margin-top: 1rem !important;

  font-weight: 600;
  font-size: 16px;
`

const Desc = styled.p`
  line-height: 150%;
  font-size: 14px;
  margin-top: 1rem !important;
  font-weight: 500;
`

export function link(hash) {
  return `https://etherscan.io/tx/${hash}`
}

export const EtherscanLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.viniswapOrange};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`

export default function Works({ closeCheckout }) {
  const tokenName = process.env.REACT_APP_TOKEN_NAME;
  const tokenSupply = process.env.REACT_APP_TOKEN_SUPPLY;
  return (
    <WorksFrame>
      <Controls closeCheckout={closeCheckout} theme={'dark'} />

      <Title>How it works:</Title>
      <Desc>
        $MTB is a token that entitles you to 1 real pair of limited edition wine, shipped anywhere in the world.
      </Desc>
      <Desc>
        You can sell the token back at any time. To get a <i>real</i> pair, redeem a $MTB token
      </Desc>
      <Title>How it's priced:</Title>
      <Desc>
        $MTB tokens are listed starting at $168 USD. Each buy/sell will move the price. The increase or decrease
        follows a bonding curve. $MTB will eventually find an equillibrium based on market demand.
      </Desc>
      <Title>Unipay:</Title>
      <Desc>
        Buying or selling wine uses the uniswap protocol and accepts any token input as a payment method. The pool of
        MTB is a uniswap pool where {tokenSupply} {tokenName} tokens were deposited along with the starting value of ETH.{' '}
      </Desc>
      <Desc>
        <a href="https://docs.uniswap.io/" target="_blank" rel="noopener noreferrer">
          Learn more about how uniswap works.
        </a>
      </Desc>
      <Desc>
        <a href="mailto:contact@uniswap.io" target="_blank" rel="noopener noreferrer">
          Get in touch.
        </a>
      </Desc>
    </WorksFrame>
  )
}
