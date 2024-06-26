CREATE TABLE Books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(20),
  author TEXT,
  genre VARCHAR(10),
  published_year YEAR,
  isbn INTEGER,
  price DECIMAL,
  rating DECIMAL,
  stock_count INTEGER
)
