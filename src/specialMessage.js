const { settingsEmitter } = require('./settings');

settingsEmitter.on('specialMessage', () => {
    console.log('This is a special message!');
});

const specialMessage = {}

module.exports = specialMessage