/** Set the .apple-vector placeholder's innerHTML as inline svg. which is very easy to style using css
 * example
 * .apple-vector svg path { ... }
 */

const $appleVector = document.querySelector('.apple-vector');

$appleVector.innerHTML += `


<svg width="44" height="51" viewBox="0 0 44 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.3506 48.501C33.5826 51.131 30.5287 50.721 27.6178 49.481C24.523 48.216 21.6938 48.136 18.4254 49.481C14.3552 51.201 12.195 50.701 9.74366 48.501C-4.096 34.551 -2.05325 13.301 13.676 12.501C17.4908 12.701 20.1617 14.566 22.4087 14.721C25.7487 14.056 28.9456 12.151 32.5204 12.401C36.8153 12.741 40.0275 14.401 42.1724 17.386C33.3375 22.586 35.4313 33.986 43.5462 37.186C41.9222 41.361 39.8386 45.486 36.3454 48.536L36.3506 48.501ZM22.1023 12.351C21.6887 6.15102 26.8211 1.05103 32.7247 0.551025C33.5367 7.70102 26.0857 13.051 22.1023 12.351Z" fill="white"/>
</svg>


  `;
