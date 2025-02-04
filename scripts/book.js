let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

document.getElementById('next').addEventListener('click', () => {
	if (currentPage < totalPages - 1) {
		currentPage++;
		updatePages();
	}
});

document.getElementById('prev').addEventListener('click', () => {
	if (currentPage > 0) {
		currentPage--;
		updatePages();
	}
});

document.getElementById('lastPage').addEventListener('click', () => {
	goToLastPage();
});

function updatePages() {
	pages.forEach((page, index) => {
		const rotation = (index < currentPage) ? 180 : (index === currentPage) ? 0 : -180;
		page.style.transform = `rotateY(${rotation}deg)`;
	});
}

function goToLastPage() {
	const pages = document.querySelectorAll('.page');
	currentPage = pages.length - 1;
	updatePages();
}

// Initialize the book
updatePages();
