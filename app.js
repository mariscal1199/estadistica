  var currentQuestion=0;
    var totalScore=0;
    var cQuestion=document.getElementById('currentQuestion');
    var totalQuestions=document.getElementById('totalQuestions');
    var splashSecreen=document.getElementById('start');
    var quizScreen=document.getElementById('quiz-secreen');
    var x=0;
    var resultSecreen=document.getElementById('resultSecreen');
    var timeLeft=document.getElementById('timeLeft');
    var score=document.getElementById('score');
    var question=document.getElementById('question');
    var opt1=document.getElementById('opt1');
    var opt2=document.getElementById('opt2');
    var opt3=document.getElementById('opt3');
    var opt4=document.getElementById('opt4');
    var btn=document.getElementsByClassName('btn');
    var next=document.getElementById('next');
    var quizQuestions=[
      {
        question:"¿Cual es el concepto de población?",
        choice1:"Propiedad que permite clasificar un grupo de individuos",
        choice2:"Parte que representa una población",
        choice3:"Es una representación simbólica de un atributo o variable cuantitativa",
        choice4:"Conjunto de individuos sobre los que se realiza un estudio",
        ans:"Conjunto de individuos sobre los que se realiza un estudio",
      },
         {
        question:"¿Cual de las siguientes es una variable cualitativa?",
        choice1:"Numero de comidas al día",
        choice2:"Estatura de un niño",
        choice3:"Deporte preferido",
        choice4:"Cantidad de niños en un salón de clases",
        ans:"Deporte preferido",
      },
         {
        question:"¿Cual de las siguientes opciones NO corresponde a una variable cualitativa?",
        choice1:"Color de ojos",
        choice2:"Lugar de nacimiento",
        choice3:"Numero de hermanos",
        choice4:"Raza de un perro",
        ans:"Raza de un perro",
      },
         {
        question:"Valor que se le da a la información recolectada",
        choice1:"Dato",
        choice2:"Código",
        choice3:"Estadística",
        choice4:"Número",
        ans:"Dato",
      },
         {
        question:"A que se refiere la siguiente afirmación: el valor de la variable que tiene mayor frecuencia",
        choice1:"Moda",
        choice2:"Rango",
        choice3:"Mediana",
        choice4:"Ninguna de las anteriores",
        ans:"Moda",
      }
    ];
    function nextQuestion(no){
    Inter(300);
    cQuestion.textContent=" "+(no+1);
    totalQuestions.textContent=" "+quizQuestions.length;
    console.log("number "+no);
    question.textContent=quizQuestions[no].question;
    opt1.textContent=quizQuestions[no].choice1;
    opt2.textContent=quizQuestions[no].choice2;
    opt3.textContent=quizQuestions[no].choice3;
    opt4.textContent=quizQuestions[no].choice4;
  }
    var z=setInterval(function(){
        if(x==1){
          clearInterval(z);
          splashSecreen.style.display="none";
          quizScreen.style.display="block";
          nextQuestion(currentQuestion);
        }
        x++;
    },2000);
    for(var i=0;i<btn.length;i++){
      btn[i].onclick=function(){
        if(this.textContent==quizQuestions[currentQuestion].ans){
            totalScore++;
            if(currentQuestion<4){
            clearInterval(bar);
            currentQuestion++;
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
        else{
          if(currentQuestion<4){
            currentQuestion++;
            clearInterval(bar);
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
      }
    }
    var bar;
    function endSecreen(){
      quizScreen.style.display="none";
      resultSecreen.style.display="block";
      score.textContent=totalScore;
    }
    function Inter(set){
    var statusTime=set;
    timeLeft.style.width=statusTime+"px";
    bar=setInterval(function(){
     if(statusTime==0){
         clearInterval(bar); 
          if(currentQuestion<4){
            currentQuestion++;
            nextQuestion(currentQuestion);
          }
          else{
            endSecreen();
          } 
           
        }
        timeLeft.style.width=statusTime+"px";
        statusTime=statusTime-30;
    },1000); 
   }
  next.onclick=function(){
    if(currentQuestion<4){
    currentQuestion++;
    nextQuestion(currentQuestion);
    }
    else{
      endSecreen();
    }
   
  }