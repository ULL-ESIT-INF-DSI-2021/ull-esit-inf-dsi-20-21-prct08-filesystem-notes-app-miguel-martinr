"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const yargs = require("yargs");
const invalid_color_1 = require("./Errors/invalid_color");
const note_1 = require("./note");
const notes_manager_1 = require("./notes_manager");
const success = chalk.green;
const manager = new notes_manager_1.NotesManager();
yargs
    .scriptName('notes-processor')
    .usage('$0 <cmd> [args]');
// Add note
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        username: {
            describe: 'Note\'s owner username',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note color [red, yellow, green, blue]',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.username === 'string' && typeof argv.title === 'string' &&
            typeof argv.color === 'string' && typeof argv.body === 'string') {
            if (!note_1.Note.checkColor(argv.color))
                throw new invalid_color_1.InvalidColor(argv.color);
            manager.addNote(argv.username, new note_1.Note(argv.title, argv.body, argv.color));
            console.log(success(`Nota ${argv.username}/${argv.title} añadida correctamente!`));
        }
    },
});
// Remove note
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        username: {
            describe: 'Note\'s owner username',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.username === 'string' && typeof argv.title === 'string') {
            manager.removeNote(argv.username, argv.title);
            console.log(success(`Nota ${argv.username}/${argv.title} eliminada correctamente!`));
        }
    },
});
// Edit note
yargs.command({
    command: 'edit',
    describe: 'Edits a note',
    builder: {
        username: {
            describe: 'Note\'s owner username',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Title of note to edit',
            demandOption: true,
            type: 'string',
        },
        newTitle: {
            describe: 'Title of note to edit',
            demandOption: false,
            type: 'string',
        },
        newColor: {
            describe: 'New note color [red, yellow, green, blue]',
            demandOption: false,
            type: 'string',
        },
        newBody: {
            describe: 'New note body',
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.username === 'string' && typeof argv.title === 'string') {
            const newValues = {
                newTitle: argv.newTitle,
                newBody: argv.newBody,
                newColor: argv.newColor,
            };
            manager.editNote(argv.username, argv.title, newValues);
            console.log(success(`Nota ${argv.username}/${argv.title} editada correctamente!`));
        }
    },
});
// List notes
yargs.command({
    command: 'list',
    describe: 'List an user\'s notes',
    builder: {
        username: {
            describe: 'Note\'s owner username',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.username === 'string') {
            manager.listNotes(argv.username).forEach((note) => {
                console.log(note);
            });
        }
    },
});
// Read note
yargs.command({
    command: 'read',
    describe: 'Read one note',
    builder: {
        username: {
            describe: 'Note\'s owner username',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note\'s title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.username === 'string' && typeof argv.title === 'string') {
            console.log(manager.printNote(argv.username, argv.title));
        }
    },
});
try {
    yargs.parse();
}
catch (error) {
    console.log(error.toString());
}
//# sourceMappingURL=notes-processor.js.map