const fs = require("fs");
const request = require("request");

const echo = (args, show) => {
    show(args.join(" "));
};

const pwd = (args, show) => {
    show(__dirname.split("\\").at(-1));
};

const date = (args, show) => {
    show(Date());
};

const ls = (args, show) => {
    fs.readdir(".", (err, files) => {
        if (err) throw err;
        show(files.join("\n"));
    });
};

const cat = (args, show) => {
    fs.readFile(args.at(0), "utf-8", (err, data) => {
        if (err) throw err;
        show(data);
    });
};

const head = (args, show) => {
    fs.readFile(args.at(0), "utf-8", (err, data) => {
        if (err) throw err;
        show(data.split("\n").splice(0, 5).join("\n"));
    });
};

const tail = (args, show) => {
    fs.readFile(args.at(0), "utf-8", (err, data) => {
        if (err) throw err;
        show(data.split("\n").splice(-5).join("\n"));
    });
};

const curl = (args, show) => {
    request(args.at(0), (err, data) => {
        if (err) throw err;
        show(data.body);
    });
};


module.exports = {
    echo,
    pwd,
    date,
    ls,
    cat,
    head,
    tail,
    curl,
};