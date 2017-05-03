var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(){
	var table = document.getElementsByTagName('li');
	var item = 'item ' + table.length;
	list.innerHTML += '<li>' + item + '</li>';
})

