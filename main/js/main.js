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


/*게시글의 입력 데이터를 받아서 화면에 띄워주는 기능*/
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

function showNumBtn(startPage, totalPosts, postsPerPage) {
    let next = document.getElementById('next');
    /*버튼 생성*/
    for(let i = startPage; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        let button = document.createElement('button');
        button.innerText = i;
        next.before(button);
    }

    /*보여지는 게시글 수*/
    for(let i = startPage; i <= totalPosts; i++) {
        addPosts(i, "제목", "작성자", "날짜", "조회수", "추천");
    }
}

showNumBtn(startPage, totalPosts, postsPerPage);