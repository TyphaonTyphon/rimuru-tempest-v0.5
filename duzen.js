const fs = require("fs");
const Table = require('cli-table3');
var colors = require('colors');

const eventtable = new Table({
    head: ["File Name", 'Event', "Description", "Status"]
});

module.exports = (bot) => {
    // EVENTS
    fs.readdir("./etkinlikler/", (err, files) => {
        if (err) console.error(err);
        let eventFiles = files.filter(f => f.split(".").pop() === "js");
        if (eventFiles.length <= 0) return console.log("NO EVENT FOUND!".red);
        console.log(`Loading ${eventFiles.length} events...`.yellow);
        eventFiles.forEach((f, i) => {
            var cache = require(`./etkinlikler/${f}`);
            if (cache.enabled) {
                require(`./etkinlikler/${f}`);
                eventtable.push([f, cache.name, cache.description, "ACTIVE".green])
            } else {
                eventtable.push([f, cache.name, cache.description, "DEACTIVE".red])
            }
        });
        console.log(eventtable + "");
    });
};