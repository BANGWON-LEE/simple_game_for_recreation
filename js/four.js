window.onload = function(){
  let twoprogress = localStorage.getItem('단계')
  console.log('tow', twoprogress)

  if(twoprogress !== "passNo3"){
    location.replace('/view/one.html');
  }

}



function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = '91'
  let progress ="passNo4"
  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/five.html')
    
  } else{
    alert('틀렸습니다.')
  }

}
