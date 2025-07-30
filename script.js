const overlay = document.getElementById("landingOverlay");
const headerImage = overlay.querySelector(".landingheader");

overlay.addEventListener("click", () => {
    // 1. 이미지 먼저 페이드아웃
    headerImage.classList.add("fade-out");

    // 2. 200ms 뒤 오버레이 페이드아웃 (약간 겹치게)
    setTimeout(() => {
        overlay.classList.add("fade-out");
    }, 400); // 이 값을 조정하면 겹치는 비율 조절 가능

    // 3. 오버레이 페이드 완료 후 hidden 처리
    overlay.addEventListener("transitionend", (e) => {
        if (e.target === overlay && e.propertyName === "opacity") {
            overlay.classList.add("hidden");
        }
    }, { once: true });
});