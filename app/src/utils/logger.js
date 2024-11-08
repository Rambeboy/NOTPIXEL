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
