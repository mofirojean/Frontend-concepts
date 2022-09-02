const titleTarget = document.querySelector('p[id="title"] span');

// navigator.online will always be true, how can we load the page again
if (window.navigator.onLine){
    setOnline();
} else {
    setOffline();
}

// To detect the network status every time the network status changes
window.addEventListener("online", () => {
    setOnline();
});
window.addEventListener("offline", () => {
    setOffline();
})

function setOnline(){
    titleTarget.textContent = "Online";
    titleTarget.style.color = "green";
}

function setOffline(){
    titleTarget.textContent = "Offline";
    titleTarget.style.color = "red";
}
