const commands = require('./commands/index.js');

const show = (input) => {
    process.stdout.write(input + "\n");
    process.stdout.write("prompt >");
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    let args = data.toString().trim().split(" "); // remueve la nueva línea
    let cmd = args.shift();

    commands[cmd] ? commands[cmd](args, show) : show("command not found")
});
