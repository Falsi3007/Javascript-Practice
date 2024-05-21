const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const form = document.getElementById('book-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Validate input fields
  if (title.value === '' || author.value === '' || year.value === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new book object
  const book = {
    title: title.value,
    author: author.value,
    year: year.value
  };

  // Add the book to the book list
  addBookToList(book);

  // Clear the form fields
  title.value = '';
  author.value = '';
  year.value = '';
});

function addBookToList(book) {
  // Create a new div element
  const bookItem = document.createElement('div');
  bookItem.classList.add('book-item');

  // Populate the div with book details
  bookItem.innerHTML = `
    <div>${book.title}</div>
    <div>${book.author}</div>
    <div>${book.year}</div>
  `;

  // Append the book item to the book list
  bookList.appendChild(bookItem);

  // Add event listener for the delete button
  const deleteButton = bookItem.querySelector('.btn-delete');
  deleteButton.addEventListener('click', function () {
    bookList.removeChild(bookItem);
  });
}
