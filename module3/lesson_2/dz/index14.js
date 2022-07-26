const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    let index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
  },
};
