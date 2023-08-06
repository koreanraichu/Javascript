let div = document.getElementById("result");
let result_text = document.getElementById("result_text");
let selectionList = [];

const colorList = document.getElementsByName("color");
const timeList = document.getElementsByName("time");
const pfList = document.getElementsByName("professor");
const vehicleList = document.getElementsByName("vehicle");
const pokemonList = document.getElementsByName("pokemon");

function result() {
  // 색깔(빨강/보라)
  colorList.forEach((node) => {
    if (node.checked) {
      selectionList.push(node.value);
    }
  });
  // 시간대(과거/미래)
  timeList.forEach((node) => {
    if (node.checked) {
      selectionList.push(node.value);
    }
  });
  // 박사(올림/투로)
  pfList.forEach((node) => {
    if (node.checked) {
      selectionList.push(node.value);
    }
  });
  // 라이딩(코라이돈/미라이돈)
  vehicleList.forEach((node) => {
    if (node.checked) {
      selectionList.push(node.value);
    }
  });
  // 버전분기 600족
  pokemonList.forEach((node) => {
    if (node.checked) {
      selectionList.push(node.value);
    }
  });

  //배열 내에서 선택지 값의 개수를 구함
  let scarletCount = 0;
  let violetCount = 0;
  for (let i = 0; i < selectionList.length; i++) {
    if (selectionList[i] == "scarlet") {
      scarletCount += 1;
    } else {
      violetCount += 1;
    }
  }
  // 선택지 값의 개수에 따라 결과를 출력합니다(정확히는 P태그 내용을 바꾸는거지만)
  if (scarletCount > violetCount) {
    result_text.innerText = "스칼렛 버전을 사시죠. ";
    if (scarletCount + violetCount < 5) {
      let comment = document.createElement("p");
      comment.innerHTML =
        "참고: 선택지를 전부 고르지 않으신 관계로 결과가 좀 정확하지 않을 수 있습니다. ";
      comment.setAttribute("class", "comment");
      div.appendChild(comment);
    }
  } else {
    result_text.innerText = "바이올렛 버전을 사시죠. ";
    if (scarletCount + violetCount < 5) {
      let comment = document.createElement("p");
      comment.innerHTML =
        "참고: 선택지를 전부 고르지 않으신 관계로 결과가 좀 정확하지 않을 수 있습니다. ";
      comment.setAttribute("class", "comment");
      div.appendChild(comment);
    }
  }
  // 리스트 초기화
  selectionList = [];
}
