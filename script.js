'use strict';

// ──────────────────────────────────────────────────────────
// 01. 테스트 문항과 선택지별 유형 매핑
// ──────────────────────────────────────────────────────────
const QUESTIONS = [
  ["친구들과 여행을 가기로 했다. 나는?", [
    ["평소 해보지 못한 새로운 활동을 찾아본다.", "C"],
    ["여행 일정과 동선을 미리 계획한다.", "A"],
    ["친구들의 의견을 듣고 모두가 만족할 곳을 고른다.", "B"],
    ["가고 싶은 곳만 정하고 자유롭게 움직인다.", "D"]
  ]],
  ["예상하지 못한 문제가 생겼을 때 나는?", [
    ["왜 이런 문제가 생겼는지 차분하게 분석한다.", "B"],
    ["주변 사람들과 이야기하며 함께 해결한다.", "D"],
    ["일단 여러 방법을 직접 시도해 본다.", "C"],
    ["상황을 정리하고 해결 방법부터 생각한다.", "A"]
  ]],
  ["새로운 활동을 시작할 기회가 생겼다. 나는?", [
    ["함께하는 사람들이 즐거울 수 있는지 생각한다.", "D"],
    ["재밌어 보이면 고민하지 않고 도전한다.", "C"],
    ["충분히 알아보고 준비한 뒤 시작한다.", "B"],
    ["내가 잘할 수 있는 역할을 찾아 적극적으로 참여한다.", "A"]
  ]],
  ["친구들이 나를 표현한다면 가장 가까운 말은?", [
    ["차분하고 생각이 깊은 사람", "B"],
    ["개성 있고 자기만의 색깔이 있는 사람", "D"],
    ["믿음직하고 책임감 있는 사람", "A"],
    ["에너지 넘치고 적극적인 사람", "C"]
  ]],
  ["중요한 결정을 내려야 할 때 나는?", [
    ["후회하지 않도록 내가 끌리는 쪽을 선택한다.", "C"],
    ["목표를 정하고 가장 효과적인 방법을 선택한다.", "A"],
    ["내가 중요하게 생각하는 가치와 마음을 따른다.", "D"],
    ["여러 선택지의 장단점을 꼼꼼하게 비교한다.", "B"]
  ]],
  ["내가 가장 멋있다고 생각하는 사람은?", [
    ["남들과 다른 자신만의 개성을 가진 사람", "D"],
    ["자기 분야에서 뛰어난 실력을 가진 사람", "B"],
    ["실패를 두려워하지 않고 도전하는 사람", "C"],
    ["사람들을 이끌고 책임질 줄 아는 사람", "A"]
  ]]
];

// ──────────────────────────────────────────────────────────
// 02. 성격유형 설명과 키워드
// ──────────────────────────────────────────────────────────
const TYPES = {
  A: {
    name: '리더형',
    keywords: ['리더십', '추진력', '책임감'],
    description: '목표를 정하고, 맡은 일을 책임감 있게 해내는 스타일이에요. 함께하는 사람들과 방향을 맞추며 한 걸음씩 나아가는 힘이 있어요.',
    short: '목표를 정하고 책임감 있게 이끌어가는 유형'
  },
  B: {
    name: '전략가형',
    keywords: ['논리적', '침착함', '집중력'],
    description: '차분하게 살펴보고, 나에게 맞는 방법을 찾아가는 스타일이에요. 깊이 생각하고 집중하는 태도가 나만의 강점이 될 수 있어요.',
    short: '차분한 분석과 집중력을 소중히 여기는 유형'
  },
  C: {
    name: '도전가형',
    keywords: ['열정', '자신감', '행동력'],
    description: '새로운 기회 앞에서 직접 부딪혀 보는 스타일이에요. 시도하고 경험하면서 나만의 가능성을 넓혀가는 힘이 있어요.',
    short: '새로운 경험과 적극적인 시도를 즐기는 유형'
  },
  D: {
    name: '자유로운 예술가형',
    keywords: ['독창성', '감성', '자유로움'],
    description: '나만의 취향과 가치를 소중히 여기는 스타일이에요. 익숙한 것에서도 새로운 매력을 발견하고, 나만의 방식으로 표현하는 힘이 있어요.',
    short: '개성과 창의적인 표현을 소중히 여기는 유형'
  }
};

// ──────────────────────────────────────────────────────────
// 03. 분야 목록
// ──────────────────────────────────────────────────────────
const FIELDS = [{
  id: 'idol',
  name: '아이돌'
}, {
  id: 'gamer',
  name: '프로게이머'
}, {
  id: 'sport',
  name: '스포츠 선수'
}, {
  id: 'anime',
  name: '애니메이션 캐릭터'
}];
// 실제 매칭 목록이 제공되면 분야별 A/B/C/D의 name과 image를 수정하세요.
// image는 로컬 파일 경로 또는 사용 권한을 확보한 이미지 URL입니다.
// 유명인의 실제 성격을 단정하는 설명은 추가하지 마세요.

// ──────────────────────────────────────────────────────────
// 04. 유명인 매칭 데이터 — 이름·이미지는 여기에서 교체
// ──────────────────────────────────────────────────────────
const PEOPLE = {
  "idol": {
    "A": {
      "name": "정원 (ENHYPEN)",
      "image": "./image/jungwon.jpg",
      "demo": false
    },
    "B": {
      "name": "장원영 (IVE)",
      "image": "./image/wonyoung.jpg",
      "demo": false
    },
    "C": {
      "name": "유우시 (NCT WISH)",
      "image": "./image/yushi.jpg",
      "demo": false
    },
    "D": {
      "name": "카리나 (aespa)",
      "image": "./image/karina.jpg",
      "demo": false
    }
  },
  "gamer": {
    "A": {
      "name": "Faker",
      "image": "./image/faker.jpg",
      "demo": false
    },
    "B": {
      "name": "Chovy",
      "image": "./image/chovy.jpg",
      "demo": false
    },
    "C": {
      "name": "Keria",
      "image": "./image/keria.jpg",
      "demo": false
    },
    "D": {
      "name": "Gumayusi",
      "image": "./image/gumayusi.jpg",
      "demo": false
    }
  },
  "sport": {
    "A": {
      "name": "손흥민",
      "image": "./image/son.jpg",
      "demo": false
    },
    "B": {
      "name": "전준우",
      "image": "./image/jeon.jpg",
      "demo": false
    },
    "C": {
      "name": "김도영",
      "image": "./image/kim.jpg",
      "demo": false
    },
    "D": {
      "name": "이강인",
      "image": "./image/lee.jpg",
      "demo": false
    }
  },
  "anime": {
    "A": {
      "name": "탄지로",
      "image": "./image/tanjiro.jpg",
      "demo": false
    },
    "B": {
      "name": "이사기 요이치",
      "image": "./image/isagi.jpg",
      "demo": false
    },
    "C": {
      "name": "히나타 쇼요",
      "image": "./image/hinata.jpg",
      "demo": false
    },
    "D": {
      "name": "고죠 사토루",
      "image": "./image/gojo.jpg",
      "demo": false
    }
  }
};

// ──────────────────────────────────────────────────────────
// 05. 테스트 상태
// ──────────────────────────────────────────────────────────
let fieldPickerOpened = false;
let answers = Array(6).fill(null),
  index = 0,
  field = 'idol',
  screen = 'home',
  timer = null,
  toastTimer;
const app = document.getElementById('app');

// ──────────────────────────────────────────────────────────
// 06. 공통 유틸리티
// ──────────────────────────────────────────────────────────
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  } [c]));
}

function showToast(s) {
  const t = document.getElementById('toast');
  t.textContent = s;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.hidden = true, 3500);
}

function render(html, preserveScroll = false) {
  const savedScroll = window.scrollY;
  app.innerHTML = '<div class="enter">' + html + '</div>';
  window.scrollTo({
    top: preserveScroll ? savedScroll : 0,
    behavior: 'instant'
  });
  requestAnimationFrame(() => {
    if (preserveScroll) return;
    const h = app.querySelector('h1');
    if (h) {
      h.tabIndex = -1;
      h.focus({
        preventScroll: true
      });
    }
  });
}

// ──────────────────────────────────────────────────────────
// 07. 분야별 썸네일 이미지 경로
// ──────────────────────────────────────────────────────────
const CATEGORY_IMAGES = {
  idol: './image/idol.jpg',
  gamer: './image/gamer.jpg',
  sport: './image/sports.jpg',
  anime: './image/anime.jpg'
};

function art(id) {
  const category = FIELDS.find(f => f.id === id);
  return `<img class="category-photo" src="${esc(CATEGORY_IMAGES[id])}" alt="${esc(category.name)} 분야" decoding="async">`;
}

function home() {
  screen = 'home';
  render(
    `<section class="home-intro"><h1>나와 가장 닮은<br>유명인은 누구일까?</h1><p class="muted">6가지 질문으로 알아보는 나의 성격유형과 유명인 매칭!</p><p class="meta">6문항 · 약 2분</p></section><section aria-labelledby="choose"><h2 id="choose">관심 있는 분야를 선택해 주세요</h2><div class="categories">${FIELDS.map(f=>`<button class="category" data-field="${f.id}"><div class="art">${art(f.id)}</div><span class="category-label">${f.name}<span class="arrow" aria-hidden="true">→</span></span></button>`).join('')}</div></section>`
  );
  app.querySelectorAll('[data-field]').forEach(b => b.onclick = () => {
    field = b.dataset.field;
    index = 0;
    quiz();
  });
}

// ──────────────────────────────────────────────────────────
// 10. 질문 화면과 답변 저장
// ──────────────────────────────────────────────────────────
function quiz() {
  screen = 'quiz';
  const q = QUESTIONS[index];
  render(
    `<section class="quiz"><div class="quiz-nav"><button class="text-btn" id="prev">← ${index===0?'분야 선택':'이전 질문'}</button><span class="pill">${FIELDS.find(f=>f.id===field).name}</span></div><div class="progress-meta"><span>질문 ${index+1}</span><span>${index+1} / 6</span></div><div class="progress" role="progressbar" aria-label="답변 완료" aria-valuemin="0" aria-valuemax="6" aria-valuenow="${answers.filter(x=>x!==null).length}"><span style="width:${answers.filter(x=>x!==null).length/6*100}%"></span></div><h1 class="question-title" id="question">${q[0]}</h1><fieldset class="answers" aria-labelledby="question"><legend class="sr-only">답변 하나를 선택해 주세요</legend>${q[1].map((a,i)=>`<label class="answer ${answers[index]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${answers[index]===i?'checked':''}><span>${a[0]}</span></label>`).join('')}</fieldset><button class="primary" id="next" ${answers[index]===null?'disabled':''}>${index===5?'내 결과 보기':'다음 질문 →'}</button><p class="quiz-hint">이전 질문으로 돌아가 답변을 수정할 수 있어요.</p></section>`
  );
  document.getElementById('prev').onclick = () => {
    if (index === 0) home();
    else {
      index--;
      quiz();
    }
  };
  app.querySelectorAll('input').forEach(input => input.onchange = () => {
    answers[index] = Number(input.value);
    app.querySelectorAll('.answer').forEach(l => l.classList.toggle('selected', l.querySelector(
      'input').checked));
    document.getElementById('next').disabled = false;
    const n = answers.filter(x => x !== null).length;
    app.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', n);
    app.querySelector('.progress>span').style.width = (n / 6 * 100) + '%';
  });
  document.getElementById('next').onclick = () => {
    if (answers[index] === null) return;
    if (index < 5) {
      index++;
      quiz();
    } else if (answers.every(x => x !== null)) analyze();
  };
}

// ──────────────────────────────────────────────────────────
// 11. 점수 계산과 동점 처리
// ──────────────────────────────────────────────────────────
function compute() {
  if (!answers.every(x => x !== null)) throw Error('6문항에 모두 답해야 합니다.');
  const types = answers.map((a, i) => QUESTIONS[i][1][a][1]);
  const scores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };
  types.forEach(t => scores[t]++);
  const last = t => types.lastIndexOf(t);
  const rank = Object.keys(scores).sort((a, b) => scores[b] - scores[a] || last(b) - last(a) || a
    .localeCompare(b));
  return {
    scores,
    rank
  };
}

// ──────────────────────────────────────────────────────────
// 12. 결과 분석 애니메이션
// ──────────────────────────────────────────────────────────
function analyze() {
  screen = 'loading';
  render(
    '<section class="loading" aria-live="polite"><div class="spinner" aria-hidden="true"></div><h1 style="font-size:26px">나의 결과를 정리하고 있어요</h1><p class="muted">6개의 답변에서 나의 스타일을 찾아보는 중</p></section>'
  );
  timer = setTimeout(() => {
    timer = null;
    result();
  }, 1500);
}

// ──────────────────────────────────────────────────────────
// 13. 결과 이미지 자리표시자
// ──────────────────────────────────────────────────────────
function placeholder() {
  return '<svg viewBox="0 0 70 80" fill="none" aria-hidden="true"><circle cx="35" cy="23" r="17" fill="currentColor"/><path d="M4 79V68C4 48 18 44 35 44S66 48 66 68V79" fill="currentColor"/></svg><span>인물 이미지 영역</span>';
}

// ──────────────────────────────────────────────────────────
// 14. 결과 화면과 분야 전환
// ──────────────────────────────────────────────────────────
const RESULT_DETAILS = {
  "A": {
    "intro": "이번 응답에서는 목표를 정하고, 상황을 정리하며, 맡은 역할에 적극적으로 참여하는 선택이 두드러졌어요. 해야 할 일이 생겼을 때 방향을 잡고 행동으로 옮기는 쪽에 가까워요.",
    "moments": [
      "조별 활동에서 무엇부터 할지 정해야 할 때",
      "친구들과 세운 계획을 실행에 옮길 때",
      "맡은 일을 끝까지 마무리해야 할 때"
    ],
    "tip": "빠르게 방향을 정하는 것도 좋지만, 아직 의견을 말하지 않은 친구에게 한 번 더 물어보세요. 역할을 나누고 서로의 방식을 존중하면 혼자 이끌 때보다 더 좋은 방법을 찾을 수 있어요."
  },
  "B": {
    "intro": "이번 응답에서는 충분히 알아보고, 원인을 살피며, 여러 선택지를 비교하는 모습이 두드러졌어요. 바로 움직이기보다 상황을 이해하고 나에게 맞는 방법을 찾는 쪽에 가까워요.",
    "moments": [
      "여러 선택지의 장단점을 비교해야 할 때",
      "문제가 생긴 이유를 차근차근 살펴볼 때",
      "새로운 활동에 필요한 정보를 모으고 준비할 때"
    ],
    "tip": "바로 시작하고 싶은 친구와 함께라면, 꼭 확인할 것 한두 가지만 먼저 정해 보세요. 작은 시도를 해보고 다시 생각하는 방법도 있어요. 준비하는 힘에 친구의 실행력이 더해지면 좋은 균형을 만들 수 있어요."
  },
  "C": {
    "intro": "이번 응답에서는 새로운 활동을 찾아보고, 직접 시도하며, 도전을 선택하는 모습이 두드러졌어요. 오래 고민하기보다 경험하면서 나에게 맞는 길을 알아가는 쪽에 가까워요.",
    "moments": [
      "처음 해보는 활동에 참여할 기회가 생겼을 때",
      "막힌 상황에서 다른 방법을 시도해야 할 때",
      "아이디어를 실제 행동으로 옮겨야 할 때"
    ],
    "tip": "충분히 준비하고 싶은 친구에게는 무엇을 해볼지, 어디까지 해볼지 먼저 이야기해 주세요. 모두가 같은 속도로 움직일 필요는 없어요. 친구의 신중한 생각을 듣고 작은 단계부터 함께 시작해 보세요."
  },
  "D": {
    "intro": "이번 응답에서는 나만의 개성과 가치, 자유로운 방식과 함께하는 즐거움을 중요하게 여기는 선택이 두드러졌어요. 정해진 틀을 그대로 따르기보다 내 마음에 맞는 방향을 찾는 쪽에 가까워요.",
    "moments": [
      "발표나 작품에 나만의 색깔을 더할 때",
      "익숙한 방식 말고 새로운 아이디어가 필요할 때",
      "여럿이 함께 즐길 수 있는 활동을 떠올릴 때"
    ],
    "tip": "계획을 중요하게 여기는 친구와 함께라면, 마감 시간과 꼭 해야 할 일을 먼저 맞춰 보세요. 그 안에서 자유롭게 표현할 부분을 정하면 서로 편해져요. 내 아이디어를 친구가 이해하기 쉽게 구체적인 예로 설명하는 것도 좋아요."
  }
};

const PERSON_FEATURES = {
  "idol": {
    "A": "무대 위 퍼포먼스와 보컬을 함께 보여주는 엔하이픈의 리더예요. 춤과 노래가 어우러지는 무대에 주목해 보세요.",
    "B": "아이브의 무대와 다양한 방송 활동에서 만날 수 있어요. 곡의 분위기에 맞춘 표정과 무대 표현을 살펴보세요.",
    "C": "엔시티 위시의 멤버로, 춤과 노래를 통해 팀의 무대를 채워요. 안무의 움직임과 무대에서의 표현을 눈여겨보세요.",
    "D": "에스파의 멤버로, 팀의 독특한 콘셉트를 퍼포먼스로 표현해요. 곡마다 달라지는 무대 분위기를 살펴보세요."
  },
  "gamer": {
    "A": "T1의 미드 라이너예요. 경기 흐름을 읽는 판단과 팀 전투에서의 움직임이 관전 포인트예요.",
    "B": "GEN.G의 미드 라이너예요. 라인전에서 자원을 확보하고 성장하는 과정을 눈여겨보세요.",
    "C": "T1의 서포터예요. 다양한 챔피언 활용과 팀에 기회를 만드는 플레이가 관전 포인트예요.",
    "D": "HLE의 원거리 딜러예요. 공격할 위치를 잡고 팀 전투에서 화력을 더하는 플레이를 살펴보세요."
  },
  "sport": {
    "A": "빠른 움직임과 양발 슈팅을 활용하는 국가대표 공격수예요. 수비 뒷공간으로 달려가는 움직임과 골 결정력이 관전 포인트예요.",
    "B": "타격과 외야 수비로 활약해 온 롯데자이언츠 선수예요. 타석에서 공을 골라내고 타격 기회를 잡는 과정을 살펴보세요.",
    "C": "타격과 주루에서 활약하는 KIA의 내야수예요. 공을 때린 뒤 베이스를 향해 달리는 움직임이 굉장해요. 2026 KBO 홈런왕이에요.",
    "D": "볼 컨트롤과 패스를 활용하는 국가대표 미드필더예요. 좁은 공간에서 공을 다루고 동료에게 연결하는 장면을 살펴보세요."
  },
  "anime": {
    "A": "〈귀멸의 칼날〉에서 가족을 구하기 위해 여정을 이어가는 주인공이에요. 어려운 상황에서도 타인을 헤아리고 동료와 힘을 모으는 모습이 특징이에요.",
    "B": "〈블루 록〉에서 자신만의 득점 방식을 찾아가는 공격수예요. 경기장을 관찰하고 상황을 분석하며 자신의 플레이를 바꿔 나가요.",
    "C": "〈하이큐!!〉에서 배구에 도전하는 선수예요. 작은 키를 뛰어넘으려는 도전과 빠른 움직임, 동료와 맞춰 가는 호흡이 특징이에요.",
    "D": "〈주술회전〉에 등장하는 주술사이자 선생님이에요. 장난스러운 태도와 강력한 능력, 학생들의 성장을 돕는 모습이 특징이에요."
  }
};

function result(preserveScroll = false) {
  screen = 'result';
  const {
    scores,
    rank
  } = compute(), type = TYPES[rank[0]];
  render(
    `<section class="results"><div class="result-head"><p class="eyebrow">YOUR MATCH RESULT</p><h1>${type.name}</h1><div class="tags">${type.keywords.map(k=>'<span class="tag">'+k+'</span>').join('')}</div></div>
<div class="type-details">
  <section class="detail-section" aria-labelledby="type-intro">
    <h2 id="type-intro">유형 소개</h2>
    <p>${RESULT_DETAILS[rank[0]].intro}</p>
  </section>
  <section class="detail-section" aria-labelledby="type-strengths">
    <h2 id="type-strengths">강점이 드러나는 순간</h2>
    <ul>${RESULT_DETAILS[rank[0]].moments.map(text => '<li>' + text + '</li>').join('')}</ul>
  </section>
  <section class="detail-section" aria-labelledby="type-tip">
    <h2 id="type-tip">다른 스타일과 함께하는 팁</h2>
    <p>${RESULT_DETAILS[rank[0]].tip}</p>
  </section>
</div>
<h2>나와 닮은 TOP 3</h2><div id="field-picker" ${fieldPickerOpened ? "" : "hidden"}><div class="field-tabs" role="group" aria-label="결과 분야 선택">${FIELDS.map(f=>`<button class="tab ${f.id===field?'active':''}" aria-pressed="${f.id===field}" data-result-field="${f.id}">${f.name}</button>`).join('')}</div></div><div class="matches">${rank.slice(0,3).map((t,i)=>{const p=PEOPLE[field][t];return `<article class="match ${i===0?'first':''}"><div class="portrait">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`:placeholder()}</div><div class="match-body"><p class="rank">${i+1}위 · ${FIELDS.find(f=>f.id===field).name}</p><h3>${esc(p.name)}</h3><p class="person-feature">${esc(PERSON_FEATURES[field][t])}</p></div></article>`;}).join('')}</div><p class="disclaimer">인물과 연결된 유형은 재미를 위한 설정이며 실제 성격을 단정하지 않습니다.${rank.some(t=>PEOPLE[field][t].demo)?'<br>현재 인물 카드는 실제 유명인이 아닌 데모 자리표시자입니다.':''}</p><div class="actions"><button class="primary" id="other" aria-expanded="${fieldPickerOpened}" aria-controls="field-picker">다른 분야 결과 보기</button><button class="secondary" id="restart">다시 테스트하기</button></div><div class="share-buttons"><button class="text-btn" id="copy">결과 복사</button><button class="text-btn" id="edit">답변 수정</button></div><div id="copy-fallback"></div><p class="small muted" style="text-align:center;margin-top:16px">과학적 심리검사가 아닌 재미용 콘텐츠입니다.</p></section>`
  , preserveScroll);
  app.querySelectorAll('[data-result-field]').forEach(b => b.onclick = () => {
    field = b.dataset.resultField;
    result(true);
    requestAnimationFrame(() => {
      app.querySelector(`[data-result-field="${field}"]`)?.focus({ preventScroll: true });
    });
  });
  app.querySelectorAll('.portrait img').forEach(img => img.onerror = () => {
    img.parentElement.innerHTML = placeholder();
  });
  document.getElementById('other').onclick = () => {
    const picker = document.getElementById('field-picker'),
      button = document.getElementById('other');
    fieldPickerOpened = true;
    picker.hidden = false;
    button.setAttribute('aria-expanded', String(!picker.hidden));
    if (!picker.hidden) {
      picker.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      picker.querySelector('.tab:not(.active)').focus({
        preventScroll: true
      });
    }
  };
  document.getElementById('restart').onclick = reset;
  document.getElementById('edit').onclick = () => {
    index = 5;
    quiz();
  };
  document.getElementById('copy').onclick = copyResult;
}

// ──────────────────────────────────────────────────────────
// 15. 복사용 결과 텍스트
// ──────────────────────────────────────────────────────────
function shareText() {
  const {
    scores,
    rank
  } = compute();
  return `WHO’S YOUR MATCH?\n나의 유형: ${TYPES[rank[0]].name}\n키워드: ${TYPES[rank[0]].keywords.join(', ')}\n분야: ${FIELDS.find(f=>f.id===field).name}\n\n` +
    rank.slice(0, 3).map((t, i) =>
      `${i+1}위 ${PEOPLE[field][t].name}`).join('\n') +
    '\n\n재미용 콘텐츠입니다. 인물과 연결된 유형은 재미를 위한 설정이며 실제 성격을 단정하지 않습니다.';
}

// ──────────────────────────────────────────────────────────
// 16. 결과 복사 및 대체 입력창
// ──────────────────────────────────────────────────────────
async function copyResult() {
  const text = shareText();
  try {
    if (!navigator.clipboard) throw Error();
    await navigator.clipboard.writeText(text);
    showToast('결과를 복사했어요.');
  } catch {
    const box = document.getElementById('copy-fallback');
    box.innerHTML =
      '<label class="small muted" for="manual-copy">아래 내용을 선택해 복사해 주세요.</label><textarea class="copybox" id="manual-copy" readonly></textarea>';
    const ta = document.getElementById('manual-copy');
    ta.value = text;
    ta.focus();
    ta.select();
    showToast('브라우저가 자동 복사를 제한해 직접 복사 영역을 열었어요.');
  }
}

// ──────────────────────────────────────────────────────────
// 17. 다시 시작
// ──────────────────────────────────────────────────────────
function reset() {
  fieldPickerOpened = false;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  answers = Array(6).fill(null);
  index = 0;
  home();
}

// ──────────────────────────────────────────────────────────
// 18. 초기 실행과 로고 버튼
// ──────────────────────────────────────────────────────────
document.getElementById('brand').onclick = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  home();
};
home();
