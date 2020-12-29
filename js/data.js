const qnaList = [
  {
    q: '1. 당신은 친구와 여행을 가기로 했다. 다음 중 당신이 가장 먼저할 일은?',
    a: [
      { answer: 'a. 입고 갈 옷을 선택한다', type: ['A', 'G'] },
      { answer: 'b. 유튜브로 해당지역을 검색해본다', type: ['S', 'P'] },
      { answer: 'c. 해당 지역의 맛집을 추천받는다', type: ['P', 'I'] },
      { answer: 'd. 여행과 어울리는 음악 플레이 리스트를 설정한다', type: ['R', 'G'] }
    ]
  },
  {
    q: '2. 당신은 여행을 갈 때, 어떤 사람과 함께 가기를 원하시나요?',
    a: [
      { answer: 'a. 같이 가는 여행도 즐겁지만, 혼자가는 여행이 너무 즐거워" ', type: ['R', 'I'] },
      { answer: 'b. 반드시 동행하는 사람이 있어야 하지만, 누구든 상관없어 ', type: ['A', 'S'] },
      { answer: 'c. 여행은 잘맞는 사람과 함께! 반드시 취향코드가 같아야지', type: ['R', 'P'] },
      { answer: 'd. 여러 사람이 함께 하는 떠들썩한 분위기가 좋아', type: ['A', 'I'] }
    ]
  },
  {
    q: '3. 여행 중 당신은 어떻게 맛집을 찾아서 들어가시나요?',
    a: [
      { answer: 'a. 역시 맛집은 분위기지! 인스타그램에 #맛집 검색을 해본다', type: ['A', 'P'] },
      { answer: 'b. 맛집은 내가 찾는 법. 둘러보고 느낌이 오는 곳으로 간다', type: ['S', 'I'] },
      { answer: 'c. 택시를 타고 택시기사님께 지역 맛집을 추천 받는다', type: ['R', 'S'] },
      { answer: 'd. 인터넷 검색을 통해 가장 유명한 집으로 찾아가본다', type: ['R', 'G'] }
    ]
  },
  {
    q: '4. 당신은 여행지에서 어떤 장소를 방문하고 싶나요?',
    a: [
      { answer: 'a. 가보지 않은 새로운 공간을 방문하고 싶어', type: ['A', 'S'] },
      { answer: 'b. 좋은 리뷰가 많은 곳에만 가고 싶어', type: ['R', 'I'] },
      { answer: 'c. 힐링할 수 있는 조용한 곳이 너무 좋아', type: ['R', 'P'] },
      { answer: 'd. 여행이니까 화려하고 사람이 많은 곳에 가야지', type: ['A', 'I'] }
    ]
  },
  {
    q: '5. 잠시 당신에게 휴식을 취할 수 있는 시간이 생겼다. 당신의 선택은?',
    a: [
      { answer: 'a. 보고 싶었던 공연을 찾아서 혼자 보러 간다', type: ['A', 'P'] },
      { answer: 'b. 여행지를 기념할 수 있는 여러 가지 기념품을 사러다닌다.', type: ['A', 'G'] },
      { answer: 'c. 휴식시간에는 역시 충분히 충천해야지. 숙소에서 뒹굴거린다', type: ['R', 'S'] },
      { answer: 'd. 여행지에서 있었던 이야기를 다이어리 등에 기록해본다.', type: ['R', 'G'] }
    ]
  },
  {
    q: '6. 테마파크로 놀러간 당신, 롤러코스터를 탈 때 당신의 선택은?',
    a: [
      { answer: 'a. 롤러코스터는 제일 앞에서 타야 제 맛! 앞에서 스릴을 즐긴다', type: ['S', 'I'] },
      { answer: 'b. 앞이나 뒤나 재밌는건 마찬가지이지. 적당히 뒷자리에 탑승한다', type: ['P', 'I']},
      { answer: 'c. 놀이기구는 위험해! 친구의 무사귀환을 기도하며 구경한다', type: ['R', 'G'] },
      { answer: 'd. 퍼레이드가 더 재밌어. 주변을 돌아다니며 감상한다', type: ['S', 'G'] }
    ]
  },
  {
    q: '7. 여행을 마무리한 당신. 여행이 끝난 후 어떤 모습이 기억날 것 같은가?',
    a: [
      { answer: 'a. 여행지에서 있었던 여러가지 에피소드', type: ['R', 'G'] },
      { answer: 'b. 여러 포즈로 찍어 본 여행사진, 남는 건 사진밖에 없지', type: ['A', 'I'] },
      { answer: 'c. 여행 중에 만난 새로운 사람들, 그리고 새로운 친구들', type: ['A', 'S'] },
      { answer: 'd. 맛있는 음식, 여행지에서 먹은 맛있는 음식이 기억난다', type: ['P', 'G'] }
    ]
  }


]

const infoList = [
  {
    name: '폴라로이드 자유분방형 <청춘여행가>',
    sub: '제주도 : 여행에서 뭘해도 재밌는',
    desc: ' 당신은 새로운 사람을 만나는 것을 즐기고 여행 그 자체의 설렘을 즐기는 편이에요. 여행이라는 설렘에 들뜬 당신에겐 제주도를 추천드려요. &ltbr&gt 제주도는 한국의 대표적인 여행지로 많은 볼거리와 먹을거리가 존재해요. 덕분에 많은 사람들이 방문하죠. 자유로운 여행을 추구하는 당신에게 적합한 여행지일거에요. &ltbr&gt 당신은 여행에서 있었던 일을 공유하는 것을 즐기는 스타일 이시군요! SNS에 여행에 관한 글을 올리곤 해요. 제주도의 다양한 먹거리와 볼거리도 SNS에 업로드해봐요! &ltbr&gt 당신은 리액션이 좋고 공감을 잘하는 스타일이에요. 폭풍 리액션 머신인 당신은 좋은 여행 파트너에요. 게스트하우스에서 새로운 사람들을 만나보는 것도 추천해요!',
    place : '장소추천 : 협재해수욕장, 중문관광단지 등 '
  },
  {
    name: '운동화 언변능숙형<무전여행가>',
    sub: '부산 : 새로운 도전을 좋아하는',
    desc: '당신은 일상과는 다른 경험을 하고 싶어해요! 여행에서 여러 가지 경험을 해보고 싶은 당신에게 부산을 추천드려요.&ltbr&gt톡톡튀는 당신은 가봤던 장소보단 새로운 장소를 선호하고, 여행지에서의 새로운 경험을 추구하는 편이에요.&ltbr&gt여행지에서 새로운 사람과 대화하는 것을 즐기길 원하는 군요. 어쩌면 여행에서 만난 친구가 지금도 많을 것 같네요.&ltbr&gt그리고 당신은 여행지에서만 먹을 수 있는 맛집을 좋아할거에요.같이 가는 친구에게 맛집 링크를 공유하며 꼭 가봐야한다고 주장하시진 않나요?&ltbr&gt또 여행갈 때 여러 가지 물품을 챙기시는 스타일이군요! 물품은 알게 모르게 필요한 것들이 대부분이에요. 당신의 가방은 도라에몽 주머니 수준이에요.',
    place: '장소추천 : 광안리 수변공원, 감천 마을 등'
  },
  {
    name: '나침반 지도자형<여행계획자>',
    sub: '서울 : 다른 사람들을 이끄는',
    desc: '당신은 리더십이 우수한 사람이군요! 여행을 직접 계획하고 많은 곳을 돌아보고 싶은 당신에게 서울을 추천드려요!&ltbr&gt서울은 다양한 볼거리와 먹거리가 존재하기에 사전에 여행정보를 파악하고 계획적인 자세가 필요해요.&ltbr&gt당신은 여행전에 여행지의 정보를 충분히 파악하려는 성격을 가졌어요! 그리고 친구나 가족에게 여행지에 가야하는 이유를 구구절절 설명해주는 편이에요. 즉 남들을 설득하는 것을 잘해요.&ltbr&gt그리고 여행지에서 해결할 일이 있을 때, 누가 무엇을 해야할지 역할분담을 하는 편이에요. 당신과 함께 여행을 간다면 어떤 일이 있어도 든든할거에요.',
    place:'장소추천 : 이태원, 연남동, 홍대입구 등'
  },
  {
    name: '스탬프 활동가형 <여행마스터>',
    sub: '경주 : 수많은 여행을 경험한',
    desc: '당신은 여행의 효율성을 따지고 현실적인 여행 계획을  세우는 것을 좋아하시는 군요! 짧은 시간동안 많은 것을 배우고 싶어하는 당신에게는 경주를 추천드려요!&ltbr&gt경주는 한국의 역사문화의 도시로 역사적으로나 문화적으로 볼 것이 많은 장소에요. 특히 수많은 유적지를 대상으로 스탬프 투어와 같은 여행루트가 잘 짜여져 있어 당신에게 적합한 여행지가 될거에요.&ltbr&gt당신은 여행을 하다가 사업 아이템을 생각하거나 발견하는 편이시죠? 갑자기 “이걸로 장사할까?” 라는 말을 자주하진 않나요?&ltbr&gt계획적인 당신은 생각과 다르게 일이 흘러가는 걸 싫어해요. 계획이 틀어지려는 직감이 오면 화가 치밀어 오르곤 할거에요.&ltbr&gt그래도 당신은 에너지가 넘치고 체험 위주의 여행을 좋아해요! 레저나 액티비티를 즐기는 것을 마다하지 않아요.',
    place:'장소추천 : 황리단길, 교촌한옥마을 등'
  },
  {
    name: '지도 탐구가형<여행입문자>',
    sub: '전주 : 최고의 동반자가 되어주는',
    desc: '당신은 끈기 있으며 협동심이 넘치는 스타일 이시군요! 친구와 함께하는 것을 좋아하는 당신에게는 전주를 추천드려요.&ltbr&gt전주는 친구나 가족과 여행을 떠나기 적합한 장소에요. 한옥마을에서 함께 한복을 입는 등 혼자 사진을 찍기 보다는 함께 사진을 찍으면 이쁜 장소들이 많기 때문이에요.&ltbr&gt당신은 힘들어도 싫은소리를 하지 않는 편이에요. 친구들에게 힘이 되어주는 당신은 집단에서 중심역할을 해요!&ltbr&gt여행 전에는 다이어리 같은 곳에  꼭 가봐야 할 곳이나 특이사항을 기록하고 여행 일정을 정리해봐요. 구체적이지 않아도 좋아요.&ltbr&gt여행 일정을 짜는 것이 어렵다면, 같이 가는 친구나 가족들의 의견을 취합해요! 그 의견을 토대로 더 섬세한 일정을 만들 수 있을거에요.',
    place: '장소추천 : 한옥마을, 남부시장 등'
  },
  {
    name: '캐리어 예언자형<패키지여행가>',
    sub: '순천 : 수많은 정보가 바탕이 된',
    desc: '당신은 통찰력이 뛰어나고 나무보다는 숲을 볼줄 아는 사람이에요. 여행에서의 편안함을 추구하는 당신에게는 순천을 추천드려요.&ltbr&gt순천은 순천의 여행지뿐만 아니라 주변에도 여행지가 풍부한 곳이에요. 순천에서 여행을 즐기고, 주변 지역의 여행도 함께 즐기실 수 있어 당신에게 적합한 여행지일거에요.&ltbr&gt당신은 여행을 떠나기 전에 검색창에 여행지의 정보를 검색하는데 역사부터 기후까지 세세한 정보를 수집할 거에요.&ltbr&gt당신이 파악한 여행 정보를 바탕으로 여행지의 루트를 구성하여 패키지 여행을 즐기시는 편이죠? 많은 정보를 바탕으로 다음날 있을 여행일정을 다른 사람에게 제공하는 것을 좋아해요.&ltbr&gt하지만 당신은 종종 사색에 잠길 시간이 필요해요. 머릿속에서 깊은  생각을 많이 하기 때문에 여행지에서 아무생각 없이 쉬어주는 것도 꼭 필요해요.',
    place: '장소추천 : 순천만, 순천드라마세트장 등'
  },
  {
    name: '선글라스 잔다르크형<배낭여행객>',
    sub: '강릉 : 이상적인 여행을 꿈꾸는',
    desc: '여행은 역시 낭만과 함께하는 거에 동의하시죠?  답답한 일상에서 벗어나 휴식과 새로운 분위기를 즐기는 여행을 바라는 당신에게 강릉을 추천드립니다.&ltbr&gt당신은 스스로 여행코스를 정립하고 가고싶은 곳은 꼭 가봐야하는 성격입니다. 당신은 후회없는 여행을 만들기 위해 노력하기 때문이죠.&ltbr&gt그래서 당신은 평소에는 내성적이지만 여행지에서는 조금은 대담해지는 스타일이에요. 여행지에서만은 자신의 목적과 목표에 맞게 움직이길 원하기 때문이에요.&ltbr&gt여행 욕구가 넘치는 당신은 쉴때는 쉬고 놀때는 노는 것이 필요해요. 쉬기만을 원하는 여행, 놀기만을 원하는 여행을 따로 구성하여 떠나보시는 건 어떨까요?',
    place: '장소추천 : 안목해변, 안반데기 등'
  },
  {
    name: '일기장/다이어리 백과사전형 <이야기꾼>',
    sub: '천안 : 논리적이고 감성이 풍부한',
    desc: '당신은 상황 적응력이 우수하고 남을 배려할줄 아는 사람이군요! 감성과 이성을 조절할 줄 아는 당신에게 천안을 여행지로 추천드려요!&ltbr&gt천안은 대한민국에 중심에 위치하여 여행지로 고려한다면 이동과 시간에 있어서 낭비가 없을 거에요. 시간적 제약이 다양한 친구나 가족들과 함께 떠나기 적합해요.&ltbr&gt당신은 여행지로 이동할 때 시간도 절약할 수 있고, 여행지의 분위기도 제대로 즐길 수 있는 곳을 선호해요. 논리성과 감수성을 적절하게 가지고 있기 때문이죠.&ltbr&gt당신은 당신만의 주관적인 생각과 철학이 뚜렷하기에, 조식이 맛있거나 일몰이 아름다운 숙소 등 여행지의 디테일에 집중하는 편이에요. 그리고 이 점들을 다이어리나 일기장에 기록하는 편이죠.&ltbr&gt당신이 기록한 정보와 느낌들은 쌓이고 쌓여 백과사전이 될거 같아요. 나중에 다양한 정보들을 모으고 모아 책으로 출판하는 건 어떨까요?',
    place:'장소추천 : 천안 삼거리 공원, 독립기념관 등'
  },
]
