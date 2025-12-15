class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s;
          color: var(--text-color, #4b5563);
        }
        
        .theme-toggle:hover {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
        }
        
        .theme-toggle:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.3);
        }
      </style>
      
      <button class="theme-toggle" aria-label="Toggle theme">
        <i data-feather="moon"></i>
      </button>
    `;
    
    const toggleBtn = this.shadowRoot.querySelector('.theme-toggle');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      toggleBtn.innerHTML = '<i data-feather="sun"></i>';
    }
    
    toggleBtn.addEventListener('click', () => {
      const html = document.documentElement;
      html.classList.toggle('dark');
      
      if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i data-feather="sun"></i>';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i data-feather="moon"></i>';
      }
      
      feather.replace();
    });
    
    feather.replace();
  }
}

customElements.define('theme-toggle', ThemeToggle);
