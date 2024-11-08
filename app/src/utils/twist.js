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
