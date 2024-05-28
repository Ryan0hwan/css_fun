var container = document.querySelector('.container')
var overlay = document.querySelector('.overlay')
container.addEventListener('mousemove', function(e){          // 컨테이너 안에서 마우스가 움직이면 괄호 안 기능(회전)을 수행
  var x = e.offsetX                                           // 마우스 좌표
  var y = e.offsetY
  var rotateY = -1/5 * x + 20
  var rotateX = 4/30 * y - 20

  overlay.style = `background-position : ${x/5 + y/5}%; filter : opacity(${x/200}) brightness(1.2)`  // 마우스 이동때마다, 백그라운드가 조금씩 움직임

  container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`   // rotateY: 좌우로 종이가 뒤집히는 것 같은 회전
})                                                      // 마우스 x좌표가 +200이면, rotateY(-20deg)
                                                        // 마우스 x좌표가 0이면, rotateY(20deg)  이걸로 위에 rotateY 식 작성.
                                                        // x좌표도 마찬가지방식으로 
 
container.addEventListener('mouseout', function(){     // 마우스가 벗어나면 효과 제거
  overlay.style = 'filter : opacity(0)'
  container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
})