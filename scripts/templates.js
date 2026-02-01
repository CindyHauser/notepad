

function getNoteTemplate(indexNote) {
    return `<p class="note_text">+  ${allNotes.notes[indexNote]} - ${allNotes.notesTitles[indexNote]}
    <button class="trash_button" onclick="moveNotes (${indexNote}, 'notes', 'trashNotes')">
    <img src="./assets/icons/trash.svg" alt="trash"></button></p>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p class="note_text">+  ${allNotes.trashNotes[indexTrashNote]}  - ${allNotes.trashNotesTitles[indexTrashNote]} 
    <button class="trash_button" onclick="deleteNote(${indexTrashNote})">
    <img src="./assets/icons/delete-complete.svg" alt="delete complete"></button></p>`
}

// function getNoteTemplate(indexNote) {
//     return `<p class="note_text">+  ${allNotes.notesTitles[indexNote] ?? allNotes.notes[indexNote]  - allNotes.notesTitles[indexNote] }
//     <button class="trash_button" onclick="moveNotes (${indexNote}, 'notes', 'trashNotes')">
//     <img src="./assets/icons/trash.svg" alt="trash"></button></p>`
// }