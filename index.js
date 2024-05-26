    // Define your courses data
    const courses = [
        { title: "Course 1", description: "Cyber Crime", image: "images/crime.jpeg", link: "/courses/cours1choix.html" },
        { title: "Course 2", description: "Networking Basics", image: "images/network.jpg", link: "/courses/cours2choix.html" },
        { title: "Course 3", description: "Dark Web", image: "images/Dark Web.jpg", link: "courses/cours3choix.html" },
        { title: "Course 4", description: "Firewalls", image: "images/firewall.png", link: "#" },
        { title: "Course 5", description: "Money Making Threats", image: "images/Money Making Threats.jpg", link: "#" },
        { title: "Course 6", description: "Network Layer", image: "images/Network Layer.webp", link: "#" },
        { title: "Course 7", description: "Network Transport", image: "images/Network Transport.png", link: "#" },
        { title: "Course 8", description: "Web Applications", image: "images/Web Applications.jpg", link: "#" },
        { title: "Course 9", description: "Network Mapping & Port Scanning", image: "images/Network Mapping & Port Scanning.jpg", link: "#" },
        { title: "Course 10", description: "Network Attacks", image: "images/Network Attacks.jpg", link: "#" },
        { title: "Course 11", description: "Web Application Attacks", image: "images/Web Application Attacks.jpg", link: "#" },
        { title: "Course 12", description: "Wi-Fi Attacks", image: "images/Wi-Fi Attacks.webp", link: "#" },
        { title: "Course 13", description: "Passwords", image: "images/Passwords  .jpg", link: "#" },
        { title: "Course 14", description: "Penetration Testing & Social Engineering", image: "images/Penetration Testing & Social Engineering.webp", link: "#" },
        { title: "Course 15", description: "Security Operations", image: "images/Security Operations.jpg", link: "#" }
        // Add more courses as needed
    ];

    // Function to populate the carousel with course slides
    function populateCarousel() {
        const carouselInner = document.querySelector('#course-carousel .carousel-inner');
        carouselInner.innerHTML = ''; // Clear existing slides

        courses.forEach((course, index) => {
            const isActive = index === 0 ? 'active' : '';
            const slide = `
                <div class="carousel-item ${isActive}">
                    <img style="max-height:500px " src="${course.image}" class="d-block w-100 " alt="${course.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${course.title}</h5>
                        <p>${course.description}</p>
                        <a href="${course.link}" class="btn btn-primary"> Explore</a>
                    </div>
                </div>
            `;
            carouselInner.innerHTML += slide;
        });
    }

    // Populate the carousel when the DOM content is loaded
    document.addEventListener('DOMContentLoaded', function() {
        populateCarousel();
    });

    


    document.addEventListener('DOMContentLoaded', () => {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
    
        // Check if dark mode is enabled in localStorage
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
        }
    
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save the user's preference in localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
            console.log('Dark mode toggled. Current mode:', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    
        // Highlight the active link
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    });




    function searchCourses(event) {
        event.preventDefault();
        const searchQuery = document.getElementById('search-input').value.toLowerCase().replace(/\s/g, ''); // Remove spaces from the search query
        const courses = document.querySelectorAll('.course-item');
    
        // Remove existing highlights
        courses.forEach(course => {
            course.style.border = "";
        });
    
        let found = false;
        courses.forEach(course => {
            const courseName = course.getAttribute('data-course').toLowerCase().replace(/\s/g, ''); // Remove spaces from the course name
            if (courseName.startsWith(searchQuery)) { // Check if the course name starts with the search query
                course.scrollIntoView({ behavior: 'smooth', block: 'center' });
                course.style.border = "5px solid #ef3830"; // Highlight the course
                setTimeout(() => {
                    course.style.border = ""; // Remove highlight after 15 seconds
                }, 15000);
                found = true;
            }
        });
    
        if (!found) {
            alert('Course not found!');
        }
    }
    