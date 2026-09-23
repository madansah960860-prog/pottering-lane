/**
 * Page shell for Pottering Lane Garden Co.
 *
 * Design language, and the reason each choice is here:
 *   header  — split navigation either side of a centred wordmark, with a category
 *             chip rail beneath it. Nothing else in the six stores uses this.
 *   hero    — a true 50/50 split where the photograph bleeds off the left edge and
 *             a hand-drawn botanical stem crosses the right panel.
 *   card    — squared corners (4px), a 1px terracotta hairline frame, a category
 *             chip laid over the photo, and a text-link call to action.
 *   footer  — asymmetric two columns: a wide brand block, then stacked link groups.
 *   button  — 4px radius, 2px terracotta outline that fills on hover and focus.
 */

import { business, terms } from '../data/business.js';
import { categories } from '../data/products.js';

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const money = (n) => `${terms.currencySymbol}${Number(n).toFixed(2)}`;

/** Root-relative path helper — every page links from the site root. */
export const url = (p) => (p.startsWith('/') ? p : `/${p}`);

const NAV_LEFT = [
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: '/about.html', label: 'About us' },
];

const NAV_RIGHT = [
  { href: '/faq.html', label: 'FAQ' },
  { href: '/contact.html', label: 'Contact' },
  { href: '/cart.html', label: 'Cart' },
];

export const POLICY_LINKS = [
  { href: '/policies/shipping.html', label: 'Shipping Policy' },
  { href: '/policies/refund-returns.html', label: 'Refund &amp; Return Policy' },
  { href: '/policies/privacy.html', label: 'Privacy Policy' },
  { href: '/policies/terms.html', label: 'Terms of Service' },
  { href: '/policies/accessibility.html', label: 'Accessibility Statement' },
];

function head({ title, description, path, ogImage = '/assets/images/hero.webp' }) {
  const fullTitle = title.includes(business.shortName)
    ? title
    : `${title} — ${business.brandName}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${business.siteUrl}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(business.brandName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${business.siteUrl}${path}">
<meta property="og:image" content="${business.siteUrl}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="theme-color" content="#3C5236">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
  href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap"
  onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap"></noscript>
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>`;
}

function leafMark() {
  return `<svg class="pl-logo__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
<path d="M6 34C6 20 14 10 34 7c-1 20-12 28-28 27z" fill="#5E7B55"/>
<path d="M7 35C14 27 22 21 30 17" stroke="#B0512F" stroke-width="2.2" stroke-linecap="round" fill="none"/>
</svg>`;
}

function chipRail(active) {
  const chips = categories
    .map(
      (c) =>
        `<li><a class="pl-chip${active === c.id ? ' pl-chip--on' : ''}" href="/shop.html?category=${c.id}">${esc(c.name)}</a></li>`,
    )
    .join('');
  return `<div class="pl-chiprail">
  <div class="wrap">
    <ul class="pl-chiprail__list">
      <li><a class="pl-chip${active === 'all' ? ' pl-chip--on' : ''}" href="/shop.html">All products</a></li>
      ${chips}
    </ul>
  </div>
</div>`;
}

function header(current, activeCategory) {
  const item = (n) =>
    `<li><a class="pl-nav__link${current === n.href ? ' is-current' : ''}"${
      current === n.href ? ' aria-current="page"' : ''
    } href="${n.href}">${n.label}</a></li>`;

  return `<header class="pl-head">
  <div class="pl-head__strip">
    <div class="wrap pl-head__strip-inner">
      <p>Free standard shipping on US orders over ${terms.freeShippingOver} · ${terms.returnWindow} returns</p>
      <p>Questions? <a href="${business.phoneHref}">${business.phone}</a> · ${business.hours}</p>
    </div>
  </div>

  <div class="wrap pl-head__inner">
    <button class="pl-menu" type="button" aria-expanded="false" aria-controls="sitenav">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
      <span class="pl-menu__label">Menu</span>
    </button>

    <nav class="pl-nav pl-nav--split" id="sitenav" aria-label="Main">
      <ul class="pl-nav__list pl-nav__list--left">${NAV_LEFT.map(item).join('')}</ul>

      <a class="pl-logo" href="/index.html">
        ${leafMark()}
        <span class="pl-logo__text">Pottering&nbsp;Lane<span>Garden Co.</span></span>
      </a>

      <ul class="pl-nav__list pl-nav__list--right">${NAV_RIGHT.map(item).join('')}
        <li class="pl-nav__cartcount"><span data-cart-count aria-live="polite">0 items</span></li>
      </ul>
    </nav>
  </div>

  ${chipRail(activeCategory)}
</header>`;
}

function leafDivider() {
  return `<svg class="pl-divider" viewBox="0 0 240 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<path d="M0 12h72M168 12h72" stroke="#B0512F" stroke-width="1.5"/>
<path d="M104 12c0-7 6-11 16-11-1 7-7 11-16 11zM136 12c0 7-6 11-16 11 1-7 7-11 16-11z" fill="#5E7B55"/>
</svg>`;
}

function footer() {
  const shopLinks = categories
    .map((c) => `<li><a href="/shop.html?category=${c.id}">${esc(c.name)}</a></li>`)
    .join('');

  return `<footer class="pl-footer">
  ${leafDivider()}
  <div class="wrap pl-footer__cols">
    <div class="pl-footer__brand">
      <p class="pl-footer__name">${esc(business.brandName)}</p>
      <p class="pl-footer__tag">${esc(business.tagline)}</p>
      <address>
        <strong>${esc(business.legalName)}</strong><br>
        ${esc(business.address.line1)}<br>
        ${esc(business.address.city)}, ${business.address.state} ${business.address.zip}<br>
        <a href="mailto:${business.email}">${business.email}</a><br>
        <a href="${business.phoneHref}">${business.phone}</a><br>
        ${esc(business.hours)}
      </address>
    </div>

    <div class="pl-footer__links">
      <div>
        <h2>Shop</h2>
        <ul>
          <li><a href="/shop.html">All products</a></li>
          ${shopLinks}
          <li><a href="/cart.html">Your cart</a></li>
        </ul>
      </div>
      <div>
        <h2>Help</h2>
        <ul>
          <li><a href="/contact.html">Contact us</a></li>
          <li><a href="/faq.html">Frequently asked questions</a></li>
          <li><a href="/about.html">About Pottering Lane</a></li>
          <li><a href="/policies/shipping.html">Shipping Policy</a></li>
          <li><a href="/policies/refund-returns.html">Refund &amp; Return Policy</a></li>
        </ul>
      </div>
      <div>
        <h2>Legal</h2>
        <ul>
          ${POLICY_LINKS.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
          <li><a href="/policies/privacy.html#do-not-sell">Do Not Sell or Share My Personal Information</a></li>
          <li><a href="/credits.html">Photo credits</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="wrap pl-footer__legal">
    <p>© 2026 ${esc(business.legalName).replace(/\.$/, '')}. Prices in US dollars. We ship within the United States only.
       Policies effective ${esc(business.effectiveDate)}.</p>
    <p>Product photographs are used under Creative Commons licences —
       <a href="/credits.html">see the photo credits</a>.</p>
  </div>
</footer>`;
}

function cookieNotice() {
  return `<div class="pl-cookie" role="region" aria-label="Cookie notice" data-cookie hidden>
  <p>We use a small number of cookies to keep your cart and to count visits. We do not use advertising
     cookies and we do not sell or share personal information. Read the
     <a href="/policies/privacy.html">Privacy Policy</a>.</p>
  <button class="pl-btn pl-btn--small" type="button" data-cookie-dismiss>Got it</button>
</div>`;
}

/** Assemble a complete page. */
export function page({ title, description, path, body, current = '', activeCategory = '', ogImage, jsonLd }) {
  return `${head({ title, description, path, ogImage })}
${header(current, activeCategory)}
<main id="main">
${body}
</main>
${footer()}
${cookieNotice()}
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

/** Breadcrumb trail. `trail` is [{href,label}] ending with the current page. */
export function breadcrumb(trail) {
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.label)}</li>`
        : `<li><a href="${t.href}">${esc(t.label)}</a></li>`,
    )
    .join('');
  return `<div class="wrap"><nav class="pl-crumb" aria-label="Breadcrumb"><ol>${items}</ol></nav></div>`;
}
