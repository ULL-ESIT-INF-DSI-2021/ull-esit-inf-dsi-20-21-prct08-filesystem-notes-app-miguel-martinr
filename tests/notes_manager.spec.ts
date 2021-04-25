import 'mocha';
import * as fs from 'fs';
import { expect } from 'chai';
import { NotesManager } from '../src/notes_manager';
import { Note } from '../src/note';
import { KnownColors } from '../src/Interfaces/colored';

const chai = require('chai');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');


chai.use(deepEqualInAnyOrder);

describe('NotesManager tests', () => {
  
  // Deletes Notes folder
  fs.rmSync('./tests/Notes', {
    recursive: true,
    force: true,
  });
  
  const manager = new NotesManager('./tests/Notes');
  const firstNote = new Note('FrankNote', 'This is Frank\'s note', KnownColors.green);
  const secondNote = new Note('SecondNote', 'This is Frank\'s second note', KnownColors.blue);

  it('Normalizes path', () => {
    expect(manager.normalizePath('apath')).to.be.eq('apath/');
  });

  it('A note for a new user is added', () => {
    manager.addNote('Frank', firstNote);
    expect(fs.existsSync('./tests/Notes/Frank/FrankNote.json')).to.be.true;
  });

  it('A note for an existing user is added', () => {
    manager.addNote('Frank', secondNote);
    expect(fs.existsSync('./tests/Notes/Frank/SecondNote.json')).to.be.true;
  });

  it('List all users notes', () => {
    expect(manager.listNotes('Frank')).to.deep.equalInAnyOrder([
      firstNote.printTitle(),
      secondNote.printTitle(),
    ]);
  });

  it('Prints a note', () => {
    expect(manager.printNote('Frank', 'SecondNote')).to.be.eql(secondNote.print());
  });

  it('Removes an existing note', () => {
    manager.removeNote('Frank', 'SecondNote');
    expect(fs.existsSync('./tests/Notes/Frank/SecondNote.json')).to.be.false;
  });

  it('Searches an existing note', () => {
    expect(manager.searchNote('Frank', 'FrankNote')).to.be.eql(firstNote);
  });

  it('Returns undefined when can\'t find a note', () => {
    expect(manager.searchNote('Frank', 'SecondNote')).to.be.undefined;
  });

  it('Edits a note', () => {
    manager.editNote('Frank', 'FrankNote', {newTitle: 'NewFrankNote'});
    expect(manager.searchNote('Frank', 'NewFrankNote')).to.be.eql(new Note('NewFrankNote', 'This is Frank\'s note', KnownColors.green));
  });
});
