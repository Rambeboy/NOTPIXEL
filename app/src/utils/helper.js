import a4_0x87ad95 from 'moment-timezone';
import a4_0x4dc21a from 'fs';
import a4_0x1eeb10 from 'path';
import { parse } from 'querystring';
import a4_0x27bdee from './twist.js';
export class Helper {
  static ['delay'] = (_0x196e83, _0x54be87, _0x1470df, _0x2f31fb) => {
    return new Promise(_0x58f068 => {
      let _0x30fcfc = _0x196e83;
      if (_0x54be87 != undefined) {
        a4_0x27bdee.log(_0x1470df, _0x54be87, _0x2f31fb, "Delaying for " + this.msToTime(_0x196e83));
      } else {
        a4_0x27bdee.info((_0x1470df ?? '') + " - Delaying for " + this.msToTime(_0x196e83));
      }
      const _0x258ba1 = setInterval(() => {
        _0x30fcfc -= 0x3e8;
        if (_0x54be87 != undefined) {
          a4_0x27bdee.log(_0x1470df, _0x54be87, _0x2f31fb, "Delaying for " + this.msToTime(_0x30fcfc));
        } else {
          a4_0x27bdee.info((_0x1470df ?? '') + " - Delaying for " + this.msToTime(_0x30fcfc));
        }
        if (_0x30fcfc <= 0x0) {
          clearInterval(_0x258ba1);
          _0x58f068();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x258ba1);
        await a4_0x27bdee.clearInfo();
        if (_0x54be87) {
          a4_0x27bdee.log(_0x1470df, _0x54be87, _0x2f31fb);
        }
        _0x58f068();
      }, _0x196e83);
    });
  };
  static ['randomUserAgent']() {
    const _0x1120df = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x1120df[Math.floor(Math.random() * _0x1120df.length)];
  }
  static ['readTime'](_0x10e3e5) {
    const _0x521a4b = a4_0x87ad95.unix(_0x10e3e5);
    return _0x521a4b.format("YYYY-MM-DD HH:mm:ss");
  }
  static ['getCurrentTimestamp']() {
    const _0x363eba = a4_0x87ad95().tz("Asia/Singapore").unix();
    return _0x363eba.toString();
  }
  static ["getSession"](_0x3aec65) {
    try {
      if (!a4_0x4dc21a.existsSync('accounts')) {
        a4_0x4dc21a.mkdirSync('accounts');
      }
      const _0x5533bb = a4_0x4dc21a.readdirSync(a4_0x1eeb10.resolve(_0x3aec65));
      const _0x3d0da1 = [];
      _0x5533bb.forEach(_0x42ff01 => {
        _0x3d0da1.push(_0x42ff01);
      });
      return _0x3d0da1;
    } catch (_0x5ed545) {
      throw Error("Error reading sessions directory: " + _0x5ed545 + ',');
    }
  }
  static ['resetAccounts']() {
    try {
      const _0x310348 = a4_0x1eeb10.resolve('accounts');
      const _0x3aa73a = a4_0x4dc21a.readdirSync(_0x310348);
      console.log("Deleting Accounts...");
      _0x3aa73a.forEach(_0x256ce7 => {
        const _0x47f85b = a4_0x1eeb10.join(_0x310348, _0x256ce7);
        console.log(_0x47f85b);
        a4_0x4dc21a.rm(_0x47f85b, {
          'recursive': true,
          'force': true
        }, _0x2372df => {
          if (_0x2372df) {
            console.error("Error deleting file " + _0x47f85b + ':', _0x2372df);
          }
        });
      });
      console.info("Account reset successfully. Please restart the bot.");
    } catch (_0x39a11f) {
      console.error("Error deleting accounts: " + _0x39a11f);
      throw _0x39a11f;
    }
  }
  static ["getTelegramQuery"](_0x51de1b, _0x4b04fc) {
    const _0x21cbc3 = _0x51de1b.indexOf('#');
    if (_0x21cbc3 === -0x1) {
      throw new Error("No query string found in the URL.");
    }
    const _0x1570ae = _0x51de1b.substring(_0x21cbc3 + 0x1);
    const _0x42b784 = _0x1570ae.split('&');
    const _0x2933da = _0x42b784[0x0].split('&')[0x0].replace('tgWebAppData=', '');
    if (!_0x2933da) {
      throw new Error("Param not found in the query string.");
    }
    if (_0x4b04fc == '1') {
      return _0x2933da;
    } else {
      if (_0x4b04fc == '2') {
        return this.decodeQueryString(_0x2933da);
      } else {
        const _0x2e0937 = this.decodeQueryString(_0x2933da);
        return this.jsonToInitParam(_0x2e0937);
      }
    }
  }
  static ['getQueryFromUrl'](_0x16d3a7) {
    var _0x28a7e0 = decodeURIComponent(iframeElement.src);
    var _0x3c8062 = _0x28a7e0.split('#')[0x1] || '';
    var _0x124b57 = _0x3c8062.split("tgWebAppData=")[0x1] || '';
    var _0x30aa0f = _0x124b57.split('&');
    var _0x37b1d3 = {};
    _0x30aa0f.forEach(_0x3de730 => {
      var [_0x30a91d, _0x2bb800] = _0x3de730.split('=');
      if (_0x30a91d && _0x2bb800) {
        _0x37b1d3[_0x30a91d] = _0x2bb800;
      }
    });
    var _0x5d69e4 = Object.keys(_0x37b1d3).filter(_0x5c46da => !_0x5c46da.includes('tgWebApp')).map(_0x1c75b7 => _0x1c75b7 + '=' + _0x37b1d3[_0x1c75b7]).join('&');
    return _0x5d69e4;
  }
  static ['jsonToInitParam'](_0x5f13c5) {
    const _0x10b6b8 = parse(_0x5f13c5);
    if (_0x10b6b8.user) {
      const _0x49a3be = JSON.parse(_0x10b6b8.user);
      _0x10b6b8.user = encodeURIComponent(JSON.stringify(_0x49a3be));
    }
    const _0x51efc4 = [];
    for (const [_0x25d822, _0x39e210] of Object.entries(_0x10b6b8)) {
      _0x51efc4.push(_0x25d822 + '=' + _0x39e210);
    }
    const _0x34d9a4 = _0x51efc4.join('&');
    return _0x34d9a4;
  }
  static ['decodeQueryString'](_0x40a45e) {
    const _0x19546a = decodeURIComponent(_0x40a45e);
    const _0x32891c = _0x19546a.split('&');
    const _0x193a38 = {};
    _0x32891c.forEach(_0xc0f7e5 => {
      const [_0x5106d4, _0xa3321d] = _0xc0f7e5.split('=');
      if (_0x5106d4 === "user") {
        _0x193a38[_0x5106d4] = JSON.parse(decodeURIComponent(_0xa3321d));
      } else {
        _0x193a38[_0x5106d4] = _0xa3321d;
      }
    });
    const _0x5eebae = [];
    for (const [_0x1fc9d5, _0x4b1fec] of Object.entries(_0x193a38)) {
      if (_0x1fc9d5 === 'user') {
        _0x5eebae.push(_0x1fc9d5 + '=' + JSON.stringify(_0x4b1fec));
      } else {
        _0x5eebae.push(_0x1fc9d5 + '=' + _0x4b1fec);
      }
    }
    return _0x5eebae.join('&');
  }
  static ["createDir"](_0x1397e9) {
    try {
      const _0x3abc33 = a4_0x1eeb10.join('accounts', _0x1397e9);
      if (!a4_0x4dc21a.existsSync('accounts')) {
        a4_0x4dc21a.mkdirSync('accounts');
      }
      a4_0x4dc21a.mkdirSync(_0x3abc33, {
        'recursive': true
      });
      console.log(_0x3abc33);
      return _0x3abc33;
    } catch (_0x11614d) {
      throw new Error("Error creating directory: " + _0x11614d);
    }
  }
  static ['saveQueryFile'](_0x47fd41, _0x77a93) {
    const _0x24cb4d = a4_0x1eeb10.resolve(_0x47fd41, "query.txt");
    a4_0x4dc21a.writeFile(_0x24cb4d, _0x77a93, "utf8", _0x1f0f7e => {
      if (_0x1f0f7e) {
        console.error("Error writing file:", _0x1f0f7e);
      } else {
        console.log("Query File Created/Modified Successfully.");
      }
    });
  }
  static ['random'](_0x3074ee, _0x1d02da) {
    const _0x3132a7 = Math.floor(Math.random() * (_0x1d02da - _0x3074ee + 0x1)) + _0x3074ee;
    return _0x3132a7;
  }
  static ['randomArr'](_0x52788d) {
    return _0x52788d[Math.floor(Math.random() * _0x52788d.length)];
  }
  static ['msToTime'](_0x296651) {
    const _0x5ecd7a = Math.floor(_0x296651 / 3600000);
    const _0x304135 = _0x296651 % 3600000;
    const _0x53e1f2 = Math.floor(_0x304135 / 60000);
    const _0x4a5f3d = _0x304135 % 60000;
    const _0x476e17 = Math.round(_0x4a5f3d / 0x3e8);
    return _0x5ecd7a + " Hours " + _0x53e1f2 + " Minutes " + _0x476e17 + " Seconds";
  }
  static ['queryToJSON'](_0x28f25e) {
    try {
      const _0x2569a9 = {};
      const _0x3c1f63 = _0x28f25e.split('&');
      _0x3c1f63.forEach(_0x122e95 => {
        const [_0x1cea40, _0x5b4cb5] = _0x122e95.split('=');
        if (_0x1cea40 === "user") {
          _0x2569a9[_0x1cea40] = JSON.parse(decodeURIComponent(_0x5b4cb5));
        } else {
          _0x2569a9[_0x1cea40] = decodeURIComponent(_0x5b4cb5);
        }
      });
      return _0x2569a9;
    } catch (_0x349a0c) {
      throw Error("Invalid Query");
    }
  }
  static ['generateRandomString'](_0x5b6a0a) {
    let _0x58c53c = '';
    const _0x3c4912 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
    for (let _0x3069c1 = 0x0; _0x3069c1 < _0x5b6a0a; _0x3069c1++) {
      _0x58c53c += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0x3c4912));
    }
    return _0x58c53c;
  }
  static ['readQueryFile'](_0x4fbbda) {
    try {
      const _0x1f682c = a4_0x1eeb10.resolve(_0x4fbbda);
      const _0x53e9f1 = a4_0x4dc21a.readFileSync(_0x1f682c, 'utf8');
      return _0x53e9f1;
    } catch (_0xe349fd) {
      console.log("No query.txt Files Found");
    }
  }
  static ['launchParamToQuery'](_0x3ef2bd) {
    const _0x350488 = new URLSearchParams(_0x3ef2bd);
    let _0x34649d = decodeURIComponent(_0x350488.get('tgWebAppData'));
    const _0x36dcca = new URLSearchParams(_0x34649d);
    let _0x4c3b55 = decodeURIComponent(_0x36dcca.get('user'));
    let _0x123e03 = JSON.parse(_0x4c3b55);
    const _0x2bd099 = {
      'query_id': _0x36dcca.get("query_id"),
      'user': _0x123e03,
      'auth_date': _0x36dcca.get('auth_date'),
      'hash': _0x36dcca.get('hash')
    };
    const _0x199d19 = JSON.stringify(_0x2bd099.user);
    const _0x5eac8f = encodeURIComponent(_0x199d19);
    let _0x3bbac7 = '';
    if (_0x2bd099.query_id) {
      _0x3bbac7 += 'query_id=' + encodeURIComponent(_0x2bd099.query_id) + '&';
    }
    _0x3bbac7 += "user=" + _0x5eac8f + "&auth_date=" + encodeURIComponent(_0x2bd099.auth_date) + '&hash=' + encodeURIComponent(_0x2bd099.hash);
    return _0x3bbac7;
  }
  static ['showSkelLogo']() {
    console.log("NOFAN RAMBE");
  }
                        }
