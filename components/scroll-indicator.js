class ScrollIndicator extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: transparent;
          z-index: 9999;
        }
        
        .indicator-bar {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9, #22d3ee);
          width: 0%;
          transition: width 0.1s ease;
        }
      </style>
      
      <div class="indicator-bar"></div>
    `;

    const indicator = this.shadowRoot.querySelector('.indicator-bar');
    
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      indicator.style.width = scrolled + '%';
    });
  }
}

customElements.define('scroll-indicator', ScrollIndicator);
