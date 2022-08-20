window.onload = function(){
  let twoprogress = localStorage.getItem('단계')
  console.log('tow', twoprogress)

  if(twoprogress !== "passNo5"){
    location.replace('/view/one.html');
  }

}



function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = '대성전우로'
  let progress ="passNo6"
  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/finish.html')
    
  } else{
    alert('틀렸습니다.')
  }

}
