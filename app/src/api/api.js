const a1_0x230ac7 = function () {
  let _0x487454 = true;
  return function (_0x5e1c80, _0x38e2fd) {
    const _0x22665d = _0x487454 ? function () {
      if (_0x38e2fd) {
        const _0xca6517 = _0x38e2fd.apply(_0x5e1c80, arguments);
        _0x38e2fd = null;
        return _0xca6517;
      }
    } : function () {};
    _0x487454 = false;
    return _0x22665d;
  };
}();
const a1_0x16e034 = a1_0x230ac7(this, function () {
  return a1_0x16e034.toString().search("(((.+)+)+)+$").toString().constructor(a1_0x16e034).search('(((.+)+)+)+$');
});
a1_0x16e034();
const a1_0x37da8e = function () {
  let _0x3f503e = true;
  return function (_0x662971, _0x13aa50) {
    const _0x16dc05 = _0x3f503e ? function () {
      if (_0x13aa50) {
        const _0x50bab1 = _0x13aa50.apply(_0x662971, arguments);
        _0x13aa50 = null;
        return _0x50bab1;
      }
    } : function () {};
    _0x3f503e = false;
    return _0x16dc05;
  };
}();
const a1_0x55bf0c = a1_0x37da8e(this, function () {
  let _0x2d498c;
  try {
    const _0xb34c77 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2d498c = _0xb34c77();
  } catch (_0xa6d6b0) {
    _0x2d498c = window;
  }
  const _0x53428a = _0x2d498c.console = _0x2d498c.console || {};
  const _0xbce639 = ['log', 'warn', 'info', 'error', 'exception', 'table', "trace"];
  for (let _0x50fac5 = 0x0; _0x50fac5 < _0xbce639.length; _0x50fac5++) {
    const _0x34b3dc = a1_0x37da8e.constructor.prototype.bind(a1_0x37da8e);
    const _0x1c0e0d = _0xbce639[_0x50fac5];
    const _0x55586e = _0x53428a[_0x1c0e0d] || _0x34b3dc;
    _0x34b3dc.__proto__ = a1_0x37da8e.bind(a1_0x37da8e);
    _0x34b3dc.toString = _0x55586e.toString.bind(_0x55586e);
    _0x53428a[_0x1c0e0d] = _0x34b3dc;
  }
});
a1_0x55bf0c();
import a1_0x1fa368 from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Helper } from '../utils/helper.js';
import a1_0x584556 from '../utils/logger.js';
import 'node-fetch';
export class API {
  constructor(_0x1fd34e, _0x48e9f4, _0x1bfaa, _0x39ff2b, _0x57ba31, _0x5e072c) {
    this.url = _0x1bfaa;
    this.host = _0x39ff2b;
    this.origin = _0x57ba31;
    this.referer = _0x5e072c;
    this.ua = Helper.randomUserAgent();
    this.query = _0x1fd34e;
    this.proxy = _0x48e9f4;
    this.axiosInstance = a1_0x1fa368.create({
      'baseURL': _0x1bfaa,
      'headers': this.generateHeaders()
    });
  }
  ["generateHeaders"](_0x19b623 = this.query) {
    const _0x2a01fa = {
      'Accept': "application/json, text/plain, */*",
      'Accept-Language': "en-US,en;q=0.9,id;q=0.8",
      'Content-Type': "application/json",
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Site': "same-site",
      'Sec-Fetch-Mode': 'cors',
      'User-Agent': this.ua,
      'Host': this.host,
      'Origin': this.origin,
      'Referer': this.referer
    };
    if (_0x19b623) {
      _0x2a01fa.Authorization = "InitData " + _0x19b623;
    }
    return _0x2a01fa;
  }
  async ['fetch'](_0x46f705, _0x5a0129 = 'GET', _0x1da3c3, _0x4204de = {}, _0x34bb23 = {}) {
    try {
      const _0x40cad8 = '' + this.url + _0x46f705;
      const _0xcea149 = {
        ..._0x34bb23,
        ...this.generateHeaders(_0x1da3c3)
      };
      a1_0x584556.info(_0x5a0129 + " : " + _0x40cad8 + " " + (this.proxy ? this.proxy : ''));
      a1_0x584556.info("Request Header : " + JSON.stringify(_0xcea149));
      const _0x4805b8 = {
        'method': _0x5a0129,
        'url': _0x40cad8,
        'headers': _0xcea149
      };
      if (this.proxy) {
        _0x4805b8.httpsAgent = new HttpsProxyAgent(this.proxy);
      }
      if (_0x5a0129 !== "GET") {
        _0x4805b8.data = _0x4204de;
        a1_0x584556.info("Request Body : " + JSON.stringify(_0x4204de));
      }
      const _0x5239ec = await this.axiosInstance.request(_0x4805b8);
      a1_0x584556.info("Response : " + _0x5239ec.status + " " + _0x5239ec.statusText);
      const _0x459a1c = {
        'status': _0x5239ec.status,
        ..._0x5239ec.data
      };
      a1_0x584556.info("Response Data : " + JSON.stringify(_0x459a1c));
      return _0x459a1c;
    } catch (_0x274acb) {
      a1_0x584556.error("Error : " + _0x274acb.message);
      if (_0x274acb.status == 0x193) {
        return {
          'status': 0x193,
          ..._0x274acb.response.data
        };
      }
      if (_0x274acb.status == 0x1f7 || _0x274acb.status == 0x194) {
        throw Error("Detect API change Stopping BOT..");
      } else {
        throw _0x274acb;
      }
    }
  }
          }
