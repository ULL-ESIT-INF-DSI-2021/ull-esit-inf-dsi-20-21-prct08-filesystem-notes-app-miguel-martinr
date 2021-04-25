"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const colored_1 = require("./Interfaces/colored");
const chalk = require("chalk");
/**
 * Clase que representa una nota
 */
class Note {
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }
    /**
     * Verifica si se trata de un color conocido.
     * @param {string} color Color a analizar
     * @return  {boolean} Verdadero si es conocido, Falso en otro caso
     */
    static checkColor(color) {
        const knownColors = Object.values(colored_1.KnownColors);
        return knownColors.includes(color);
    }
    /**
     * Actualiza el color de la nota
     * @param {KnownColors} newColor Nuevo color de la nota
     */
    setColor(newColor) {
        this.color = newColor;
    }
    /**
     * Actualiza el título de la nota
     * @param {string} newTitle  Nuevo título de la nota
     */
    setTitle(newTitle) {
        this.title = newTitle;
    }
    /**
     * Actualiza el cuerpo de la nota
     * @param {string} newBody Nuevo cuerpo de la nota
     */
    setBody(newBody) {
        this.body = newBody;
    }
    /**
     * Devuelve el color de la nota
     * @returns {KnownColors} Color de la nota
     */
    getColor() {
        return this.color;
    }
    /**
     * Devuelve el título de la nota
     * @returns {string} Título de la nota
     */
    getTitle() {
        return this.title;
    }
    /**
     * Devuelve el cuerpo de la nota
     * @returns {string} Cuerpo de la nota
     */
    getBody() {
        return this.body;
    }
    /**
     * Imprime el título de la nota con su respectivo color
     * @returns {string} Título de la nota coloreado
     */
    printTitle() {
        return chalk[this.color](this.title);
    }
    /**
     * Imprime la nota con su respectivo color
     * @returns {string} Nota coloreada
     */
    print() {
        return chalk[this.color](`${this.title}\n\n` +
            `  ${this.body}\n\n`);
    }
}
exports.Note = Note;
;
//# sourceMappingURL=note.js.map