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

/*게시글 페이지 페이지네이션--------------------------------------------------------------------------------*/

/*게시글 수 초과시 다음 페이지 버튼 생성 기능*/
let posts = document.getElementById('posts');
let totalPosts = posts.childElementCount; /*전체 게시글 수 */
const postsPerPage = 10; /*페이지당 보여지는 게시글 수*/
let startPage = 1; /*시작페이지*/


/*게시글의 양식*/
function addPosts (num, title, writer, date, count, good) {

    let components = document.createElement('div');
    components.classList.add('board-component'); // 클래스 추가

    let postNumber= document.createElement('div');
    postNumber.classList.add('num'); // 클래스 추가
    postNumber.innerText = num;

    let postTitle = document.createElement('div');
    postTitle.classList.add('title')
    postTitle.innerText = title;

    let postWriter = document.createElement('div');
    postWriter.classList.add('writer')
    postWriter.innerText = writer;

    let postDate = document.createElement('div');
    postDate.classList.add('date')
    postDate.innerText = date;

    let postCount = document.createElement('div');
    postCount.classList.add('count')
    postCount.innerText = count;

    let postGood = document.createElement('div');
    postGood.classList.add('good')
    postGood.innerText = good;

    components.appendChild(postNumber);
    components.appendChild(postTitle);
    components.appendChild(postWriter);
    components.appendChild(postDate);
    components.appendChild(postCount);
    components.appendChild(postGood);

    posts.appendChild(components);
}

/*게시글 추가 기능*/
function showPost (startPage, totalPosts, postsPerPage) {
    let endPage = startPage + postsPerPage;
    for(let i = startPage; i < endPage && i <= totalPosts; i++) {
        addPosts(i, "제목", "작성자", "날짜", "조회수", "추천");
    }
}

function showNumPage() {
    let active = document.querySelector(".active");
    active.classList.remove('active');
    this.classList.add('active');

    let pageNum = parseInt(this.innerText); // 클릭한 버튼의 페이지 번호
    let startPost = (pageNum - 1) * postsPerPage + 1;
    let endPost = Math.min(pageNum * postsPerPage, totalPosts);

    // 게시글 영역 초기화
    posts.innerHTML = '';

    // 선택한 페이지의 게시글 보여주기
    for(let i = startPost; i <= endPost; i++) {
        addPosts(i, "제목", "작성자", "날짜", "조회수", "추천");
    }
}

function showNumBtn(startPage, totalPosts, postsPerPage) {
    let next = document.getElementById('next');/*버튼 생성*/
    let numPageBtn = document.getElementsByClassName('numBtn');

    for(let i = startPage; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        let button = document.createElement('button');
        button.classList.add('numBtn');

        if(i === startPage) {
            button.classList.add('active');
        }

        button.innerText = i;
        next.before(button);
    }

    for (let i = 0; i < numPageBtn.length; i++) {
        numPageBtn[i].addEventListener('click', showNumPage);
    }
}

showPost(startPage, totalPosts, postsPerPage);
showNumBtn(startPage, totalPosts, postsPerPage);

/*한 페이지에 10개씩 남은 게시물들은 다음 페이지로*/


function showFirstPage(startPage, totalPosts, postsPerPage) {
    startPage = 1;
    showPost(startPage, totalPosts, postsPerPage);
}

function showPrevPage(startPage, totalPosts, postsPerPage) {
    startPage--;
    showPost(startPage, totalPosts, postsPerPage);
}

function showNextPage(startPage, totalPosts, postsPerPage) {
    startPage++;
    showPost(startPage, totalPosts, postsPerPage);
}

function showLastPage(startPage, totalPosts, postsPerPage) {
    startPage = totalPosts;
    showPost(startPage, totalPosts, postsPerPage);
}
/*클릭된 버튼 active 클래스 추가 및 이전 active 클래스 제거*/

let firstPageBtn = document.getElementById('first'); // 처음 페이지로 이동하는 버튼
firstPageBtn.addEventListener('click', showFirstPage);
let prevPageBtn = document.getElementById('prev'); // 이전 페이지로 이동하는 버튼
prevPageBtn.addEventListener('click', showPrevPage);
let nextPageBtn = document.getElementById('next'); // 다음 페이지로 이동하는 버튼
nextPageBtn.addEventListener('click', showNextPage);
let lastPageBtn = document.getElementById('last'); // 마지막 페이지로 이동하는 버튼
lastPageBtn.addEventListener('click', showLastPage);
