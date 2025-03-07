window.addEventListener('load', function () {
	html = document.querySelector('html');
	// Header search trigger
	if (document.querySelector('.search-trigger')) {
		const searchTrigger = document.querySelector('.search-trigger');
		const searchEl = document.querySelector('.header--search');
		const searchClose = document.querySelector('.search-close');
		searchTrigger.addEventListener('click', function () {
			searchEl.classList.remove('none');
		});
		searchClose.addEventListener('click', function () {
			searchEl.classList.add('none');
		});
	}

	// Scroll effect on header
	if (document.querySelector('.site-header')) {
		window.addEventListener('scroll', function () {
			const siteHeader = document.querySelector('.site-header');
			if (window.scrollY >= 150) {
				siteHeader.classList.add('colored');
			} else {
				siteHeader.classList.remove('colored');
			}
		});
	}

	// Trending categories
	if (document.querySelector('.categories--slider')) {
		new Splide('.catsSlider', {
			type: 'loop',
			perPage: 4,
			perMove: 1,
			pagination: false,
			gap: '30px',
			mediaQuery: 'max',
			breakpoints: {
				820: {
					perPage: 3,
				},
				576: {
					perPage: 2,
				},
			},
		}).mount();
	}

	// Teachers slider
	if (document.querySelector('.teacher-courses--slider')) {
		new Splide('.teacherCoursesSlider', {
			perPage: 4,
			perMove: 4,
			arrows: false,
			gap: '30px',
			mediaQuery: 'max',
			breakpoints: {
				1024: {
					perPage: 3,
					perMove: 3,
				},
				820: {
					perPage: 2,
					perMove: 2,
				},
				576: {
					perPage: 1.5,
					perMove: 1,
				},
			},
		}).mount();
	}

	// Mobile navigation
	if (document.querySelector('.navigation')) {
		const menuTrigger = document.querySelector('.menu-trigger');
		// const navigation = document.querySelector('.navigation');
		menuTrigger.addEventListener('click', function () {
			html.classList.toggle('menu-opened');
		});
	}
});
