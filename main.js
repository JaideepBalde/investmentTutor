document.addEventListener("DOMContentLoaded", function () {
    // Load Courses Data
    fetch("courses.json")
        .then(response => response.json())
        .then(courses => {
            const courseContainer = document.getElementById("course-list");
            courseContainer.innerHTML = courses.map(course => `
                <div class="course-item">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <p><strong>Duration:</strong> ${course.duration}</p>
                    <p><strong>Price:</strong> ${course.price}</p>
                </div>
            `).join("");
        });
    
    // Load Blogs Data
    fetch("blogs.json")
        .then(response => response.json())
        .then(blogs => {
            const blogContainer = document.getElementById("blog-list");
            blogContainer.innerHTML = blogs.map(blog => `
                <div class="blog-item">
                    <h3>${blog.title}</h3>
                    <p><strong>By:</strong> ${blog.author} | <strong>Date:</strong> ${blog.date}</p>
                    <p>${blog.summary}</p>
                </div>
            `).join("");
        });
    
    // Contact Form Submission
    document.getElementById("contact-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { title: "Stock Market Fundamentals", description: "Master the basics of stock trading and investment strategies." },
        { title: "Technical Analysis", description: "Learn chart patterns, indicators, and price movements for trading." },
        { title: "Options Trading", description: "Advanced strategies for options trading and risk management." },
        { title: "Cryptocurrency Investment", description: "Understand blockchain and profitable crypto trading techniques." },
        { title: "Real Estate Investment", description: "Invest in real estate for long-term financial growth." }
    ];

    const carousel = document.querySelector(".courses-carousel");
    carousel.innerHTML = ""; // Clear loading text

    courses.forEach((course, index) => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-card");
        courseDiv.style = `
            display: inline-block; 
            width: 300px; 
            padding: 20px; 
            margin: 0 10px; 
            background: white; 
            border-radius: 8px; 
            text-align: left; 
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
            transition: transform 0.3s ease;
        `;
        courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="courses.html" style="color: #0056b3; font-weight: bold; text-decoration: none;">Learn More →</a>
        `;
        carousel.appendChild(courseDiv);
    });

    let scrollAmount = 0;
    const scrollStep = 320; // Adjust based on course card width
    const maxScroll = (courses.length - 1) * scrollStep;

    document.querySelector(".prev").addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    });

    document.querySelector(".next").addEventListener("click", function () {
        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    });

    // Auto-scroll feature (Optional)
    setInterval(() => {
        scrollAmount = (scrollAmount >= maxScroll) ? 0 : scrollAmount + scrollStep;
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 5000);
});
