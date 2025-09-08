//로또번호 생성
const Lotto = () => {
    //0. 숫자 저장 배열
    let nums = [];

    //1.숫자 7개 중복되지 않도록 생성
    while(nums.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1 ; // 1~45생김
        // 기존 숫자배열에 있는지 확인해야 중복여부 가능, 반복되는것 없어야 하니까
        // nums안에 includes(n)이 
        if (nums.includes(n)) continue;
        nums.push(n)
    }
    //console.log(nums)
    //보너스 배열 : 7개 번호 중, 맨 마지막 번호는 보너스 배열이 되도록
    const bonus = nums.pop();
    //숫자 정렬
    nums.sort((a, b) => a -b);

    //console.log(nums)
    //console.log(bonus)        
    
    
/*   const arr = [1,2]
    let [x, y] */


    //2. 태그 생성
    // +도 태그 생성
    // nums만큼 span태그 만들어야 함
    let tags = [] ;
    for(let item of nums) {
        tags.push(`<span class="sp${Math.floor(item / 10)}">${item}</span>`);
    }
    tags.push(`<span class="spplus}">+</span>`)
    tags.push(`<span class="sp${Math.floor(bonus / 10)}">${bonus}</span>`)

    //console.log(tags)


    //3. 화면에 보이도록 해볼 것
    document.getElementById('spDiv').innerHTML = tags.join('');

}


