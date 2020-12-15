const header = document.getElementById('header');
const footer = document.getElementById('footer');

const wrap = document.getElementById('wrap');
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');

const tabletMQL = window.matchMedia('all and (min-width: 768px)');
const pcMQL = window.matchMedia('all and (min-width: 1024px)');

//10개의 질문
const ENDPOINT = 10;
//선택한 배열
const select = [];
let qIdx = -1;

//스코어 계산
const calcScore = () => {
	let point = 0;
	for (let i = 0; i < ENDPOINT; i++) {
		//선택한 배열을 돌면서 score점수를 가져와 합산
		point += qnaList[i].a[select[i]].score;
	}
	return point;
};

//합산된 점수의 scope에 따라 num반환
const sortResult = (point) => {
	let num = 0;
	if (point <= 20) {
		num = 0;
	} else if (point <= 30) {
		num = 1;
	} else if (point <= 40) {
		num = 2;
	} else if (point <= 50) {
		num = 3;
	} else if (point <= 60) {
		num = 4;
	} else {
		num = 5;
	}
	return num;
};


const goResult = () => {
	//pc 
	if (pcMQL.matches) {
		console.log('PC');
		wrap.style.marginTop = '150px';
	//tablet
	} else if (tabletMQL.matches) {
		console.log('tablet');
		wrap.style.marginTop = '115px';
	}
		
	const result = document.getElementById('result');
	const point = calcScore(); //return point
	const grade = sortResult(point); // return num
	
	const pTitle = document.querySelector('.p'); 
	const res_point = document.querySelector('.point'); 
	pTitle.innerHTML = u_name.value + ' 님의 점수는...';
	res_point.innerHTML = point + '점';
	
	
	const pin = document.querySelector('.pin');
	//console.log("mleft", infoList[grade].mLeft)
	//data.js에 정의되어 있음. 애니메이션에 사용되는 것 같은데..?
	pin.style.marginLeft = infoList[grade].mLeft;

	//이미지 이름을 image-`grade`.png로 저장할 것
	const img_url = 'img/image-' + grade + '.png';
	//https://www.w3schools.com/jsref/met_document_createelement.asp
	const res_img = document.createElement('img');
	res_img.src = img_url; //img.src
	res_img.alt = infoList[grade].name; //img.alt
	res_img.title = infoList[grade].name; //img.title = img.name
	
	//https://developer.mozilla.org/ko/docs/Web/API/Node/appendChild
	const res_img_div = document.querySelector('.art');
	res_img_div.appendChild(res_img);
	
	const animal = document.querySelector('.result');
	animal.innerHTML = infoList[grade].name;
	
	//description
	const desc = document.querySelector('.res');
	desc.innerHTML = infoList[grade].desc;
	
	
	
	//https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout
	//0.6초
	setTimeout(() => {
		header.style.display = 'block';
		footer.style.display = 'block';
		result.style.display = 'block';
		header.style.animation = 'fade-in 0.3s forwards';
		footer.style.animation = 'fade-in 0.3s forwards';
		result.style.animation = 'going-up 0.5s, ' + 'fade-in 0.5s forwards';
	}, 600);
};

const end = () => {
	qna.style.animation = '';
	const interval = setInterval(() => {
		qna.style.opacity -= 0.1;
		qna.style.transform = 'translateY(-1px)';
	}, 50);
	setTimeout(() => clearTimeout(interval), 500);
	setTimeout(() => (qna.style.display = 'none'), 500);
	setTimeout(() => {
		const calc = document.getElementById('calc');
		calc.style.display = 'block';
		calc.style.animation = 'going-up 0.5s forwards, ' + 'fade-in 0.5s forwards';
	}, 700);
	setTimeout(() => {
		calc.style.animation = '';
		calc.style.animation = 'going-left 0.4s forwards, ' + 'fade-out 0.4s forwards';
		setTimeout(() => {
			calc.style.display = 'none';
			goResult();
		}, 400);
	}, 9000);
};

const addAnswer = (answerTxt, idx) => {
	const answer = document.createElement('button');
	const a = document.querySelector('.answer');
	answer.className += 'a box';
	answer.innerHTML = answerTxt;
	answer.addEventListener('click', () => {
		const parent = answer.parentNode;
		const children = parent.childNodes;
		for (let i in children) {
			children[i].disabled = true;
		}
		parent.classList.add('fade-out-5-4');
		setTimeout(() => {
			select[qIdx] = idx;
			a.innerHTML = '';
			parent.classList.remove('fade-out-5-4');
			goNext();
		}, 800);
	});

	setTimeout(
		() => (answer.style.animation = 'going-down 0.25s forwards, fade-in 0.25s forwards'),
		50
	);
	a.appendChild(answer);
};

const goNext = () => {
	if (qIdx++ === qnaList.length - 1) {
		end();
		return;
	}

	const status = document.querySelector('.status');
	const qNum = qnaList[qIdx];
	const q = document.querySelector('.q');

	status.style.width = ENDPOINT * (qIdx + 1) + '%';
	q.innerHTML = qNum.q;
	qna.style.animation =
		'fade-in 0.3s ease-in-out 0.4s forwards, ' + 'going-down 0.3s ease-in-out 0.4s forwards';

	setTimeout(() => {
		const endIdx = qNum.a.length - 1;
		for (let i in qNum.a) {
			addAnswer(qNum.a[i].answer, i);
		}
		qna.style.opacity = 1;
	}, 700);
};

const begin = () => {
	const main = document.getElementById('main');
	header.style.animation = 'going-up 0.4s forwards, ' + 'fade-out 0.4s forwards';
	footer.style.animation = 'going-down 0.4s forwards, ' + 'fade-out 0.4s forwards';
	setTimeout(
		() =>
			(main.style.animation =
				'going-up 0.4s ease-in-out forwards, ' + 'fade-out 0.4s ease-in-out forwards'),
		500
	);
	setTimeout(() => {
		header.style.display = 'none';
		footer.style.display = 'none';
		main.style.display = 'none';
		qna.style.display = 'block';
		if (pcMQL.matches) {
			console.log('PC');
			wrap.style.marginTop = '50px';
		} else if (tabletMQL.matches) {
			console.log('tablet');
			wrap.style.marginTop = '30px';
		}
		goNext();
	}, 1000);
};

const load = () => {
	const msg = document.querySelector('.check-name');
	const start_btn = document.querySelector('.start');

	u_name.addEventListener('blur', () => {
		try {
			if (u_name.value.length < 1) {
				throw '이름을 입력하고 시작해 주세요.';
			}
			msg.innerHTML = '';
		} catch (err) {
			msg.innerHTML = err;
		}
	});

	start_btn.addEventListener('click', () => {
		try {
			if (u_name.value.length < 1) {
				throw '이름을 입력하고 시작해 주세요.';
			}
			msg.innerHTML = '';
			start_btn.disabled = true;
			begin();
		} catch (err) {
			msg.innerHTML = err;
		}
	});
};

window.onload = load();