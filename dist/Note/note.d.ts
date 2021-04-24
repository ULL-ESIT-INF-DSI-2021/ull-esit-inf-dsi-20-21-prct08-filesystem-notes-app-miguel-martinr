export declare type ColorType = 'red' | 'green' | 'blue' | 'yellow';
export declare class Note {
    private title;
    private body;
    private color;
    constructor(title: string, body: string, color: ColorType);
    getColor(): ColorType;
}
