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
