document.addEventListener("DOMContentLoaded", function () {
    let favoritesList = document.getElementById("favorites-list");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.forEach(song => {
        let songDiv = document.createElement("div");
        songDiv.classList.add("song");

        let img = document.createElement("img");
        img.src = song.image;
        img.alt = song.title;
        img.classList.add("song-image");

        let title = document.createElement("p");
        title.textContent = song.title;

        songDiv.appendChild(img);
        songDiv.appendChild(title);
        favoritesList.appendChild(songDiv);
    });
});
