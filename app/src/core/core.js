const a2_0x58b01e = function () {
  let _0x781ef7 = true;
  return function (_0x3f54c4, _0x518158) {
    const _0x1f8167 = _0x781ef7 ? function () {
      if (_0x518158) {
        const _0x7de033 = _0x518158.apply(_0x3f54c4, arguments);
        _0x518158 = null;
        return _0x7de033;
      }
    } : function () {};
    _0x781ef7 = false;
    return _0x1f8167;
  };
}();
const a2_0x4f861b = a2_0x58b01e(this, function () {
  return a2_0x4f861b.toString().search('(((.+)+)+)+$').toString().constructor(a2_0x4f861b).search('(((.+)+)+)+$');
});
a2_0x4f861b();
const a2_0x31a1cd = function () {
  let _0x456dc0 = true;
  return function (_0x2a8abc, _0x323566) {
    const _0x27866a = _0x456dc0 ? function () {
      if (_0x323566) {
        const _0x5e472e = _0x323566.apply(_0x2a8abc, arguments);
        _0x323566 = null;
        return _0x5e472e;
      }
    } : function () {};
    _0x456dc0 = false;
    return _0x27866a;
  };
}();
const a2_0x5a2798 = a2_0x31a1cd(this, function () {
  const _0x49f132 = function () {
    let _0x3124d0;
    try {
      _0x3124d0 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x19a4e0) {
      _0x3124d0 = window;
    }
    return _0x3124d0;
  };
  const _0x1de849 = _0x49f132();
  const _0x2e29b0 = _0x1de849.console = _0x1de849.console || {};
  const _0x579b76 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
  for (let _0x13132a = 0x0; _0x13132a < _0x579b76.length; _0x13132a++) {
    const _0xcc15d6 = a2_0x31a1cd.constructor.prototype.bind(a2_0x31a1cd);
    const _0x1b3229 = _0x579b76[_0x13132a];
    const _0x23128c = _0x2e29b0[_0x1b3229] || _0xcc15d6;
    _0xcc15d6.__proto__ = a2_0x31a1cd.bind(a2_0x31a1cd);
    _0xcc15d6.toString = _0x23128c.toString.bind(_0x23128c);
    _0x2e29b0[_0x1b3229] = _0xcc15d6;
  }
});
a2_0x5a2798();
import { API } from '../api/api.js';
import { Helper } from '../utils/helper.js';
export class Core extends API {
  constructor(_0x3f701f, _0x107d1b, _0xb79fae, _0x19aa46) {
    super(_0x107d1b, _0x19aa46, "https://notpx.app", "notpx.app", 'https://app.notpx.app', "https://app.notpx.app/");
    this.account = _0x3f701f;
    this.query = _0x107d1b;
    this.queryObj = _0xb79fae;
    this.colorList = ["#e46e6e", '#FFD635', "#7EED56", "#00CCC0", '#51E9F4', '#94B3FF', "#E4ABFF", '#FF99AA', '#FF99AA'];
    this.completeGameErrorCount = 0x0;
    this.upgradable = {
      'reChargeSpeed': true,
      'energyLimit': true,
      'paintReward': true
    };
    this.found = false;
  }
  async ['getMiningStatus'](_0x1c31ff = false) {
    try {
      if (_0x1c31ff) {
        await Helper.delay(0x3e8, this.account, "Getting Mining Status...", this);
      }
      const _0x275512 = await this.fetch('/api/v1/mining/status', 'GET');
      if (_0x275512.status == 0xc8) {
        this.mining = _0x275512;
        if (_0x1c31ff) {
          await Helper.delay(0x7d0, this.account, "Successfully Get Mining Status", this);
        }
      } else {
        throw Error("Failed To Get Mining Status");
      }
    } catch (_0x1da6ed) {
      throw _0x1da6ed;
    }
  }
  async ["getRandomPixelFromCoverage"](_0x348b52, _0x7252be) {
    const _0x238ff3 = [];
    const _0x1a22f4 = _0x348b52 % 0x3e8;
    const _0x5275c4 = Math.floor(_0x348b52 / 0x3e8);
    const _0xa365c4 = _0x7252be % 0x3e8;
    const _0x263e51 = Math.floor(_0x7252be / 0x3e8);
    for (let _0x4b63d7 = _0x5275c4; _0x4b63d7 <= _0x263e51; _0x4b63d7++) {
      for (let _0x52d07c = _0x4b63d7 === _0x5275c4 ? _0x1a22f4 : 0x0; _0x52d07c <= (_0x4b63d7 === _0x263e51 ? _0xa365c4 : 999); _0x52d07c++) {
        const _0x399d5e = _0x4b63d7 * 0x3e8 + _0x52d07c;
        _0x238ff3.push(_0x399d5e);
      }
    }
    return _0x238ff3;
  }
  async ['checkPixel'](_0x29ae81, _0x124e52 = '#000000') {
    try {
      const _0x1b4f60 = await this.fetch('/api/v1/image/get/' + _0x29ae81, "GET", undefined);
      if (_0x1b4f60.status == 0xc8) {
        if (_0x1b4f60.pixel.color != _0x124e52) {
          await Helper.delay(0x3e8, this.account, "Found Incorrect Pixel " + _0x29ae81 + " -> Current Color : " + _0x1b4f60.pixel.color + " , Correct Color : " + _0x124e52 + '...', this);
          this.found = true;
        } else {
          this.found = false;
        }
      } else {
        this.found = false;
      }
    } catch (_0x6133ee) {
      this.found = false;
      if (_0x6133ee.message.includes("401")) {
        throw _0x6133ee;
      }
    }
  }
  async ['startPainting'](_0x2f63dc, _0x18b0c9 = '#000000') {
    try {
      await Helper.delay(0x3e8, this.account, "Start Painting On Block No " + _0x2f63dc + '...', this);
      const _0xb13c7c = {
        'pixelId': _0x2f63dc,
        'newColor': _0x18b0c9
      };
      const _0x2807ed = await this.fetch('/api/v1/repaint/start', 'POST', undefined, _0xb13c7c);
      if (_0x2807ed.status == 0xc8) {
        await Helper.delay(0xbb8, this.account, "Successfully Painting On Block " + _0x2f63dc + ", with color " + _0xb13c7c.newColor + " \nGot " + Math.ceil(_0x2807ed.balance - this.mining.userBalance) + " Points", this);
        await this.getMiningStatus();
      } else {
        await Helper.delay(0x7d0, this.account, "Failed to Painting on Block " + _0x2f63dc, this);
      }
    } catch (_0x599596) {
      if (_0x599596.message.includes("fetch failed")) {
        await Helper.delay(0x7d0, this.account, "Failed to Painting on Block " + _0x2f63dc + " - " + _0x599596.message, this);
      } else {
        throw _0x599596;
      }
    }
  }
  async ['selectTemplate'](_0x1e6404) {
    try {
      await Helper.delay(0x3e8, this.account, "Selecting " + _0x1e6404 + " Template...", this);
      const _0x659d50 = await this.fetch('/api/v1/image/template/' + _0x1e6404, 'GET', undefined);
      if (_0x659d50.status == 0xc8) {
        await Helper.delay(0x3e8, this.account, _0x1e6404 + " Template Selected", this);
        await Helper.delay(0x7d0, this.account, "Subscribing " + _0x1e6404 + " Template", this);
        const _0x424e23 = await this.fetch('/api/v1/image/template/subscribe/' + _0x1e6404, 'PUT', undefined);
        if (_0x424e23.status == 0xc8 || _0x424e23.status == 0xcc) {
          await Helper.delay(0x3e8, this.account, "Successfully Subscribing " + _0x1e6404 + " Template", this);
          this.template = true;
        } else {
          if (_0x424e23.status == 0x193) {
            this.template = true;
          } else {
            if (_0x424e23.status == 0xcb && _0x424e23.status == 0x1f8) {
              await this.selectTemplate(_0x1e6404);
            } else {
              await Helper.delay(0x3e8, this.account, "Failed to Subscribe " + _0x1e6404 + " Template - " + _0x424e23.error, this);
            }
          }
        }
      } else {
        await Helper.delay(0x7d0, this.account, "Failed to Select Pumpkin Template", this);
      }
    } catch (_0xe48d7c) {
      throw _0xe48d7c;
    }
  }
  async ["checkUserSelectedTemplate"](_0x5b75e3) {
    try {
      await Helper.delay(0x3e8, this.account, "Checking User Selected Template...", this);
      const _0x15047e = await this.fetch('/api/v1/image/template/my', "GET");
      if (_0x15047e.status == 0xc8) {
        if (_0x15047e.id == _0x5b75e3) {
          await Helper.delay(0x7d0, this.account, "User Already Use " + _0x5b75e3 + " Template", this);
          this.template = true;
        } else {
          await this.selectTemplate(_0x5b75e3);
        }
      } else {
        if (_0x15047e.status == 0x194) {
          await this.selectTemplate(_0x5b75e3);
        } else {
          await Helper.delay(0x1388, this.account, "Failed To Check User Template...", this);
        }
      }
    } catch (_0x1fa6cb) {
      await Helper.delay(0x7d0, this.account, "Failed To Check User Template, Skipping ...", this);
    }
  }
  async ["claimMining"]() {
    try {
      await Helper.delay(0x3e8, this.account, "Start Claiming Mining Balance...", this);
      const _0xc8ea3b = await this.fetch('/api/v1/mining/claim', 'GET');
      if (_0xc8ea3b.status == 0xc8) {
        await Helper.delay(0x7d0, this.account, "Successfully Claim Mining Reward", this);
        await this.getMiningStatus();
      } else {
        await Helper.delay(0x1388, this.account, "Failed To Claim Mining Reward, Skipping...", this);
      }
    } catch (_0x234a5d) {
      await Helper.delay(0x7d0, this.account, "Failed To Claim Mining Reward, Skipping ...", this);
    }
  }
  async ['completeMissionsX'](_0x416659) {
    try {
      await Helper.delay(0x1f4, this.account, "Try To Completing Missions X " + _0x416659 + '...', this);
      const _0x147ddc = await this.fetch('/api/v1/mining/task/check/x?name=' + _0x416659, 'GET');
      if (_0x147ddc.status == 0xc8) {
        await Helper.delay(0x3e8, this.account, "Successfully Complete Task X " + _0x416659, this);
        await this.getMiningStatus();
      } else {
        await Helper.delay(0x3e8, this.account, "Failed to Complete Task X " + _0x416659 + ", Skipping...", this);
      }
    } catch (_0xd9ab36) {
      await Helper.delay(0x7d0, this.account, "Failed to Complete Task X " + _0x416659 + ", Skipping...", this);
    }
  }
  async ['upgrade'](_0x3653eb) {
    try {
      await Helper.delay(0x1f4, this.account, "Try To Upgrading " + _0x3653eb + '...', this);
      const _0x1822e2 = await this.fetch('/api/v1/mining/boost/check/' + _0x3653eb, 'GET');
      if (_0x1822e2.status == 0xc8) {
        await Helper.delay(0x3e8, this.account, "Successfully Upgrade " + _0x3653eb, this);
        await this.getMiningStatus();
      } else {
        throw Error("Failed To Upgrade " + _0x3653eb);
      }
    } catch (_0x57557e) {
      this.upgradable[_0x3653eb] = false;
      await Helper.delay(0x7d0, this.account, "Failed Upgrade " + _0x3653eb + " - Insufficient balance", this);
    }
  }
}
