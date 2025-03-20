// 검색어 입력 후 버튼 클릭시 검색 결과로 이동
document
  .getElementById("google-search-btn")
  .addEventListener("click", function () {
    const query = document.querySelector(".search-input").value;
    if (query) {
      document.querySelector(".search-form").submit();
    } else {
      alert("검색어를 입력해주세요!");
    }
  });
