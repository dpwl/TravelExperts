// Author:        Yeji Soh
// Date:          02/23/2020
// Course Module: CPRG 210 FRONTEND
// Assignment:    Individual HTML/CSS/Javascript Assignment

// Gallery Array
const pics = [
  {
    name:     'Koh Samet, Thailand',
    summer:   '32/26',
    winter:   '22/22',
    things:  ['Reach there from Bangkok by bus! - ONLY 3-hour away',
              'Relax on the emerald beach!',
              'Perfect Places for aqua-sports lovers!'],
    imgSRC:   '/img/IMG_0283.JPG',
    imgClass: 'gallery_img',
    imgAlt:   'Koh Samet beach',
    figClass: 'img_1',
    fig2Class: 'overlay_1',
    href:       'https://www.lonelyplanet.com/thailand/rayong-province/ko-samet'  
  },
  {
    name:     'Geneva, Switzerland',
    summer:   '25/13',
    winter:   '6/-1',
    things: ['Feel the different vibes in Old town and New town by walking tour!',
              'FREE public transportation fee if staying any hotels/hostels!',
              'Shop Swiss-made watches!'],
    imgSRC:   '/img/IMG_2610.JPG',
    imgClass: 'gallery_img',
    imgAlt:   'Geneva',
    figClass: 'img_2',
    fig2Class: 'overlay_2',
    href:       'https://www.lonelyplanet.com/switzerland/geneva'
  },
  {
    name:     'Rome, Italy',
    summer:   '30/18',
    winter:   '13/3',
    things:  ['Roman Empire Historic Spots',
              'Try REAL Gelato & Pizza!',
              'Try out popular wineries close to Rome!'],
    imgSRC:   '/img/IMG_2444.JPG',
    imgClass: 'gallery_img',
    imgAlt:   'Rome',
    figClass: 'img_3',
    fig2Class: 'overlay_3',
    href:      'https://www.lonelyplanet.com/italy/rome'
  },
  {
      name:   'Berlin, Germany',
      summer: '24/12',
      winter: '3/-1',
      things: ['Mixture of Old East Germany vibes and modern COOL & Trendy Berlin vibes',
              'Explore and learn World War II history',
              'THE Captial of COOL according to The Times, 2018'],
      imgSRC:   '/img/IMG_2291.JPG',
      imgClass: 'gallery_img',
      imgAlt:   'Berlin',
      figClass: 'img_4',
      fig2Class: 'overlay_4',
      href:'https://www.lonelyplanet.com/germany/berlin'
  },
  {
      name:   'Jeju Island, South Korea',
      summer: '29/18',
      winter: '9/3',
      things: ['The Volcanic Island of World Natural Heritage Site by UNESCO',
              'ONLY 1-hour flight from Seoul!',
              'Explore all the savoury seafoods here!'],
      imgSRC:   '/img/IMG_3891.JPG',
      imgClass: 'gallery_img',
      imgAlt:   'Jeju Island',
      figClass: 'img_5',
      fig2Class: 'overlay_5',
      href:'https://www.lonelyplanet.com/south-korea/jejudo'
  },
  {
      name:   'Amalfi, Italy',
      summer: '29/22',
      winter: '14/8',
      things: ['One of the most memorable coasts in Italy by Lonely Planet',
              'ONLY 2-hour train from Rome!',
              'Explore around a little town - Full of little shops, and authentic restaurants!'],
      imgSRC:   '/img/IMG_3133.JPG',
      imgClass: 'gallery_img',
      imgAlt:   'Amalfi lanscape',
      figClass: 'img_6',
      fig2Class: 'overlay_6',
      href:'https://www.lonelyplanet.com/italy/amalfi-coast'
  }
]

// Assign values to Gallery
let gallery = '';

pics.forEach(function(pic) {
gallery +=  
`<figure class="${pic.figClass}">
  <a href=${pic.href} target="_blank">
  <img src="${pic.imgSRC}" class="${pic.imgClass}" alt="${pic.imgAlt}">
  <div class="${pic.fig2Class}">
    <p> 
      Location: <strong>${pic.name}</strong> <br>
      Weather(°C): In Summer, ${pic.summer}, In Winter, ${pic.winter} <br>
      What is so special here?
    </p>
    <ul><li>${pic.things.join('</li><li>')}</li><ul>
  </div>
  </a>
</figure>`;
});

const div = document.querySelector('.gallery');
div.innerHTML = gallery;