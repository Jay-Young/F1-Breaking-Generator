const select = document.getElementById('templates');
const teamArray = select.innerText.split('\n');
const drivers = document.getElementById('drivers');
const driverArray = drivers.innerText.split('\n');
const randomChoice = document.getElementById('random');
const words = {
	default: 'This is default text',
	max: 'Checo is a legend',
	sergio: 'ARE YOU FALLING ASLEEP',
	charles: "I'm stupid, I'm stupid",
	carlos: 'SMOOTH OPERATOOOOOR',
	lewis: 'The safety car is too slow',
	george: "I'll teach you PowerPoint",
	fernando: 'GP2 engine, GP2 engine',
	esteban: 'Defend like a lion',
	daniel: 'Big boy with big smile',
	lando: 'What damage do you have? Talent!',
	pierre: 'Oh my god! What did I do!',
	yuki: '*** ****? **** ***** ***!',
	valtteri: "James, it's Valtteri",
	zhou: 'Yes, Boys! Come On!',
	kevin: 'Suck my balls!',
	mick: 'My dad, My dad, My dad',
	sebastian: 'Woooooohoo! Yeeeees!',
	lance: 'what happened we need to know',
	alexander: 'Albon train',
	nicholas: 'Goatifi',
	nyck: 'Ha! points on debut',
	guenther: 'You are two f**king idiots',
};

const teamLogos = {
	Ferrari: 'imgs/teams/ferrari.png',
	Mercedes: 'imgs/teams/mercedes.png',
	'Red Bull': 'imgs/teams/redbull.png',
	'Aston Martin': 'imgs/teams/aston.png',
	McLaren: 'imgs/teams/mclaren.png',
	Alpine: 'imgs/teams/alpine.png',
	'Alfa Romeo': 'imgs/teams/alfa.png',
	AlphaTauri: 'imgs/teams/alpha.png',
	Haas: 'imgs/teams/haas.png',
	Williams: 'imgs/teams/williams.png',
	'Formula 1': 'imgs/basic/F1-Logo-Dark.png',
	Audi: 'imgs/teams/audi.png',
	Porsche: 'imgs/teams/porsche.svg',
};

const teamBgColors = {
	Ferrari: '#FF0000',
	Mercedes: '#00D2BE',
	'Red Bull': '#161863',
	'Aston Martin': '#074329',
	McLaren: '#FF8700',
	Alpine: '#318CE7',
	'Alfa Romeo': '#960000',
	AlphaTauri: '#27294F',
	Haas: '#ED1A3B',
	Williams: '#0F9CDD',
	'Formula 1': '#FFFFFF',
	Audi: '#262626',
	Porsche: '#E6AF5D',
};

const teamTextColor = {
	Ferrari: true,
	Mercedes: true,
	'Red Bull': false,
	'Aston Martin': false,
	McLaren: true,
	Alpine: false,
	'Alfa Romeo': false,
	AlphaTauri: false,
	Haas: false,
	Williams: false,
	'Formula 1': true,
	Audi: false,
	Porsche: true,
};

function setTeamStyle(teamName) {
	team(teamLogos[teamName]);
	bgcolor(teamBgColors[teamName]);
	textcolor(teamTextColor[teamName]);
}

function chooseDriver(driver) {
	nmconst.innerText = driverArray[drivers.selectedIndex];
	img('imgs/drivers/' + driver + '.jpg');
	if (words[driver]) {
		evconst.innerText = words[driver].toUpperCase();
	} else {
		evconst.innerText = words['default'].toUpperCase();
	}
}

select.addEventListener('input', function () {
	switch (select.value) {
		case 'Ferrari':
			drivers.value = 'Charles';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Ferrari');
			break;
		case 'Mercedes':
			drivers.value = 'Lewis';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Mercedes');
			break;
		case 'Red Bull':
			drivers.value = 'Max';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Red Bull');
			break;
		case 'Aston Martin':
			drivers.value = 'Sebastian';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Aston Martin');
			break;
		case 'McLaren':
			drivers.value = 'Lando';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('McLaren');
			break;
		case 'Alpine':
			drivers.value = 'Esteban';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Alpine');
			break;
		case 'Alfa Romeo':
			drivers.value = 'Zhou';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Alfa Romeo');
			break;
		case 'AlphaTauri':
			drivers.value = 'Pierre';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('AlphaTauri');
			break;
		case 'Haas':
			drivers.value = 'Kevin';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Haas');
			break;
		case 'Williams':
			drivers.value = 'Alexander';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Williams');
			break;
		case 'Formula 1':
			drivers.value = 'None';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Formula 1');
			break;
		case 'Audi':
			drivers.value = 'None';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Audi');
			break;
		case 'Porsche':
			drivers.value = 'None';
			chooseDriver(drivers.value.toLowerCase());
			setTeamStyle('Porsche');
			break;
	}
});

drivers.addEventListener('change', function () {
	let driver = drivers.value;
	driver = driver.toLowerCase();
	chooseDriver(driver);
});

randomChoice.addEventListener('click', function () {
	let teamName = teamArray[Math.floor(Math.random() * teamArray.length)];
	select.value = teamName;
	let fullName = driverArray[Math.floor(Math.random() * driverArray.length)];
	let firstName = fullName.split(' ')[0];
	drivers.value = firstName;
	setTeamStyle(teamName);
	chooseDriver(firstName.toLowerCase());
	// console.log(select.value, firstName);
});
