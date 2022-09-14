// just for reference

// console.log("Hello world");
// prompt("Hi there");
// alert("hi there again");

// const myName = "the someone";
// this is how we define a variable in js
// const h1 = document.querySelector(".heading-primary");
// alert(myName);
// alert(h1);
// console.log(h1);
// this thing changes the actual content in the webpage to teh thing in the
// my name here it is 'the someone' so in the h1 teh actual contents in that will be replaced by the thing
// in the myname

// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// h1.style.padding = "12rem";
// this thing works
// in this way we can select and maipulate the things in the css in js

// h1.addEventListener("click", function() {
//   h1.textContent = "this thing changed"
//   h1.style.backgroundColor = "red"
//   h1.style.padding = "12rem"
// })

const h1 = document.querySelector(".heading-primary");
// h1.textContent = "heading primary changed";
console.log("heading changed");

// yes this thing worked
h1.addEventListener("click", function () {
  h1.style.background = "linear-gradient(to right, #27285c, #0000ae)";
  h1.style.color = "#f1f3f5";
  h1.style.borderRadius = "1rem";
  // property names with 2 words are writted like this in js
  h1.style.padding = "3.2rem";
  console.log("fn success");
});

///////////////////////////////////////////////////////////
// try to include these 3 lines of code in all the webpages.
//  this is kind of an important thing
// to set the date to set automatically - the year text - and to auto update the site
const yr = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yr.textContent = currentYear;

///////////////////////////////////////////////////////////
// To make the mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  // headerEl.classList.add or remove classes but instead we use toggle
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);  this shows all the links in the webpage
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    // e.preventDefault(); this cancells the default functino that a link is set to perform - doesnt redirect to anywhere
    const href = link.getAttribute("href");
    console.log("href");

    // scrollback to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //  scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile navigation
    if (link.classListContains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// STICKY NAVIGATION
// to make the navigation bar sticky and all, we use the intersectionObserver element
// in it we need to specify 2 things , 1 - a function, some options
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    // this (line below) starts this will execute this in an event where wvwn 1% of the hero section is shown
    //  we can give the threschold 1 also, but in that case, the hero section oshpid be compeately in the viewport - in that relation we set the viewport to 1
    // so that we will see the navigation if the 1st section compleately moves out of the viewport section
    threshold: 0,
    rootMargin: "-70px",
    // this 70px is the heigth set to the nav bar. I have to be in px neither can be in rem or  percentages
  }
);
obs.observe(sectionHeroEl);
//  the intersection ratio and is intersecting is the things necessary elements

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// try to always include these lines of codes in the websites that we makes
//  in some browsers like safari, when we define the flexbox gap property it may not work, so in order to give the same effect we use these lines of codes
// in order to make it work copy the below codes of css and paste it in the css file
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.di
  splay = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
