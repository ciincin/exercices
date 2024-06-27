CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(20),
  author VARCHAR(30),
  genre VARCHAR(20),
  published_year YEAR,
  isbn VARCHAR(20),
  price DECIMAL(4,2),
  rating DECIMAL(1,1),
  stock_count INTEGER
)
