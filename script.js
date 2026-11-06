function calculateBMI() {
  let height = Number(document.querySelector("#height").value);
  let weight = Number(document.querySelector("#weight").value);

  if (!height || !weight) {
    alert("키와 몸무게를 올바르게 입력해주세요!");
    return;
  }

  let h = height / 100;
  let bmi = weight / (h * h);

  document.querySelector("#result").textContent = "BMI: " + bmi.toFixed(2);

  let stateText = "";
  let activeIndex = 1; // 1부터 6까지 매칭

  if (bmi < 18.5) {
    stateText = "저체중";
    activeIndex = 1;
  } else if (bmi <= 23) {
    stateText = "정상";
    activeIndex = 2;
  } else if (bmi <= 24.9) {
    stateText = "비만 전 단계 (과체중)";
    activeIndex = 3;
  } else if (bmi <= 29.9) {
    stateText = "1단계 비만";
    activeIndex = 4;
  } else if (bmi <= 34.9) {
    stateText = "2단계 비만";
    activeIndex = 5;
  } else {
    stateText = "3단계 비만 (고도비만)";
    activeIndex = 6;
  }

  let stateElement = document.querySelector("#state");
  if (stateElement) {
    stateElement.textContent = "진단: " + stateText;
  }

  // 💡 숨겨둔 그래프를 flex로 바꿔 화면에 나타나게 함
  let graphContainer = document.querySelector("#graph-container");
  if (graphContainer) {
    graphContainer.style.display = "flex";
  }

  // 막대 그래프 업데이트 (1부터 6까지 반복)
  for (let i = 1; i <= 6; i++) {
    let barWrapper = document.querySelector("#bar-" + i);
    if (!barWrapper) continue;
    
    let fill = barWrapper.querySelector(".bar-fill");
    
    barWrapper.classList.remove("active");
    
    if (i === activeIndex) {
      barWrapper.classList.add("active");
      fill.style.height = "100%";
    } else {
      fill.style.height = "25%";
    }
  }
}