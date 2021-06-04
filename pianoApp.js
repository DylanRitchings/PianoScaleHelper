//              0   1    2   3    4   5   6    7   8    9   10   11
const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];


const modes = {
    "major":[2,2,1,2,2,2,1],
    "minor":[2,1,2,2,1,2,2],
    "jazz?": [3,2,1,1,3,0]
};

function fillSelect(){
    let select = document.getElementById("modeSelect");
    for (let modeName in modes){
        let option = document.createElement("option");
        option.text=modeName;
        select.add(option);
    }
}

function outputScale(root,mode) {
    let scaleNotes = [];
    let notePos = notes.indexOf(root);
    for (let noteAdd of mode){
        let note=notes[notePos];
        let key = document.getElementById(note);
        key.style.background="red";
        scaleNotes.push(note);
        if (notePos + noteAdd > 11){
            notePos = (notePos-12);
        }
        notePos += noteAdd;
    }
}

function clearNotes(){
    let keys = document.getElementsByClassName("key");
    for (let key of keys){
        if(key.classList.contains("white")){
            key.style.background="white";
        }
        else if(key.classList.contains("black")){
            key.style.background="black";
        }
    }
}


document.getElementById("completeBtn").addEventListener("click", function () {
    let modeSelect = document.getElementById("modeSelect");
    let modeKey = modeSelect.options[modeSelect.selectedIndex].text;

    let rootIn = document.getElementById("rootIn");
    let root = rootIn.value;
    clearNotes();
    outputScale(root.toLocaleUpperCase(),modes[modeKey]);
})


fillSelect()