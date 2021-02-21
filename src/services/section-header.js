export const sectionHeader = `
    <div class="container">

        <div class="navbar">
            <div class="icon-bar" onclick="Show()">
                <i></i>
                <i></i>
                <i></i>
                
            </div>

            <ul id="nav-lists">
        
                <li class="close"><span onclick="Hide()">×</span></li>
                <li ><div class="overlay about-mob"><a  href="#home" onclick="Hide()">Accueil</a></div></li>
                <li ><div class="overlay about-mob"><a  href="#about" onclick="Hide()">à propos</a></div></li>
                <li ><div class="overlay contact-mob"><a  href="#contact" onclick="Hide()">Contact </a></div></li>
                <li ><div class="overlay work-mob"><a  href="#work" onclick="Hide()">Portfolio</a></div></li>

            </ul>
        </div>

    </div>
    <script >
        const navList = document.getElementById('nav-lists');
    function Show() {
   
        navList.classList.add('_Menus-show');
   
    }
    function Hide() {  
        navList.classList.remove('_Menus-show');
    }
</script>
    `;
