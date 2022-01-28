class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .navbar{
            background-color: rgb(20, 33, 61);
            padding-top: 15px;
            padding-bottom: 15px;
            -webkit-box-shadow: 0 5px 4px #f0f0f0;
            box-shadow: 0 5px 4px #f0f0f0;
        }
        .logo{
            width: 20%;
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
            font-size: 23px;
            font-family: "Gotham", sans-serif;
            src: url('media/Gotham Bold/Gotham Bold.otf');
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .nav-item .nav-link{
            color: white;
        }
        .nav-link:hover{
          color: #FCA311;
        }
        .dropdown-toggle::after {
          color: #FCA311;    
      }
      .dropdown-item:hover {
        color: #1e2125;
        background-color:  #FCA311;
    }
    .hidden_home{
      display: none;
    }
        
        @media only screen and (max-width: 992px) {
          .navv {
            display: none;
          }
          .hidden_home{
            display: block;
          }
          .navbar-expand .navbar-nav {
            flex-direction: row;
        }
        .nav-item{
          font-size: 15px;
        }
        .dropdown{
          margin-right: 20px;
          margin-left: 40px;
        }
        }
        
      
        </style>

        <nav class="navbar sticky-top navbar-expand">
  <div class="container-fluid">
  <div class="nav-item navv container-fluid">
  <a class="nav-link " href="index.html">
   HOME
  </a>
  
</div>

    <div class=" navbar-collapse">
      <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link hidden_home" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Project
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="project.html">About Project</a></li>
        <li><a class="dropdown-item" href="graphs.html">Project</a></li>
        <li><a class="dropdown-item" href="dataset.html">Dataset</a></li>
      </ul>
    </li>
        <li class="nav-item">
          <a class="nav-link" href="team.html">Team</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
      `;
  }
}

customElements.define("header-component", Header);
