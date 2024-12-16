function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('page' + pageNumber).style.display = 'flex';
}

function prevPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('page' + pageNumber).style.display = 'flex';
}
