const {spawn} = require('child_process')
const {log, colors: {green, yellow, red}} = require('gulp-util')

module.exports = (function () {
  let service = undefined
  return {
    run: function (file, options) {
      if (service) {
        service.kill('SIGKILL')
        service = undefined
      }
      service = spawn('node', [file], options || {})
      service.stdout.setEncoding('utf8')
      service.stdout.on('data', function (data) {
        log(`[${green(file)}]`, yellow(`stdout: ${data.toString()}`))
      })
      service.stderr.on('data', function (data) {
        log(`[${green(file)}]`, red(`stderr: ${data.toString()}`))
      })
      service.on('exit', function (code, sig) {
        log(`[${green(file)}] service exit -`, sig))
      })
      process.on('exit', function (code, sig) {
        log(`[${green(file)}] gulp exit -`, sig))
        service.kill()
      })
    }
  }
})()
