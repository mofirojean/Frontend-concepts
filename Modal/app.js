// MODAL 

/**
 * Requirements
 * document.getElementById()
 * addEventListerner()
 * e.target
 * css styling through animation
 * css animaton
 */

// Variables
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn')

// Event Listerner
openBtn.addEventListener('click', () => {
    modalContainer.style.display = "block";

})

closeBtn.addEventListener('click', () =>{
    modalContainer.style.display = "none"
})

// thisn makes sure that clicking anywhere will remove the modal
window.addEventListener('click', (e) => {
    // e.target just returns the elemnt that triggers the event
    if (e.target === modalContainer){
        modalContainer.style.display = "none"
    }
})