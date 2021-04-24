
export type ColorType = 'red' | 'green' | 'blue' | 'yellow';

export class Note {
  constructor(private title: string, private body: string, private color: ColorType) {

  }

  getColor(): ColorType {
    return this.color;
  }
};

