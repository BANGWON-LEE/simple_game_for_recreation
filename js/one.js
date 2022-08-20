function quiz(){
  let go = document.getElementById('onePw').value;
  const answer = '12396'
  let progress ="passNo1"
  console.log('go', go);
  if(go === answer) {
    alert('정답입니다.')
    localStorage.setItem('단계',progress)
    location.replace('/view/two.html')
    
  } else{
    alert('틀렸습니다.')
  }

}