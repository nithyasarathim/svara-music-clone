
function login(event) {
    event.preventDefault(); 
    window.location.href = "dashboard.html"; 
}

function signup(event) {
    event.preventDefault(); 
    window.location.href = "dashboard.html"; 
}

let selectedArtists = [];

function selectArtist(element) {
    let artistName = element.querySelector("p").textContent.trim(); 

    if (selectedArtists.includes(artistName)) {

        selectedArtists = selectedArtists.filter(artist => artist !== artistName);
        element.classList.remove("selected");
    } else {
        if (selectedArtists.length >= 5) {
            alert("You can only select 5 artists!");
            return;
        }
        selectedArtists.push(artistName);
        element.classList.add("selected");
    }

    document.getElementById("continue-btn").disabled = selectedArtists.length !== 5;
}


function continueToHome() {
    if (selectedArtists.length === 5) {
        localStorage.setItem("selectedArtists", JSON.stringify(selectedArtists)); 
        window.location.href = "home.html"; 
    } else {
        alert("Please select exactly 5 artists!");
    }
}
