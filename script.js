(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---- casual-copy deterrent ----
     Anything a browser can show can still be saved, so this only stops the easy routes.
     The contact details are marked .selectable and stay copyable. */
  function inside(node, selector) {
    var el = node && (node.nodeType === 1 ? node : node.parentElement);
    return !!(el && el.closest(selector));
  }
  document.addEventListener("copy", function (e) {
    var sel = window.getSelection();
    if (!inside(sel && sel.anchorNode, ".selectable")) e.preventDefault();
  });
  document.addEventListener("cut", function (e) { e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { e.preventDefault(); });
  document.addEventListener("contextmenu", function (e) {
    if (inside(e.target, ".portrait, .about-shot, .gallery")) e.preventDefault();
  });

  /* ---- scroll reveal ---- */
  var risers = [].slice.call(document.querySelectorAll(".rise"));
  function revealAll() {
    risers.forEach(function (el) { el.classList.add("in"); });
  }
  if (risers.length && !reduced && "IntersectionObserver" in window) {
    document.documentElement.classList.add("anim");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0 });
    risers.forEach(function (el) { io.observe(el); });
    // anything at or near the top shows straight away
    requestAnimationFrame(function () {
      risers.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.2) el.classList.add("in");
      });
    });
    // failsafe: never leave content hidden
    setTimeout(revealAll, 2500);
    window.addEventListener("beforeprint", revealAll);
  }

  /* ---- pointer-tracked 3D tilt ---- */
  if (fine && !reduced) {
    document.querySelectorAll("[data-tilt]").forEach(function (host) {
      var sel = host.getAttribute("data-tilt-target");
      var plane = sel ? host.querySelector(sel) : (host.querySelector(".plane") || host);
      var max = parseFloat(host.getAttribute("data-tilt-max")) || 8;
      var frame = null;

      host.addEventListener("pointermove", function (e) {
        if (frame) return;
        frame = requestAnimationFrame(function () {
          frame = null;
          var r = host.getBoundingClientRect();
          if (!r.width || !r.height) return;
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          plane.style.transition = "transform .08s linear";
          plane.style.transform =
            "rotateX(" + (-py * max * 2).toFixed(2) + "deg) " +
            "rotateY(" + (px * max * 2).toFixed(2) + "deg) " +
            "translateZ(6px)";
        });
      });

      host.addEventListener("pointerleave", function () {
        if (frame) { cancelAnimationFrame(frame); frame = null; }
        plane.style.transition = "transform .5s cubic-bezier(.2,.7,.3,1)";
        plane.style.transform = "";
      });
    });
  }

  /* ---- header elevation on scroll ---- */
  var header = document.getElementById("site-header");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      if (header) header.classList.toggle("stuck", window.scrollY > 24);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- copy buttons ---- */
  function selectValue(btn) {
    var val = btn.parentNode.querySelector(".val");
    if (!val) return;
    try {
      var range = document.createRange();
      range.selectNodeContents(val);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      flash(btn, "Selected");
    } catch (err) { /* nothing more we can do */ }
  }
  function flash(btn, label) {
    btn.textContent = label;
    setTimeout(function () { btn.textContent = "Copy"; }, 1600);
  }
  document.querySelectorAll(".copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          flash(btn, "Copied");
        }).catch(function () { selectValue(btn); });
      } else {
        selectValue(btn);
      }
    });
  });
})();
