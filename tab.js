/* 
버튼0 누르면
- 모든 버튼에 붙은 orange 클래스명 제거
- 버튼0에 orange 클래스명 추가
- 모든 div에 붙은 show 클래스명 제거
- div0에 show 클래스명 추가
*/

// 좋은 관습 : 셀렉터 문법은 느리다. 자주쓰는 셀렉터 변수에 넣어 쓰자
// var 버튼 = $('.tab-button');
// 모든 tab-button 클래스 다 찾아줌 .eq(0) : 0번째 요소, querySelectorAll('.tab-button')[0] 이랑 비슷함
// 반복문으로
// for(let i = 0; i < $('.tab-button').length; i++){ // 반복문 안에 변수 let으로 
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

// 이벤트버블링 -> .tab-button 을 누르면 .list도 누른것
// on.('click', function(){}) 똑같음
// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         open_tab(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         open_tab(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         open_tab(2);
//     }
// })

$('.list').click(function(e){
    console.log(e.target.dataset.id);
    open_tab(e.target.dataset.id); //숫자로 변환해서 사용하면 더 정확할듯
});

// 콜백함수 안에 들어갈거 함수로 
function open_tab(len){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(len).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(len).addClass('show');
}

var shirts = [95, 100, 105, 110];
var pants = [28, 30, 32];

$('.form-select').eq(0).on('input', function(){
    //var value = $('.form-select').eq(0).val();
    //var value = this.value;
    //var value = e.currentTarget.value;
    if(this.value == '셔츠'){
        $('.form-select').eq(1).html(''); //내용비우기
        $('.form-select').eq(1).removeClass('form-hide');
        shirts.forEach((data) => { // arrow function 쓰면 this 뜻이 달라질 수 있음 : 밖에있던 이상한 this를 그대로 가져옴
                                    // 이벤트리스너안에서 e.currentTarget의 의미로 this를 쓰고싶으면 function(){} 써야함
            $('.form-select').eq(1).append(`<option>${data}</option>`);
        })
    }
    else if(this.value == '바지'){
        $('.form-select').eq(1).html(''); //내용비우기
        $('.form-select').eq(1).removeClass('form-hide');
        // array에 붙일수 있는 forEach 반복문
        pants.forEach(function(data, i){ // 콜백함수의 1번 파라미터는 array의 요소, 2번 파라미터 i 는 1씩 증가하는 정수
            $('.form-select').eq(1).append(`<option>${data}</option>`);
        });
    }
});

// object 반복문 python이랑 비슷
var obj = {name: 'kim', age: 20};
for (var key in obj){
    console.log(key);
    console.log(obj[key]);
}

var check = ['흥민', '영희', '철수', '재석'];

function find_name(name){
    for(var temp in check){ // array는 temp 에 index 들어감
        console.log(temp);
        if(check[temp] == name){
            console.log('있어요');
            return 0;
        }
    }
}
find_name('영희');