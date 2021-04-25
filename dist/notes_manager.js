"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesManager = void 0;
const fs = require("fs");
const invalid_note_1 = require("./Errors/invalid_note");
const invalid_username_1 = require("./Errors/invalid_username");
const no_edition_1 = require("./Errors/no_edition");
const repeated_note_1 = require("./Errors/repeated_note");
const note_1 = require("./note");
/**
 * Gestor de notas
 */
class NotesManager {
    /**
     *
     * @param {string} dbPath Ruta al directorio donde se guardarán los directorios de los usuarios que contendrán las notas.
     */
    constructor(dbPath = './Notes/') {
        this.dbPath = dbPath;
    }
    /**
     * Añade una nueva nota
     * @param {string} username Nombre de usuario propietario de la nota
     * @param {Note} note Nota a añadir
     */
    addNote(username, note) {
        // Si no existe el directorio principal, se crea
        if (!fs.existsSync(this.dbPath))
            fs.mkdirSync(this.dbPath);
        // Si no hay un dir para el usuario, se crea
        const userDir = this.dbPath + username;
        if (!fs.existsSync(userDir)) {
            fs.mkdirSync(userDir);
        }
        // Si existe una nota con el mismo título se lanza un error
        const notePath = userDir + '/' + note.getTitle() + '.json';
        if (fs.existsSync(notePath))
            throw new repeated_note_1.RepeatedNoteError(notePath);
        // Se añade la nota
        fs.writeFileSync(notePath, JSON.stringify(note, null, 1));
    }
    /**
     * Devuelve un listado de las notas de un usuario (títulos coloreados)
     * @param {string} username Nombre del usuario
     * @returns {string[]} Títulos coloreados de las notas (según el color de cada nota)
     */
    listNotes(username) {
        // Si no existe el usuario se lanza un error
        const userDir = this.dbPath + username;
        if (!fs.existsSync(userDir))
            throw new invalid_username_1.InvalidUsernameError(username);
        return fs.readdirSync(userDir).map((noteFile) => noteFile.substr(0, noteFile.lastIndexOf('.')))
            .map((noteTitle) => this.searchNote(username, noteTitle)?.printTitle());
    }
    /**
     * Imprime una nota específica
     * @param {string} username Nombre del usuario propietario de la nota
     * @param {string} noteTitle Título de la nota a imprimir
     * @returns {string} Nota impresa
     */
    printNote(username, noteTitle) {
        // Verifica que existe el usuario
        const userDir = this.dbPath + username;
        if (!fs.existsSync(userDir))
            throw new invalid_username_1.InvalidUsernameError(username);
        // Verifica que existe la nota
        const notePath = userDir + '/' + noteTitle + '.json';
        if (!fs.existsSync(notePath))
            throw new invalid_note_1.InvalidNote(notePath);
        // Muestra la nota
        return this.searchNote(username, noteTitle)?.print();
    }
    /**
     * Elimina una nota
     * @param {string} username Nombre de usuario propietario de la nota
     * @param noteTitle Título de la nota a eliminar
     */
    removeNote(username, noteTitle) {
        // Verifica que existe el usuario
        const userDir = this.dbPath + username;
        if (!fs.existsSync(userDir))
            throw new invalid_username_1.InvalidUsernameError(username);
        // Verifica que existe la nota
        const notePath = userDir + '/' + noteTitle + '.json';
        if (!fs.existsSync(notePath))
            throw new invalid_note_1.InvalidNote(notePath);
        // Elimina la nota
        fs.rmSync(notePath);
    }
    /**
     * Busca una nota y devuelve un objeto Note
     * @param {string} username Nombre del usuario propietario de la nota
     * @param {string} noteTitle Título de la nota
     * @returns {Note | undefined} Si existe la nota devuelve una instancia de Note con sus valores, undefined en otro caso.
     */
    searchNote(username, noteTitle) {
        const userDir = this.dbPath + username;
        const notePath = userDir + '/' + noteTitle + '.json';
        if (!fs.existsSync(notePath))
            return undefined;
        const parsed = JSON.parse(fs.readFileSync(notePath).toString());
        return new note_1.Note(parsed.title, parsed.body, parsed.color);
    }
    editNote(username, noteTitle, newValues) {
        // Verifica que existe el usuario
        const userDir = this.dbPath + username;
        if (!fs.existsSync(userDir))
            throw new invalid_username_1.InvalidUsernameError(username);
        // Verifica que existe la nota
        const notePath = userDir + '/' + noteTitle + '.json';
        if (!fs.existsSync(notePath))
            throw new invalid_note_1.InvalidNote(notePath);
        // Verifica que se introdujo un valor que editar
        if (Object.values(newValues).filter((value) => value !== undefined).length === 0)
            throw new no_edition_1.NoEdition(notePath);
        // Edita la nota
        const newNote = this.searchNote(username, noteTitle);
        if (typeof newValues.newTitle === 'string') {
            newNote.setTitle(newValues.newTitle);
        }
        if (typeof newValues.newBody === 'string') {
            newNote.setBody(newValues.newBody);
        }
        if (typeof newValues.newColor === 'string') {
            newNote.setColor(newValues.newColor);
        }
        // Sustituye la nota
        this.removeNote(username, noteTitle);
        this.addNote(username, newNote);
    }
}
exports.NotesManager = NotesManager;
//# sourceMappingURL=notes_manager.js.map