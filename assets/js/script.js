let listeDeTaches = [];

function ajouterTache(tache) {
    if (tache) {
        listeDeTaches.push(tache);
        afficherTaches();
    }
}
function afficherTaches() {
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = ""; 

    listeDeTaches.forEach(function(tache, index) {
        const listItem = document.createElement("li");
        listItem.textContent = tache;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = function() {
            supprimerTache(index);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

function supprimerTache(index) {
    listeDeTaches.splice(index, 1); 
    afficherTaches(); 
}

document.getElementById("addtaskbutton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskinput");
    ajouterTache(taskInput.value);
    taskInput.value = ""; 
});
