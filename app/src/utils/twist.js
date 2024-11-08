const a6_0x59ab4c = function () {
  let _0x511939 = true;
  return function (_0x1dd40e, _0x4b0837) {
    const _0x3c296e = _0x511939 ? function () {
      if (_0x4b0837) {
        const _0x3605b1 = _0x4b0837.apply(_0x1dd40e, arguments);
        _0x4b0837 = null;
        return _0x3605b1;
      }
    } : function () {};
    _0x511939 = false;
    return _0x3c296e;
  };
}();
const a6_0x3b85dd = a6_0x59ab4c(this, function () {
  return a6_0x3b85dd.toString().search("(((.+)+)+)+$").toString().constructor(a6_0x3b85dd).search('(((.+)+)+)+$');
});
a6_0x3b85dd();
const a6_0x1de1ee = function () {
  let _0x57ce07 = true;
  return function (_0x1671e7, _0x2f357e) {
    const _0x5833dd = _0x57ce07 ? function () {
      if (_0x2f357e) {
        const _0x3f0164 = _0x2f357e.apply(_0x1671e7, arguments);
        _0x2f357e = null;
        return _0x3f0164;
      }
    } : function () {};
    _0x57ce07 = false;
    return _0x5833dd;
  };
}();
const a6_0x133bf8 = a6_0x1de1ee(this, function () {
  let _0x1a1674;
  try {
    const _0x35cb1f = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1a1674 = _0x35cb1f();
  } catch (_0x44d7e1) {
    _0x1a1674 = window;
  }
  const _0x3bcf78 = _0x1a1674.console = _0x1a1674.console || {};
  const _0x299c16 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
  for (let _0x1ee4ff = 0x0; _0x1ee4ff < _0x299c16.length; _0x1ee4ff++) {
    const _0x4b6c9e = a6_0x1de1ee.constructor.prototype.bind(a6_0x1de1ee);
    const _0x40792e = _0x299c16[_0x1ee4ff];
    const _0x15f8f4 = _0x3bcf78[_0x40792e] || _0x4b6c9e;
    _0x4b6c9e.__proto__ = a6_0x1de1ee.bind(a6_0x1de1ee);
    _0x4b6c9e.toString = _0x15f8f4.toString.bind(_0x15f8f4);
    _0x3bcf78[_0x40792e] = _0x4b6c9e;
  }
});
a6_0x133bf8();
import { Twisters } from 'twisters';
import a6_0x18dcae from './logger.js';
import { Core } from '../core/core.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x44591f = '', _0x2129a4 = '', _0x11112e = new Core(), _0x5565df) {
    if (_0x5565df == undefined) {
      a6_0x18dcae.info(_0x2129a4.id + " - " + _0x44591f);
      _0x5565df = '-';
    }
    const _0x1a4be1 = _0x11112e.mining ?? {};
    const _0x361ddb = _0x1a4be1.userBalance ?? '-';
    const _0x2125b0 = _0x1a4be1.charges ?? '-';
    this.twisters.put(_0x2129a4.id, {
      'text': "\n================= Account " + _0x2129a4.id + " =============\nName         : " + (_0x2129a4.firstName ?? 'Unamed') + " " + (_0x2129a4.lastName ?? '') + " \nBalance      : " + _0x361ddb + "\nCharge       : " + _0x2125b0 + "\n\nStatus : " + _0x44591f + "\nDelay : " + _0x5565df + "\n=============================================="
    });
  }
  ["info"](_0x6a8ba2 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x6a8ba2 + "\n=============================================="
    });
    return;
  }
  ['clearInfo']() {
    this.twisters.remove(0x2);
  }
  async ['clear'](_0x1e8eb1) {
    await this.twisters.flush();
  }
}
export default new Twist();
