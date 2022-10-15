//import(domtoimage);

const style = document.documentElement.style;
const logo = document.getElementById('f1logo');
const teamlogo = document.getElementById('team');

const imgconst = document.getElementById('img');
const brconst = document.getElementById('breaking');
const nmconst = document.getElementById('name');
const evconst = document.getElementById('event');

const zoominput = document.getElementById('inputIMG');
const posinput = document.getElementById('inputPOS');
const brinput = document.getElementById('inputBR');
const nminput = document.getElementById('inputNM');
const evinput = document.getElementById('inputEV');

const zoombtn = document.getElementById('resetIMG');
const brbtn = document.getElementById('resetBR');
const nmbtn = document.getElementById('resetNM');
const evbtn = document.getElementById('resetEV');
const posbtn = document.getElementById('resetPOS');

//----------------------------------------------------------------------------------------------------------------------

function textcolor(dark) {
	if (dark === true) {
		logo.src = 'imgs/basic/F1-Logo-Dark.png';
		style.setProperty('--color', '#222222');
	} else {
		logo.src = 'imgs/basic/F1-Logo.png';
		style.setProperty('--color', '#ffffff');
	}
}

function img(src) {
	document.getElementById('img').src = src;
}

function bgcolor(hex) {
	style.setProperty('--background', hex);
	document.getElementById('colorpick').value = hex;
}

function team(src) {
	document.getElementById('team').src = src;
}

//----------------------------------------------------------------------------------------------------------------------

document.getElementById('textcolor').addEventListener('click', function () {
	if (logo.src.endsWith('imgs/basic/F1-Logo.png')) {
		logo.src = 'imgs/basic/F1-Logo-Dark.png';
		style.setProperty('--color', '#222222');
	} else {
		logo.src = 'imgs/basic/F1-Logo.png';
		style.setProperty('--color', '#ffffff');
	}

	if (teamlogo.src.endsWith('imgs/basic/F1-Logo-Dark.png')) {
		teamlogo.src = 'imgs/basic/F1-Logo.png';
	} else if (teamlogo.src.endsWith('imgs/basic/F1-Logo.png')) {
		teamlogo.src = 'imgs/basic/F1-Logo-Dark.png';
	}
});

document.getElementById('colorpick').addEventListener('input', function () {
	style.setProperty('--background', document.getElementById('colorpick').value);
});

document.getElementById('render').addEventListener('click', function () {
	let node = document.getElementById('container');
	let rndr = document.getElementById('imgrndr');

	domtoimage
		.toPng(node)
		.then(function (dataUrl) {
			let img = new Image();
			img.src = dataUrl;
			img.alt = evconst.innerText;
			rndr.children.item(2).replaceWith(img);
			let a = document.getElementById('download');
			// $(a).text(">>>下载图片<<<")
			$(a).attr({
				// id:'download',
				href: dataUrl,
				download: evconst.innerText,
				// style:'font-size: 60px !important;'
			});
			// rndr.children.item(0).replaceWith(a);

			/*let blob = dataURItoBlob(dataUrl);
            let fd = new FormData(document.forms[0]);
            fd.append("img", blob);*/
			/*$.ajax({
                type: "POST",
                url: "js/mailTest.php",
                data: {"img": dataUrl}
                /*success: function(mydata) {
                    alert(mydata);
                }
            });*/
		})
		.catch(function (error) {
			console.error('oops, something went wrong!', error);
		});
});

function dataURItoBlob(dataURI) {
	let byteString = atob(dataURI.split(',')[1]);
	let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	let ab = new ArrayBuffer(byteString.length);
	let ia = new Uint8Array(ab);
	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	return new Blob([ab], { type: mimeString });
}

zoominput.addEventListener('input', function () {
	imgconst.style.height = zoominput.value + '%';
});

posinput.addEventListener('input', function () {
	imgconst.style.left = posinput.value + '%';
});

brinput.addEventListener('input', function () {
	brconst.style.fontSize = brinput.value + 'px';
});

nminput.addEventListener('input', function () {
	nmconst.style.fontSize = nminput.value + 'px';
});

evinput.addEventListener('input', function () {
	evconst.style.fontSize = evinput.value + 'px';
});

zoombtn.addEventListener('click', function () {
	imgconst.style.height = '100%';
	zoominput.value = 100;
});

brbtn.addEventListener('click', function () {
	brconst.style.fontSize = '90px';
	brinput.value = 90;
});

nmbtn.addEventListener('click', function () {
	nmconst.style.fontSize = '60px';
	nminput.value = 60;
});

evbtn.addEventListener('click', function () {
	evconst.style.fontSize = '41px';
	evinput.value = 41;
});

posbtn.addEventListener('click', function () {
	imgconst.style.top = '0';
	imgconst.style.left = '-5%';
	posinput.value = -5;
});

//----------------------------------------------------------------------------------------------------------------------

// Make the DIV element draggable:
dragElement(imgconst);

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + 'header')) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
		elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
