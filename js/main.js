const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

//open을 누르면 on클래스르 붙여주고
open.addEventListener('click', () => {
	container.classList.add('on');
});
//close를 누르면 on클래스를 지워주고
close.addEventListener('click', () => {
	container.classList.remove('on');
});
