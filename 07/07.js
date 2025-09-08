document.addEventListener(`DOMContentLoaded` , ()=>{
    //이미지2개는 각각 구분해서 가져올래.
    const com = document.querySelector(`#com`);
    const user = document.querySelector(`#user`);

    //버튼은 1개가 아니라 여러개
    const bts = document.querySelectorAll(`button`);

    //메시지 영역
    const msg = document.querySelector('#msg');

    //버튼6개 다 가져오면, for반복문 쓸 수 있다. 버튼의 이벤트 처리
    //bts가 6개인데, 한개씩 반복문을 갖고 옴, click 이벤트 달아줄 수 있다.
    for(let bt of bts) {
        bt.addEventListener('click', ()=>{
            //문자열, 숫자가 아니라서 parseInt() 묶어주면 나중에 3개짜리도 비교할 수 있게된다.
            //console.log(bt.innerHTML)
            //반복문에서 of는 각각의 1개1개에 접근할 수 있게 함
            //버튼 각각에 접근할 수 있게 한다. addEventListener 각각 6개가 달리게 된다.
            //현재 클릭한 것의 값이 나오게 됨 
            //버튼이 일어날때마다 
            const userNum = parseInt(bt.innerHTML.charAt(0));
            //숫자열
            const comNum = Math.floor(Math.random() * 6) + 1 ;
            //userNum 와 comNum 가 결정되면, com의 이미지와 user의 이미지도 결정된다.   

            //이미지 변경
            com.setAttribute('src', `../img/${comNum}.png`) ;
            user.setAttribute('src', `../img/${userNum}.png`) ;

            
            //if로 해도 되지만, 3항연산으로 표현해 봄
            //숫자를 맞췄는지 확
            (userNum === comNum) 
                ? MessageChannel.innerHTML = "<div class = 'spo'>맞음</div>"
                : MessageChannel.innerHTML = "<div class = 'spx'>틀림</div>"      
                
        
        });
    }
});