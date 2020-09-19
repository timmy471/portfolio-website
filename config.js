module.exports = {
  pathPrefix: '',
  siteUrl: 'https://abdulqudus.com',
  siteTitle: 'Jide Abdul-Qudus',
  siteDescription: 'Portfolio of Jide Abdul-Qudus',
  author: 'Jide Abdul-Qudus',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://abulqudus-com.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/jideabdqudus',
    facebook: 'https://www.facebook.com/qudusini',
    twitter: 'https://twitter.com/jideabdqudus',
    instagram: 'https://www.instagram.com/theqoder/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/a04d39f8-1f64-4680-984d-c2f9585b91d4',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-164323935-1',
  tags: {
    nsure: {
      name: 'nsure',
      projectName: 'Nsure-HRM',
      description: 'Dashboard Management System, built for a Human Resource Management Company.',
      color: '#0b8c3f',
      website: 'https://interkelhr.com.ng/',
      github: 'https://interkelhr.com.ng/',
    },
    postify: {
      name: 'postify',
      projectName: 'Postify',
      description: 'Postify is a social web app, poised to look and operate like Twitter. Built using ReactJS and Redux.',
      color: '#ec1025',
      website: 'https://github.com/jideabdqudus/postify',
      github: 'https://github.com/jideabdqudus/postify',
    },
    pss: {
      name: 'pss',
      projectName: 'Paysmosmo',
      description: 'E-Commerce website, containing admin dashboard, user dashboard systems.',
      color: '#055663',
      website: 'https://paysmosmo.com',
      github: 'https://paysmosmo.com',
    },
    tracker: {
      name: 'tracker',
      projectName: 'COVID-19 Tracker',
      description: 'An App tracking Numbers of Death, Infected and Recovered COVID-19 patients in all 186 countries.',
      color: '#202388',
      website: 'https://covid19trackerviruins2020.netlify.app/',
      github: 'https://github.com/jideabdqudus/covid-tracker',
    },
    contactkeeper: {
      name: 'contactkeeper',
      projectName: 'Contact-Keeper',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#c79505',
      website: 'https://ancient-dusk-53017.herokuapp.com/',
      github: 'https://github.com/jideabdqudus/contact-keeper',
    },
    hireme: {
      name: 'hireme',
      projectName: 'Hire Me',
      description: 'Online Business Directory that helps create connections between service professionals and businesses.',
      color: '#4cef23',
      website: 'https://github.com/jideabdqudus/hire-me',
      github: 'https://github.com/jideabdqudus/hire-me',
    },
    itmanager: {
      name: 'itmanager',
      projectName: 'IT Manager',
      description: 'An App built for the IT Department of a company, allows Complaints status review by a Super Admin.',
      color: '#f9c646',
      website: 'https://kind-bassi-289025.netlify.app/',
      github: 'https://github.com/jideabdqudus/logger',
    },
    wishingwell: {
      name: 'wishingwell',
      projectName: 'Wishing Well',
      description: 'Ever thought of a digital wishing well? Built to bring wishes to life through virtual means.',
      color: '#d923ef',
      website: 'https://github.com/jideabdqudus/wishapp',
      github: 'https://github.com/jideabdqudus/wishapp',
    },
    farmmanager: {
      name: 'farmmanager',
      projectName: 'Farm Manger',
      description: 'A Dashboard Management System for a Farm, tracksnumber of Items in the inventory and daily produce.',
      color: '#d923ef',
      website: 'https://github.com/jideabdqudus/blackdash',
      github: 'https://github.com/jideabdqudus/blackdash',
    },
    githubfinder: {
      name: 'githubfinder',
      projectName: 'Github Finder',
      description: 'An application that allows user to search for Github Users, tapping out there Profile details.',
      color: '#333',
      website: 'https://vigorous-yonath-bb0546.netlify.app/',
      github: 'https://github.com/jideabdqudus/github-finder',
    },
    thesimpsons: {
      name: 'thesimpsons',
      projectName: 'The Simpsons Quotes',
      description: 'A React web application that auto generates quotes from the Simpsons series',
      color: '#fed304',
      website: 'https://agitated-swanson-d0d5c5.netlify.app/',
      github: 'https://github.com/jideabdqudus/quote-generator',
    },
    restaurant: {
      name: 'restaurant',
      projectName: 'Restaurant Mobile',
      description: 'A React-Native mobile application that allows user search for top rated restaurants',
      color: '#fbca02',
      website: 'https://github.com/jideabdqudus/restaurant-native',
      github: 'https://github.com/jideabdqudus/restaurant-native',
    },
    crowdyvest: {
      name: 'crowdyvest',
      projectName: 'Crowdyvest Website',
      description: 'A website built for a financial institution, UI adapted from already hosted website',
      color: '#000',
      website: 'https://github.com/jideabdqudus',
      github: 'https://crowdyvest-theqoder.netlify.app/',
    },
  },
};
