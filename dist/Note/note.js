export class Note {
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
;
const note = new Note('', '', 'blue');
console.log(note.getColor());
