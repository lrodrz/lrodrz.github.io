(() => {
  "use strict";

  const documentElement = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const setBodyLock = (locked) => body.classList.toggle("is-locked", locked);

  const initHeader = () => {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    let scheduled = false;
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      scheduled = false;
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
  };

  const initNavigation = () => {
    const header = document.querySelector("[data-site-header]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const panel = document.querySelector("[data-nav-panel]");
    if (!header || !toggle || !panel) return;

    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      header.classList.remove("is-menu-open");
      setBodyLock(false);
    };
    const open = () => {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      header.classList.add("is-menu-open");
      setBodyLock(true);
      panel.querySelector("a")?.focus();
    };

    toggle.addEventListener("click", () => {
      toggle.getAttribute("aria-expanded") === "true" ? close() : open();
    });
    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        close();
        toggle.focus();
      }
    });
    window.addEventListener("resize", () => { if (window.innerWidth >= 760) close(); });
  };

  const initSearch = () => {
    const dialog = document.querySelector("[data-search-dialog]");
    const openers = [...document.querySelectorAll("[data-search-open]")];
    if (!dialog || openers.length === 0) return;

    const closeButton = dialog.querySelector("[data-search-close]");
    const input = dialog.querySelector("[data-search-input]");
    const status = dialog.querySelector("[data-search-status]");
    const results = dialog.querySelector("[data-search-results]");
    const indexUrl = dialog.dataset.searchIndex;
    let posts = null;
    let opener = null;

    const setStatus = (message) => { status.textContent = message; };
    const renderMessage = (message, className) => {
      results.replaceChildren();
      const element = document.createElement("p");
      element.className = className;
      element.textContent = message;
      results.append(element);
    };
    const renderResults = (matches) => {
      results.replaceChildren();
      if (matches.length === 0) {
        renderMessage("No posts match that search.", "search-empty");
        setStatus("No results found.");
        return;
      }
      const fragment = document.createDocumentFragment();
      matches.forEach((post) => {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = post.url;
        const title = document.createElement("h3");
        title.textContent = post.title;
        const metadata = document.createElement("p");
        metadata.textContent = [post.date, ...(post.tags || [])].filter(Boolean).join(" / ");
        link.append(title, metadata);
        fragment.append(link);
      });
      results.append(fragment);
      setStatus(`${matches.length} ${matches.length === 1 ? "result" : "results"} found.`);
    };
    const loadIndex = async () => {
      if (posts) return posts;
      setStatus("Loading the search index...");
      try {
        const response = await fetch(indexUrl, { headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error(`Search index returned ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Search index is not a list");
        posts = data;
        setStatus("Start typing to search titles, descriptions, and tags.");
        return posts;
      } catch (error) {
        renderMessage("Search is unavailable right now. Browse the archive instead.", "search-error");
        setStatus("Search index failed to load.");
        console.error(error);
        return [];
      }
    };
    const close = () => {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      setBodyLock(false);
      opener?.focus();
    };
    const open = async (source) => {
      opener = source;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      setBodyLock(true);
      input.focus();
      await loadIndex();
      if (input.value.trim()) input.dispatchEvent(new Event("input"));
    };

    openers.forEach((button) => button.addEventListener("click", () => open(button)));
    closeButton?.addEventListener("click", close);
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); close(); });
    dialog.addEventListener("click", (event) => { if (event.target === dialog) close(); });
    input.addEventListener("input", () => {
      const query = input.value.trim().toLocaleLowerCase();
      if (!query) {
        results.replaceChildren();
        setStatus("Start typing to search titles, descriptions, and tags.");
        return;
      }
      if (!posts) return;
      const matches = posts.filter((post) => {
        const searchable = [post.title, post.subtitle, post.description, ...(post.tags || []), ...(post.categories || [])]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase();
        return searchable.includes(query);
      }).slice(0, 12);
      renderResults(matches);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && !/input|textarea|select/i.test(event.target.tagName)) {
        event.preventDefault();
        open(openers[0]);
      }
    });
  };

  const initArchive = () => {
    const filters = document.querySelector("[data-tag-filters]");
    const list = document.querySelector("[data-archive-list]");
    if (!filters || !list) return;

    const buttons = [...filters.querySelectorAll("[data-tag]")];
    const posts = [...list.querySelectorAll("[data-archive-post]")];
    const years = [...list.querySelectorAll("[data-archive-year]")];
    const status = document.querySelector("[data-archive-status]");

    const select = (tag, updateUrl = true) => {
      const validTag = buttons.some((button) => button.dataset.tag === tag) ? tag : "all";
      let visibleCount = 0;
      posts.forEach((post) => {
        const show = validTag === "all" || post.dataset.tags.split(/\s+/).includes(validTag);
        post.hidden = !show;
        if (show) visibleCount += 1;
      });
      years.forEach((year) => { year.hidden = !year.querySelector("[data-archive-post]:not([hidden])"); });
      buttons.forEach((button) => {
        const active = button.dataset.tag === validTag;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      status.textContent = validTag === "all"
        ? `Showing all ${visibleCount} posts.`
        : `Showing ${visibleCount} ${visibleCount === 1 ? "post" : "posts"} tagged ${validTag.replaceAll("-", " ")}.`;
      if (updateUrl) {
        const url = new URL(window.location.href);
        validTag === "all" ? url.searchParams.delete("tag") : url.searchParams.set("tag", validTag);
        window.history.replaceState({}, "", url);
      }
    };

    filters.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tag]");
      if (button) select(button.dataset.tag);
    });
    select(new URL(window.location.href).searchParams.get("tag") || "all", false);
  };

  const slugify = (value) => value.toLocaleLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const initPost = () => {
    const content = document.querySelector("[data-post-content]");
    if (!content) return;

    const readingTime = document.querySelector("[data-reading-time]");
    const words = content.textContent.trim().split(/\s+/).filter(Boolean).length;
    if (readingTime) readingTime.textContent = `${Math.max(1, Math.ceil(words / 200))} min read`;

    const progress = document.querySelector("[data-reading-progress] span");
    if (progress) {
      let scheduled = false;
      const updateProgress = () => {
        const rect = content.getBoundingClientRect();
        const total = Math.max(1, content.offsetHeight - window.innerHeight);
        const traveled = Math.min(total, Math.max(0, -rect.top));
        progress.style.transform = `scaleX(${traveled / total})`;
        scheduled = false;
      };
      window.addEventListener("scroll", () => {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(updateProgress);
      }, { passive: true });
      updateProgress();
    }

    const headings = [...content.querySelectorAll("h2, h3")].filter((heading) => !heading.closest(".comments"));
    const tocContainer = document.querySelector("[data-toc-container]");
    const toc = document.querySelector("[data-toc]");
    if (tocContainer && toc && headings.length >= 2) {
      const usedIds = new Set();
      headings.forEach((heading, index) => {
        const baseId = heading.id || slugify(heading.textContent) || `section-${index + 1}`;
        let uniqueId = baseId;
        let suffix = 2;
        while (usedIds.has(uniqueId)) uniqueId = `${baseId}-${suffix++}`;
        usedIds.add(uniqueId);
        heading.id = uniqueId;

        const headingText = heading.textContent;
        const anchor = document.createElement("a");
        anchor.className = "heading-anchor";
        anchor.href = `#${uniqueId}`;
        anchor.textContent = headingText;
        heading.replaceChildren(anchor);

        const tocLink = document.createElement("a");
        tocLink.href = `#${uniqueId}`;
        tocLink.textContent = headingText;
        if (heading.tagName === "H3") tocLink.classList.add("toc-subitem");
        toc.append(tocLink);
      });
      tocContainer.hidden = false;

      if ("IntersectionObserver" in window) {
        const links = [...toc.querySelectorAll("a")];
        const observer = new IntersectionObserver((entries) => {
          entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
            links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
          });
        }, { rootMargin: "-15% 0px -70%" });
        headings.forEach((heading) => observer.observe(heading));
      }
    }

    content.querySelectorAll("pre").forEach((pre) => {
      const code = pre.querySelector("code");
      if (!code) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "copy-code-button";
      button.textContent = "Copy";
      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          button.textContent = "Copied";
        } catch (error) {
          button.textContent = "Copy failed";
          console.error(error);
        }
        window.setTimeout(() => { button.textContent = "Copy"; }, 1800);
      });
      pre.append(button);
    });
  };

  const initReveals = () => {
    if (reducedMotion || !("IntersectionObserver" in window)) return;
    const items = [...document.querySelectorAll(".post-preview, .archive-year, .sidebar-section")];
    if (items.length === 0) return;
    items.forEach((item) => item.classList.add("reveal-ready"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%" });
    items.forEach((item) => observer.observe(item));
  };

  documentElement.classList.add("site-ready");
  initHeader();
  initNavigation();
  initSearch();
  initArchive();
  initPost();
  initReveals();
})();
