const startingLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

if (startingLocation === '/') renderHome();
if (startingLocation === '/about') renderAbout();
if (startingLocation === '/services') renderServices();

for (let link of navLinks) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const url = this.getAttribute('href');

    history.pushState({ path: url }, null, url);

    if (url == '/') renderHome();
    if (url == '/about') renderAbout();
    if (url == '/services') renderServices();
  });
}

window.onpopstate = function (e) {
  if (e.state.path === '/') renderHome();
  if (e.state.path === '/about') renderAbout();
  if (e.state.path === '/services') renderServices();
};

function renderHome() {
  document.getElementById('content').innerHTML = `
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="text-center px-3 animate__animated animate__fadeInUp">
      <h1 class="text-white text-uppercase">A Moment Of Joy</h1>
      <p class="lead text-white">We make all kinds of cakes and other bakery products!</p>
      <button class="btn btn-outline-light font-weight-bold">Order Now</button>
    </div>
  </div>
  `;
}

function renderAbout() {
  // document.body.id = 'about';
  document.getElementById('content').innerHTML = `
  <div class="about" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <img class="about_img mr-3 mb-3 animate__animated animate__flipInY" src="/about.jpg" alt=""/>
        </div>

        <div class="col-12 col-md-6 col-lg-8">
          <h2 class="text-capitalize mb-2">About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto blanditiis qui est aspernatur rem rerum laudantium nulla. Nostrum aperiam qui esse explicabo iure non cumque? Voluptates aliquam doloribus deserunt eius.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto blanditiis qui est aspernatur rem rerum laudantium nulla. Nostrum aperiam qui esse explicabo iure non cumque? Voluptates aliquam doloribus deserunt eius. consectetur adipisicing elit. Iusto blanditiis qui est aspernatur rem rerum laudantium nulla. Nostrum aperiam qui esse explicabo iure non cumque? Voluptates aliquam doloribus deserunt eius.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto blanditiis qui est aspernatur rem rerum laudantium nulla. Nostrum aperiam qui esse explicabo iure non cumque? Voluptates aliquam doloribus deserunt eius. consectetur adipisicing elit. Iusto blanditiis qui est aspernatur rem rerum laudantium nulla. Nostrum aperiam qui esse explicabo iure non cumque? Voluptates aliquam doloribus deserunt eius.</p>
          <button class="btn btn-success mt-3">Read more</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function renderServices() {
  document.getElementById('content').innerHTML = `
  <div class="services" id="services">
    <div class="container">
      <header class="text-center services_header">
        <h2 class="text-primary">Our Services</h2>
        <p class="text-secondary">We provide different kind of services</p>
      </header>

      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card animate__animated animate__pulse">
            <img class="card-img-top" src="/card-1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card animate__animated animate__pulse">
            <img class="card-img-top" src="/card-2.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card animate__animated animate__pulse">
            <img class="card-img-top" src="/card-3.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
