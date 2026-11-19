// Simple beginner example of includes() and sort()

const songs = ["Believer", "Senorita", "Arcade", "Closer"];
const scores = [88, 100, 9, 45, 23];

// 1. Check if a song is already in the playlist using includes()
const songToAdd = "Arcade";

if (songs.includes(songToAdd)) {
  console.log(songToAdd + " is already in the playlist!");
} else {
  songs.push(songToAdd);
  console.log("Added " + songToAdd);
}

// 2. Check if a word is inside a text message using includes()
const bio = "I am learning JavaScript on GitHub";
console.log("Mentions JavaScript?", bio.includes("JavaScript"));

// 3. Sort songs alphabetically using sort()
songs.sort();
console.log("Sorted songs:", songs);

// 4. Sort numbers properly using (a, b) => a - b
scores.sort((a, b) => a - b);
console.log("Sorted scores:", scores);