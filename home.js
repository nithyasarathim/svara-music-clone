


document.addEventListener("DOMContentLoaded", function () {
    let selectedArtists = JSON.parse(localStorage.getItem("selectedArtists")) || [];
    let userPlaylist = JSON.parse(localStorage.getItem("userPlaylist")) || [];

    let songs = {
        "AR Rahman": [
            { title: "New York Nagaram", src: "songs/new_york_nagaram.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEOa4rH7_xdLk5ygGQIp6Y8rc_4v3U_60Rg&s", lyrics: "new york nagaram urangum neram...." },
            { title: "Enna Sona", src: "songs/enna_sona.mp3", image: "https://i1.sndcdn.com/artworks-000228148137-flzm20-t500x500.jpg", lyrics: "Enna sona, kyun rab ne banaya..." },
            { title: "Roja", src: "songs/kadhal_roja.mp3", image: "https://meragana.com/GetPoster.aspx?ab=Roja+(1992)+-+(Hindi+Film)", lyrics: "Kadhal Rojave..." },
            { title: "Munbe Vaa", src: "songs/munbe_vaa.mp3", image: "https://i.scdn.co/image/ab67616d0000b273ff3e3dcc8b72e3315b7a04d9", lyrics: "Munbe vaa en anbe vaa..." },
            { title: "Avalum Naanum", src: "songs/avalum_naanum_arrah.mp3", image: "https://i1.sndcdn.com/artworks-000186026257-yhu8h8-t500x500.jpg", lyrics: "Avalum Naanum Amuthum Tamilum..." }
        ],
        "Anirudh Ravichander": [
            { title: "Why This Kolaveri Di", src: "songs/why_this_kolaveri_di.mp3", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Whu_this_kolaveri_di.JPG/250px-Whu_this_kolaveri_di.JPG", lyrics: "Why This Kolaveri Di..." },
            { title: "Vaathi Coming", src: "songs/vaathi_coming_master.mp3", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Vaathi_Coming.jpg", lyrics: "Lyrics Not Found" },
            { title: "Arabic Kuthu", src: "songs/arabic_kuthu.mp3", image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Arabic_Kuthu.jpg", lyrics: "Halamithi habibo..." },
            { title: "So Baby", src: "songs/doctor_so_baby.mp3", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86cd70ca-b363-42f6-86aa-03c910c58eb5/detrfby-bf5b523b-6983-4ec4-b4a1-f6f46fd78213.jpg/v1/fill/w_1280,h_1911,q_75,strp/so_baby_full_video_song_hd_plain_by_harheetsingh3371_detrfby-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkxMSIsInBhdGgiOiJcL2ZcLzg2Y2Q3MGNhLWIzNjMtNDJmNi04NmFhLTAzYzkxMGM1OGViNVwvZGV0cmZieS1iZjViNTIzYi02OTgzLTRlYzQtYjRhMS1mNmY0NmZkNzgyMTMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-FUK1udkm54KBk3qRDHnffu3RSs5YKsDrKbl1cGUnl0", lyrics: "Lyrics Not Found" },
            { title: "Dippam Dappam", src: "songs/dippam_dappam_tune.mp3", image: "https://c.saavncdn.com/403/Kaathuvaakula-Rendu-Kaadhal-Original-Motion-Picture-Soundtrack-Tamil-2022-20220428131043-500x500.jpg", lyrics: "Dippam dappam..." }
        ],
      
        "Yuvan Shankar Raja": [
            { title: "Loosu Penne", src: "songs/loosu_penne.mp3", image: "https://c.saavncdn.com/426/Vallavan-Tamil-2006-20230712130650-500x500.jpg", lyrics: "Loosu penne loosu penne..." },
            { title: "En Kaadhal Solla", src: "songs/en_kaadhal_solla.mp3", image: "https://c.saavncdn.com/984/Paiya-Tamil-2010-20200620134043-500x500.jpg", lyrics: "Un Azhagaale un azhaagle..." },
            { title: "Oru Kal Oru Kannadi", src: "songs/oru_kal_oru_kannadi.mp3", image: "https://c-fa.cdn.smule.com/rs-s26/arr/97/30/2405df7f-41b7-48a3-9339-2fa5c3003b23.jpg", lyrics: "Oru Kal.. Oru Kannadi... Udaiyaamal Modhi kondaal kaadhal.." },
            { title: "Idhu Varai", src: "songs/idhu_varai.mp3", image: "https://i.scdn.co/image/ab67616d0000b273729ad68875f57912947255d5", lyrics: "Idhu varai illadha uravu..." },
            { title: "Ven Megam", src: "songs/en_kadal.mp3", image: "https://c-fa.cdn.smule.com/rs-s80/arr/46/cb/73d7eca9-6dda-4eee-8ca9-1f7278a81675.jpg", lyrics: "En Kaadhalum ennagumo" }
        ],
        "GV Prakash": [
            { title: "Uyirey", src: "songs/uyirey_from_amaran.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR02HAQGBQcQsX_CBLLr-_qtIKl6mMWuDNLfit0xC52saLPIrSsk1nWxGOmWtB8mw4mA&usqp=CAU", lyrics: "Uyirey..Uyirey..." },
            { title: "Pookal Pookum", src: "songs/pookal_pookum_mix.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqmxDF68oqyTIFbGA0IVSvcoLj5XQo10nEg&s", lyrics: "Paadhai mudindha piragum..." },
            { title: "Akkam Pakkam", src: "songs/akkam_pakkam.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOh0A9GdOrSO0fD81hvAykqWchZ5bmGM1EQ&s", lyrics: "Akkam pakkam yaarum illaa.." },
            { title: "En jeevan", src: "songs/en_jeevan.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgC4DlPuilHofNZFB-xV_TUCUymd1bAQ3vQ&s", lyrics: "Unnale ennalum..en jeevan vaazhudhe..." },
            { title: "Pirai Thedum", src: "songs/pirai_thedum.mp3", image: "https://i1.sndcdn.com/artworks-000019257750-rysmpo-t500x500.jpg", lyrics: "Pirai thedum..." }
        ]
    };
    let songListDiv = document.getElementById("song-list");
    let audioPlayer = document.getElementById("audio-player");
    let nowPlaying = document.getElementById("now-playing");
    let lyricsBox = document.getElementById("lyrics-box");
    let lyricsText = document.getElementById("lyrics");
    let favoritesList = document.getElementById("favorites-list");
    let playlistDiv = document.getElementById("playlist-list");

    selectedArtists.forEach(artist => {
        if (songs[artist]) {
            songs[artist].forEach(song => createSongElement(song, songListDiv));
        }
    });

    userPlaylist.forEach(song => createSongElement(song, playlistDiv, true));

    function createSongElement(song, parentDiv, isPlaylist = false) {
        let songDiv = document.createElement("div");
        songDiv.classList.add("song");

        let img = document.createElement("img");
        img.src = song.image;
        img.alt = song.title;
        img.classList.add("song-image");
        img.onclick = function () {
            playSong(song);
        };

        let title = document.createElement("p");
        title.textContent = song.title;
        let iconsDiv = document.createElement("div");
iconsDiv.classList.add("song-icons");

        let likeBtn = document.createElement("button");
        likeBtn.textContent = "❤️";
        likeBtn.classList.add("like-btn");
        likeBtn.onclick = function () {
            toggleFavorite(song, songDiv);
        };

        let addPlaylistBtn = document.createElement("button");
        addPlaylistBtn.textContent = isPlaylist ? "❌" : "➕";
        addPlaylistBtn.classList.add("playlist-btn");
        addPlaylistBtn.onclick = function () {
            isPlaylist ? removeFromPlaylist(song) : addToPlaylist(song);
        };
        iconsDiv.appendChild(likeBtn);
        iconsDiv.appendChild(addPlaylistBtn);

        songDiv.appendChild(img);
        songDiv.appendChild(title);
        songDiv.appendChild(iconsDiv);
        parentDiv.appendChild(songDiv);
    }

    function playSong(song) {
        audioPlayer.src = song.src;
        audioPlayer.play();
        nowPlaying.textContent = "Now Playing: " + song.title;
        lyricsText.textContent = song.lyrics;
        lyricsBox.classList.remove("hidden"); 
    }

    function toggleLyrics() {
        lyricsBox.classList.toggle("hidden");
    }

    function toggleFavorite(song, songDiv) {
        let isFavorited = songDiv.classList.toggle("favorited");
        if (isFavorited) {
            if (![...favoritesList.children].some(child => child.textContent.includes(song.title))) {
                let favDiv = songDiv.cloneNode(true);
                favDiv.querySelector(".like-btn").remove();
                favoritesList.appendChild(favDiv);
            }
        } else {
            [...favoritesList.children].forEach(child => {
                if (child.textContent.includes(song.title)) {
                    favoritesList.removeChild(child);
                }
            });
        }
    }

    function searchSongs() {
        let query = document.getElementById("search").value.toLowerCase();
        let songs = document.querySelectorAll(".song");
        songs.forEach(song => {
            song.style.display = song.textContent.toLowerCase().includes(query) ? "flex" : "none";
        });
    }

    function addToPlaylist(song) {
        if (!userPlaylist.some(s => s.title === song.title)) {
            userPlaylist.push(song);
            localStorage.setItem("userPlaylist", JSON.stringify(userPlaylist));
            createSongElement(song, playlistDiv, true);
        }
    }

    function removeFromPlaylist(song) {
        userPlaylist = userPlaylist.filter(s => s.title !== song.title);
        localStorage.setItem("userPlaylist", JSON.stringify(userPlaylist));
        playlistDiv.innerHTML = "";
        userPlaylist.forEach(song => createSongElement(song, playlistDiv, true));
    }

    window.toggleLyrics = toggleLyrics;
    window.searchSongs = searchSongs;
});