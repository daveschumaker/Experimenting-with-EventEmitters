const EventEmitter = require('events').EventEmitter;
var settingsEmitter = new EventEmitter();

const Settings = new Map();
Settings.set('count', 0);

settingsEmitter.once('firstConnection', () => {
    console.log('First Connection -- Hello!');
    Settings.set('online', true);
})

settingsEmitter.on('enableLoop', () => {
    setInterval(() => {
        if (Settings.get('online')) {
            let num = Settings.get('count');

            if (num === 3) {
                settingsEmitter.emit('specialMessage');
            }

            Settings.set('count', num + 1);
            settingsEmitter.emit('run');

        }
    }, 1000);
})

settingsEmitter.on('disableLoop', () => {
    Settings.set('online', false);
    console.log('...get ready...');
    setTimeout(() => {
        settingsEmitter.emit('die');
    }, 1000)
});


const SettingsUtils = {
    get() {
        return Settings.get('count');
    }
}

module.exports = {
    Settings: SettingsUtils,
    settingsEmitter
};