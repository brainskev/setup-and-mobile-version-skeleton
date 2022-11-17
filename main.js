const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') { navigation.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});

const cards = [
  {
    id: 'cardone',
    image: 'images/capstone_desktop.PNG',
    title: 'Tonic',
    datas: {
      author: 'CANOPY',
      role: 'Banck End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    skills: ['html', 'css', 'javascript', 'GitHub'],
  },
  {
   
    id: 'cardtwo',
    image: 'images/snapshot4.png',
    title: 'Multi-Post Stories',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'cardthree',
    image: 'images/snapshot1.png',
    title: 'Facebook 360',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'cardfour',
    image: 'images/snapshot2.png',
    title: 'Uber Navigation',
    datas: {
      author: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];

const works = document.querySelector('#Portfolio');
function cardsBuilder(card, index) {
  const {
    id,image, title, datas, description, skills,
  } = card;
  const skillsHtml = skills.map(
    (s) => `<li class = "tag html-tag">${s}</li>`,
  ).join('');
  works.innerHTML += `
  <div class = "card-works card-works-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
    <img src = "${image}" alt="first-project" class="snapshotdesktop1" /></a>
    <div class="card-works-content-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
      <h2 class = "title">${title}</h2>
      <ul class = "frame frame-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
        <li class = "list-item author">${datas.author}</li>
        <li class = "list-item role">${datas.role}</li>
        <li class = "list-item year">${datas.year}</li>
      </ul>
      <p class = "primary-text2">
        ${description}
      </p>
      <ul class = "tags">
        ${skillsHtml}
      </ul>
      <button id= "${id}" class = "btn action"> See Project </button>
    </div>
  </div>
  `;
}
cards.forEach((card, index) => {
  cardsBuilder(card, index);
});



const popupCards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser",

    technologies: ['html5', 'css3', 'javascript', 'React'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'images/Nature.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: '#',
      source: '#',
    },
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'images/desktop-2.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: ' https://brainskev.github.io/setup-and-mobile-version-skeleton/',
      source: 'https://github.com/brainskev/setup-and-mobile-version-skeleton',
    },
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'images/desktop-middle.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: ' https://brainskev.github.io/setup-and-mobile-version-skeleton/',
      source: 'https://github.com/brainskev/setup-and-mobile-version-skeleton',
    },
  },

  {
    id: 'cardfour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'images/desktop-last.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: ' https://brainskev.github.io/setup-and-mobile-version-skeleton/',
      source: 'https://github.com/brainskev/setup-and-mobile-version-skeleton',
    },
  },
];

const mainbody  = document.querySelector('body');
const buttonOne = document.getElementById('cardone')
const btn = 'cardOne'

buttonOne.addEventListener('click',()=>{
  const main = document.createElement('div');
  main.className='mainpopup';
  const popup = document.createElement('div');
  popupCards.forEach((object) => {
    console.log(object.id)
    if (btn === object.id) {
      console.log(object.id)
      main.innerHTML = `<div id="${object.id}">
       <div class="pop-head">
         <h2 class="cardheading">
         <span class="closeBtn">&times</span>
         ${object.title}
         </h2>
       </div>
       <ul class="education">
         <li class="cano">
           ${object.education[0]}
         </li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
       </ul>
       <div>
         <img class="pop-img" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
       <div>
         <div class="pop-bottom">
           <p class="pop-para">
             ${object.description}
           </p>
           <div class="sect-butns">
             <div>
               <ul class="tech javaht">
                 <li>
                     ${object.technologies[0]}
                 </li>
                 <li>
                     ${object.technologies[1]}
                 </li>
                 <li>
                     ${object.technologies[2]}
                 </li>
             </ul>
             <ul class="used-lang bootrap">
                 <li>
                     ${object.technologies2[0]}
                 </li>
                 <li>
                     ${object.technologies2[1]}
                 </li>
                 <li>
                     ${object.technologies2[2]}
                 </li>
             </ul>
             </div>
             <hr class="single-line">
             <nav class="pop-nav">
             <a class="navii1" href="${object.navigation.live}" target="_blank">
               <button class="pop-btn btn1 butz" type="button">
               ${object.butn1}
                 <img class="butz" src="${object.image.liveIcon}" alt="live-icon">
               </button>
             </a>
             <a class="navii2" href="${object.navigation.source}" target="_blank">
               <button class="pop-btn btn2 butz"  type="button">
               ${object.butn2}
               <img class="butz" src="${object.image.sourceIcon}" alt="github-icon">
               </button>
             </a>
             </nav>
           </div>
         </div>
       </div>
      </div>
     </div>`;
    }
  }
  );
  //load content onto main
  main.appendChild(popup);
  mainbody.appendChild(main);

  //close button
  const close = document.querySelector('.closeBtn');
  close.addEventListener('click',()=>{
    mainbody.removeChild(main);
  })
});


const [form] = document.getElementsByClassName('contact-form');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  const { email } = form.elements;
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('Email field has to be in lower case!!');
  } 
  if (message.length > 0) { error.innerText = message.join(', '); } else {
    form.submit();
  }
});