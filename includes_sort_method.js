// Beginner GitHub Mini-Project: Book Reading List Manager
// Demonstrates Array.prototype.includes(), String.prototype.includes(), and Array.prototype.sort()

const readingList = [
  "Atomic Habits",
  "Clean Code",
  "The Pragmatic Programmer",
  "Deep Work"
];

const pageCounts = [320, 464, 185, 296];

// 1. Check if a book is already in the list using includes()
function addBook(bookTitle) {
  if (readingList.includes(bookTitle)) {
    console.log(`"${bookTitle}" is already in your reading list.`);
  } else {
    readingList.push(bookTitle);
    console.log(`Added "${bookTitle}" to your reading list.`);
  }
}

addBook("Clean Code");      // Already in list
addBook("Eloquent JavaScript"); // Added to list

// 2. Search for a keyword inside book titles (case-insensitive)
function searchBooks(keyword) {
  const cleanKeyword = keyword.toLowerCase();
  const matches = readingList.filter((title) =>
    title.toLowerCase().includes(cleanKeyword)
  );
  console.log(`Matches for "${keyword}":`, matches);
}

searchBooks("code"); // ["Clean Code"]

// 3. Sort book titles alphabetically without mutating the original array
// Using [...readingList] creates a shallow copy so readingList stays in its original order
const alphabeticalBooks = [...readingList].sort();
console.log("Alphabetical titles:", alphabeticalBooks);
console.log("Original reading list:", readingList);

// 4. Sort page counts from shortest to longest
// Always pass (a, b) => a - b for numbers so 185 doesn't get treated like text
const shortestToLongest = [...pageCounts].sort((a, b) => a - b);
console.log("Page counts (shortest to longest):", shortestToLongest);




// Simple beginner example of includes() and sort()

// const songs = ["Believer", "Senorita", "Arcade", "Closer"];
// const scores = [88, 100, 9, 45, 23];

// 1. Check if a song is already in the playlist using includes()
// const songToAdd = "Senorita";

// if (songs.includes(songToAdd)) {
//   console.log(songToAdd + " is already in the playlist!");
// } else {
//   songs.push(songToAdd);
//   console.log("Added " + songToAdd);
// }

// 2. Check if a word is inside a text message using includes()
// const bio = "I am learning JavaScript on GitHub";
// console.log("Mentions JavaScript?", bio.includes("JavaScript"));

// 3. Sort songs alphabetically using sort()
// songs.sort();
// console.log("Sorted songs:", songs);

// 4. Sort numbers properly using (a, b) => a - b
// scores.sort((a, b) => a - b);
// console.log("Sorted scores:", scores);