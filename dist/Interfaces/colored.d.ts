/**
 * Colores soportados
 */
export declare enum KnownColors {
    red = "red",
    green = "green",
    blue = "blue",
    yellow = "yellow"
}
/**
 * Interfaz implementada por objetos con color
 */
export interface Colored {
    getColor(): KnownColors;
    setColor(newColor: KnownColors): unknown;
}
//# sourceMappingURL=colored.d.ts.map