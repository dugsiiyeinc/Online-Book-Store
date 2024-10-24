async function fetchBookDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("bookId");
  console.log("Book ID:", bookId);
  try {
    const response = await fetch("../books.json");
    if (!response.ok) {
      console.error("Response received:", response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();
    console.log("Fetched books:", books);

    const book = books.find((b) => b.bookId === bookId);
    console.log("Found book:", book);
  } catch (error) {
    console.error("Error fetching book details:", error);
  }
}
