import { editObj } from './Interfaces/editObj';
import { Note } from "./note";
/**
 * Gestor de notas
 */
export declare class NotesManager {
    private dbPath;
    /**
     *
     * @param {string} dbPath Ruta al directorio donde se guardarán los directorios de los usuarios que contendrán las notas.
     */
    constructor(dbPath?: string);
    /**
     * Añade una nueva nota
     * @param {string} username Nombre de usuario propietario de la nota
     * @param {Note} note Nota a añadir
     */
    addNote(username: string, note: Note): void;
    /**
     * Devuelve un listado de las notas de un usuario (títulos coloreados)
     * @param {string} username Nombre del usuario
     * @returns {string[]} Títulos coloreados de las notas (según el color de cada nota)
     */
    listNotes(username: string): (string | undefined)[];
    /**
     * Imprime una nota específica
     * @param {string} username Nombre del usuario propietario de la nota
     * @param {string} noteTitle Título de la nota a imprimir
     * @returns {string} Nota impresa
     */
    printNote(username: string, noteTitle: string): string;
    /**
     * Elimina una nota
     * @param {string} username Nombre de usuario propietario de la nota
     * @param noteTitle Título de la nota a eliminar
     */
    removeNote(username: string, noteTitle: string): void;
    /**
     * Busca una nota y devuelve un objeto Note
     * @param {string} username Nombre del usuario propietario de la nota
     * @param {string} noteTitle Título de la nota
     * @returns {Note | undefined} Si existe la nota devuelve una instancia de Note con sus valores, undefined en otro caso.
     */
    searchNote(username: string, noteTitle: string): Note | undefined;
    editNote(username: string, noteTitle: string, newValues: editObj): void;
}
//# sourceMappingURL=notes_manager.d.ts.map