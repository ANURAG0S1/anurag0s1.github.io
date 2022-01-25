
showNotes();
//if user adds a note add it to the local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notes);
    showNotes();
});


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }

let html = "";
notesObj.forEach(function (element, index) {
    html += `
        <div class= "card cardo mx-2 my-3" >
    <div class="cards-body">
        <h5 class="card-title">${index + 1}</h5>
        <p class="card-text"> ${element}</p>

         
         <button type="button" id="${index}" onclick="deleteNote(this.id)" class="btn delb btn-primary"><i class="fa fa-trash" aria-hidden="true"></i> </button>
    </div>
            </div >`

});
let notesElm = document.getElementById("notes");
if (notesObj.length != 0) {
    notesElm.innerHTML = html;
}
else {
    notesElm.innerHTML = '<i class="fa mr-3 fa-exclamation-triangle" aria-hidden="true"></i>Nothing to show here  try creating  some notes, after they are created, they will be visible here';
}
}
function deleteNote(index) {
    console.log(' i am deleting this text', index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];

    }
    else { 
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})