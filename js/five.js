window.onload = function(){
  let twoprogress = localStorage.getItem('단계')
  console.log('tow', twoprogress)

  if(twoprogress !== "passNo4"){
    location.replace('/view/one.html');
  }

}



function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = 'hoyo'
  let progress ="passNo5"
  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/six.html')
    
  } else{
    alert('틀렸습니다.')
  }

}
