const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = ( library) => {
  // write your code here
	    if (!library || !library.books || !Array.isArray(library.books)) {
        console.error("Invalid library object");
        return 0;
    }

    // Filter the books array based on readingStatus and return the count
    const readBooks = library.books.filter(book => book.readingStatus === true);
    return readBooks.length;

	
};

// Do not change the code below

alert(numberOfBooksRead());
