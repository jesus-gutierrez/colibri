var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

document.addEventListener('click', function () {
	if (!event.target.classList.contains('accordionSubMenu')) return;
	event.target.classList.add('accordionActive');
	var links = document.querySelectorAll('.accordionSubMenu');
	for (var i = 0; i < links.length; i++) {
		if (links[i] === event.target) continue;
		links[i].classList.remove('accordionActive');

	}

}, false);
