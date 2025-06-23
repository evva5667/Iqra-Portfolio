function showPage(pageId) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked nav item
    const clickedNav = event.target.closest('.nav-item');
    if (clickedNav) {
        clickedNav.classList.add('active');
    }
}

function showProjectDetail(projectId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the appropriate project detail page
    let targetPageId;
    switch (projectId) {
        case 'nexus':
            targetPageId = 'project-detail-page';
            break;
        case 'chores':
            targetPageId = 'chores-detail-page';
            break;
        case 'lovefreq':
            targetPageId = 'lovefreq-detail-page';
            break;
        case 'afternoonnap':
            targetPageId = 'afternoonnap-detail-page';
            break;
        default:
            targetPageId = 'projects-page';
    }
    
    const projectDetailPage = document.getElementById(targetPageId);
    if (projectDetailPage) {
        projectDetailPage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Hide bottom navigation when viewing project details
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        bottomNav.style.display = 'none';
    }
}

function goBackToProjects() {
    // Hide all project detail pages
    const projectDetailPages = document.querySelectorAll('.project-detail-page');
    projectDetailPages.forEach(page => page.classList.remove('active'));
    
    // Show projects page
    const projectsPage = document.getElementById('projects-page');
    if (projectsPage) {
        projectsPage.classList.add('active');
    }
    
    // Show bottom navigation again
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        bottomNav.style.display = 'flex';
    }
    
    // Update nav state to projects
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    const projectsNavItem = document.querySelector('.nav-item[onclick="showPage(\'projects\')"]');
    if (projectsNavItem) {
        projectsNavItem.classList.add('active');
    }
}

// Ticker functionality
function updateTickerHeadlines(headlines) {
    const tickerText = document.getElementById('headlines');
    if (tickerText && headlines) {
        const separator = '<span class="headline-separator">●</span>';
        tickerText.innerHTML = headlines.join(separator);
    }
}

// Optional: Function to add new headlines dynamically
function addTickerHeadline(headline) {
    const tickerText = document.getElementById('headlines');
    if (tickerText) {
        const separator = '<span class="headline-separator">●</span>';
        tickerText.innerHTML += separator + headline;
    }
}

// Optional: Pause/Resume ticker on hover
document.addEventListener('DOMContentLoaded', function() {
    const tickerText = document.getElementById('headlines');
    if (tickerText) {
        tickerText.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        tickerText.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    const profileCardSide = document.querySelector('.profile-card-side');
    if (profileCardSide) {
        let rainInterval;
        const rainTexts = ['HIRE ME PLSS', 'HIRE ME', 'TRUST ME A GOOD AT IT'];
        const rainColors = ['#f97300', '#2c2c34', '#d3d3d3', '#b1f200', '#f6ac00'];

        profileCardSide.addEventListener('mouseenter', () => {
            rainInterval = setInterval(() => {
                const textEl = document.createElement('div');
                textEl.classList.add('raining-text');
                
                const randomText = rainTexts[Math.floor(Math.random() * rainTexts.length)];
                textEl.innerText = randomText.toUpperCase();
                
                const randomColor = rainColors[Math.floor(Math.random() * rainColors.length)];
                textEl.style.backgroundColor = randomColor;

                if (randomColor === '#2c2c34') {
                    textEl.style.color = 'white';
                }

                textEl.style.left = Math.random() * window.innerWidth + 'px';
                const duration = Math.random() * 2 + 3;
                textEl.style.animationDuration = `${duration}s`;
                textEl.style.fontSize = `${Math.random() * 0.5 + 0.8}rem`;
                textEl.style.opacity = Math.random() * 0.5 + 0.5;

                document.body.appendChild(textEl);
                
                setTimeout(() => {
                    textEl.remove();
                }, duration * 1000);
            }, 150);
        });

        profileCardSide.addEventListener('mouseleave', () => {
            clearInterval(rainInterval);
        });
    }
});

function showHobby(hobbyId) {
    // Hide all hobby content
    const hobbyContents = document.querySelectorAll('.hobby-content');
    hobbyContents.forEach(content => content.classList.remove('active'));

    // Show selected hobby content
    const selectedHobby = document.getElementById(hobbyId + '-content');
    if (selectedHobby) {
        selectedHobby.classList.add('active');
    }

    // Update toggle button active state
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    const clickedBtn = event.target;
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
}