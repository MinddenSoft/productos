/* ============================================================
   AQUA_INT + Mindden Flow — presentation runtime
   - Keyboard navigation (↑/↓/Space/PageUp/PageDown/Home/End)
   - Side dot navigation + slide counter
   - Reveal on scroll via IntersectionObserver
   ============================================================ */

(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (slides.length === 0) return;

  /* ----- Build side dot navigation ----- */
  const navDots = document.createElement("nav");
  navDots.className = "nav-dots";
  navDots.setAttribute("aria-label", "Navegación de diapositivas");
  slides.forEach((slide, i) => {
    const btn = document.createElement("button");
    btn.className = "nav-dot";
    btn.type = "button";
    btn.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    btn.addEventListener("click", () => goTo(i));
    navDots.appendChild(btn);
  });
  document.body.appendChild(navDots);

  /* ----- Slide counter ----- */
  const counter = document.createElement("div");
  counter.className = "nav-counter";
  counter.innerHTML = `<strong id="nav-current">1</strong> / ${slides.length}`;
  document.body.appendChild(counter);
  const currentEl = counter.querySelector("#nav-current");

  /* ----- Keyboard hint (auto-hides after 6s) ----- */
  const hint = document.createElement("div");
  hint.className = "nav-hint";
  hint.innerHTML = `<kbd>↑</kbd><kbd>↓</kbd> o <kbd>espacio</kbd> para navegar`;
  document.body.appendChild(hint);
  setTimeout(() => {
    hint.style.transition = "opacity 0.6s ease";
    hint.style.opacity = "0";
    setTimeout(() => hint.remove(), 700);
  }, 6000);

  /* ----- Active-slide tracking + dot sync ----- */
  let activeIdx = 0;
  const dots = Array.from(navDots.querySelectorAll(".nav-dot"));
  function setActive(i) {
    if (i === activeIdx) return;
    activeIdx = i;
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    if (currentEl) currentEl.textContent = String(i + 1);
  }
  dots[0].classList.add("active");

  /* Observer: marks the slide that occupies most of the viewport as active. */
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
          const idx = slides.indexOf(entry.target);
          if (idx >= 0) setActive(idx);
        }
      });
    },
    { threshold: [0.55, 0.7, 0.9] },
  );
  slides.forEach((s) => activeObserver.observe(s));

  /* ----- Reveal-on-scroll for [data-reveal] elements ----- */
  const revealItems = document.querySelectorAll(".reveal");
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  revealItems.forEach((el) => revealObs.observe(el));

  /* ----- Keyboard navigation ----- */
  function goTo(i) {
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    slides[clamped].scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function next() {
    goTo(activeIdx + 1);
  }
  function prev() {
    goTo(activeIdx - 1);
  }

  document.addEventListener("keydown", (e) => {
    const target = e.target;
    // Ignora si el foco está en un input/textarea (defensivo, aunque no hay aquí)
    if (
      target instanceof HTMLElement &&
      ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
    ) {
      return;
    }
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowUp":
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        goTo(0);
        break;
      case "End":
        e.preventDefault();
        goTo(slides.length - 1);
        break;
      case "f":
      case "F":
        // Pulsa 'f' para fullscreen toggle
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.().catch(() => {});
        } else {
          document.exitFullscreen?.().catch(() => {});
        }
        break;
    }
  });
  /* ----- Motion: mouse parallax on mesh backgrounds ----- */
  (function initParallax() {
    var meshWraps = document.querySelectorAll(".mesh-bg");
    if (meshWraps.length === 0) return;
    function moveMeshes(e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 2;
      var y = (e.clientY / window.innerHeight - 0.5) * 2;
      meshWraps.forEach(function (mesh) {
        mesh.style.transform = "translate(" + (x * -8) + "px, " + (y * -8) + "px)";
        var extra = mesh.querySelector(".mesh-extra");
        if (extra) {
          extra.style.transform = "translate(" + (x * -16) + "px, " + (y * -16) + "px)";
        }
      });
    }
    document.addEventListener("mousemove", moveMeshes);
  })();

  /* ----- Motion: card tilt on hover ----- */
  (function initCardTilt() {
    var cards = document.querySelectorAll(".glass-card");
    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", x * 6 + "deg");
        card.style.setProperty("--tilt-y", y * -6 + "deg");
        card.style.transform = "perspective(800px) rotateX(var(--tilt-y)) rotateY(var(--tilt-x)) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      });
    });
  })();

  /* ----- Motion: magnetic buttons ----- */
  (function initMagneticButtons() {
    var btns = document.querySelectorAll(".magnetic-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        btn.style.transform = "translate(" + (x * 12) + "px, " + (y * 8) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  })();

  /* ----- Motion: animated counters for big numbers ----- */
  (function initCounters() {
    var targets = document.querySelectorAll(".big-stat-num.gradient");
    if (targets.length === 0) return;

    function parseNum(text) {
      var cleaned = text.replace(/\./g, "").replace(",", ".");
      var match = cleaned.match(/^([\d.]+)\s*([kMB+]*)$/);
      if (!match) return null;
      return { val: parseFloat(match[1]), suffix: match[2] || "" };
    }

    function formatNum(value, suffix) {
      var intl = Number.isInteger(value)
        ? value.toString()
        : value.toFixed(1).replace(".", ",");
      return intl + suffix;
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(el, target, suffix) {
      el.style.opacity = "1";
      var duration = 1500;
      var start = performance.now();

      function tick(now) {
        var elapsed = now - start;
        var t = Math.min(elapsed / duration, 1);
        var current = target * easeOutCubic(t);
        el.textContent = formatNum(current, suffix);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = formatNum(target, suffix);
      }
      requestAnimationFrame(tick);
    }

    var counterObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var parsed = parseNum(el.textContent);
            if (parsed && parsed.val > 0) {
              el.classList.add("count-anim");
              el.textContent = formatNum(0, parsed.suffix);
              animate(el, parsed.val, parsed.suffix);
            }
            counterObs.unobserve(el);
          }
        });
      },
      { threshold: 0.6 },
    );
    targets.forEach(function (el) { counterObs.observe(el); });
  })();

  /* ----- Motion: float with random delays ----- */
  (function initFloatDelays() {
    document.querySelectorAll(".float, .float-reverse").forEach(function (el) {
      el.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
    });
  })();

  /* ----- Motion: pulse glow on active nav dot ----- */
  (function initNavDotGlow() {
    var dots = document.querySelectorAll(".nav-dot");
    dots.forEach(function (dot) {
      var obs = new MutationObserver(function () {
        dot.classList.toggle("pulse-glow", dot.classList.contains("active"));
      });
      obs.observe(dot, { attributes: true, attributeFilter: ["class"] });
    });
  })();

})();

/* ----- Lightbox for images (global) ----- */
function lightboxOpen(src, alt) {
  var o = document.getElementById("lightbox");
  var i = document.getElementById("lightbox-img");
  if (!o || !i) return;
  i.src = src;
  i.alt = alt || "";
  o.style.display = "flex";
  requestAnimationFrame(function () { o.classList.add("visible"); });
  document.body.style.overflow = "hidden";
}
function lightboxClose() {
  var o = document.getElementById("lightbox");
  if (!o) return;
  o.classList.remove("visible");
  setTimeout(function () {
    o.style.display = "none";
    document.body.style.overflow = "";
  }, 300);
}
