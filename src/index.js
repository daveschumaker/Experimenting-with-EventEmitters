const { Settings, settingsEmitter } = require('./settings');
require('./specialMessage');

// firstConnection event will only ever run once.
settingsEmitter.emit('firstConnection');

// Emit a custom event I created, called 'enableLoop'
// This kicks off a loop used to experiment with
// various features of event emitters.
settingsEmitter.emit('enableLoop');

// The 'run' event is emitted from inside the 'enableLoop'
// event up above.
settingsEmitter.on('run', () => {
    let num = Settings.get('count');
    console.log('Hello, Number!', num);

    if (num >= 5) {
        settingsEmitter.emit('disableLoop');
    }
})

settingsEmitter.on('die', () => {
    console.log('THE END!');
    process.exit();
})
