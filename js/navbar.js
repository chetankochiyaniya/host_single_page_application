const navbar = `
<!--navbar-->
<nav class="navbar navbar-dark navbar-expand-lg  bg-dark fixed-top" id="nav_bars">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><strong>Code Reactors</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Code Reactors</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" id="nav">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link nav_m active" href="#home" onclick="onNavigate('#home')"><strong>Home</strong> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav_m active" href="#services" onclick="onNavigate('#services')"><strong>Services</strong> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav_m active" href="#products" onclick="onNavigate('#products')"><strong>Products</strong> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav_m active" href="#about" onclick="onNavigate('#about')"><strong>About Us</strong> </a>
                    </li>
                </ul>
            </div>
        </div>
        <button class="btn_color" onclick="onNavigate('#info')">Get Started</button>
    </div>
</nav>
`