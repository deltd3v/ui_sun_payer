const $arrowRight = document.querySelector('.arrow');

function setDesktopArrowRight() {
	if (window.innerWidth >= 768) {
		$arrowRight.innerHTML = `
        <svg width="57" height="39" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.7341 21.8008C56.7287 20.8431 56.7585 19.2605 55.8008 18.2659L40.1939 2.05869C39.2361 1.06414 37.6535 1.03428 36.659 1.992C35.6644 2.94971 35.6345 4.53235 36.5923 5.5269L50.4651 19.9333L36.0587 33.8061C35.0641 34.7639 35.0343 36.3465 35.992 37.341C36.9497 38.3356 38.5323 38.3655 39.5269 37.4077L55.7341 21.8008ZM0.952839 21.4996L53.9528 22.4996L54.0472 17.5004L1.04716 16.5004L0.952839 21.4996Z" fill="#FCBD2F"/>
        </svg>
        
        `;
	}
}

function setMobileArrowDown() {
	if (window.innerWidth <= 768) {
		$arrowRight.innerHTML = `
    <svg width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2322 54.7772C18.2085 55.7535 19.7915 55.7535 20.7678 54.7772L36.6777 38.8673C37.654 37.891 37.654 36.3081 36.6777 35.3318C35.7014 34.3555 34.1184 34.3555 33.1421 35.3318L19 49.4739L4.85786 35.3318C3.88155 34.3555 2.29864 34.3555 1.32233 35.3318C0.34602 36.3081 0.34602 37.891 1.32233 38.8673L17.2322 54.7772ZM16.5 0L16.5 53.0094H21.5L21.5 0L16.5 0Z" fill="#FCBD2F"/>
    </svg>
    `;
	}
}

setDesktopArrowRight();
setMobileArrowDown();

window.onresize = (e) => {
	setMobileArrowDown();
	setDesktopArrowRight();
};
