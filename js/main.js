
'use strict';

let h = ['6am :','7am :','8am :','9am :','10am :','11am :','12pm :','1pm :','2pm :','3pm :','4pm :','5pm :','6pm :','7pm :'];


function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(h);



const stand1= {
  location: 'Seattle',
  max:65,
  min: 23,
  Avg: 6.3 ,
  total:0,
  getcock :function(){
    return Math.floor(getRandom (this.min , this.max)*this.Avg);
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
      liEl.textContent = `${h[i]} ${this.getcock()} cookies `;
      this.total+=this.getcock();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand1.getcock();
stand1.render();



console.log(stand1);
console.log(stand1.getcock());


const stand2= {
  location: 'Tokyo',
  max:24,
  min: 3,
  Avg: 1.2 ,
  total:0,

  getcock :function(){
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
      liEl.textContent = `${h[i]} ${this.getcock()} cookies`;
      this.total+=this.getcock();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand2.getcock();
stand2.render();



console.log(stand2);
console.log(stand2.getcock());







const stand3= {
  location: 'Dubai',
  max:38,
  min:11,
  Avg: 3.7 ,
  total:0,
  getcock :function(){
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
      liEl.textContent = `${h[i]} ${this.getcock()} cookies`;
      this.total+=this.getcock();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand3.getcock();
stand3.render();



console.log(stand3);
console.log(stand3.getcock());





const stand4= {
  location: 'Paris',
  max:38,
  min:20,
  Avg: 2.3 ,
  total:0,
  getcock :function(){
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
      liEl.textContent = `${h[i]} ${this.getcock()} cookies`;
      this.total+=this.getcock();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand4.getcock();
stand4.render();



console.log(stand4);
console.log(stand4.getcock());






const stand5= {
  location: 'Lima',
  max:16,
  min:2,
  Avg: 4.6 ,
  total:0,
  getcock :function(){
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
      liEl.textContent = `${h[i]} ${this.getcock()} cookies`;
      this.total+=this.getcock();
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `total :${this.total} cookies`;
  }
};
stand5.getcock();
stand5.render();



console.log(stand5);
console.log(stand5.getcock());


