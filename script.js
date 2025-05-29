const myLibrary = [];

function Book(name, author, numOfPages, read) {
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
  myLibrary.forEach((book) => {
    displayBook(book);
  });
}

const bookDisplayContainer = document.querySelector(".bookTable");

function displayBook(book) {
  const tableBookRow = document.createElement("tr");
  Object.keys(book).forEach((key) => {
    const tableBookData = document.createElement("td");
    tableBookData.textContent = `${book[key]}`;
    tableBookRow.appendChild(tableBookData);
  });


  //gives each book an id on the DOM
  tableBookRow.setAttribute('data-id', book.id);
  
  //adds an delete button with the same id
  tdDelButton = document.createElement("td");
  delButton = document.createElement("button");
  delButton.setAttribute('data-id', book.id);
  delButton.textContent = "Deletar";
  tdDelButton.appendChild(delButton)
  tableBookRow.appendChild(tdDelButton);
  bookDisplayContainer.appendChild(tableBookRow);
}

addBookToLibrary("chihiro", "Cleber Miyazaki", 32, true);
displayLibrary(myLibrary);
console.log(myLibrary);

//Show modal logic
const modal = document.querySelector(".modal");
const showButton = document.querySelector(".btnNewBook");
showButton.addEventListener("click", () => {
  modal.showModal();
});

// Form Button Logic
// Send the data from the form to the table
const sendDataButton = document.querySelector("#close");
const authorInput = document.querySelector("#author")
const nameInput = document.querySelector("#name")
const numberOfPagesInput = document.querySelector("#numberOfPages")
const readInput = document.querySelector("#read")
sendDataButton.addEventListener("click", (e) =>{
  e.preventDefault();
  addBookToLibrary(nameInput.value, authorInput.value, numberOfPagesInput.value, readInput.checked);
  displayBook(myLibrary[myLibrary.length-1]);
  deleteButtons = document.querySelectorAll("[data-id]");

  console.log(deleteButtons);

  modal.close();
})

//Delete button logic
console.log(deleteButtons);


