const $menuToggleBox = document.querySelector('#menu-toggle');
const $menuList = document.querySelector('#mobile-menu-list');
const $menuToggleOpenIcon = document.querySelector('#menu-toggle__icon-open');
const $menuToggleCloseIcon = document.querySelector('#menu-toggle__icon-close');

/** Whenever the checkbox is checked, the menu list should be visible, if not checked, the menu list should be invisible */
$menuToggleBox.onclick = (e) => {
	const checked = e.target.checked;

	if (checked) {
		$menuList.style.display = 'block';
	}

	if (!checked) {
		$menuList.style.display = 'none';
	}
};

/** Hide the mobile menu list upon screen resizing */
window.onresize = (e) => {
	const width = window.innerWidth;
	const $menuToggleBox = document.querySelector('#menu-toggle');

	/** While re-sizing the screen, ensure the screen-width is greater than 768px to hide the mobile-menu-list & menu-icon */
	if (width > 768) {
		$menuList.style.display = 'none';
		$menuToggleBox.style.display = 'none';
		$menuToggleOpenIcon.style.display = 'none';
		$menuToggleCloseIcon.style.display = 'none';
	}

	/** nsure the checkBox is checked before displaying the mobile-menu-list */
	if (width < 768) {
		$menuToggleBox.style.display = 'block';

		if ($menuToggleBox.checked) {
			$menuList.style.display = 'block';
			$menuToggleCloseIcon.style.display = 'block';
		}

		if (!$menuToggleBox.checked) {
			$menuToggleOpenIcon.style.display = 'block';
		}
	}
};
