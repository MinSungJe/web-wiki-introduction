console.log(
  '%c' +
    ' __      __  ______   __  __   ______     ' +
    '\n' +
    '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
    '\n' +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    '\n' +
    ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
    '\n' +
    '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
    '\n' +
    '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
    '\n' +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  'color: #d81b60; font-size: 16px; font-weight: bold;'
);

const commentOneTemplate = document.querySelector('#comment-one');
const enterButton = document.querySelector('#enter');
const commentList = document.querySelector('.comment-list');

enterButton.addEventListener('click', () => {
  const commentClone = commentOneTemplate.content.cloneNode(true);
  const textValue = document.querySelector('#comment-input').value;
  if (textValue === '') {
    alert('댓글을 입력해주세요!');
    return;
  }

  commentClone.querySelector('.comment-content').textContent = textValue;

  commentList.appendChild(commentClone);
  alert('댓글이 등록되었습니다.');
  document.querySelector('#comment-input').value = '';
});

const links = document.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  links.forEach((link) => (link.style.fontWeight = 'unset'));

  if (scrollY >= 119 && scrollY < 482) {
    links[0].style.fontWeight = 'bold';
  } else if (scrollY >= 482 && scrollY < 1421) {
    links[1].style.fontWeight = 'bold';
  } else if (scrollY >= 1421 && scrollY < 2736) {
    links[2].style.fontWeight = 'bold';
  } else if (scrollY >= 2736) {
    links[3].style.fontWeight = 'bold';
  }
});

const profileContainer = document.querySelector('.profile-container');
let imageClickCount = 0;
profileContainer.addEventListener('click', () => {
  imageClickCount += 1;
  console.log(imageClickCount);

  if (imageClickCount >= 30) {
    setTimeout(() => {
      profileContainer.style.animation = 'none';
    }, 5100);

    profileContainer.style.animation = 'flipImage 5s';
    imageClickCount = 0;
  }
});
