window.onload = function(){
  let twoprogress = localStorage.getItem('단계')
  console.log('tow', twoprogress)

  if(twoprogress !== "passNo2"){
    location.replace('/view/one.html');
  }

}



function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = '3970'
  let progress ="passNo3"
  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/four.html')
    
  } else{
    alert('틀렸습니다.')
  }

}
