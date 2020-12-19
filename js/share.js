const url = 'https://virtualtourtest.netlify.app/';
const title = '방에서 떠나는 가상여행';
const hash = '%2심리테스트 %23방에서 떠나는 가상여행 %23나와 맞는 여행지는?';

function sendKakaoLink() {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: '방에서 떠나는 가상여행',
			description: '#2심리테스트 #방에서 떠나는 가상여행 #나와 맞는 여행지는?',
			imageUrl:
				'https://virtualtourtest.netlify.app/img/share.png',
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
