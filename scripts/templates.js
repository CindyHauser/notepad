

// function getNoteTemplate(indexNote) {
//     return `<p class="note_text">+  ${allNotes.notes[indexNote]} - ${allNotes.notesTitles[indexNote]}
//     <button class="trash_button" onclick="moveNotes (${indexNote}, 'notes', 'trashNotes')">
//     <img src="./assets/icons/trash.svg" alt="trash"></button></p>`
// }


function getNoteTemplate(indexNote) {

    const noteTemplate = allNotes.notes[indexNote];
    const noteTitleTemplate = allNotes.notesTitles[indexNote];

                                                                //wenn                                      //dann                                                          //ansonsten
    return `<p class="note_text">+  ${ (noteTitleTemplate.trim() !== "")  ? `${noteTemplate}  -  ${noteTitleTemplate}` :  `${noteTemplate}`  }
    <button class="trash_button" onclick="moveNotes (${indexNote}, 'notes', 'trashNotes')">
    <img src="./assets/icons/trash.svg" alt="trash"></button></p>`
}


function getTrashNoteTemplate(indexTrashNote) {

    const noteTemplateTrash = allNotes.trashNotes[indexTrashNote];
    const noteTitleTemplateTrash = allNotes.trashNotesTitles[indexTrashNote];

    return `<p class="note_text">+  ${(noteTitleTemplateTrash.trim() !== "") ? `${noteTemplateTrash} - ${noteTitleTemplateTrash}` : `${noteTemplateTrash}` } 
    <button class="trash_button" onclick="deleteNote(${indexTrashNote})">
    <img src="./assets/icons/delete-complete.svg" alt="delete complete"></button></p>`
}

// function getTrashNoteTemplate(indexTrashNote) {

//     const noteTemplate = allNotes.notes[indexNote];
//     const noteTitleTemplate = allNotes.notesTitles[indexNote];

//     return `<p class="note_text">+  ${allNotes.trashNotes[indexTrashNote]}  - ${allNotes.trashNotesTitles[indexTrashNote]} 
//     <button class="trash_button" onclick="deleteNote(${indexTrashNote})">
//     <img src="./assets/icons/delete-complete.svg" alt="delete complete"></button></p>`
// }