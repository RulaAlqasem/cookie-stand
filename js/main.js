
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


//stand1.getCookies();
//stand1.render();



//console.log(stand1);
//console.log(stand1.getCookies());

/*


const stand= {
  location: 'Seattle',
  max:65,
  min: 23,
  Avg: 6.3 ,
  minCustBerH: [],
  maxCustBerH: [],
  cookiesPerH: [],
  total:0,
  getMinCust :function(){
    for (let i=0; i < h.length; i++) {
      this.minCustBerH.push( Math.floor(getRandom (this.min , 44)));
    }},
  getMaxCust :function(){
    for (let i=0; i < h.length; i++) {
      this.maxCustBerH.push( Math.floor(getRandom (44 , this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor(getRandom (this.minCustBerH[i] , this.maxCustBerH[i])*6.3));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h2');
    articleEl.appendChild(h1El);
    h1El.textContent =' Pat\'s Salmon Cookies: Sales Data';
    const h4El = document.createElement('h4');
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
console.log(stand1.getMinCust());
console.log(stand1.getMaxCust());
console.log(stand1.maxCustBerH);
console.log(stand1.minCustBerH);
console.log(stand1.getCookies());
console.log(stand1.cookiesPerH);

stand1.render();
const stand2= {
  location: 'Tokyo',
  max:24,
  min: 3,
  Avg: 1.2 ,
  total:0,

  getCookies :function(){
    return Math.floor(getRandom(this.min , this.max)*this.Avg);
  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h4');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.getCookies()} cookies`;
      this.total+=this.getCookies();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand2.getCookies();
stand2.render();


const stand1= {
  location: 'Seattle',
  max:65,
  min: 23,
  Avg: 6.3 ,
  minCustBerH: [],
  maxCustBerH: [],
  cookiesPerH: [],
  total:0,
  getMinCust :function(){
    for (let i=0; i < h.length; i++) {
      this.minCustBerH.push( Math.floor(getRandom (this.min , 44)));
    }},
  getMaxCust :function(){
    for (let i=0; i < h.length; i++) {
      this.maxCustBerH.push( Math.floor(getRandom (44 , this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor(getRandom (this.minCustBerH[i] , this.maxCustBerH[i])*6.3));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h2');
    articleEl.appendChild(h1El);
    h1El.textContent =' Pat\'s Salmon Cookies: Sales Data';
    const h4El = document.createElement('h4');
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
console.log(stand1.getMinCust());
console.log(stand1.getMaxCust());
console.log(stand1.maxCustBerH);
console.log(stand1.minCustBerH);
console.log(stand1.getCookies());
console.log(stand1.cookiesPerH);

stand1.render();
const stand1= {
  location: 'Seattle',
  max:65,
  min: 23,
  Avg: 6.3 ,
  minCustBerH: [],
  maxCustBerH: [],
  cookiesPerH: [],
  total:0,
  getMinCust :function(){
    for (let i=0; i < h.length; i++) {
      this.minCustBerH.push( Math.floor(getRandom (this.min , 44)));
    }},
  getMaxCust :function(){
    for (let i=0; i < h.length; i++) {
      this.maxCustBerH.push( Math.floor(getRandom (44 , this.max)));

    }},
  getCookies : function() {
    for (let i=0; i < h.length; i++) {

      this.cookiesPerH.push( Math.floor(getRandom (this.minCustBerH[i] , this.maxCustBerH[i])*6.3));
    }

  },


  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h2');
    articleEl.appendChild(h1El);
    h1El.textContent =' Pat\'s Salmon Cookies: Sales Data';
    const h4El = document.createElement('h4');
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
console.log(stand1.getMinCust());
console.log(stand1.getMaxCust());
console.log(stand1.maxCustBerH);
console.log(stand1.minCustBerH);
console.log(stand1.getCookies());
console.log(stand1.cookiesPerH);

stand1.render();

console.log(stand2);
console.log(stand2.getCookies());







const stand3= {
  location: 'Dubai',
  max:38,
  min:1,
  Avg: 3.7 ,
  total:0,
  getCookies :function(){
    return Math.floor(getRandom(this.min , this.max)*this.Avg);
  },

  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h4');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.getCookies()} cookies`;
      this.total+=this.getCookies();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand3.getCookies();
stand3.render();



console.log(stand3);
console.log(stand3.getCookies());





const stand4= {
  location: 'Paris',
  max:38,
  min:20,
  Avg: 2.3 ,
  total:0,
  getCookies :function(){
    return Math.floor(getRandom(this.min , this.max)*this.Avg);
  },

  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h4');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.getCookies()} cookies`;
      this.total+=this.getCookies();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand4.getCookies();
stand4.render();



console.log(stand4);
console.log(stand4.getCookies());






const stand5= {
  location: 'Lima',
  max:16,
  min:2,
  Avg: 4.6 ,
  total:0,
  getCookies :function(){
    return Math.floor(getRandom(this.min , this.max)*this.Avg);
  },

  render: function(){
    const container = document.getElementById('store');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h4El = document.createElement('h4');
    articleEl.appendChild(h4El);
    h4El.textContent = this.location;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< h.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${h[i]} ${this.getCookies()} cookies`;
      this.total+=this.getCookies();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand5.getCookies();
stand5.render();



console.log(stand5);
console.log(stand5.getCookies());
*/

