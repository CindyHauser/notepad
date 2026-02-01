//alle Kommentare nach Erfüllung werden normalerweise gelöscht

//notizen anzeigen lassen
let allNotes = {
    'notesTitles': [],
    'notes': [],
    'trashNotesTitles': [],                //der Papierkorb
    'trashNotes': []
}

function moveNotes(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

function renderNotes() {

    renderTrashNotes();
    getFromLocalStorage();
    //muss definieren, wo sie anzuzeigen sind:
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = ""; //dass es nicht immer wieder hinzugefügt wird -> sehr wichtig bei zb einem button

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

//notizen hinzufügen:
function addNote() {
    //eingabe vom user definieren
    //eingabe auslesen
    let noteInputRef = document.getElementById('note_input'); //man kann 'value' auch hier hinter schreiben, die Empfehlung ist aber es zu trennen
    let noteInput = noteInputRef.value;
    let additionalInputRef = document.getElementById('addition_input');
    let additionalInput = additionalInputRef.value;

    //eingabe den notizen hinzufügen
    if (noteInput.length >= 1) {
        allNotes.notes.push(noteInput);
        allNotes.notesTitles.push(additionalInput);
    }

    saveToLocalStorage();
    renderNotes();

    noteInputRef.value = "";
    additionalInputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
}

function getFromLocalStorage() {
    let notesLocalStorage = JSON.parse(localStorage.getItem("notes"));
    let additionalNotesLocalStorage = JSON.parse(localStorage.getItem("notesTitles"));

    if (notesLocalStorage == null && additionalNotesLocalStorage == null) {
        return allNotes.notes;
    } else {
        allNotes.notes = notesLocalStorage;
        allNotes.notesTitles = additionalNotesLocalStorage;
    }
}

function getFromLocalStorageTrash() {
    let notesLocalStorageTrash = JSON.parse(localStorage.getItem("trashNotes"));
    let additionalNotesLocalStorageTrash = JSON.parse(localStorage.getItem("trashNotesTitles"));

    if (notesLocalStorageTrash == null && additionalNotesLocalStorageTrash == null) {
        return allNotes.trashNotes;
    } else {
        allNotes.trashNotes = notesLocalStorageTrash;
        allNotes.trashNotesTitles = additionalNotesLocalStorageTrash;
    }
}

//Papierkorb hinzufügen:
function renderTrashNotes() {

    getFromLocalStorageTrash();

    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


function deleteNote(indexTrashNote) {

    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}
