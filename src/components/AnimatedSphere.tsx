

import { useEffect, useRef } from 'react';

// Declare anime as global
declare global {
  interface Window {
    anime: any;
  }
}

export default function AnimatedSphere() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<any[]>([]);
  const visibleRef = useRef(true);

  useEffect(() => {
    // Pause animations when scrolled out of view
    const el = sphereRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e.isIntersecting;
        animationsRef.current.forEach((anim: any) => {
          try {
            if (e.isIntersecting) anim.play();
            else anim.pause();
          } catch (_) {}
        });
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const checkAnime = setInterval(() => {
      if (typeof window !== 'undefined' && window.anime) {
        clearInterval(checkAnime);
        initAnimation();
      }
    }, 100);

    function initAnimation() {
      const anime = window.anime;
      
      try {
        const sphereEl = sphereRef.current;
        if (!sphereEl) return;

        const spherePathEls = sphereEl.querySelectorAll('.sphere path');
        const pathLength = spherePathEls.length;
        const animations: any[] = [];

        // Breathing animation
        const breathAnimation = anime({
          begin: function() {
            for (let i = 0; i < pathLength; i++) {
              animations.push(anime({
                targets: spherePathEls[i],
                stroke: { value: ['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)'], duration: 500 },
                translateX: [2, -4],
                translateY: [2, -4],
                easing: 'easeOutQuad',
                autoplay: false
              }));
            }
          },
          update: function(ins: any) {
            animations.forEach(function(animation, i) {
              const percent = (1 - Math.sin((i * 0.35) + (0.0022 * ins.currentTime))) / 2;
              animation.seek(animation.duration * percent);
            });
          },
          duration: Infinity,
          autoplay: false
        });

        // Intro animation
        const introAnimation = anime.timeline({
          autoplay: false
        }).add({
          targets: spherePathEls,
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 3900,
            easing: 'easeInOutCirc',
            delay: anime.stagger(190, { direction: 'reverse' })
          },
          duration: 2000,
          delay: anime.stagger(60, { direction: 'reverse' }),
          easing: 'linear'
        }, 0);

        // Gradient animation
        const shadowAnimation = anime({
          targets: '#sphereGradient',
          x1: '25%',
          x2: '25%',
          y1: '0%',
          y2: '75%',
          duration: 30000,
          easing: 'easeOutQuint',
          autoplay: false
        });

        // Start animations
        introAnimation.play();
        breathAnimation.play();
        shadowAnimation.play();

        // Store for cleanup
        animationsRef.current = [breathAnimation, introAnimation, shadowAnimation, ...animations];

      } catch (error) {
        console.error('Animation error:', error);
      }
    }

    return () => {
      clearInterval(checkAnime);
      // Pause all anime.js animations to prevent DOM manipulation after unmount
      animationsRef.current.forEach((anim: any) => {
        try { anim.pause(); } catch (_) {}
      });
      animationsRef.current = [];
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
      <div 
        ref={sphereRef}
        className="sphere-animation"
        style={{
          position: 'relative',
          width: '82vw',
          height: '82vw',
          maxWidth: '820px',
          maxHeight: '820px',
          aspectRatio: '1/1',
          padding: '1rem'
        }}
      >
        <style>{`
          .sphere-animation {
            aspect-ratio: 1/1 !important;
          }
          @media (min-width: 480px) {
            .sphere-animation {
              max-width: 440px !important;
              max-height: 440px !important;
            }
          }
          @media (min-width: 640px) {
            .sphere-animation {
              max-width: 520px !important;
              max-height: 520px !important;
            }
          }
          @media (min-width: 768px) {
            .sphere-animation {
              max-width: 600px !important;
              max-height: 600px !important;
            }
          }
          @media (min-width: 1024px) {
            .sphere-animation {
              max-width: 700px !important;
              max-height: 700px !important;
            }
          }
          @media (min-width: 1280px) {
            .sphere-animation {
              max-width: 820px !important;
              max-height: 820px !important;
            }
          }
        `}</style>
        
        <svg 
          className="sphere w-full h-full" 
          viewBox="0 0 440 440" 
          stroke="rgba(0,0,0,.2)"
          preserveAspectRatio="xMidYMid meet"
          style={{ aspectRatio: '1/1' }}
        >
          <defs>
            <linearGradient id="sphereGradient" x1="5%" x2="5%" y1="0%" y2="15%">
              <stop stopColor="#e0e0e0" offset="0%"/>
              <stop stopColor="#f0f0f0" offset="50%"/>
              <stop stopColor="#ffffff" offset="100%"/>
            </linearGradient>
          </defs>
          
          <path d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
          <path d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z" fill="url(#sphereGradient)" strokeWidth="1px" style={{ backfaceVisibility: 'hidden' }}/>
        </svg>
      </div>
    </div>
  );
}
