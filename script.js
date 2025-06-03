const myLibrary = [];

const bookPrototype ={
  toggleRead(){
    this.read = !this.read;
  }
}

function Book(name, author, numOfPages, read) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

Object.assign(Book.prototype, bookPrototype);


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

//displays the book and gives it a delete button
function displayBook(book) {
  //Adds a line for the book
  const tableBookRow = document.createElement("tr");
  Object.keys(book).forEach((key) => {
    const tableBookData = document.createElement("td");
    tableBookData.textContent = `${book[key]}`;
    tableBookRow.appendChild(tableBookData);
  });


  //gives each book an id on the DOM(the same as the book on the backend)
  tableBookRow.setAttribute('data-id', book.id);
  
  //adds an delete button with the same id
  const tdDelButton = document.createElement("td");
  const delButton = document.createElement("button");
  delButton.setAttribute('data-id', book.id);
  delButton.textContent = "Deletar";
  //adds del button functionality
  delButton.addEventListener("click", (e)=>{
    console.log(delButton);
    buttonId = delButton.getAttribute("data-id");
    console.log(buttonId);
    myLibrary.forEach(book =>{
      
      if(book.id == buttonId){
        //if it finds, than that book must be deleted
        bookToBeDeleted = document.querySelector(`tr[data-id="${book.id}"]`)  
        bookToBeDeleted.remove();
      }
    })
  })
  //Alocate correct position
  tdDelButton.appendChild(delButton)
  tableBookRow.appendChild(tdDelButton);
  bookDisplayContainer.appendChild(tableBookRow);
}

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

  modal.close();
})


