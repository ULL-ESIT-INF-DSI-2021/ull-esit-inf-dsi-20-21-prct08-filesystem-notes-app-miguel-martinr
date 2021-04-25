import { Colored, KnownColors } from "./Interfaces/colored";
/**
 * Clase que representa una nota
 */
export declare class Note implements Colored {
    private title;
    private body;
    /**
     *
     * @param {string} title Título de lanota
     * @param {string} body Cuerpo de la nota
     * @param {KnownColors} color  Color de la nota
     */
    private color;
    constructor(title: string, body: string, color: KnownColors);
    /**
     * Verifica si se trata de un color conocido.
     * @param {string} color Color a analizar
     * @return  {boolean} Verdadero si es conocido, Falso en otro caso
     */
    static checkColor(color: string): boolean;
    /**
     * Actualiza el color de la nota
     * @param {KnownColors} newColor Nuevo color de la nota
     */
    setColor(newColor: KnownColors): void;
    /**
     * Actualiza el título de la nota
     * @param {string} newTitle  Nuevo título de la nota
     */
    setTitle(newTitle: string): void;
    /**
     * Actualiza el cuerpo de la nota
     * @param {string} newBody Nuevo cuerpo de la nota
     */
    setBody(newBody: string): void;
    /**
     * Devuelve el color de la nota
     * @returns {KnownColors} Color de la nota
     */
    getColor(): KnownColors;
    /**
     * Devuelve el título de la nota
     * @returns {string} Título de la nota
     */
    getTitle(): string;
    /**
     * Devuelve el cuerpo de la nota
     * @returns {string} Cuerpo de la nota
     */
    getBody(): string;
    /**
     * Imprime el título de la nota con su respectivo color
     * @returns {string} Título de la nota coloreado
     */
    printTitle(): string;
    /**
     * Imprime la nota con su respectivo color
     * @returns {string} Nota coloreada
     */
    print(): string;
}
//# sourceMappingURL=note.d.ts.map