/**
 * Reusable page pieces for Pottering Lane. Nothing here is shared with another
 * store — each shop has its own copy so a change to one cannot leak into another.
 */

import { esc, money } from './layout.js';
import { business, terms } from '../data/business.js';
import { categories } from '../data/products.js';

/** Responsive product image. Every photo exists at 1200px and 600px. */
export function productImage(file, alt, { sizes, eager = false, className = '' } = {}) {
  const base = file.replace(/\.webp$/, '');
  return `<img${className ? ` class="${className}"` : ''}
  src="/assets/images/${base}.webp"
  srcset="/assets/images/${base}-600.webp 600w, /assets/images/${base}.webp 1200w"
  sizes="${sizes}"
  alt="${esc(alt)}" width="1200" height="900"
  loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}

/**
 * Product card: squared corners, a hairline terracotta frame around the photo, the
 * category chip laid over the top-left of the image, and a text-link call to action
 * with a rule that fills on hover.
 */
export function card(product, { eager = false } = {}) {
  const cat = categories.find((c) => c.id === product.category);
  return `<li class="pl-card">
  <div class="pl-card__media">
    <a href="/products/${product.slug}.html" tabindex="-1" aria-hidden="true">
      ${productImage(product.image, product.alt, {
        sizes: '(max-width: 600px) 92vw, (max-width: 1000px) 46vw, 272px',
        eager,
      })}
    </a>
    <span class="pl-card__chip">${esc(cat.name)}</span>
  </div>
  <div class="pl-card__body">
    <h3 class="pl-card__name"><a href="/products/${product.slug}.html">${esc(product.name)}</a></h3>
    <p class="pl-card__summary">${esc(product.summary)}</p>
    <p class="pl-card__meta"><span class="pl-card__price">${money(product.price)}</span>
      <span class="pl-card__stock">In stock</span></p>
    <button class="pl-btn pl-btn--block" type="button" data-add="${product.sku}">
      Add to cart<span class="visually-hidden">: ${esc(product.name)}</span>
    </button>
  </div>
</li>`;
}

export function cardGrid(products, { eagerCount = 0 } = {}) {
  return `<ul class="pl-grid">${products
    .map((p, i) => card(p, { eager: i < eagerCount }))
    .join('\n')}</ul>`;
}

/** The hand-drawn botanical stem that crosses the hero panel. */
export function lineArt() {
  return `<svg class="pl-hero__lineart" viewBox="0 0 300 420" aria-hidden="true" focusable="false">
<path d="M150 420C150 320 120 250 150 150C170 88 190 52 186 8" stroke="#5E7B55" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M152 330c-34 4-58-14-66-46 34-6 58 12 66 46z" fill="none" stroke="#5E7B55" stroke-width="2.4"/>
<path d="M150 268c34 4 58-14 66-46-34-6-58 12-66 46z" fill="none" stroke="#5E7B55" stroke-width="2.4"/>
<path d="M156 206c-34 4-58-14-66-46 34-6 58 12 66 46z" fill="none" stroke="#5E7B55" stroke-width="2.4"/>
<path d="M164 148c34 4 58-14 66-46-34-6-58 12-66 46z" fill="none" stroke="#5E7B55" stroke-width="2.4"/>
<circle cx="186" cy="40" r="15" fill="none" stroke="#B0512F" stroke-width="2.4"/>
<circle cx="186" cy="40" r="5" fill="#B0512F"/>
</svg>`;
}

/** Section heading with the rule the rest of the site uses. */
export function sectionHead(title, lede) {
  return `<h2 class="pl-h2">${esc(title)}</h2>${lede ? `<p class="lede">${lede}</p>` : ''}`;
}

/** The four honest reasons, repeated verbatim from the policies. */
export function whyShop() {
  const items = [
    {
      icon: 'truck',
      title: `We ship in ${terms.processing}`,
      body: `Standard shipping is ${terms.standardShipping} and free over ${terms.freeShippingOver}. It arrives in ${terms.standardDelivery} after it ships.`,
    },
    {
      icon: 'return',
      title: `${terms.returnWindow} to return it`,
      body: `Unused and in its packaging, send it back within ${terms.returnWindow} of delivery. Refunds land in ${terms.refundTime} after we inspect it.`,
    },
    {
      icon: 'phone',
      title: 'A phone number that works',
      body: `${business.phone}, ${business.hours}. If you would rather order by phone than online, that is fine with us.`,
    },
    {
      icon: 'type',
      title: 'Type you can read',
      body: 'This site is set at 18px with high contrast, large buttons and printed labels on every control. It is built to WCAG 2.1 AA.',
    },
  ];

  const glyphs = {
    truck: '<path d="M2 7h11v9H2zM13 10h4.5L21 13.5V16h-8z"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
    return: '<path d="M4 10h11a5 5 0 0 1 0 10H9"/><path d="M8 6l-4 4 4 4"/>',
    phone: '<path d="M5 4h4l1.5 4-2 1.5a12 12 0 0 0 6 6L16 13.5 20 15v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    type: '<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',
  };

  return `<ul class="pl-why">${items
    .map(
      (i) => `<li>
  <svg class="pl-why__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${glyphs[i.icon]}</svg>
  <h3>${esc(i.title)}</h3>
  <p>${esc(i.body)}</p>
</li>`,
    )
    .join('')}</ul>`;
}

/**
 * Newsletter signup. CAN-SPAM shapes it: the consent text names the sender, the
 * content, the frequency and the unsubscribe route before anything is typed; email
 * is the only field; nothing is pre-ticked. No mailing provider is connected, and
 * the form says so rather than pretending a subscription happened.
 */
export function newsletter() {
  return `<section class="pl-news" aria-labelledby="news-h">
  <div class="wrap pl-news__inner">
    <div>
      <h2 id="news-h">Notes from the lane</h2>
      <p>One email a month: what has come in, what is worth sowing now, and the occasional
         note about keeping tools sharp. Nothing else.</p>
    </div>
    <form class="pl-news__form" data-newsletter novalidate>
      <div class="pl-field">
        <label for="news-email">Your email address</label>
        <input id="news-email" name="email" type="email" autocomplete="email"
               aria-describedby="news-consent" required>
      </div>
      <button class="pl-btn pl-btn--solid" type="submit">Sign up</button>
      <p class="pl-consent">
        <label>
          <input type="checkbox" name="consent" data-consent>
          <span id="news-consent">Yes, ${esc(business.legalName)} may email me its monthly newsletter
          about products and shop news. I can unsubscribe from the link in any message or by emailing
          ${business.email}, and my address will not be sold or shared. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</span>
        </label>
      </p>
      <p class="pl-formnote" data-newsletter-note role="status"></p>
    </form>
  </div>
</section>`;
}
