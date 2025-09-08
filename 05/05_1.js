//리터럴 표기법
// 대괄호, 쉼표, 요소들로 구성
let arr1 = [1,2,3] ;


//Array 생성자 이용
// 괄호, 쉼표, 요소들로 구성
let arr2 = new Array(1,2,3) ;


//배열 크기
console.log(arr1)
console.log(`arr1 : ${arr1}`)
console.log(`arr1의 요소개수 : ${arr1.length}`)

//배열요소 제거
console.log(arr2)
//arr2 = [] ;
arr2.length = 0;
console.log(arr2)


//배열요소 추가
console.log(arr1)
arr1.push('가')
console.log(arr1)
let arr1Pop = arr1.pop()
console.log(arr1, typeof(arr1))
console.log(arr1Pop, typeof(arr1Pop))


//배열의 순회(처음부터 끝까지 도는것)
//1. 
for(let i = 0 ; i < arr1.length ; i++) {
    console.log(arr1[i])
}

//2. key(index)값 가져오기
for(let i in arr1) {
    console.log(arr1[i])
}

//3. value 값 가져오기
for(let item of arr1) {
    console.log(item) ;
}

//4. foreach 메소드 // 내부에 화살표 함수(콜백함수( ) => { })가 나온다. 중괄호 작성에 주의할 것
arr1.forEach((item, i) => {
    console.log(item, i)
}) ;

//정말정말 중요한 함수 2개 map, filter
//배열 map 메소드
//반환값을 받아낼 수 있다. 
const arr3 = arr1.map((item) => {
    return item * 2 ;
})
console.log(arr3) ;

//콜백함수는 파라미터가 1개이면 ()가 생략하능
//return 문만 있으면 {} 와 return 을 생략가능
const arr4 = arr1.map(item => item * 2) ;
console.log(arr4);

//콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i )=> item * i) ;
console.log(arr5);

//filter
//array가 하나씩 돌림 
const arr6 = arr1.filter(item => item % 2 == 0 );
console.log(arr6);

//map 함수
let arr7 = [] ;
for (let c of arr1 ) {
    arr7.push( c * 2) ;
}
console.log(arr7) 

//filter 함수
let arr8 = [] ;
for (let c of arr1 ) {
    if ( c % 2 == 0) arr8.push( c ) ;
}
console.log(arr8)

// map filter 함수 둘을 합치려면, concat 함수

//concat 함수
const arr9 = arr7.concat(arr8) ;
console.log('concat 함수')
console.log(arr9)


//Spread 전개연산자
const arr11 = [...arr7, ...arr8] ;
//arr9와 10을 컨캣 하는 것과 같다
console.log('전개연산자')
console.log(arr11)


// join함수로도 합칠수 있다
let s = arr9.join('-');
console.log('join 함수')
console.log(s)
s = arr9.join('') ;
console.log(s)


//slice 함수
console.log('slice 함수')
console.log(arr9.slice(1,3))


// splice 함수
console.log('splice 함수')
arr9.splice(2, 0, 'A')
console.log(arr9)

//sort 함수
console.log('sort 함수')
arr9.sort()
console.log(arr9)


//tailing 쉼표
console.log('tailing 쉼표')
let arr10 = [1,2,]
console.log(arr10)



//구조분해
let [X, y] = arr10 ;
console.log(x)
console.log(`x = ${x} , y = ${y}`)
