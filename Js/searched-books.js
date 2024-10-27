// Get the search query 
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
async function displaySearchedBooks() {
    const query = getQueryParam("query")?.toLowerCase() || ""; 
    const bookDisplay = document.getElementById("bookDisplay");
    const searchQueryDisplay = document.getElementById("searchQueryDisplay");  
    const searchQuery = document.getElementById("searchQuery");

     searchQueryDisplay.value = query; 
    searchQuery.textContent = `Showing results for "${query}"`;  
}