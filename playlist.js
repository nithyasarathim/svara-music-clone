document.addEventListener("DOMContentLoaded", function () {
    let playlistsDiv = document.getElementById("playlists");
    let playlists = JSON.parse(localStorage.getItem("playlists")) || [];

    function displayPlaylists() {
        playlistsDiv.innerHTML = "";
        playlists.forEach((playlist, index) => {
            let playlistDiv = document.createElement("div");
            playlistDiv.classList.add("playlist");

            let title = document.createElement("p");
            title.textContent = `Playlist ${index + 1}: ${playlist.name}`;

            let songList = document.createElement("ul");
            playlist.songs.forEach(song => {
                let li = document.createElement("li");
                li.textContent = song.title;
                songList.appendChild(li);
            });

            playlistDiv.appendChild(title);
            playlistDiv.appendChild(songList);
            playlistsDiv.appendChild(playlistDiv);
        });
    }

    window.createPlaylist = function () {
        let playlistName = prompt("Enter playlist name:");
        if (!playlistName) return;

        let selectedSongs = JSON.parse(localStorage.getItem("favorites")) || [];
        if (selectedSongs.length === 0) {
            alert("No favorite songs available to add.");
            return;
        }

        let newPlaylist = { name: playlistName, songs: selectedSongs };
        playlists.push(newPlaylist);
        localStorage.setItem("playlists", JSON.stringify(playlists));
        displayPlaylists();
    };

    displayPlaylists();
});
