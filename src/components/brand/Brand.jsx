import React from 'react'
import {google,
  slack,
  atlassian,
  shopify} from './import';
import './brand.css'
const Brand = () => {
  return (
    <div  className="gpt3__brand">
      <div>
        <img src = {slack}/>
      </div>
      <div>
        <img src = {google}/>
      </div>
      <div>
        <img src = {atlassian}/>
      </div>
      <div>
        <img src = {shopify}/>
      </div>
    </div>
  )
};

export default Brand;
