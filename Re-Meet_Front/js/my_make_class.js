// 배열 스와이퍼 하트토글 me_register.js에 있는거 같이 씁니다.


let my_make_swiper = document.getElementsByClassName("my_make_class_content")[0];
for (let i = 0; i < 9; i++) {
    my_make_swiper.innerHTML += `
    <div class="swiper-slide my_make_swiper_count">
    <div class="swiper_inner_box">
        <a href="#">
            <div class="swiper_img_box">
                <div class="addr_box">
                    <span>강남</span>
                </div>
                <button class="like_box" onclick="toggleHeart(this)">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall jss94 css-1k33q06 heart_icon full_heart" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteRoundedIcon">
                    <path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"></path>
                </svg>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall jss95 css-1k33q06 heart_icon none_heart" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderRoundedIcon">
                    <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                </svg>
                </button>
                <img src="${arr[i%3]}" alt="" class="content_img">
            </div>
        </a>    
        <div class="swiper_img_text">
            <div class="img_text_top">
                <div class="img_cate_box">
                    <span class="img_cate_big">대분류</span>
                    <span class="img_cate_small">소분류</span>
                </div>
                <div class="img_review">
                    <div class="img_review_star">
                        <div class="star_img"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarRoundedIcon" style="color: rgb(229, 152, 25); font-size: 20px;"><path d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg></div>
                        <span>0점</span>
                    </div>
                    <div class="img_review_heart">
                        <div class="heart_img">
                            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" style="color: rgb(242, 65, 71); font-size: 17px; opacity: 0.8;"><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <span>0점</span>
                    </div>
                </div>                  
            </div>
            <div class="img_text_bot">
                <div class="img_text_title">
                    <span>
                        건강한 두피와 모발을 위환 샴푸바 만들기
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}


// 창닫기
let m_make_close_btn = document.getElementsByClassName("close_btn")[1];
let menu3 = document.getElementsByClassName("menu3")[0];
let my_make_class_controll = document.getElementsByClassName("my_make_class_controll")[0];



m_make_close_btn.addEventListener("click", function(){
    my_make_class_controll.style.display="none";
    create_block_pan.style.display="none"
})


// 갯수 찍어주기 위한거

let my_make_class_num = document.getElementsByClassName("my_make_class_num")[0];
let my_make_swiper_count = document.getElementsByClassName("my_make_swiper_count")

menu3.addEventListener("click", function(){
    let w_first_height = window.innerHeight
    let w_width = window.innerWidth

    // 가입 몇개인지 찍어 주는거
    my_make_class_num.textContent = my_make_swiper_count.length    

    my_make_class_controll.style.display="block";
    create_block_pan.style.display="block"
    create_block_pan.style.height=`${w_first_height}px`

    if(w_width <= 1200){
        my_make_class_controll.style.width=`${w_width - 60}px`
    }
    if(w_width <=480){
        my_make_class_controll.style.width=`${w_width}px`
    }

})
