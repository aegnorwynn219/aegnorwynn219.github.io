new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  effect: 'coverflow',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', (e) => {
  e.preventDefault();
  const navigation = document.querySelector('.nav-list');
  const { display } = navigation.style;

  navigation.style.display = display === 'flex' ? 'none' : 'flex'; // TERNARY OP

  // IF - ELSE => SAME AS TERNARY
  // if (display === 'flex') {
  //   navigation.style.display = 'none'
  // } else {
  //   navigation.style.display = 'flex'
  // }
});

// navigation physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.nav-img');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart').start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    mass: 1,
    damping: 10,
  }).start(ballXY);
});
