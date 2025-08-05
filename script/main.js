const whiteBox = document.getElementById('whiteBox')
const whiteBox2 = document.getElementById('whiteBox2')


const centerX = window.innerWidth / 2
const centerY = window.innerHeight / 2

window.addEventListener('mousemove', (e) => {

  const deltaX = e.clientX - centerX
  const deltaY = e.clientY - centerY

  const moveX = -deltaX * 0.03
  const moveY = -deltaY * 0.03

  gsap.to(whiteBox, {
    duration: 0.6,
    x: moveX,
    y: moveY,
    ease: "power3.out"
  })
})

window.addEventListener('mouseleave', () => {
  gsap.to(whiteBox, {
    duration: 0.8,
    x: 0,
    y: 0,
    ease: "power3.out"
  })
})



window.addEventListener('mousemove', (e) => {

  const deltaX = e.clientX - centerX
  const deltaY = e.clientY - centerY

  const moveX = -deltaX * 0.03
  const moveY = -deltaY * 0.03

  gsap.to(whiteBox2, {
    duration: 0.6,
    x: moveX,
    y: moveY,
    ease: "power3.out"
  })
})

window.addEventListener('mouseleave', () => {
  gsap.to(whiteBox2, {
    duration: 0.8,
    x: 0,
    y: 0,
    ease: "power3.out"
  })
})



gsap.registerPlugin(ScrollTrigger)

gsap.to(".second", {
  y: -50,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".second",
    start: "top bottom",
    end: "top top",
    scrub: true
  }
})


gsap.registerPlugin(ScrollTrigger)


const bgImages = gsap.utils.toArray(".big")
const fgImages = gsap.utils.toArray(".small")
const numSlides = bgImages.length
const number = document.getElementById('number')
const listName = document.querySelectorAll('.listName')
const slideTitles = [
  "Oakley Project 2075",
  "Loro Piana at Harrods",
  "MONGRID 2024 Redesign",
  "HBO House of the Dragon APP",
  "Heineken The Boring Phone",
  "Expo 58 Museum Experience"
]
const title = document.getElementById('title')


bgImages.forEach((img, i) => {
  gsap.set(img, { autoAlpha: i === 0 ? 1 : 0 })
})
fgImages.forEach((img, i) => {
  gsap.set(img, {
    y: 0,
    autoAlpha: i === 0 ? 1 : 0
  })
})


ScrollTrigger.create({
  trigger: ".second",
  start: "top top",
  end: `+=${window.innerHeight * (numSlides - 1)}`,
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;
    const slideIndex = Math.min(Math.floor(progress * numSlides), numSlides - 1)

   
    bgImages.forEach((img, i) => {
      gsap.to(img, {
        autoAlpha: i === slideIndex ? 1 : 0,
        duration: 0.5,
        ease: "power2.out"
      })
    })

   
    fgImages.forEach((img, i) => {
      gsap.to(img, {
        y: (i - slideIndex) * 700,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.out"
      })
    })


    listName.forEach((span, i) => {
      if (i === slideIndex) {
        span.classList.add('text-white')
        span.classList.remove('text-gray-500')
      } else {
        span.classList.add('text-gray-500')
        span.classList.remove('text-white')
      }

    })

    number.textContent = String(slideIndex + 1).padStart(2, '0')

    title.textContent = slideTitles[slideIndex]
  }
})




const thirdTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".third",
    start: "top 60%",
    toggleActions: "restart reverse restart reverse",
  },
})


thirdTimeline.from(
  ".third .third-content span",
  {
    y: 30,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
  },
  "showThird"
)


thirdTimeline.from(
  ".third .third-content p",
  {
    y: 50,
    opacity: 0,
    duration: 3,
    ease: "expo.out",
  },
  "showThird+=0.7" 
)



const fourthTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".four-content",
    start: "top 70%",
    toggleActions: "restart reverse restart reverse",
  },
})

fourthTimeline.from(".four-content span", {
  y: 30,
  opacity: 0,
  duration: 2,
  ease: "expo.out",
}, "startFour")

fourthTimeline.from(".four-content p", {
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "expo.out",
  stagger: 0.2, 
}, "startFour+=0.6")



const fiveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".five",
    start: "top 60%",
    toggleActions: "restart none none none",
  },
})

fiveTimeline.from(
  ".five-content p",
  {
    y: 50,
    opacity: 0,
    duration: 3,
    ease: "expo.out",
  })



const box = gsap.utils.toArray(".box")
const numbox = box.length

ScrollTrigger.create({
  trigger: ".five",
  start: "top top",
  end: `+=${window.innerHeight * numbox }`,
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;
    const boxIndex = Math.min(Math.floor(progress * numbox), numbox - 1)


   
    box.forEach((div, i) => {
      gsap.to(div, {
        y: (i - boxIndex) * 500,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.out"
      })
    })

  }})

