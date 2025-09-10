document.addEventListener('DOMContentLoaded', () => {
    //1.노드가져오기
    const img = document.querySelector('img') ;
    const txt1 = document.querySelector('#txt1') ;
    const bt = document.querySelector('button') ;
    let flag = false ;
    let n ;

    //공통함수
   const init = (flagV, txt1dis, btv, imgv) => {
    flag = flagV ;

    txt1.style.display = txt1dis ;
    //txt1.style.display = 'block' ;
    bt.textContent = btv;
    img.setAttribute('src' , `../img/${imgv}.png`);
   } 

    //2. 버튼 눌러졌을때
    bt.addEventListener('click' , (e) => {
        e.preventDefault();

    //2-1. 처음 눌러졌는지 확인해서 랜덤수를 생성
    if (!flag) {
        n = Math.floor(Math.random() * 100) + 1 ; // 1~100
        // flag = true ;
        // txt1.style.display = 'block' ;
        // bt.textContent = '확인';
        // img.setAttribute('src' , '../img/what.png');
        init(true, 'block', '확인', 'what') ;
    }

        console.log(`n=${n}`)

    //2-2. 랜덤수와 입력의 값을 비교해서 업다운 이미지 보여주기
    if ( n > parseInt(txt1.value) ) {
        img.setAttribute('src' , '../img/up.png');
    }
    else if ( n < parseInt(txt1.value)) {
        img.setAttribute('src' , '../img/down.png');
    }
    else if ( n== parseInt(txt1.value)) {    
    //203. 숫자를 맞추면 처음부터 다시 하도록
        txt1.value = ''
        init(false, 'none', '다시 시작하기', 'good' )
    // img.setAttribute('src' , '../img/good.png');
    // flag = false;
    // txt1.value = '';
    // txt1.style.display = 'none';
    // bt.textContent = '다시 시작하기';

    //txt1.addEventListener('input', () => {
//    })

}


    })


})