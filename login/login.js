/*아이디, 비밀번호 확인*/
document.getElementById("div-btn")
onclick = function () {
    let id;
    let password;
    let id2 = "testid1234";
    let password2 = "test1234";

    if(id === id2 && password === password2) {
        alert("로그인이 되었습니다.");
    }
    if(id !== id2 && password !== password2) {
        alert("로그인에 실패하셨습니다.");
    }
};
/*=====================================================*/