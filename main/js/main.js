/*글쓰기 버튼*/
/*document.getElementById('btn-board-write').addEventListener('click', function() {
    document.getElementById("board-preview").style.display = "none"; /!* 버튼 클릭시 기존 미리보기 레이아웃 제거 후 글 게시 레이아웃 생성*!/
    document.getElementById("board-post").style.display = "block";
});*/

/*게시글 페이지 글쓰기 버튼*/

document.getElementById('btn-board-write').addEventListener('click', function() {
    document.getElementById("board-list-wrap").style.display = "none"; /* 버튼 클릭시 기존 미리보기 레이아웃 제거 후 글 게시 레이아웃 생성*/
    document.getElementById("board-post-wrap").style.display = "block";
});

/*취소하기 버튼 누를 시 게시글 미리보기 창이 다시 생성됨*/
document.getElementById('btn-board-cancel').addEventListener('click', function() {
    document.getElementById("board-post-wrap").style.display = "none";
    document.getElementById("board-list-wrap").style.display = "block";
});

/*게시글 목록 버튼*/
document.getElementById('btn-list').addEventListener('click', function() {
});

/*게시글 페이지*/