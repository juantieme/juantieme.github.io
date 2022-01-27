class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .navbar{
            background-color: white;
            padding-top: 15px;
            padding-bottom: 15px;
            -webkit-box-shadow: 0 5px 4px #f0f0f0;
            box-shadow: 0 5px 4px #f0f0f0;
        }
        .logo{
            width: 15%;
            height: 15%;
            margin-left: 100px;
        }
        .navbar-collapse{
           margin-right: 100px; 
        }
        .dropdown{
            margin-right: 100px;
            
        }
        .nav-item{
            font-size: 20px;
        }
        .nav-item .nav-link{
            color: black;
        }
        </style>

        <nav class="navbar sticky-top navbar-expand-lg">
  <div class="container-fluid">
  <div class="container-fluid">
  <a class="navbar-brand" href="index.html">
    <img src="media/ESC_generic_logo/PNG/Eurovision_generic_black.png" alt=""  class="logo d-inline-block align-text-top">
  </a>
</div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        About
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">Eurovision</a></li>
        <li><a class="dropdown-item" href="#">Project</a></li>
      </ul>
    </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </nav>
      `;
  }
}

customElements.define("header-component", Header);
