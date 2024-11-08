import a3_0x5d29b9 from 'input';
import { Helper } from '../utils/helper.js';
import { Api, TelegramClient } from 'telegram';
import { StoreSession } from 'telegram/sessions/StoreSession.js';
import a3_0x4a33e1 from '../utils/logger.js';
import { FloodWaitError } from 'telegram/errors/RPCErrorList.js';
import { Config } from '../../config/config.js';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { LogLevel } from 'telegram/extensions/Logger.js';
export class Telegram {
  ["storeSession"];
  constructor() {
    this.accountName = "accounts";
    this.url = "https://image.notpx.app/";
    this.bot = 'notpx_bot';
  }
  async ['init']() {
    try {
      await this.onBoarding();
    } catch (_0x2946e6) {
      console.log(_0x2946e6);
      a3_0x4a33e1.error('' + JSON.stringify(_0x2946e6));
      throw _0x2946e6;
    }
  }
  async ['onBoarding']() {
    try {
      let _0x54b636 = "Welcome to Bot \nBy : Widiskel \n \nLets getting started.\n \nYour Session List:\n";
      const _0x4fc538 = Helper.getSession('accounts');
      if (_0x4fc538.length == 0x0) {
        _0x54b636 += "<empty>";
      } else {
        for (const _0x37b83f of _0x4fc538) {
          _0x54b636 += "- " + _0x37b83f + "\n";
        }
      }
      _0x54b636 += "\n \nPlease Choose a menu: \n";
      _0x54b636 += "\n \n1. Create Account \n2. Reset Account \n3. Start Bot\n4. Query modification\n \nInput your choice :";
      const _0x57d304 = await a3_0x5d29b9.text(_0x54b636);
      if (_0x57d304 == 0x1) {
        await this.accountType();
      } else {
        if (_0x57d304 == 0x2) {
          Helper.resetAccounts();
          await Helper.delay(0xbb8);
          await this.onBoarding();
        } else {
          if (_0x57d304 == 0x3) {
            if (Helper.getSession(this.accountName)?.['length'] == 0x0) {
              console.info("You don't have any Accounts, please create first");
              await this.onBoarding();
            }
          } else if (_0x57d304 == 0x4) {
            await this.queryModificaiton();
          } else {
            console.error("Invalid input, Please try again");
            await this.onBoarding();
          }
        }
      }
    } catch (_0xaf0401) {
      throw _0xaf0401;
    }
  }
  async ["queryModificaiton"]() {
    try {
      const _0x32bd8c = Helper.getSession('accounts');
      const _0x32c427 = _0x32bd8c.filter(_0x1800e8 => _0x1800e8.includes('query'));
      let _0x205613 = "Your Query Account List :\n \n";
      for (const _0x1f7fbf of _0x32c427) {
        _0x205613 += _0x32bd8c.indexOf(_0x1f7fbf) + 0x1 + ". " + _0x1f7fbf + "\n";
      }
      if (_0x32c427.length == 0x0) {
        console.log("You dont have any Query Account.");
        await this.onBoarding();
      } else {
        _0x205613 += "\n \nPlease Select Query Account for modification:";
      }
      const _0x3f25fa = await a3_0x5d29b9.text(_0x205613);
      if (_0x32c427[_0x3f25fa - 0x1] != undefined) {
        const _0x2f67a6 = _0x32c427[_0x3f25fa - 0x1];
        this.accountName = "accounts/" + _0x2f67a6;
        const _0x448c64 = "Old Query : " + Helper.readQueryFile(this.accountName + "/query.txt") + "\n \nPlease Enter New Query ";
        const _0x31c485 = await a3_0x5d29b9.text(_0x448c64);
        await Helper.saveQueryFile(this.accountName, _0x31c485);
        await Helper.delay(0xbb8);
        await this.onBoarding();
      } else {
        console.error("Invalid input, Please try again");
        await this.queryModificaiton();
      }
    } catch (_0x169fc5) {
      throw _0x169fc5;
    }
  }
  async ["sessionCreation"]() {
    try {
      if (Config.TELEGRAM_APP_ID == undefined || Config.TELEGRAM_APP_HASH == undefined) {
        throw new Error("Please configure your TELEGRAM_APP_ID and TELEGRAM_APP_HASH first");
      }
      const _0x5adefe = Helper.getSession("accounts");
      let _0x772260 = "Your Account List :\n \n";
      for (const _0x2e6e7c of _0x5adefe) {
        _0x772260 += _0x5adefe.indexOf(_0x2e6e7c) + 0x1 + ". " + _0x2e6e7c + "\n";
      }
      if (_0x5adefe.length == 0x0) {
        _0x772260 += "<empty> \n \nPlease enter Session Name :";
      } else {
        _0x772260 += "\n \nYou already have sessions, cancel(CTRL+C) or create new Session :";
      }
      const _0x39b89a = await a3_0x5d29b9.text(_0x772260);
      this.accountName = Helper.createDir('sessions-' + _0x39b89a);
      await this.useSession(this.accountName);
      await this.disconnect();
      a3_0x4a33e1.info("Session " + this.accountName + " - Created");
      console.log("Session " + _0x39b89a + " - Created, Please Restart The Bot Again");
      this.storeSession.save();
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x251ca5) {
      throw _0x251ca5;
    }
  }
  async ['queryCreation']() {
    try {
      const _0x24e6f9 = Helper.getSession("accounts");
      let _0x5e3a34 = "Your Account List :\n \n";
      for (const _0x18f435 of _0x24e6f9) {
        _0x5e3a34 += _0x24e6f9.indexOf(_0x18f435) + 0x1 + ". " + _0x18f435 + "\n";
      }
      if (_0x24e6f9.length == 0x0) {
        _0x5e3a34 += "<empty> \n \nPlease enter Account Name :";
      } else {
        _0x5e3a34 += "\n \nYou already have Account, cancel(CTRL+C) or create new Account :";
      }
      const _0x19e75d = await a3_0x5d29b9.text(_0x5e3a34);
      this.accountName = Helper.createDir('query-' + _0x19e75d);
      const _0x5c3a11 = await a3_0x5d29b9.text("Please Enter Telegram Query : ");
      await Helper.saveQueryFile(this.accountName, _0x5c3a11);
      a3_0x4a33e1.info("Query " + this.accountName + " - Created");
      console.log("Query " + _0x19e75d + " - Created, Please Restart The Bot Again");
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x266547) {
      throw _0x266547;
    }
  }
  async ['accountType']() {
    try {
      const _0x2d3bc9 = Helper.getSession('accounts');
      let _0x3b1129 = "Your Account List :\n \n";
      if (_0x2d3bc9.length > 0x0) {
        for (const _0x3638d0 of _0x2d3bc9) {
          _0x3b1129 += _0x2d3bc9.indexOf(_0x3638d0) + 0x1 + ". " + _0x3638d0 + "\n";
        }
      } else {
        _0x3b1129 += "<empty>\n";
      }
      _0x3b1129 += "\n \nAvailable Account Type: \n1. Session \n2. Query\n \nPlease Entery Your Choice : ";
      const _0x37e52a = await a3_0x5d29b9.text(_0x3b1129);
      if (_0x37e52a == 0x1) {
        await this.sessionCreation();
      } else {
        if (_0x37e52a == 0x2) {
          await this.queryCreation();
        } else {
          console.log("Invalid Input");
          await this.accountType();
        }
      }
    } catch (_0x32004e) {
      throw _0x32004e;
    }
  }
  async ["useSession"](_0x1f54b0, _0x37889f) {
    try {
      this.proxy = _0x37889f;
      const _0x470040 = {
        'connectionRetries': 0x5
      };
      if (this.proxy) {
        _0x470040.agent = new HttpsProxyAgent(this.proxy);
      }
      this.storeSession = new StoreSession(_0x1f54b0);
      this.client = new TelegramClient(this.storeSession, Config.TELEGRAM_APP_ID, Config.TELEGRAM_APP_HASH, _0x470040);
      this.client.setLogLevel(LogLevel.ERROR);
      this.storeSession.save();
      await this.client.start({
        'phoneNumber': async () => await a3_0x5d29b9.text("Enter your Telegram Phone Number ?"),
        'password': async () => await a3_0x5d29b9.text("Enter your Telegram Password?"),
        'phoneCode': async () => await a3_0x5d29b9.text("Enter your Telegram Verification Code ?"),
        'onError': _0x3eac43 => {
          console.log(_0x3eac43.message);
        }
      });
    } catch (_0x1d98fa) {
      throw _0x1d98fa;
    }
  }
  async ['resolvePeer'](_0x2d09e5) {
    try {
      a3_0x4a33e1.info("Session " + this.session + " - Resolving Peer");
      while (this.peer == undefined) {
        try {
          this.peer = await this.client.getEntity(this.bot);
          break;
        } catch (_0x289eaa) {
          if (_0x289eaa instanceof FloodWaitError) {
            const _0x46a3bf = _0x289eaa.seconds;
            a3_0x4a33e1.warn(this.client.session.serverAddress + " | FloodWait " + _0x289eaa);
            a3_0x4a33e1.info(this.client.session.serverAddress + " | Sleep " + _0x46a3bf + 's');
            await Helper.delay(_0x46a3bf * 0x3e8, _0x2d09e5, this.client.session.serverAddress + " | FloodWait " + _0x289eaa);
          } else {
            throw _0x289eaa;
          }
        }
      }
    } catch (_0x3400be) {
      throw _0x3400be;
    }
  }
  async ['disconnect']() {
    await this.client.disconnect();
    await this.client.destroy();
    this.peer = undefined;
    this.accountName = undefined;
  }
  async ['initWebView']() {
    try {
      const _0x481dc5 = await this.client.invoke(new Api.messages.RequestWebView({
        'peer': this.peer,
        'bot': this.peer,
        'fromBotMenu': true,
        'url': this.url,
        'platform': 'android'
      }));
      a3_0x4a33e1.info("Session " + this.session + " - Webview Connected");
      const _0x49c411 = _0x481dc5.url;
      return Helper.getTelegramQuery(_0x49c411, 0x3);
    } catch (_0x1a1214) {
      throw _0x1a1214;
    }
  }
    }
