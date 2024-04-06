const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },

  // Methods ========================================

  printPlaylists: function() {
    const keys = Object.keys(this.playlists);
    for (const val of keys) {
      const { id, name, tracks } = this.playlists[val];
      console.log(
        `${id}: ${name} - ${tracks.length} tracks`
      );
    }
  },

  printTracks: function() {
    const keys = Object.keys(this.tracks);
    for (const val of keys) {
      const { id, name, artist, album } = this.tracks[val];
      console.log(
        `${id}: ${name} by ${artist} (${album})`
      );
    }
  },

  printPlaylist: function(playlistId) {
    if (!this.playlists[playlistId]) {
      console.log("Invalid playlist ID");
      return;
    }

    const { id, name, tracks } = this.playlists[playlistId];
    console.log(
      `${id}: ${name} - ${tracks.length} tracks`
    );

    const trackId = this.playlists[playlistId].tracks;
    for (const track of trackId) {
      const { id, name, artist, album } = this.tracks[track];
      console.log(
        `${id}: ${name} by ${artist} (${album})`
      );
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const trackPath = this.tracks;
    const playlistPath = this.playlists;

    if (!trackPath[trackId] || !playlistPath[playlistId]) {
      console.log("Invalid track and/or playlist");
      return;
    }
    const track = trackPath[trackId].id;
    const playlist = playlistPath[playlistId].tracks;

    playlist.push(track);
    console.log(`Track was added to playlist`);
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function(name) {
    const id = this.generateUid();
    this.playlists[id] = {
      id: id,
      name: name,
      tracks: []
    };
  },

  printSearchResults: function(query) {
    if (!query) {
      console.log("Please provide a search query.");
      return;
    }

    const trackPath = this.tracks;
    const keys = Object.keys(trackPath);

    let resultArr = [];

    for (const val of keys) {
      const track = trackPath[val];
      const searchString = `${track.name} ${track.artist} ${track.album}`.toLowerCase(); // concatenates the tracks name, artist, and albumn and converts that string to lowercase to make the search case-insensitive.
      if (searchString.search(query.toLowerCase()) !== -1) { //checks if the query is found within the searchString, if it is found, it will not return -1, the formated track details are then added to resultArr
        resultArr.push(`${track.name} by ${track.artist} on the album ${track.album}`);
      }
    }

    if (resultArr.length > 0) {
      console.log(`Found ${resultArr.length} matching track(s):`);
      resultArr.forEach(result => console.log(result));
    } else {
      console.log("No matching tracks found.");
    }

  }
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
console.log("Printing playlists: ");
library.printPlaylists();
console.log("\n");

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
console.log("Printing list of tracks: ");
library.printTracks();
console.log("\n");

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
console.log("Retrieving Playlist: ");
library.printPlaylist('p01');
console.log("\n");

// adds an existing track to an existing playlist
library.addTrackToPlaylist('t01', 'p02');
console.log(library.playlists['p02']);
console.log('\n');

// adds a track to the library
console.log('Adding track: ');
library.addTrack('Welcome to the jungle', "Guns N' Roses", 'Appetite for Destruction');
console.log(library.tracks);
console.log('\n');

// adds a playlist to the library
console.log("Adding Playlist: ");
library.addPlaylist("Jordan's Playlist");
console.log(library.playlists);
console.log('\n');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
library.printSearchResults('jungle');