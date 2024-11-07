const a5_0x52ef85 = function () {
  let _0x24ea79 = true;
  return function (_0x166ff4, _0x590992) {
    const _0x567693 = _0x24ea79 ? function () {
      if (_0x590992) {
        const _0x34079a = _0x590992.apply(_0x166ff4, arguments);
        _0x590992 = null;
        return _0x34079a;
      }
    } : function () {};
    _0x24ea79 = false;
    return _0x567693;
  };
}();
const a5_0x48d10e = a5_0x52ef85(this, function () {
  return a5_0x48d10e.toString().search('(((.+)+)+)+$').toString().constructor(a5_0x48d10e).search('(((.+)+)+)+$');
});
a5_0x48d10e();
const a5_0x2ba234 = function () {
  let _0x1583b2 = true;
  return function (_0x2cc76b, _0x51c865) {
    const _0x34cd6f = _0x1583b2 ? function () {
      if (_0x51c865) {
        const _0x40f0f8 = _0x51c865.apply(_0x2cc76b, arguments);
        _0x51c865 = null;
        return _0x40f0f8;
      }
    } : function () {};
    _0x1583b2 = false;
    return _0x34cd6f;
  };
}();
const a5_0x55d326 = a5_0x2ba234(this, function () {
  let _0x30f2f4;
  try {
    const _0x4e3ff0 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x30f2f4 = _0x4e3ff0();
  } catch (_0x3be596) {
    _0x30f2f4 = window;
  }
  const _0x4284bb = _0x30f2f4.console = _0x30f2f4.console || {};
  const _0x31f6d7 = ['log', "warn", 'info', 'error', "exception", 'table', 'trace'];
  for (let _0x4248b2 = 0x0; _0x4248b2 < _0x31f6d7.length; _0x4248b2++) {
    const _0x32294c = a5_0x2ba234.constructor.prototype.bind(a5_0x2ba234);
    const _0x49b5d7 = _0x31f6d7[_0x4248b2];
    const _0x578669 = _0x4284bb[_0x49b5d7] || _0x32294c;
    _0x32294c.__proto__ = a5_0x2ba234.bind(a5_0x2ba234);
    _0x32294c.toString = _0x578669.toString.bind(_0x578669);
    _0x4284bb[_0x49b5d7] = _0x32294c;
  }
});
a5_0x55d326();
import { createLogger, format, transports } from 'winston';
import a5_0x14cf62 from 'fs';
const {
  combine,
  timestamp,
  printf,
  colorize
} = format;
const customFormat = printf(({
  level: _0x3abef7,
  message: _0x28c876,
  timestamp: _0xdb565b
}) => {
  return _0xdb565b + " [" + _0x3abef7 + "]: " + _0x28c876;
});
class Logger {
  constructor() {
    this.logger = createLogger({
      'level': 'debug',
      'format': combine(timestamp({
        'format': "YYYY-MM-DD HH:mm:ss"
      }), colorize(), customFormat),
      'transports': [new transports.File({
        'filename': 'log/app.log'
      })],
      'exceptionHandlers': [new transports.File({
        'filename': 'log/app.log'
      })],
      'rejectionHandlers': [new transports.File({
        'filename': "log/app.log"
      })]
    });
  }
  ['info'](_0x107a0e) {
    this.logger.info(_0x107a0e);
  }
  ["warn"](_0x17243f) {
    this.logger.warn(_0x17243f);
  }
  ['error'](_0xa55db5) {
    this.logger.error(_0xa55db5);
  }
  ['debug'](_0x38a537) {
    this.logger.debug(_0x38a537);
  }
  ["setLevel"](_0x34706b) {
    this.logger.level = _0x34706b;
  }
  ['clear']() {
    a5_0x14cf62.truncate("log/app.log", 0x0, _0x355fa4 => {
      if (_0x355fa4) {
        this.logger.error("Failed to clear the log file: " + _0x355fa4.message);
      } else {
        this.logger.info("Log file cleared");
      }
    });
  }
}
export default new Logger();
