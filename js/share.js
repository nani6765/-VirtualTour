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

function sendKakaoLink(shareTitle, shareDescription, shareImageUrl) {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: shareTitle,
			description: shareDescription,
			imageUrl:
				shareImageUrl,
			link: {
				mobileWebUrl: 'https://virtualtourtest.netlify.app/',
				webUrl: 'https://virtualtourtest.netlify.app/',
			},
		},
		buttons: [
			{
				title: '테스트 하러가기',
				link: {
					mobileWebUrl: 'https://virtualtourtest.netlify.app/',
					webUrl: 'https://virtualtourtest.netlify.app/',
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
			var shareTitle = infoList[0].name;
			var shareDescription = '';
			break;
		case 1:
			var shareTitle = infoList[1].name;
			var shareDescription = '';
			break;
		case 2:
			var shareTitle = infoList[2].name;
			var shareDescription = '';
			break;
		case 3:
			var shareTitle = infoList[3].name;
			var shareDescription = '';
			break;
		case 4:
			var shareTitle = infoList[4].name;
			var shareDescription = '';
			break;
		case 5:
			var shareTitle = infoList[5].name;
			var shareDescription = '';
			break;
		case 6:
			var shareTitle = infoList[6].name;
			var shareDescription = '';
			break;
		case 7:
			var shareTitle = infoList[7].name;
			var shareDescription = '';
			break;
	}
	const shareImageUrl = url + 'img/png/' + imageNumber + '.png';
	sendKakaoLink(shareTitle, shareDescription, shareImageUrl);
}

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}
