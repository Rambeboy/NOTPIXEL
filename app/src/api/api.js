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
