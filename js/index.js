const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// mid wide img

const midpage = document.querySelector("#middle-img");
midpage.setAttribute("src", "img/mid-page-accent.jpg");

// nav links
const navlinks = document.querySelectorAll("header nav a");
const navlink = document.querySelector("header nav");
navlinks[0].textContent = "Services";
navlinks[1].textContent = "Product";
navlinks[2].textContent = "Vision";
navlinks[3].textContent = "Features";
navlinks[4].textContent = "About";
navlinks[5].textContent = "Contact";

// dynamic

// let navlink = document.querySelector("nav a");

// navlink.forEach(
//   (el, i) => (el.textContent = siteContent.navlink[`nav-item-${i + 1}`])
// );

// above isn't working ^

// append attempt

const newlink = document.createElement("a");
newlink.textContent = "Learn More";
navlink.appendChild(newlink);
newlink.setAttribute("href", "='#'");
newlink.style.color = "green"; // not sure how to get this to inherit brother element properties from foreach.

const firstLink = document.createElement("a");
firstLink.textContent = "First Try~!";
navlink.prepend(firstLink);
firstLink.setAttribute("href", "='#'");
firstLink.style.color = "green";

navlinks.forEach(function(link) {
  link.style.color = "green";
});

// h1 text

const ctatext = document.querySelector("h1");
ctatext.textContent = siteContent["cta"]["h1"];
// ctatext.textContent (need to find a way to include line breaks possibly w/ this example:
// linebreak = document.createElement("br");
// queryForm.appendChild(linebreak);)

// main img

const mainimg = document.querySelector("#cta-img");
mainimg.setAttribute("src", siteContent["cta"]["img-src"]);

// button content

const buttonctn = document.querySelector("button");
buttonctn.textContent = siteContent["cta"]["button"];

// main content / top content

// const features = document.querySelector(
//   ".main-content .top-content .text-content h4"
// );
// features.textContent = siteContent["main-content"]["features-h4"];

// const about = document.querySelector(
//   ".main-content .top-content:nth-child(2) h4"
// );
// about.textContent = siteContent["main-content"]["about-h4"];

// For Each Main Content

const mainContent = document.querySelectorAll(".main-content .text-content");
const sections = ["features", "about", "services", "product", "vision"];
mainContent.forEach((el, i) => {
  const section = sections[i];
  el.querySelector("h4").textContent =
    siteContent["main-content"][`${section}-h4`];
  el.querySelector("p").textContent =
    siteContent["main-content"][`${section}-content`];
});

const featuresvar = document.querySelectorAll(
  ".main-content .top-content .text-content"
);
// console.log((featuresvar[1].textContent = "okay"));

// contact info

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

// contact .forEach attempt

// const contactinfo = document.querySelectorAll(".container .contact");
// const contacts = ["address", "phone", "email"];
// contactinfo.forEach((el, i) => {
//   const contact = contacts[i];
//   el.querySelector("p").textContent = siteContent["contact"][`${contact}`];
// });

const contactinfo = document.querySelectorAll(".contact p");
contactinfo[0].textContent = siteContent["contact"]["address"];
contactinfo[1].textContent = siteContent["contact"]["phone"];
contactinfo[2].textContent = siteContent["contact"]["email"];

// footer

const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];
