    let ei_Bool;
    let sn_Bool;
    let ft_Bool;
    let pj_Bool;    
//카운트 함수
    function count(type){
    /* id qnumbName엘레멘트를 가져와서 viewQnumb 변수에 대입해서 메모리를 만듬 */
    const viewQnumb = document.getElementById('qnumbName');
    const resultEnumb = document.getElementById('eNumb');
    const resultInumb = document.getElementById('iNumb');
    const resultSnumb = document.getElementById('sNumb');
    const resultNnumb = document.getElementById('nNumb');
    const resultFnumb = document.getElementById('fNumb');
    const resultTnumb = document.getElementById('tNumb');
    const resultPnumb = document.getElementById('pNumb');
    const resultJnumb = document.getElementById('jNumb');
    const changeQuestion = document.getElementById('questionDesc');
    const mainBtn_1 = document.getElementById('mainBtn1');
    const mainBtn_2 = document.getElementById('mainBtn2');

    /*  resultScore,viewQnumb엘레멘트의 innerText를 이용해서 값을 가져와 변수에 대입  */
    let qNumb = viewQnumb.innerText;
    let eScore = resultEnumb.innerText;
    let iScore = resultInumb.innerText;
    let sScore = resultSnumb.innerText;
    let nScore = resultNnumb.innerText;
    let fScore = resultFnumb.innerText;
    let tScore = resultTnumb.innerText;
    let pScore = resultPnumb.innerText;
    let jScore = resultJnumb.innerText;
    let changedQuestion = changeQuestion.innerText;
    let changedBtn1 = mainBtn_1.innerText;
    let changedBtn2 = mainBtn_2.innerText;

    
    /* 슬라이더 엘레멘트 요소를 li를 만들어서 타임라인바에 어펜드차일드 시킨다.*/
    let createdSlider = document.createElement("li");
    const sliderBar = document.getElementById('timeLineBar-bg');
    sliderBar.appendChild(createdSlider);
        
    /*  더하기 빼기  parseInt()는 엘레먼트 텍스트를 숫자 */
    //문제가 3이하면 e 에 1 추가   가져온게 텍스트타입이라 인트로 파싱(분석)해줘야됨.

    //감성적 타입의 버튼을 눌렀을 경우 문제 순서에 따라서 각 성향의 점수를 주고, 문제순서를 올린다.
    if(type === 'emotion'){
        if(qNumb <= 3){
            eScore = parseInt(eScore)+1;
            qNumb = parseInt(qNumb) +1;
            
        }else if(qNumb > 3 && qNumb <= 6){
            sScore = parseInt(sScore)+1;
            qNumb = parseInt(qNumb) +1;
        }else if(qNumb > 6 && qNumb <= 9){
            fScore = parseInt(fScore)+1;
            qNumb = parseInt(qNumb) +1;
        }else{
            pScore = parseInt(pScore)+1;
            qNumb = parseInt(qNumb) +1;
        }
    //이성적 타입의 버튼을 눌렀을 경우 문제 순서에 따라서 각 성향의 점수를 주고, 문제순서를 올린다.
    }else if(type === 'intelligent'){
        if(qNumb <= 3){
            iScore = parseInt(iScore)+1;
            qNumb = parseInt(qNumb) +1;
        }else if(qNumb > 3 && qNumb <= 6){
            nScore = parseInt(nScore)+1;
            qNumb = parseInt(qNumb) +1;
        }else if(qNumb > 6 && qNumb <= 9){
            tScore = parseInt(tScore)+1;
            qNumb = parseInt(qNumb) +1;
        }else{
            jScore = parseInt(jScore)+1;
            qNumb = parseInt(qNumb) +1;
        }
    }
    /* 문제순서에 따라 문제설명을 바꿔줌 */
    if(qNumb==2){
        changedQuestion = "2번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "2번문제 yes";
        changedBtn2 = "2번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==3){
        changedQuestion = "3번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "3번문제 yes";
        changedBtn2 = "3번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==4){
        changedQuestion = "4번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "4번문제 yes";
        changedBtn2 = "4번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==5){
        changedQuestion = "5번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "5번문제 yes";
        changedBtn2 = "5번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==6){
        changedQuestion = "6번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "6번문제 yes";
        changedBtn2 = "6번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==7){
        changedQuestion = "7번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "7번문제 yes";
        changedBtn2 = "7번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==8){
        changedQuestion = "8번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "8번문제 yes";
        changedBtn2 = "8번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==9){
        changedQuestion = "9번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "9번문제 yes";
        changedBtn2 = "9번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==10){
        changedQuestion = "10번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "10번문제 yes";
        changedBtn2 = "10번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==11){
        changedQuestion = "11번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "11번문제 yes";
        changedBtn2 = "11번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }else if(qNumb==12){
        changedQuestion = "12번 문제";
        changeQuestion.innerText = changedQuestion;
        changedBtn1 = "12번문제 yes";
        changedBtn2 = "12번문제 no";
        mainBtn_1.innerText = changedBtn1; 
        mainBtn_2.innerText = changedBtn2;
    }
    
    

    /* 각 성향 점수에 따라 성향체크 */
    (eScore > iScore)? ei_Bool = true : ei_Bool = false;
    console.log("e성향"+ei_Bool);
    (sScore > nScore)? sn_Bool = true : sn_Bool = false;
    console.log("s성향"+sn_Bool);
    (fScore > tScore)? ft_Bool = true : ft_Bool = false;
    console.log("f성향"+ft_Bool);
    (pScore > jScore)? pj_Bool = true : pj_Bool = false;
    console.log("p성향"+pj_Bool);

    /*페이지 보내기*/
    

    /* 결과 출력 */
    
    viewQnumb.innerText = qNumb;
    resultEnumb.innerText = eScore;
    resultSnumb.innerText = sScore;
    resultFnumb.innerText = fScore;
    resultPnumb.innerText = pScore;
    resultInumb.innerText = iScore;
    resultNnumb.innerText = nScore;
    resultTnumb.innerText = tScore;
    resultJnumb.innerText = jScore;

    }   // 카운트 함수 끝
    
    
    //eiQ
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
    