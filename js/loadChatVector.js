/** Set the .chat-vector placeholder's innerHTML as inline svg. which is very easy to style using css
 * example
 * .chat-vector svg path { ... }
 */

const $chatVector = document.querySelector('.chat-vector');

$chatVector.innerHTML += `
<svg width="34" height="26" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="white" d="M29.1501 21.0501C29.1501 21.7662 28.8656 22.4529 28.3593 22.9593C27.8529 23.4656 27.1662 23.7501 26.4501 23.7501H10.2501L4.8501 29.1501V7.5501C4.8501 6.83401 5.13456 6.14726 5.64091 5.64091C6.14726 5.13456 6.83401 4.8501 7.5501 4.8501H26.4501C27.1662 4.8501 27.8529 5.13456 28.3593 5.64091C28.8656 6.14726 29.1501 6.83401 29.1501 7.5501V21.0501Z" />
</svg>

`;
