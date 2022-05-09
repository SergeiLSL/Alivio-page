
//========================================================================================================================================================
/* ================= MOBILE NAV ========================= */

// Добавляем код для открытия/закрытия меню через бургер
const mobileNavButton = document.querySelector('.header__mobile-nav-button');
const mobileNavIcon = document.querySelector('.header__mobile-nav-button-icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});
//========================================================================================================================================================


/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('#video-story-btn');
const videoFile = document.querySelector('#video-story');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');


videoBtn.addEventListener('click', function () {

	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	}

	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = '@img/story/pause.svg';

		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause();
		videoBtnIcon.src = '@img/story/play.svg';

		videoOverlay.onmouseleave = null;
		videoOverlay.onmouseenter = null;

	}


})
