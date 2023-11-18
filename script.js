// ------------------------
// Variable Declarations
// ------------------------



// Navigation
const navButtons = document.querySelectorAll('.btn');
const triangles = document.querySelectorAll('.triangle');

// Text Animation
let words1 = document.getElementById('words-1');

// Scroll Behavior
const messagesSection = document.getElementById('messages');
const aboutMeSection = document.getElementById('about-me');
const projectsSection = document.getElementById('projects');
const footerElement = document.querySelector('footer');
const sectionArray = [messagesSection, aboutMeSection, projectsSection, footerElement];

// ------------------------
// Text Animation Function
// ------------------------

const iterator = (sentence, delay) => {
  let iterationString = '';
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      iterationString += sentence[i];
      words1.innerHTML = iterationString;
    }, i * 95 + delay);
  }
};

// ------------------------
// Execute Text Animation
// ------------------------



iterator("Hey, I'm Jack.....🤝", 0);
iterator('I like intuitive tools and clean designs  🛠️', 3000);
iterator('that give 【┘】 back to people', 8500);



setTimeout(() => {
  words1.style.opacity = '100%';
  words1.innerHTML = 'Check me out 🕵️‍♂️';
  triangles[0].style.display = 'block';
  triangles[1].style.display = 'block';
  navButtons[0].style.background = '#F2B441';
  navButtons[0].style.backgroundSize = '800% 800%';
  navButtons[1].style.background = '#F2B441';
  navButtons[1].style.backgroundSize = '800% 800%';
}, 13000);

// ------------------------
// Scroll Behavior Functions
// ------------------------

const checkPosition = (el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0 && rect.height > 0) {
    el.style.animation = 'fadeIn 3s ease';
    el.style.opacity = '1';
  } else {
    el.style.animation = '';
    el.style.opacity = '0';
  }
};

// ------------------------
// Event Listeners
// ------------------------

// Nav Buttons
navButtons.forEach((btn, index) => {
  btn.addEventListener('mouseover', () => {
    triangles[index].style.opacity = '0%';
  });

});

// Scroll Buttons
document.getElementById('about-button').addEventListener('click', () => {
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('projects-button').addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});



// ------------------------
// Scroll Behavior
// ------------------------

sectionArray.forEach((element) => {
  window.addEventListener('scroll', () => checkPosition(element));
});


// Test
sectionArray.forEach((element) => {
  // Add a 'wheel' event listener to each element
  element.addEventListener('wheel', (event) => {
    // Call the checkPosition function when the user scrolls using the wheel
    checkPosition(element);

  });
});




const backgroundHolder = document.querySelector('.background-holder');

const updateBackgroundOpacity = () => {
  const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  const alpha = scrolledPercentage / 100;


  // Update the div's opacity
  backgroundHolder.style.opacity = 0 + alpha;
  backgroundHolder.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")';



  console.log(`Scrolled Percentage: ${scrolledPercentage}%`);
};


window.addEventListener('scroll', updateBackgroundOpacity);
window.addEventListener('wheel', updateBackgroundOpacity);



// progress bar
const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const updateScrollProgress = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  };
  
  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('wheel', updateScrollProgress);


