const container = document.getElementById("stats-container");

function prepareTyping(element) {
   const nodes = [];
   const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
   let node;
   while (node = walker.nextNode()) {
      nodes.push(node);
   }

   nodes.forEach(textNode => {
      const text = textNode.nodeValue;
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
      const char = allChars[charIndex];
      char.classList.add('revealed');
      char.after(cursor);
      container.scrollTop = container.scrollHeight;

      // 현재 출력된 글자가 무엇인지 확인
      const currentChar = char.textContent;
      let delay = 120; // 기본 속도

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
   }
}

type();