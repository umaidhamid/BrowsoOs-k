let saveBtn = document.querySelector("#saveBtn");
let notesContainer = document.querySelector("#notes");
let addNoteBtn = document.querySelector("#addNoteBtn");
let formContainer = document.querySelector("#formContainer");

// Load notes from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((note) => renderNote(note));
  if (savedNotes.length > 0) {
    notesContainer.style.display = "flex";
    addNoteBtn.style.display = "block";
    formContainer.style.display = "none";
  }
});

// Save note
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let title = document.querySelector("#name").value.trim();
  let description = document.querySelector("#description").value.trim();
  let noteText = document.querySelector("#note").value.trim();

  if (!title || !description || !noteText) {
    alert("Please fill in all fields before saving a note.");
    return;
  }

  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  // Keep only 3 notes
  //   if (savedNotes.length >= 3) {
  //     savedNotes.shift(); // remove oldest
  //     notesContainer.removeChild(notesContainer.firstChild);
  //   }

  let noteData = { title, description, noteText };
  savedNotes.push(noteData);
  localStorage.setItem("notes", JSON.stringify(savedNotes));

  renderNote(noteData);

  notesContainer.style.display = "flex";
  addNoteBtn.style.display = "block";
  formContainer.style.display = "none";

  document.querySelector("#noteForm").reset();
});

// Add note button - show form
addNoteBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
  notesContainer.style.display = "none";
  addNoteBtn.style.display = "none";
});
document.querySelector("#viewBtn").addEventListener("click", () => {
  notesContainer.style.display = "flex";
  addNoteBtn.style.display = "block";
  formContainer.style.display = "none";
});
// Delete note
function deleteNote(noteElement, noteIndex) {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.splice(noteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(savedNotes));
  notesContainer.removeChild(noteElement);
  if (savedNotes.length === 0) {
    notesContainer.style.display = "none";
    formContainer.style.display = "flex";
    addNoteBtn.style.display = "none";
  }
}

// Render a note
function renderNote(noteData) {
  let noteCard = document.createElement("div");
  noteCard.classList.add("NoteList");

  let h1 = document.createElement("h1");
  h1.innerText = noteData.title;

  let h3 = document.createElement("h3");
  h3.innerText = noteData.description;

  let p = document.createElement("p");
  p.innerText = noteData.noteText;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");

  let noteIndex = (JSON.parse(localStorage.getItem("notes")) || []).length;
  deleteBtn.addEventListener("click", () => {
    let index = Array.from(notesContainer.children).indexOf(noteCard);
    deleteNote(noteCard, index);
  });

  noteCard.appendChild(h1);
  noteCard.appendChild(h3);
  noteCard.appendChild(p);
  noteCard.appendChild(deleteBtn);

  notesContainer.appendChild(noteCard);
}

document.querySelector("#BackBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
