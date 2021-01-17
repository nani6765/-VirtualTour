const url = 'https://virtualtourtest.netlify.app/';
const title = '방에서 떠나는 가상여행';
const hash = '%2심리테스트 %23방에서 떠나는 가상여행 %23나와 맞는 여행지는?';
var art = document.querySelector('.art')

function checkImage(){
	if(art.hasChildNodes){
		console.log("has");
		var artImage = art.firstChild.alt;
		return Number(artImage);
	} else {
		console.log("error");
		alert("구현중입니다.");
	}
	return error;
}

function sendKakaoLink(shareURL, shareTitle, shareDescription, shareImageUrl) {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: shareTitle,
			description: shareDescription,
			imageUrl:
				shareImageUrl,
			link: {
				mobileWebUrl: shareURL,
				webUrl: shareURL,
			},
		},
		buttons: [
			{
				title: '결과확인하기',
				link: {
					mobileWebUrl: shareURL,
					webUrl: shareURL,
				},
			},
		],
	});
}

function createDescription(){
	const imageNumber = checkImage();
	console.log(imageNumber);
	if(imageNumber === "error"){
		return 0;
	}
	switch (imageNumber) {
		case 0:
			var shareDescription = infoList[0].name;
			break;
		case 1:
			var shareDescription = infoList[1].name;
			break;
		case 2:
			var shareDescription = infoList[2].name;
			break;
		case 3:
			var shareDescription = infoList[3].name;
			break;
		case 4:
			var shareDescription = infoList[4].name;
			break;
		case 5:
			var shareDescription = infoList[5].name;
			break;
		case 6:
			var shareDescription = infoList[6].name;
			break;
		case 7:
			var shareDescription = infoList[7].name;
			break;
	}
	var shareTitle = '방에서 떠나는 가상여행 결과'
	const shareImageUrl = url + 'img/png/' + imageNumber + '.png';
	const shareURL = url + 'page/result-' + imageNumber + '.html';
	sendKakaoLink(shareURL, shareTitle, shareDescription, shareImageUrl);
}

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}
