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
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const keys = Object.keys(library.playlists);
  for (const val of keys) {
    const { id, name, tracks } = library.playlists[val];
    console.log(
      `${id}: ${name} - ${tracks.length} tracks`
    );
  }
};

console.log("Printing playlists: ");
printPlaylists();
console.log("\n");

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const keys = Object.keys(library.tracks);
  for (const val of keys) {
    const { id, name, artist, album } = library.tracks[val];
    console.log(
      `${id}: ${name} by ${artist} (${album})`
    );
  }
};

console.log("Printing list of tracks: ");
printTracks();
console.log("\n");

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  if (!library.playlists[playlistId]) {
    console.log("Invalid playlist ID");
    return;
  }

  const { id, name, tracks } = library.playlists[playlistId];
  console.log(
    `${id}: ${name} - ${tracks.length} tracks`
  );

  const trackId = library.playlists[playlistId].tracks;
  const keys = Object.keys(library.tracks);
  for (const track of trackId) {
    const { id, name, artist, album } = library.tracks[track];
    console.log(
      `${id}: ${name} by ${artist} (${album})`
    );
  }
};

console.log("Retrieving Playlist: ");
printPlaylist('p01');
console.log("\n");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const trackPath = library.tracks;
  const playlistPath = library.playlists;

  if (!trackPath[trackId] || !playlistPath[playlistId]) {
    console.log("Invalid track and/or playlist");
    return;
  }
  const track = trackPath[trackId].id;
  const playlist = playlistPath[playlistId].tracks;

  playlist.push(track);
  console.log(`Track was added to playlist`);
};

addTrackToPlaylist('t01', 'p02');
console.log(library.playlists['p02']);
console.log('\n');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  const id = generateUid();
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  };
};

console.log('Adding track: ');
addTrack('Welcome to the jungle', "Guns N' Roses", 'Appetite for Destruction');
console.log(library.tracks);
console.log('\n');

// adds a playlist to the library
const addPlaylist = function(name) {
  const id = generateUid();
  library.playlists[id] = {
    id: id,
    name: name,
    tracks: []
  };
};

console.log("Adding Playlist: ");
addPlaylist("Jordan's Playlist");
console.log(library.playlists);
console.log('\n');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) { };
