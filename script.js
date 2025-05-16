const myLibrary = [];

function Book(name, author, numOfPages, read){
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary(name, author, numOfPages, read) {
  const book = new Book(name, author, numOfPages, read);
  myLibrary.push(book);
}

function displayLibrary(myLibrary) {
  myLibrary.forEach(book => {
    displayBook(book);
  });
}

const bookDisplayContainer = document.querySelector(".bookTable")

function displayBook(book) {
  const tableBookRow = document.createElement("tr");
  Object.keys(book).forEach(key => {
      const tableBookData = document.createElement("td");
      tableBookData.textContent = `${book[key]}`
      tableBookRow.appendChild(tableBookData);
    });
  bookDisplayContainer.appendChild(tableBookRow);
}

addBookToLibrary("chihiro", "Cleber Miyazaki", 32, true);
displayLibrary(myLibrary);
console.log(myLibrary);