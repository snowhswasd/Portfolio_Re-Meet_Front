
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // 한번에 보여줄 칸수
    spaceBetween: 10, // 칸 사이사이마다의 여백
    slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
    speed: 1000, // 들어올때까지 걸리는 시간
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 4,  //브라우저가 1024보다 클 때
            spaceBetween: 10,
        },
    }
    
});



let sub_img = document.querySelectorAll('.swiper-wrapper img');
let select_img = document.getElementById('main_img');

select_img.style.display = 'block';
select_img.innerHTML = '<img src="' + sub_img[0].src + '" alt="' + sub_img[0].alt + '">';


for (var i = 0; i < sub_img.length; i++) {
    sub_img[i].onclick = function() {
        // 이미지가 보이지 않는 상태인 경우 보이도록 설정하고, 이미지 경로를 설정함
        select_img.style.display = 'block';
        select_img.innerHTML = '<img src="' + this.src + '" alt="' + this.alt + '">';

        // 모든 서브 이미지의 보더 제거
        for (var j = 0; j < sub_img.length; j++) {
            sub_img[j].style.border = 'none';
        }
    };
}

let all_com_box = document.getElementsByClassName("all_comment_box")[0]

//임시로 댓글 넣어주기
for(let i=0; i<10; i++){
    all_com_box.innerHTML += `
        <div class="comment_box_outer">
            <div class="comment_box">
                <div class="comment_box_inner">
                    <span class="review_comment_owner">김철수</span>
                    <span class="review_date">2024-02-19</span>
                </div>
                <div>
                    
                </div>
                <span class="review_comment">클래스 좋아요 추천합니다</span>
                <!-- <input class="review_comment" value="클래스 별로에요 비추합니다 ㅜㅜ" readonly> -->
                <div class="comment_controll_box">
                    <span class="update_btn">수정</span>
                    <span class="delete_btn">삭제</span>
                </div>
            </div>
        </div>     
    `
}






let wish_list = document.getElementsByClassName("wish_list")
let none_heart = document.getElementsByClassName("none_heart")
let full_heart = document.getElementsByClassName("full_heart")
let wish_count = 0;


for(let i=0; i<2; i++){
    wish_list[i].addEventListener('click', function(){
        for(let i=0; i<2; i++){
            if( (wish_count%2) == 1){
                none_heart[i].style.display="block"
                full_heart[i].style.display="none"
            }
            else{
                none_heart[i].style.display="none"
                full_heart[i].style.display="block"
            }
        }
        wish_count++
    })
}


// 별점창 띄우기 ============================
let star_score = document.getElementsByClassName("star_box_pos")[0];
let start_score_give = document.getElementsByClassName("start_score_give")
let blockpan1 = document.getElementsByClassName("blockpan")[0]
let close_reivew_box =document.getElementsByClassName("close_reivew_box")[0]


// let review_count=0
for(let i=0; i<2; i++){
    start_score_give[i].addEventListener("click", function(){
        star_box_pos.style.display="block"
        blockpan1.style.display="block"
        blockpan1.style.position="fixed"
        blockpan1.style.top="0px"
        
    })
}
close_reivew_box.addEventListener("click", function(){
    star_box_pos.style.display="none"
    blockpan1.style.display="none"
    blockpan1.style.position="static"
})
// 별점주기 =======================================
const drawStar = (target) => {
    document.querySelector(`.star span`).style.width = `${target.value * 20}%`;
}

