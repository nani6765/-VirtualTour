const header = document.getElementById('header');
const footer = document.getElementById('footer');

const wrap = document.getElementById('wrap');
const qna = document.getElementById('qna');

const tabletMQL = window.matchMedia('all and (min-width: 768px)');
const pcMQL = window.matchMedia('all and (min-width: 1024px)');


//7개의 질문
const ENDPOINT = 7;
//선택한 배열
const select = [];
let qIdx = -1;

//스코어 계산
const calcScore = () => {
	var Apoint = 0;
	var Gpoint = 0;
	var Ipoint = 0;
	var Ppoint = 0;
	var Rpoint = 0;
	var Spoint = 0;

	for (let i = 0; i < ENDPOINT; i++) {
		const firstType = qnaList[i].a[select[i]].type[0];
		console.log(i, "번째 firstType", firstType);
		if (firstType === 'A'){
			Apoint = Apoint+1;
		} else if (firstType === 'G'){
			Gpoint = Gpoint+1;
		}else if (firstType === 'I'){
			Ipoint = Ipoint+1;
		}else if (firstType === 'P'){
			Ppoint = Ppoint+1;
		}else if (firstType === 'R'){
				Rpoint = Rpoint+1;
		}else if (firstType === 'S'){
			Spoint = Spoint+1;
		}

		const secondType = qnaList[i].a[select[i]].type[1];
		console.log(i, "번째 secondType", secondType);
		if (secondType === 'A'){
			Apoint = Apoint+1;
		} else if (secondType === 'G'){
			Gpoint = Gpoint+1;
		}else if (secondType === 'I'){
			Ipoint = Ipoint+1;
		}else if (secondType === 'P'){
			Ppoint = Ppoint+1;
		}else if (secondType === 'R'){
				Rpoint = Rpoint+1;
		} else if (secondType === 'S'){
			Spoint = Spoint+1;
		}
	}
	console.log("A : " , Apoint, ", G : ", Gpoint, ", I : ", Ipoint, ", P : ", Ppoint, ", R : ", Rpoint, ", S : ", Spoint);

	const resultPoint = [Apoint, Gpoint, Ipoint, Ppoint, Rpoint, Spoint];

	var firstType = '';
	var secondType = '';
	var thirdType = '';

	if( Apoint >= Rpoint){
		firstType = 'A';
	} else {
		firstType = 'R';
	}

	if( Spoint >= Ppoint){
		secondType = 'S';
	} else {
		secondType = 'P';
	}

	if( Ipoint >= Gpoint){
		thirdType = 'I';
	} else {
		thirdType = 'G';
	}

	let resultArray = [firstType, secondType, thirdType];
	console.log("resultArray", resultArray);
	let resultword = resultArray.join(['']);
	console.log("resultword", resultword);
	return resultword;
}

//합산된 점수의 scope에 따라 num반환
const sortResult = (resultword) => {
	var resultNum = 0;
	const samplearray = ['ASI', 'ASG', 'API', 'APG', 'RSI', 'RSG', 'RPI', 'RPG'];
	for(var i = 0; i < samplearray.length; i++){
		if( samplearray[i] === resultword ){
			resultNum = i;
		}
	}
	console.log("resultNum ", resultNum);
	return resultNum;
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
	const img_url = 'img/image-' + grade + '.png';
	const res_img = document.createElement('img');
	const res_img_div = document.querySelector('.art');
	const title = document.querySelector('#decTitle');
	const sub = document.querySelector('#decSub');
	const desc = document.querySelector('#desContent');
	const place = document.querySelector('#decPlace');

	//이미지 이름을 image-`grade`.png로 저장할 것
	pTitle.innerHTML ='당신의 결과는?!';
	res_img.src = img_url; //img.src
	res_img.alt = infoList[grade].name; //img.alt
	res_img.title = infoList[grade].name; //img.title = img.name
	res_img_div.appendChild(res_img);
	title.textcontent = infoList[grade].name;
	sub.textcontent = infoList[grade].sub;
	desc.textcontent = infoList[grade].desc;
	place.textcontent = infoList[grade].place;

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
	//https://www.w3schools.com/jsref/met_win_setinterval.asp
	//주기적으로 흐려지며 y축으로 사라짐
	const interval = setInterval(() => {
		qna.style.opacity -= 0.1;
		qna.style.transform = 'translateY(-1px)';
	}, 50);

	//https://www.w3schools.com/jsref/met_win_cleartimeout.asp
	//timeout 지정 해제
	setTimeout(() => clearTimeout(interval), 500);
	//qna display 지움
	setTimeout(() => (qna.style.display = 'none'), 500);

	//계산중인 화면 등장
	setTimeout(() => {
		const calc = document.getElementById('calc');
		calc.style.display = 'block';
		calc.style.animation = 'going-up 0.5s forwards, ' + 'fade-in 0.5s forwards';
	}, 700);

	//계산중인 화면 사라짐
	setTimeout(() => {
		calc.style.animation = '';
		calc.style.animation = 'going-left 0.4s forwards, ' + 'fade-out 0.4s forwards';
		setTimeout(() => {
			calc.style.display = 'none';
			//goResult
			goResult();
		}, 400);
	}, 9000);
};

//goNext : addAnswer(qNum.a[i].answer, i);
const addAnswer = (answerTxt, idx) => {
	const answer = document.createElement('button');
	answer.className += 'a box';
	answer.innerHTML = answerTxt;

	answer.addEventListener('click', () => {

		const parent = answer.parentNode;
		const children = parent.childNodes;
		for (let i in children) {
			children[i].disabled = true;
		}

		//face-out-5-4가 뭐하는건질 모르겠네..
		parent.classList.add('fade-out-5-4');
		setTimeout(() => {
			select[qIdx] = idx;
			a.innerHTML = '';
			parent.classList.remove('fade-out-5-4');
			goNext();
		}, 800);
	});

	setTimeout(
		() => (answer.style.animation = 'going-down 0.25s forwards, fade-in 0.25s forwards'), 50
	);
	const a = document.querySelector('.answer');
	a.appendChild(answer);
};

const goNext = () => {
	if (qIdx++ === qnaList.length - 1) {
		//qnaList를 다 돌았으면 end로
		end();
		return;
	}

	const status = document.querySelector('.status');
	status.style.width = (100/ENDPOINT) * (qIdx + 1) + '%';

	const qNum = qnaList[qIdx];
	const q = document.querySelector('.q');
	q.innerHTML = qNum.q;

	//const qna = document.getElementById('qna');
	qna.style.animation =
		'fade-in 0.3s ease-in-out 0.4s forwards, ' + 'going-down 0.3s ease-in-out 0.4s forwards';

	setTimeout(() => {
		//endIdx는 없어도 되지 않나..?
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
	const start_btn = document.querySelector('.start');

	start_btn.addEventListener('click', () => {
		try {
			start_btn.disabled = true;
			begin();
		} catch (err) {
			console.log(err);
		}
	});
};

window.onload = load();
