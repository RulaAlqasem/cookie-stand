
'use strict';

let h = ['6am :','7am :','8am :','9am :','10am :','1am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :'];


function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(h);



const stand1= {
  location: 'Seattle',
  max:65,
  min: 23,
  avg: 6.3 ,
  custBerH: [],
  cookiesPerH: [],
  total:0,
  getCust :function(){
    for (let i=0; i < h.length; i++) {
      this.custBerH.push( Math.floor(getRandom (this.min, this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.cookiesPerH[i]} cookies `;
      this.total+=this.cookiesPerH[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};

console.log(stand1.getCust());
console.log(stand1.custBerH);
console.log(stand1.getCookies());
console.log(stand1.cookiesPerH);

stand1.render();


const stand2= {
  location: 'Tokyo',
  max:24,
  min:3,
  avg: 1.2,
  custBerH: [],
  cookiesPerH: [],
  total:0,
  getCust :function(){
    for (let i=0; i < h.length; i++) {
      this.custBerH.push( Math.floor(getRandom (this.min, this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.cookiesPerH[i]} cookies `;
      this.total+=this.cookiesPerH[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};

console.log(stand2.getCust());
console.log(stand2.custBerH);
console.log(stand2.getCookies());
console.log(stand2.cookiesPerH);

stand2.render();

const stand3= {
  location: 'Dubai',
  max:38,
  min:11,
  avg: 3.7,
  custBerH: [],
  cookiesPerH: [],
  total:0,
  getCust :function(){
    for (let i=0; i < h.length; i++) {
      this.custBerH.push( Math.floor(getRandom (this.min, this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.cookiesPerH[i]} cookies `;
      this.total+=this.cookiesPerH[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};

console.log(stand3.getCust());
console.log(stand3.custBerH);
console.log(stand3.getCookies());
console.log(stand3.cookiesPerH);

stand3.render();


const stand4= {
  location: 'Paris',
  max:38,
  min:20,
  avg: 2.3,
  custBerH: [],
  cookiesPerH: [],
  total:0,
  getCust :function(){
    for (let i=0; i < h.length; i++) {
      this.custBerH.push( Math.floor(getRandom (this.min, this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.cookiesPerH[i]} cookies `;
      this.total+=this.cookiesPerH[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};

console.log(stand4.getCust());
console.log(stand4.custBerH);
console.log(stand4.getCookies());
console.log(stand4.cookiesPerH);

stand4.render();




const stand5= {
  location: 'Lima',
  max:16,
  min:2,
  avg: 4.6,
  custBerH: [],
  cookiesPerH: [],
  total:0,
  getCust :function(){
    for (let i=0; i < h.length; i++) {
      this.custBerH.push( Math.floor(getRandom (this.min, this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor( this.custBerH[i]*this.avg));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.cookiesPerH[i]} cookies `;
      this.total+=this.cookiesPerH[i];
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};

console.log(stand5.getCust());
console.log(stand5.custBerH);
console.log(stand5.getCookies());
console.log(stand5.cookiesPerH);

stand5.render();

