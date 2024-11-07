const a0_0x4dd054 = function () {
  let _0x432211 = true;
  return function (_0x2d7453, _0x43cacb) {
    const _0x3112c8 = _0x432211 ? function () {
      if (_0x43cacb) {
        const _0x15502f = _0x43cacb.apply(_0x2d7453, arguments);
        _0x43cacb = null;
        return _0x15502f;
      }
    } : function () {};
    _0x432211 = false;
    return _0x3112c8;
  };
}();
const a0_0x5df8c9 = a0_0x4dd054(this, function () {
  return a0_0x5df8c9.toString().search("(((.+)+)+)+$").toString().constructor(a0_0x5df8c9).search('(((.+)+)+)+$');
});
a0_0x5df8c9();
const a0_0x5d4e06 = function () {
  let _0x203705 = true;
  return function (_0x59f55b, _0x329c32) {
    const _0x4a3653 = _0x203705 ? function () {
      if (_0x329c32) {
        const _0x5baa78 = _0x329c32.apply(_0x59f55b, arguments);
        _0x329c32 = null;
        return _0x5baa78;
      }
    } : function () {};
    _0x203705 = false;
    return _0x4a3653;
  };
}();
const a0_0x1765a8 = a0_0x5d4e06(this, function () {
  let _0x1070c9;
  try {
    const _0x3efb1 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1070c9 = _0x3efb1();
  } catch (_0x50d9ea) {
    _0x1070c9 = window;
  }
  const _0x50915f = _0x1070c9.console = _0x1070c9.console || {};
  const _0x12c46b = ['log', 'warn', 'info', "error", "exception", 'table', 'trace'];
  for (let _0x1fe498 = 0x0; _0x1fe498 < _0x12c46b.length; _0x1fe498++) {
    const _0x404f4c = a0_0x5d4e06.constructor.prototype.bind(a0_0x5d4e06);
    const _0x67e029 = _0x12c46b[_0x1fe498];
    const _0x17b7ff = _0x50915f[_0x67e029] || _0x404f4c;
    _0x404f4c.__proto__ = a0_0x5d4e06.bind(a0_0x5d4e06);
    _0x404f4c.toString = _0x17b7ff.toString.bind(_0x17b7ff);
    _0x50915f[_0x67e029] = _0x404f4c;
  }
});
a0_0x1765a8();
import { Config } from './config/config.js';
import { proxyList } from './config/proxy_list.js';
import { Core } from './src/core/core.js';
import { Telegram } from './src/core/telegram.js';
import { Helper } from './src/utils/helper.js';
import a0_0x253960 from './src/utils/logger.js';
import a0_0x2d58bd from './src/utils/twist.js';
async function operation(_0x375d2f, _0x103b6e, _0x431c1c, _0x1c3684) {
  try {
    const _0x4213fc = new Core(_0x375d2f, _0x103b6e, _0x431c1c, _0x1c3684);
    const _0x1ec3b2 = Config.REPAINTER ?? true;
    const _0x162873 = Config.TEMPLATE ?? {
      'templateID': 0x4decc265,
      'startArea': 0x1d921,
      'endArea': 0x26600,
      'correctColor': "#00CC78"
    };
    await _0x4213fc.getMiningStatus(true);
    await _0x4213fc.checkUserSelectedTemplate(_0x162873.templateID);
    const _0x3fa3b5 = Helper.random(0x0, 0x7530);
    await Helper.delay(_0x3fa3b5, _0x375d2f, "Random Delay " + Helper.msToTime(_0x3fa3b5) + ", To Make Sure All Account Not Draw On Same pixel...", _0x4213fc);
    while (_0x4213fc.mining.charges != 0x0) {
      if (_0x1ec3b2 == true) {
        let _0x13d948;
        if (_0x4213fc.found == false) {
          if (_0x4213fc.template) {
            const _0x165e50 = await _0x4213fc.getRandomPixelFromCoverage(_0x162873.startArea + Helper.random(0x1, 0x14), _0x162873.endArea);
            _0x13d948 = [..._0x165e50];
            for (const _0x2a23f6 of _0x13d948) {
              await Helper.delay(0x0, _0x375d2f, "Searching on Template Area...", _0x4213fc);
              await _0x4213fc.checkPixel(_0x2a23f6, _0x162873.correctColor);
              if (_0x4213fc.found == true) {
                await _0x4213fc.startPainting(_0x2a23f6, _0x162873.correctColor);
                break;
              }
            }
          } else {
            await _0x4213fc.selectTemplate();
          }
        }
        if (_0x4213fc.found == false) {
          await Helper.delay(0x3e8, _0x375d2f, "Selecting a Global Template...", _0x4213fc);
          await Helper.delay(0xbb8, _0x375d2f, "Finding incorrect pixels colors from coverage Area 1...", _0x4213fc);
          const _0x1593a8 = await _0x4213fc.getRandomPixelFromCoverage(0x4108e, 0x49180);
          const _0x1e7456 = await _0x4213fc.getRandomPixelFromCoverage(0x4bc16, 0x53d08);
          _0x13d948 = [..._0x1593a8, ..._0x1e7456];
          for (const _0x4f5d07 of _0x13d948) {
            await Helper.delay(0x0, _0x375d2f, "Searching on Area 1...", _0x4213fc);
            await _0x4213fc.checkPixel(_0x4f5d07, '#00756F');
            if (_0x4213fc.found == true) {
              await _0x4213fc.startPainting(_0x4f5d07, '#00756F');
              break;
            }
          }
        }
        if (_0x4213fc.found == false) {
          const _0x4ffca2 = Helper.random(0x0, _0x13d948.length);
          await _0x4213fc.startPainting(_0x13d948[_0x4ffca2], '#00756F');
        }
        _0x4213fc.found = false;
      } else {
        const _0x16dc3 = Helper.random(0x1, 0xf4240);
        await _0x4213fc.startPainting(_0x16dc3);
      }
    }
    await _0x4213fc.claimMining();
    const _0x52ca7b = Config.USEAUTOUPGRADE ?? true;
    if (_0x52ca7b) {
      if (_0x4213fc.mining.boosts.reChargeSpeed != 0x7) {
        await _0x4213fc.upgrade('reChargeSpeed');
      }
      if (_0x4213fc.mining.boosts.paintReward != 0xb) {
        await _0x4213fc.upgrade('paintReward');
      }
      if (_0x4213fc.mining.boosts.energyLimit != 0x7) {
        await _0x4213fc.upgrade('energyLimit');
      }
    }
    const _0x40e834 = Config.MODE ?? 0x2;
    const _0x3c3b4a = Helper.random(0xbb8, 0x2710);
    const _0x3bc9d3 = Config.CUSTOMDELAYINMIN ? Config.CUSTOMDELAYINMIN * 0xea60 : undefined;
    if (_0x40e834 == 0x2) {
      await Helper.delay(_0x3bc9d3 ? _0x3bc9d3 : _0x3c3b4a + _0x4213fc.mining.reChargeTimer, _0x375d2f, "Account " + _0x375d2f.id + " Processing Complete, Restarting in " + Helper.msToTime(_0x3c3b4a + _0x4213fc.mining.reChargeTimer), _0x4213fc);
      await operation(_0x375d2f, _0x103b6e, _0x431c1c, _0x1c3684);
    } else {
      await Helper.delay(0x2710, _0x375d2f, "Account " + _0x375d2f.id + " Processing Complete, Continue Using next account in 10 Seconds", _0x4213fc);
      await a0_0x2d58bd.clear(_0x375d2f);
    }
  } catch (_0x19ea1b) {
    if (_0x19ea1b.message.includes("401")) {
      if (_0x375d2f.type == 'query') {
        await Helper.delay(0x3e8, _0x375d2f, "Error : " + _0x19ea1b.message + ", Query Is Expired, Please Get New Query");
      } else {
        await Helper.delay(0x1388, _0x375d2f, "Error : " + _0x19ea1b.message + ", Query Is Expired, Getting New Query in 5 Seconds");
        const _0x524474 = new Telegram();
        await _0x524474.useSession(_0x375d2f.accounts, _0x1c3684);
        const _0x4a27df = await _0x524474.client.getMe();
        _0x4a27df.type = 'sessions';
        _0x4a27df.accounts = _0x375d2f.accounts;
        _0x4a27df.id = _0x4a27df.id.value;
        const _0x4254b5 = await _0x524474.resolvePeer(_0x4a27df).then(async () => {
          return await _0x524474.initWebView();
        })['catch'](_0x51fcca => {
          throw _0x51fcca;
        });
        const _0x500944 = Helper.queryToJSON(_0x4254b5);
        await _0x524474.disconnect();
        await Helper.delay(0x1388, _0x4a27df, "Successfully get new query");
        await operation(_0x4a27df, _0x4254b5, _0x500944, _0x1c3684);
      }
    } else if (_0x19ea1b.message.includes("API")) {
      await Helper.delay(0x1388, _0x375d2f, "Error : " + _0x19ea1b.message + ", Exiting bot...");
      await process.exit();
    } else {
      await Helper.delay(0x1388, _0x375d2f, "Error : " + _0x19ea1b.message + ", Retrying after 5 Seconds");
      await operation(_0x375d2f, _0x103b6e, _0x431c1c, _0x1c3684);
    }
  }
}
let init = false;
async function startBot() {
  return new Promise(async (_0x3b98da, _0x3adef2) => {
    try {
      a0_0x253960.info("BOT STARTED");
      const _0x2b5451 = await new Telegram();
      if (init == false) {
        await _0x2b5451.init();
        init = true;
      }
      const _0x558654 = Helper.getSession('accounts');
      const _0x5ba403 = [];
      if (proxyList.length > 0x0) {
        if (_0x558654.length != proxyList.length) {
          _0x3adef2("You have " + _0x558654.length + " Session but you provide " + proxyList.length + " Proxy");
        }
      }
      for (const _0x45ea1c of _0x558654) {
        const _0x13307f = _0x558654.indexOf(_0x45ea1c);
        const _0xdb7fcd = proxyList.length > 0x0 ? proxyList[_0x13307f] : undefined;
        if (!_0x45ea1c.includes("query")) {
          await _0x2b5451.useSession('accounts/' + _0x45ea1c, _0xdb7fcd);
          _0x2b5451.session = _0x45ea1c;
          const _0xd669a7 = await _0x2b5451.client.getMe();
          _0xd669a7.type = "sessions";
          _0xd669a7.accounts = "accounts/" + _0x45ea1c;
          _0xd669a7.id = _0xd669a7.id.value;
          const _0x2df70f = await _0x2b5451.resolvePeer(_0xd669a7).then(async () => {
            return await _0x2b5451.initWebView();
          })['catch'](_0x107983 => {
            throw _0x107983;
          });
          const _0x2366cc = Helper.queryToJSON(_0x2df70f);
          await _0x2b5451.disconnect();
          _0x5ba403.push([_0xd669a7, _0x2df70f, _0x2366cc, _0xdb7fcd]);
        } else {
          let _0x1147a4 = Helper.readQueryFile('accounts/' + _0x45ea1c + '/query.txt');
          let _0x374c86 = Helper.queryToJSON(_0x1147a4);
          if (!_0x374c86.user) {
            _0x374c86 = await Helper.queryToJSON(await Helper.launchParamToQuery(_0x1147a4));
            _0x1147a4 = await Helper.launchParamToQuery(_0x1147a4);
          }
          const _0xbbe735 = _0x374c86.user;
          _0xbbe735.type = 'query';
          _0xbbe735.firstName = _0xbbe735.first_name;
          _0xbbe735.lastName = _0xbbe735.last_name;
          _0x5ba403.push([_0xbbe735, _0x1147a4, _0x374c86, _0xdb7fcd]);
        }
      }
      const _0x4bd0f7 = Config.MODE ?? 0x2;
      if (_0x4bd0f7 == 0x2) {
        const _0x2c4e08 = _0x5ba403.map(async _0x5c15db => {
          await operation(_0x5c15db[0x0], _0x5c15db[0x1], _0x5c15db[0x2], _0x5c15db[0x3]);
        });
        await Promise.all(_0x2c4e08);
      } else {
        while (true) {
          for (const _0x15583a of _0x5ba403) {
            await operation(_0x15583a[0x0], _0x15583a[0x1], _0x15583a[0x2], _0x15583a[0x3]);
          }
          const _0x3dbd29 = Config.CUSTOMDELAYINMIN ? Config.CUSTOMDELAYINMIN * 0xea60 : undefined;
          await Helper.delay(_0x3dbd29 ? _0x3dbd29 : 600000, undefined, "All Account Processing Complete");
          await a0_0x2d58bd.clearInfo();
          console.log();
          console.log();
          console.log("-> New Iteration");
        }
      }
      _0x3b98da();
    } catch (_0x43e5a3) {
      a0_0x253960.info("BOT STOPPED");
      a0_0x253960.error(JSON.stringify(_0x43e5a3));
      _0x3adef2(_0x43e5a3);
    }
  });
}
(async () => {
  try {
    a0_0x253960.clear();
    a0_0x253960.info('');
    a0_0x253960.info("Application Started");
    console.log("NOTPIXEL BOT");
    console.log();
    console.log("Author : Nofan Rambe");
    console.log("");
    console.log("Github: http://github.com/Rambeboy");
    console.log("Dont forget to run git pull to keep up to date");
    console.log();
    console.log();
    Helper.showSkelLogo();
    await startBot();
  } catch (_0x18a18e) {
    await a0_0x2d58bd.clear();
    await a0_0x2d58bd.clearInfo();
    console.log("Error During executing bot", _0x18a18e);
    await startBot();
  }
})();
