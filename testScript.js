    
    
//각각의 속성 카운트
    let e_Count;
    let i_Count;

    let s_Count;
    let n_Count;

    let f_Count;
    let t_Count;

    let p_Count;
    let j_Count;

//속성별 결과
    let ei_Bool = true;
    let sn_Bool = true;
    let ft_Bool = true;
    let pj_Bool = true;

// 위 결과를 비교해서 도출한 뒤에 각각의 html 페이지로 보내면 된다.


//카운트 함수
    function count(type){
    /* id qnumbName엘레멘트를 가져와서 viewQnumb 변수에 대입해서 메모리를 만듬 */
    const viewQnumb = document.getElementById('qnumbName');

    /* id 스코어넘버 엘레멘트를 가져와서 resultScore 변수에 대입해서 메모리를 만듬 */
    const resultScore = document.getElementById('scoreNumb');

    /*  resultScore,viewQnumb엘레멘트의 innerText를 이용해서 값을 가져와 변수에 대입  */
    let score = resultScore.innerText;
    let qNumb = viewQnumb.innerText;

    /*  더하기 빼기  parseInt()는 엘레먼트 텍스트를 숫자 */
    if(type === 'plus'){
        score = parseInt(score) + 1;
        qNumb = parseInt(qNumb) +1;
        
    }else if(type === 'minus'){
        score = parseInt(score) -1;
        qNumb = parseInt(qNumb) +1; 
    }

    /* 결과 출력 */
    resultScore.innerText = score;
    viewQnumb.innerText = qNumb;
}
    // e_Count > i_Count 외향 내향
    // s_Count > n_Count 감성 지성
    // f_Count > t_Count 감성 지성
    // p_Count > j_Count 게으름 성실

    /* 
     버튼 함수 예)
     [plus 버튼]
     qNumb이 3 보다 작거나 같으면 { e에 +1 을 해라 } 
      
     [minus 버튼]
     qNumb이 3 보다 작거나 같으면 { i에 +1 을 해라 }

    */

    //문제 바꾸기

    /*
        각각의 점수로 비교해서 트루 폴스 만들기
        
        e_Count > i_Count 면 
        ei_Bool true;
        s_Count > n_Count 면
        sn_Bool true;
        f_Count > t_Count 면
        ft_Bool true;
        p_Count > j_Count 면
        pj_Bool true;

        ei_Bool == true , sn_Bool == true, ft_Bool == true, pj_Bool == true
        면 esfp

    */
    