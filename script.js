/**
 * File: script.js
 * Path (your upload): /mnt/data/script.js
 *
 * Features:
 * - nav toggle (keyboard accessible)
 * - close nav on outside click / Escape
 * - smooth internal link scrolling with header offset
 * - intersection-observer reveal for .fade-up elements (animation-play-state control)
 * - hero image tilt / parallax micro-interaction (mouse / touch-safe)
 * - lazy-load images (adds loading="lazy" if missing)
 * - contact form double-submit protection + small UX states
 * - defensive selectors so it won't break if some elements/classes are missing
 */

(function () {
    'use strict';

    // small helpers
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    /* =========================
       Year (idempotent)
       ========================= */
    try {
        const yEl = document.getElementById('year');
        if (yEl) yEl.textContent = new Date().getFullYear();
    } catch (e) {
        // noop
    }

    /* =========================
       Navigation toggle & accessibility
       ========================= */
    const body = document.body;
    const navToggle = $('#navToggle');
    // wrapper: prefer explicit id if present, else .nav-inner
    const navWrapper = $('#navWrapper') || $('.nav-inner') || $('.nav');

    function setNavOpen(open) {
        if (!navWrapper) return;
        if (open) {
            navWrapper.classList.add('nav-open');
            body.classList.add('nav-open');
        } else {
            navWrapper.classList.remove('nav-open');
            body.classList.remove('nav-open');
        }
        if (navToggle) navToggle.setAttribute('aria-expanded', String(Boolean(open)));
    }

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navWrapper && navWrapper.classList.contains('nav-open');
            setNavOpen(!isOpen);
        });
    }

    // close nav on click outside (mobile)
    document.addEventListener('click', (e) => {
        if (!navWrapper) return;
        if (!navWrapper.contains(e.target) && navWrapper.classList.contains('nav-open')) {
            setNavOpen(false);
        }
    });

    // close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navWrapper && navWrapper.classList.contains('nav-open')) {
            setNavOpen(false);
        }
    });

    /* =========================
       Smooth scroll for internal links
       ========================= */
    (function enableSmoothScroll() {
        const header = document.querySelector('header.nav') || document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height + 8 : 72;

        document.addEventListener('click', (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const href = a.getAttribute('href');
            if (!href || href === '#' || href === '#0') return;
            const targetId = href.slice(1);
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;
            e.preventDefault();
            setNavOpen(false); // close nav on navigation (mobile)
            const top = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: 'smooth' });
            // update hash without default jump (so users can copy link)
            history.replaceState && history.replaceState(null, '', '#' + targetId);
        }, { passive: true });
    })();

    /* =========================
       IntersectionObserver: reveal animations
       We try to pause animations initially and unpause when element visible.
       Works with elements that already have CSS keyframe animations like .fade-up
       ========================= */
    (function revealOnScroll() {
        const animEls = $$('.fade-up, .fade-up-delayed');
        if (!animEls.length || !('IntersectionObserver' in window)) {
            // ensure they at least show if no observer support
            animEls.forEach(el => el.style.animationPlayState = 'running');
            return;
        }

        // pause animations initially for better control
        animEls.forEach(el => {
            try { el.style.animationPlayState = 'paused'; } catch (e) { /* noop */ }
        });

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.style.animationPlayState = 'running';
                    // add small class so CSS can target if needed
                    el.classList.add('in-view');
                    io.unobserve(el);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -8% 0px',
            threshold: 0.12
        });

        animEls.forEach(el => io.observe(el));
    })();

    /* =========================
       Hero image tilt / micro-parallax
       - uses .hero-img-card container
       - gentle rotateX/rotateY and translateZ effect
       - disables on touch devices to avoid interference
       ========================= */
    (function heroTilt() {
        const card = document.querySelector('.hero-img-card');
        if (!card) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let rect = null;
        let touchActive = false;

        function onMove(clientX, clientY) {
            if (!rect) rect = card.getBoundingClientRect();
            const px = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2); // -1 to 1
            const py = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2); // -1 to 1
            const rotateY = clamp(px * 6, -10, 10); // degrees
            const rotateX = clamp(-py * 6, -10, 10);
            const translateZ = 6 + Math.abs(px * 2) + Math.abs(py * 2); // small pop
            card.style.transform = `perspective(900px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.transition = 'transform 120ms cubic-bezier(.2,.9,.2,1)';
        }

        function reset() {
            card.style.transform = 'perspective(900px) translateZ(0) rotateX(0) rotateY(0)';
            card.style.transition = 'transform 450ms cubic-bezier(.2,.9,.2,1)';
        }

        // mouse
        card.addEventListener('mousemove', (ev) => {
            if (touchActive) return;
            onMove(ev.clientX, ev.clientY);
        });
        card.addEventListener('mouseleave', reset);

        // touch: enable limited parallax on touchmove (safer)
        card.addEventListener('touchstart', () => { touchActive = true; rect = card.getBoundingClientRect(); }, { passive: true });
        card.addEventListener('touchend', () => { touchActive = false; reset(); }, { passive: true });
        card.addEventListener('touchmove', (ev) => {
            if (!ev.touches || !ev.touches[0]) return;
            const t = ev.touches[0];
            onMove(t.clientX, t.clientY);
        }, { passive: true });
    })();

    /* =========================
       Lazy load missing loading attribute on images
       ========================= */
    (function lazyImages() {
        const imgs = $$('img');
        imgs.forEach(img => {
            if (!img.hasAttribute('loading')) {
                try { img.setAttribute('loading', 'lazy'); } catch (e) { /* noop */ }
            }
        });
    })();

    /* =========================
       Contact form: disable double submit + UX
       - keeps action intact (we do not intercept or change)
       ========================= */
    (function protectContactForm() {
        const forms = $$('#contactForm');
        if (!forms.length) return;
        forms.forEach(form => {
            const submitBtn = form.querySelector('button[type="submit"]');

            form.addEventListener('submit', (e) => {
                // if already disabled, prevent accidental double submits
                if (submitBtn && submitBtn.hasAttribute('data-busy')) {
                    e.preventDefault();
                    return false;
                }
                if (submitBtn) {
                    submitBtn.setAttribute('data-busy', '1');
                    submitBtn.classList.add('btn--busy');
                    submitBtn.setAttribute('aria-busy', 'true');
                    // small visual change
                    const originalText = submitBtn.innerHTML;
                    try {
                        submitBtn.innerHTML = 'Sending...';
                    } catch (err) { }
                    // If the form uses AJAX on server side and returns quickly, we can't know here.
                    // So we'll re-enable after 12s as a safety fallback (in case of JS navigation)
                    setTimeout(() => {
                        if (!submitBtn) return;
                        submitBtn.removeAttribute('data-busy');
                        submitBtn.removeAttribute('aria-busy');
                        try { submitBtn.innerHTML = originalText; } catch (err) { }
                    }, 12000);
                }
                // allow default submit to continue
            }, { passive: false });
        });
    })();

    /* =========================
       Tiny UX: enhance external product links (open new tab & noopener)
       ========================= */
    (function externalLinkSafety() {
        $$('a[target="_blank"]').forEach(a => {
            // ensure security
            const rel = (a.getAttribute('rel') || '').split(' ').map(s => s.trim()).filter(Boolean);
            if (!rel.includes('noopener')) rel.push('noopener');
            if (!rel.includes('noreferrer')) rel.push('noreferrer');
            a.setAttribute('rel', rel.join(' '));
        });
    })();

    /* =========================
       Ready: small onload polish
       ========================= */
    window.addEventListener('load', () => {
        // remove any residual animations from SSR or weird states
        document.querySelectorAll('.fade-up, .fade-up-delayed').forEach((el, i) => {
            // small stagger if not already in-view
            if (!el.classList.contains('in-view')) {
                el.style.animationDelay = (i * 0.04) + 's';
            }
        });
    });

})();
