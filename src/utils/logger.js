class Logger {
  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`> [${timestamp}] Log: ${message}`);
  }
}

module.exports = new Logger();