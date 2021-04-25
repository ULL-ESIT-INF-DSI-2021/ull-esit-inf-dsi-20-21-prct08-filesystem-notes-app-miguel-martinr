import 'mocha';
import { expect } from 'chai';
import { Note } from '../src/note';
import { KnownColors } from '../src/Interfaces/colored';

describe('Note tests', () => {
  it('It can be instanciated', () => {
    expect(new Note('', '', KnownColors.green) instanceof Note).to.be.true;
  });
});
