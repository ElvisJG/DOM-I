const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Selects the entire document, then selects the nav then a within nav. Iterates through each a tag and does nav-item-(0 + 1 -> 6)
let nav = document.querySelectorAll.bind(document);
nav('nav a').forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

// Had to make a selector to select the nav element, the above selects the entire document then goes down and looks for nav a, so it wasn't usable for this
let navItself = document.querySelector('nav');

let prependNav = document.createElement('a');
prependNav.href = '#';
prependNav.textContent = 'Green';
navItself.prepend(prependNav);

let appendNav = document.createElement('a');
appendNav.href = '#';
appendNav.textContent = 'Yikes';
navItself.append(appendNav);

// All nav items are now green, moved it down so it works on the prepended and appended navs
nav('nav a').forEach(green => {
  green.style.color = 'green';
});

// Assigned siteContent cta's h1 content to ctaHeader
let ctaHeader = document.querySelector('h1');
ctaHeader.textContent = siteContent['cta']['h1'];

// Use the code from logo-img to call cta's img
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// Assigned siteContent cta's button content to button
let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];

// Use the code from logo-img to call middle-img
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// selected all h4's in the document, ran a .filter using Object.keys on siteContent's main content searching for any 'key' that included h4
// Then did a foreach on maincontenth4s to add the content found in the filter, under 'main-content'
// Repeated these same steps to populate p tags
let mainContentH4s = document.querySelectorAll('h4');
let filterMainContentH4s = Object.keys(siteContent['main-content']).filter(
  key => key.includes('h4')
);
mainContentH4s.forEach(
  (index, i) =>
    (mainContentH4s[i].textContent =
      siteContent['main-content'][`${filterMainContentH4s[i]}`])
);

let mainContentPs = document.querySelectorAll('p');
let filterMainContentPs = Object.keys(siteContent['main-content']).filter(key =>
  key.includes('content')
);
mainContentPs.forEach(
  (index, i) =>
    (mainContentPs[i].textContent =
      siteContent['main-content'][`${filterMainContentPs[i]}`])
);

// Selected the contact h4 and Ps
let contacth4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');

// Assigned the h4 the siteContent array contact-h4 content, used indexes to hardcode (rip) P tag content (I was previously doing this with nav a but Richard helped me iterate)
contacth4.textContent = siteContent['contact']['contact-h4'];
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// Footer.
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
