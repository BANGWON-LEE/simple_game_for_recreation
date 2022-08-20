window.onload = function(){
  let twoprogress = localStorage.getItem('단계')
  console.log('tow', twoprogress)

  if(twoprogress !== "passNo1"){
    location.replace('/view/one.html');
  }

}

var add = (function (){
  let counter = -1
  counter++;
  return function (){counter+=1; return counter; }
})();

function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = '2730'
  let progress ="passNo2"
  let cnt = 1;
  let signal = false


  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/three.html')
    
  } else if(go !== answer){
    alert('틀렸습니다.')
    // console.log('cnt', add())
    if(add() === 3){
      document.getElementById('onePw').style.display="none";
      setTimeout(function() {
        document.getElementById('onePw').style.display="block";
    }, 60000);
    }
  }

}

