const ascii_ele = document.querySelector("pre");
ascii_ele.dataset.text = currentChar.ascii_art;
ascii_ele.textContent = currentChar.ascii_art;

document.documentElement.style.setProperty('--rgb-value', currentChar.color);

const container = document.getElementById("stats-container");
document.querySelector("h1").innerHTML = currentChar.name;
container.innerHTML = currentChar.characterInfo;
document.body.classList.add(`char-${paramChar}`);
document.querySelector(".system-msg").innerHTML = `SYSTEM OVERRIDE: DEADLOCK_PROTOCOL_${currentChar.name}.EXE`;

function prepareTyping(element) {
   const nodes = [];
   const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
   let node;
   while (node = walker.nextNode()) {
      nodes.push(node);
   }


   nodes.forEach(textNode => {
      const text = textNode.nodeValue;
      if (text.trim().length === 0) return;
      // [수정] 단순히 줄바꿈만 있는 노드는 무시하거나 트림(trim) 처리
      if (text.trim().length === 0 && text.includes('\n')) {
            return;
      }

      const parent = textNode.parentNode;
      const spanWrapper = document.createElement('span');

      text.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.classList.add('char');
            // [추가] 공백 문자일 경우 레이아웃 유지용 클래스
            if (char === ' ') charSpan.style.whiteSpace = 'pre';
            spanWrapper.appendChild(charSpan);
      });

      parent.replaceChild(spanWrapper, textNode);
   });
}


// 초기 설정
prepareTyping(container);

const allChars = container.querySelectorAll('.char');
let charIndex = 0;
const cursor = document.createElement('span');

cursor.className = 'cursor';

function type() {
   if (charIndex < allChars.length) {
      if (charIndex === 0) {
         container.classList.add('active');
      }
      const char = allChars[charIndex];
      char.classList.add('revealed');
      char.after(cursor);
      container.scrollTop = container.scrollHeight;

      // 타이핑될 때마다 실제 높이 측정 후 반영
      // padding 값 포함 (1em 상하 = 약 32px)
      const paddingTop = parseFloat(getComputedStyle(container).paddingTop);
      const paddingBottom = parseFloat(getComputedStyle(container).paddingBottom);

      // revealed된 div + quotes div 전부 포함해서 합산
      const allDivs = container.querySelectorAll('div');
      let totalHeight = 0;
      allDivs.forEach(div => {
         const height = div.getBoundingClientRect().height;
         if (height > 0) totalHeight += height;
      });

      container.style.height = (totalHeight + paddingTop + paddingBottom) + 'px';

      // 현재 출력된 글자가 무엇인지 확인
      const currentChar = char.textContent;
      let delay = 70; // 기본 속도

      // 특정 문자일 때 딜레이 추가
      if (currentChar === ',' || currentChar === ':') {
         delay = 400; // 쉼표나 콜론에서 살짝 멈춤
      } else if (currentChar === '.') {
         delay = 700; // 마침표에서 더 길게 멈춤
      } else if (currentChar === '>') {
         delay = 500; // 화살표 기호가 나올 때 강조를 위해 멈춤
      } else if (currentChar === "]" || currentChar === "[") {
         delay = 700;
      }

      charIndex++;

      // 계산된 delay 값으로 다음 글자 호출
      setTimeout(type, delay);
   } else {
      // 타이핑 완료 - 커서를 마지막 글자 위에 올림
      // const lastChar = allChars[allChars.length - 1];
      const lastChar = allChars[allChars.length];
      // cursor.remove(); // 기존 커서 제거
      
      lastChar.style.position = 'relative';
      lastChar.appendChild(cursor);
      cursor.style.position = 'absolute';
      cursor.style.top = '0';
      cursor.style.left = '0';
      cursor.style.width = lastChar.offsetWidth + 'px';
      cursor.style.height = '100%';
      // cursor.style.opacity = '0.5'; // 글자가 비쳐보이게
   }
}

setTimeout(type, 1000); // 2.5초 후 시작

// 마우스 우클릭 방지
document.addEventListener('contextmenu', function(event) {
   event.preventDefault();
});

// 드래그 시작 방지
document.addEventListener('dragstart', function(event) {
   event.preventDefault();
});