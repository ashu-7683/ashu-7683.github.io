// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
// ...existing code...

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ...existing code...

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Name animation with cursor tracking
const nameElement = document.querySelector('.name-animation');
document.addEventListener('mousemove', (e) => {
    if (nameElement) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Create a subtle parallax effect
        nameElement.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
        // Create a glow effect that follows the cursor
        nameElement.style.textShadow = `
            0 0 10px rgba(102, 126, 234, 0.8),
            ${(x - 0.5) * 20}px ${(y - 0.5) * 20}px 30px rgba(102, 126, 234, 0.4)
        `;
    }
});


// Reset name position when mouse leaves window
document.addEventListener('mouseleave', () => {
    if (nameElement) {
        nameElement.style.transform = 'translate(0, 0)';
        nameElement.style.textShadow = '0 0 10px rgba(102, 126, 234, 0.8)';
    }
});

// Cube Rotation Control
const cube = document.getElementById('cube');
const cubeBtns = document.querySelectorAll('.cube-btn');

cubeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const face = btn.getAttribute('data-face');
        
        // Remove active class from all buttons
        cubeBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Rotate cube to show selected face
        switch(face) {
            case 'front':
                cube.style.transform = 'rotateX(-15deg) rotateY(0deg)';
                break;
            case 'back':
                cube.style.transform = 'rotateX(-15deg) rotateY(180deg)';
                break;
            case 'right':
                cube.style.transform = 'rotateX(-15deg) rotateY(-90deg)';
                break;
            case 'left':
                cube.style.transform = 'rotateX(-15deg) rotateY(90deg)';
                break;
            case 'top':
                cube.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 'bottom':
                cube.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
        }
    });
});
// Animate skill bars when they come into view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
};

// Use Intersection Observer to trigger skill bar animation
const skillSection = document.querySelector('.about-skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.5 });

if (skillSection) {
    observer.observe(skillSection);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Typing effect for hero title
const typingEffect = () => {
    const title = document.querySelector('.hero-title');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
};

// Initialize typing effect when page loads
window.addEventListener('load', typingEffect);

// Add floating animation to tech icons
const techIcons = document.querySelectorAll('.tech-icon');
techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'float 1s ease-in-out';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.animation = 'none';
    });
});

// Tech Stack Animation
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.tech-icon');
        icon.style.transform = 'rotate(10deg) scale(1.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.tech-icon');
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Add click effect to tech items
techItems.forEach(item => {
    item.addEventListener('click', () => {
        const techName = item.querySelector('.tech-name').textContent;
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 150);
        
        console.log(`Clicked on ${techName}`);
    });
});
// Add this to your existing script.js file

// Resume Download Functionality
const resumeBtn = document.querySelector('.resume-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
        // Optional: Add tracking or analytics here
        console.log('Resume download initiated');
        
        // Optional: Show download confirmation
        // You can uncomment the line below if you want a confirmation message
        // alert('Your resume download will start shortly...');
        
        // The download will happen automatically due to the download attribute in HTML
        // But we can add some visual feedback
        resumeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
        resumeBtn.style.opacity = '0.8';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            resumeBtn.innerHTML = '<i class="fas fa-download"></i> Resume';
            resumeBtn.style.opacity = '1';
        }, 2000);
    });
}
// Language Progress Bar Animation
const animateLanguageBars = () => {
    const languageProgressBars = document.querySelectorAll('.level-progress');
    
    languageProgressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
};

// Use Intersection Observer to trigger language bar animation
const languageSection = document.querySelector('.languages');
const languageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateLanguageBars();
        }
    });
}, { threshold: 0.3 });

if (languageSection) {
    languageObserver.observe(languageSection);
}

// Add hover effect to language cards
const languageCards = document.querySelectorAll('.language-card');
languageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });
});
// Education & Certificates Animation
const animateEducationCards = () => {
    const educationCards = document.querySelectorAll('.education-card');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    // Add staggered animation delay
    educationCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    certificateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
};

// Initialize animations when page loads
window.addEventListener('load', animateEducationCards);

// Add hover effects for education cards
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });
});

// Certificate image zoom effect
const certificateImages = document.querySelectorAll('.certificate-image');
certificateImages.forEach(image => {
    const img = image.querySelector('img');
    const originalSrc = img.src;
    
    // Preload hover effect
    const hoverImage = new Image();
    hoverImage.src = originalSrc;
    
    image.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
    });
    
    image.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// EmailJS Integration
(function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your EmailJS public key
    
    // Contact Form Functionality
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Form submission handler
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields before submission
        let isValid = true;
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showFormMessage('Please fix the errors in the form before submitting.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Send email using EmailJS
            const response = await emailjs.sendForm(
                'service_bwxd4qv', // Your service ID
                'template_cb1220l', // Your template ID - replace with actual template ID
                contactForm
            );
            
            // Show success message
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            
            console.log('Email sent successfully:', response);
            
        } catch (error) {
            // Show error message
            console.error('Email sending failed:', error);
            showFormMessage('Sorry, there was an error sending your message. Please try again or contact me directly at ashutoshkhilar5@gmail.com', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Show form message
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide success message after 5 seconds (keep error messages visible)
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Form validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
        
        // Real-time validation for email field
        if (input.type === 'email') {
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    validateField(input);
                }
            });
        }
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous errors
        clearFieldError(field);
        
        // Required field validation
        if (field.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Name validation (minimum 2 characters)
        if (field.name === 'from_name' && value && value.length < 2) {
            isValid = false;
            errorMessage = 'Name should be at least 2 characters long';
        }
        
        // Message validation (minimum 10 characters)
        if (field.name === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Message should be at least 10 characters long';
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
            return false;
        }
        
        return true;
    }
    
    function showFieldError(field, message) {
        // Add error class to form group
        field.parentNode.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
    
    function clearFieldError(field) {
        // Remove error class from form group
        field.parentNode.classList.remove('error');
        
        // Remove error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Add floating animation to contact icons
    const contactIcons = document.querySelectorAll('.contact-icon');
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add click animation to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add a small bounce effect
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });
})();