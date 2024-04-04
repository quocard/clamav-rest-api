const avConfig = {
  debugMode: false,
  preference: 'clamdscan',
  clamdscan: {
    host: process.env.CLAMD_IP || '127.0.0.1',
    port: process.env.CLAMD_PORT || 3310,
    timeout: parseInt(process.env.CLAMD_TIMEOUT || 60000),
    socket: null,
    active: true,
  },
};

const fuConfig = {
  useTempFiles: false,
};

module.exports = {
  avConfig,
  fuConfig,
};
