class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #0c4a6e;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .social-link {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        
        .social-link:hover {
          background-color: #0ea5e9;
          transform: translateY(-3px);
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .footer-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-link:hover {
          color: #7dd3fc;
        }
      </style>
      
      <div class="footer-content">
        <div class="social-links">
          <a href="https://github.com/AKash-101111" target="_blank" class="social-link">
            <i data-feather="github"></i>
          </a>
          <a href="https://linkedin.com/in/akash-n-cse4b12b532a" target="_blank" class="social-link">
            <i data-feather="linkedin"></i>
          </a>
          <a href="mailto:narayanan.akash10@gmail.com" class="social-link">
            <i data-feather="mail"></i>
          </a>
          <a href="tel:+919342521826" class="social-link">
            <i data-feather="phone"></i>
          </a>
        </div>
        
        <div class="footer-links">
          <a href="#about" class="footer-link">About</a>
          <a href="#projects" class="footer-link">Projects</a>
          <a href="#experience" class="footer-link">Experience</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
        
        <p class="copyright">© ${new Date().getFullYear()} Akash N. All rights reserved.</p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
