/**
 * The nine non-policy pages: home, shop, product (×12), cart, checkout, about,
 * contact, FAQ, photo credits and 404.
 */

import { business, terms, shippingMethods, shippingSummary, returnSummary } from '../data/business.js';
import { categories, products, featuredSkus } from '../data/products.js';
import { breadcrumb, esc, money } from './layout.js';
import { card, cardGrid, lineArt, newsletter, productImage, sectionHead, whyShop } from './components.js';

const B = business;
const T = terms;
const featured = featuredSkus.map((sku) => products.find((p) => p.sku === sku));

/* ------------------------------------------------------------------- home */

export function home() {
  return {
    file: 'index.html',
    path: '/index.html',
    current: '/index.html',
    title: `${B.brandName} — easy gardening tools and equipment`,
    description: `Kneeler seats, long-handled tools, raised planters and light hoses, described by reach and weight. Free US shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
<section class="pl-hero">
  <div class="pl-hero__media">
    ${productImage('hero.webp', 'A garden bed in summer with tools resting beside it.', {
      sizes: '(max-width: 860px) 100vw, 50vw',
      eager: true,
    })}
  </div>
  <div class="pl-hero__panel">
    ${lineArt()}
    <div class="pl-hero__text">
      <p class="pl-eyebrow">Easy gardening</p>
      <h1>The garden did not get harder. The tools just never changed.</h1>
      <p class="lede">We stock the long handle, the fat grip, the raised bed and the seat that flips
      over — and we print the reach and the weight of every one of them, because that is what decides
      whether you can use it.</p>
      <p class="pl-hero__actions">
        <a class="pl-btn pl-btn--solid" href="/shop.html">Shop all 12 products</a>
        <a class="pl-btn" href="/about.html">Why we started</a>
      </p>
      <ul class="pl-hero__facts">
        <li>Free standard shipping over ${esc(T.freeShippingOver)}</li>
        <li>${esc(T.returnWindow)} to change your mind</li>
        <li>Order by phone on ${esc(B.phone)}</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead('Four corners of the garden', 'Twelve things, grouped by the job rather than the aisle.')}
    <ul class="pl-cats">
      ${categories
        .map(
          (c) => `<li><a class="pl-cat" href="/shop.html?category=${c.id}">
        ${productImage(c.image, c.alt, { sizes: '(max-width: 700px) 92vw, 24vw' })}
        <h3>${esc(c.name)}</h3><p>${esc(c.blurb)}</p></a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    ${sectionHead('Where most people start', 'Four that get asked about more than the rest.')}
    ${cardGrid(featured)}
    <p class="pl-more"><a class="pl-btn" href="/shop.html">See the whole shop</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sectionHead('Why shop with us', 'Four plain facts. Every one is repeated, word for word, in our policies.')}
    ${whyShop()}
  </div>
</section>

${newsletter()}
`,
  };
}

/* ------------------------------------------------------------------- shop */

export function shop() {
  return {
    file: 'shop.html',
    path: '/shop.html',
    current: '/shop.html',
    activeCategory: 'all',
    title: 'Shop all products',
    description: `Every product Pottering Lane sells, with full dimensions, weights and load ratings. Free US standard shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
${breadcrumb([{ href: '/index.html', label: 'Home' }, { label: 'Shop' }])}

<section class="section">
  <div class="wrap">
    <h1>Everything we sell</h1>
    <p class="lede">Twelve things for the garden, described in full. Every price below is the price you
    pay; shipping is added at the cart and nothing else is.</p>

    <div class="pl-tools">
      <div class="pl-tools__group">
        <span class="pl-tools__label" id="filter-label">Filter by corner</span>
        <div class="pl-chips" role="group" aria-labelledby="filter-label">
          <button class="pl-chip" type="button" data-filter="all" aria-pressed="true">All products</button>
          ${categories
            .map(
              (c) =>
                `<button class="pl-chip" type="button" data-filter="${c.id}" aria-pressed="false">${esc(c.name)}</button>`,
            )
            .join('')}
        </div>
      </div>
      <div class="pl-tools__group">
        <label class="pl-tools__label" for="sort">Sort by</label>
        <select id="sort" data-sort>
          <option value="featured">Our order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>

    <p class="pl-count" role="status" data-count>Showing ${products.length} of ${products.length} products. All in stock.</p>

    <h2 class="visually-hidden">Products</h2>
    <ul class="pl-grid" data-grid>
      ${products
        .map(
          (p, i) =>
            card(p, { eager: i < 3 }).replace(
              '<li class="pl-card">',
              `<li class="pl-card" data-category="${p.category}" data-price="${p.price}" data-name="${esc(p.name)}" data-order="${i}">`,
            ),
        )
        .join('\n')}
    </ul>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- product */

export function productPage(product) {
  const cat = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 3);

  const specRows = Object.entries(product.specs)
    .map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`)
    .join('');

  return {
    file: `products/${product.slug}.html`,
    path: `/products/${product.slug}.html`,
    current: '/shop.html',
    activeCategory: product.category,
    title: product.name,
    description: `${product.summary} ${money(product.price)}. ${T.returnWindow} returns and free US standard shipping over ${T.freeShippingOver}.`,
    ogImage: `/assets/images/${product.image}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      description: product.summary,
      image: `${B.siteUrl}/assets/images/${product.image}`,
      brand: { '@type': 'Brand', name: B.brandName },
      offers: {
        '@type': 'Offer',
        url: `${B.siteUrl}/products/${product.slug}.html`,
        priceCurrency: 'USD',
        price: product.price.toFixed(2),
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: { '@type': 'Organization', name: B.legalName },
      },
    },
    body: `
${breadcrumb([
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: `/shop.html?category=${cat.id}`, label: cat.name },
  { label: product.name },
])}

<section class="section">
  <div class="wrap pl-product">
    <div class="pl-product__media">
      ${productImage(product.image, product.alt, { sizes: '(max-width: 860px) 92vw, 46vw', eager: true })}
    </div>

    <div class="pl-product__info">
      <p class="pl-badge">${esc(cat.name)}</p>
      <h1>${esc(product.name)}</h1>
      <p class="pl-product__price">${money(product.price)}</p>
      <p class="pl-product__sku">SKU ${esc(product.sku)} · <strong class="pl-instock">In stock</strong></p>

      <p>${esc(product.description)}</p>

      <div class="pl-product__buy">
        <div class="pl-qty">
          <label for="qty">Quantity</label>
          <select id="qty" data-qty>
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `<option value="${n}">${n}</option>`).join('')}
          </select>
        </div>
        <button class="pl-btn pl-btn--solid" type="button" data-add="${product.sku}" data-use-qty>
          Add to cart — ${money(product.price)}
        </button>
      </div>
      <p class="pl-added" role="status" data-added></p>

      <div class="pl-note">
        <p><strong>Shipping:</strong> ${esc(shippingSummary)}</p>
        <p><strong>Returns:</strong> ${esc(returnSummary)}
           <a href="/policies/refund-returns.html">Read the full policy</a>.</p>
        <p>Sales tax is calculated at checkout from your delivery address. There are no handling fees
           or surcharges.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap pl-cols">
    <div>
      <h2 class="pl-h2">What it does</h2>
      <ul>${product.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <h2 class="pl-h2">What is in the box</h2>
      <ul>${product.inBox.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="pl-h2">Specifications</h2>
      <div class="table-scroll">
        <table class="pl-specs">
          <caption class="visually-hidden">Specifications for the ${esc(product.name)}</caption>
          <tbody>${specRows}</tbody>
        </table>
      </div>
      <h2 class="pl-h2">Customer reviews</h2>
      <p>No customer reviews yet. Pottering Lane is a new shop and we will not publish a review until a
      real customer writes one. We do not buy, incentivise or write reviews.</p>
    </div>
  </div>
</section>

${
  related.length
    ? `<section class="section">
  <div class="wrap">
    <h2 class="pl-h2">Also in ${esc(cat.name)}</h2>
    ${cardGrid(related)}
  </div>
</section>`
    : ''
}
`,
  };
}

/* ------------------------------------------------------------------- cart */

export function cart() {
  return {
    file: 'cart.html',
    path: '/cart.html',
    current: '/cart.html',
    title: 'Your cart',
    description: `Review your Pottering Lane order. Standard shipping is ${T.standardShipping}, free over ${T.freeShippingOver}, and returns are open for ${T.returnWindow}.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Your cart</h1>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div class="pl-empty" data-cart-empty>
      <div class="pl-panel">
        <h2>There is nothing in your cart yet</h2>
        <p>Have a look at the twelve things we sell — or call ${esc(B.phone)} during ${esc(B.hours)}
        and we will take the order for you.</p>
        <a class="pl-btn pl-btn--solid" href="/shop.html">Go to the shop</a>
      </div>
    </div>

    <div class="pl-cartlayout" data-cart-layout hidden>
      <div>
        <ul class="pl-cartlist" data-cart-list></ul>

        <fieldset class="pl-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="pl-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="pl-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="pl-radio__note">Arrives in ${esc(m.estimate)} after it ships. ${esc(m.note)}</span>
            </span>
          </label>`,
            )
            .join('')}
          <p class="meta-line">We ship your order within ${esc(T.processing)} of receiving it. Delivery
          estimates are the carrier&rsquo;s transit time after that.</p>
        </fieldset>
      </div>

      <aside class="pl-summary" aria-label="Order summary">
        <h2 class="pl-h3">Order summary</h2>
        <div class="pl-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="pl-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="pl-sumrow"><span>Sales tax</span><span class="meta-line">Calculated at checkout from your delivery address</span></div>
        <div class="pl-sumrow pl-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line" data-freeship></p>

        <a class="pl-btn pl-btn--solid pl-btn--block" href="/checkout.html">Go to checkout</a>
        <a class="pl-btn pl-btn--block" href="/shop.html">Keep shopping</a>

        <p class="meta-line">Returns are open for ${esc(T.returnWindow)} from delivery —
          <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>. See also the
          <a href="/policies/shipping.html">Shipping Policy</a>,
          <a href="/policies/terms.html">Terms of Service</a>,
          <a href="/policies/privacy.html">Privacy Policy</a> and
          <a href="/contact.html">how to contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* --------------------------------------------------------------- checkout */

const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

export function checkout() {
  return {
    file: 'checkout.html',
    path: '/checkout.html',
    current: '/checkout.html',
    title: 'Checkout',
    description: 'Complete your Pottering Lane order. Item prices, shipping and the tax position are all shown before payment.',
    body: `
<section class="section">
  <div class="wrap">
    <h1>Checkout</h1>
    <p class="lede">Every charge is listed below before you pay. There are no handling fees, service fees
    or surcharges.</p>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div class="pl-empty" data-cart-empty>
      <div class="pl-panel">
        <h2>Your cart is empty</h2>
        <p>Add something to your cart first and the checkout will open.</p>
        <a class="pl-btn pl-btn--solid" href="/shop.html">Go to the shop</a>
      </div>
    </div>

    <div class="pl-cartlayout" data-cart-layout hidden>
      <form data-checkout novalidate>
        <fieldset class="pl-fieldset">
          <legend>Contact</legend>
          <div class="pl-field">
            <label for="email">Email address</label>
            <span class="hint" id="email-hint">We use this only to send your order confirmation and shipping updates.</span>
            <input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint" required>
          </div>
          <div class="pl-field">
            <label for="phone">Phone number (optional)</label>
            <span class="hint" id="phone-hint">Only used if the carrier cannot find your address.</span>
            <input id="phone" name="phone" type="tel" autocomplete="tel" aria-describedby="phone-hint">
          </div>
          <p class="meta-line"><strong>Notice at collection:</strong> we collect your name, address, email
          and optional phone number to fulfil this order, and your payment details go straight to our
          payment processor. We do not sell or share personal information. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</p>
        </fieldset>

        <fieldset class="pl-fieldset">
          <legend>Shipping address</legend>
          <p class="meta-line">We ship within the United States only.</p>
          <div class="pl-cols2">
            <div class="pl-field">
              <label for="firstName">First name</label>
              <input id="firstName" name="firstName" autocomplete="given-name" required>
            </div>
            <div class="pl-field">
              <label for="lastName">Last name</label>
              <input id="lastName" name="lastName" autocomplete="family-name" required>
            </div>
          </div>
          <div class="pl-field">
            <label for="address1">Street address</label>
            <input id="address1" name="address1" autocomplete="address-line1" required>
          </div>
          <div class="pl-field">
            <label for="address2">Apartment, suite or unit (optional)</label>
            <input id="address2" name="address2" autocomplete="address-line2">
          </div>
          <div class="pl-cols3">
            <div class="pl-field">
              <label for="city">City or town</label>
              <input id="city" name="city" autocomplete="address-level2" required>
            </div>
            <div class="pl-field">
              <label for="state">State</label>
              <select id="state" name="state" autocomplete="address-level1" required>
                <option value="">Choose a state</option>
                ${STATES.map((s) => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>
            <div class="pl-field">
              <label for="zip">ZIP code</label>
              <input id="zip" name="zip" inputmode="numeric" autocomplete="postal-code" required>
            </div>
          </div>
          <div class="pl-field">
            <label for="notes">Delivery notes (optional)</label>
            <span class="hint" id="notes-hint">For example: leave in the porch, the side gate is unlocked.</span>
            <textarea id="notes" name="notes" rows="3" aria-describedby="notes-hint"></textarea>
          </div>
        </fieldset>

        <fieldset class="pl-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="pl-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="pl-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="pl-radio__note">We ship within ${esc(T.processing)}; the carrier then takes ${esc(m.estimate)}.</span>
            </span>
          </label>`,
            )
            .join('')}
        </fieldset>

        <button class="pl-btn pl-btn--solid pl-btn--block" type="submit">Review my order</button>

        <div class="pl-review" data-review hidden>
          <h2 class="pl-h3">Order review</h2>
          <p data-review-address></p>
          <p data-review-shipping></p>

          <!-- ==================================================================
               PAYMENT INTEGRATION POINT

               Mount the payment processor here — Stripe Payment Element, PayPal
               Buttons, or a Shopify Buy Button. It must:

                 1. Receive the server-recalculated total. Never trust the amount
                    computed in this browser.
                 2. Add sales tax for the delivery address before charging. The
                    figure shown is deliberately labelled "total before tax" until
                    that calculation exists.
                 3. Create the order only after the processor confirms the payment,
                    then redirect to a real confirmation page.
                 4. Run over HTTPS with a valid certificate — Google Merchant Center
                    requires a secured checkout.

               Until a processor is connected, this build must never show a success
               or confirmation screen. Claiming an order was placed when no payment
               was taken is a Google Ads misrepresentation violation and an FTC
               deception issue.
               ================================================================== -->

          <div class="pl-note pl-note--white">
            <p><strong>No payment processor is connected to this site yet.</strong> Nothing has been
            charged and no order has been placed. To buy any of these items today, call
            ${esc(B.phone)} during ${esc(B.hours)} or email
            <a href="mailto:${B.email}">${B.email}</a>.</p>
          </div>
        </div>
      </form>

      <aside class="pl-summary" aria-label="Order summary">
        <h2 class="pl-h3">Your order</h2>
        <ul class="pl-minilist" data-cart-list></ul>
        <div class="pl-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="pl-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="pl-sumrow"><span>Sales tax</span><span class="meta-line">Added at the payment step from your delivery address</span></div>
        <div class="pl-sumrow pl-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line">By placing an order you accept our <a href="/policies/terms.html">Terms of
        Service</a>. See the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>
        (${esc(T.returnWindow)} from delivery), the <a href="/policies/shipping.html">Shipping Policy</a>
        and the <a href="/policies/privacy.html">Privacy Policy</a>. Questions before you order?
        <a href="/contact.html">Contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* ------------------------------------------------------------------ about */

export function about() {
  return {
    file: 'about.html',
    path: '/about.html',
    current: '/about.html',
    title: 'About us',
    description: `${B.legalName} is a small garden shop in ${B.address.city}, ${B.address.state}. We sell twelve things and print the reach and weight of every one.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>About Pottering Lane</h1>
    <p class="lede">We are a small mail-order garden shop in ${esc(B.address.city)},
    ${esc(B.address.state)}. We sell twelve things. We would rather do that well than sell four hundred
    badly.</p>

    <h2 class="pl-h2">What we sell</h2>
    <p>Kneeler seats, long-handled tools, raised planters, feeders, gauges, hoses light enough to carry
    one-handed, and gloves in pairs of two so one can dry. Four corners: Sit &amp; Kneel, Tools in Hand,
    Beds &amp; Pots, and Watching &amp; Watering.</p>
    <p>None of it is medical equipment and none of it is sold as such. These are ordinary garden tools,
    chosen because they have long handles, thick grips, honest load ratings and clear markings. If
    something needs assembling or has a weight limit, we print that on the product page rather than
    leaving you to find out.</p>

    <h2 class="pl-h2">Why we started</h2>
    <p>It began with a hose. One of us was buying a replacement for a parent whose wrists had had enough
    of the old rubber one, and read eleven listings without finding the weight of a single hose on any of
    them. Length, yes. Burst pressure, yes. Weight — the one number that decided whether it could be
    carried to the far bed — nowhere.</p>
    <p>That is a small annoyance, and it is also the whole problem. Somebody had the measurement. Nobody
    printed it. So the rule here is simple: every product page carries the dimensions, the weight, the
    materials, the load rating and what is in the box. The kneeler is rated to 330 lb and we say so. The
    cart holds 300 lb and we say so. The hose weighs 2.4 lb empty, which is the reason to buy it.</p>

    <h2 class="pl-h2">How we write about products</h2>
    <ul>
      <li>We describe what a thing <em>is</em> — its reach, weight, materials and fastenings — not what it
      will do for your body. We are a garden shop, not a clinic, and we are not qualified to make claims
      about anybody&rsquo;s joints.</li>
      <li>We do not use &ldquo;best&rdquo;, &ldquo;number one&rdquo; or &ldquo;award-winning&rdquo;. We
      have not won anything and neither has the trowel.</li>
      <li>There are no star ratings on this site. We are new, nobody has reviewed us yet, and inventing
      reviews is both dishonest and illegal under the Federal Trade Commission&rsquo;s rule on consumer
      reviews.</li>
      <li>The price on the page is the price charged. Shipping is added at the cart, sales tax at
      checkout, and nothing else is added anywhere.</li>
    </ul>

    <h2 class="pl-h2">How we handle orders</h2>
    <p>We ship your order within ${esc(T.processing)} of receiving it, by ${esc(T.carriers)}, within the
    United States. Standard shipping is ${esc(T.standardShipping)} and free over
    ${esc(T.freeShippingOver)}. If anything is unused and still in its packaging you have
    ${esc(T.returnWindow)} from delivery to send it back — the full rules are in the
    <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.</p>
    <p>${esc(T.returnWindow)} is longer than most shops offer, and that is deliberate: a tool bought in
    February may not meet soil until April. If something arrives damaged or we send the wrong thing, we
    pay the return shipping and we sort it out.</p>

    <h2 class="pl-h2">Ordering without a computer</h2>
    <p>Some people would simply rather talk to somebody. Call ${esc(B.phone)} during ${esc(B.hours)} and
    we will take the order over the phone, read the prices back to you and post a paper receipt with the
    parcel if you would like one.</p>

    <h2 class="pl-h2">Where to find us</h2>
    <p>${esc(B.legalName)}<br>
    ${esc(B.addressOneLine)}<br>
    <a href="mailto:${B.email}">${B.email}</a> · <a href="${B.phoneHref}">${B.phone}</a><br>
    ${esc(B.hours)}</p>
    <p class="meta-line">This is a mail-order shop and the address above is our office and returns
    address. It is not a garden centre, so please do not travel to it expecting to browse.</p>

    <p class="pl-more"><a class="pl-btn pl-btn--solid" href="/shop.html">See what we sell</a></p>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- contact */

export function contact() {
  return {
    file: 'contact.html',
    path: '/contact.html',
    current: '/contact.html',
    title: 'Contact us',
    description: `Email ${B.email}, call ${B.phone} (${B.hours}), or write to ${B.addressOneLine}. We answer email within one business day.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Contact us</h1>
    <p class="lede">A real person reads every message. ${esc(B.responseTime)}</p>

    <div class="pl-cartlayout">
      <form data-contact novalidate>
        <fieldset class="pl-fieldset">
          <legend>Send us a message</legend>

          <div class="pl-field">
            <label for="name">Your name</label>
            <input id="name" name="name" autocomplete="name" required>
          </div>

          <div class="pl-field">
            <label for="cemail">Your email address</label>
            <span class="hint" id="cemail-hint">We reply to this address and use it for nothing else.</span>
            <input id="cemail" name="email" type="email" autocomplete="email" aria-describedby="cemail-hint" required>
          </div>

          <div class="pl-field">
            <label for="topic">What is it about?</label>
            <select id="topic" name="topic">
              <option>A question before I order</option>
              <option>An existing order</option>
              <option>A return or refund</option>
              <option>Something arrived damaged</option>
              <option>Accessibility of this website</option>
              <option>Privacy request</option>
              <option>Something else</option>
            </select>
          </div>

          <div class="pl-field">
            <label for="message">Your message</label>
            <span class="hint" id="message-hint">If it is about an order, the order number helps — but it is not essential.</span>
            <textarea id="message" name="message" rows="6" aria-describedby="message-hint" required></textarea>
          </div>

          <button class="pl-btn pl-btn--solid" type="submit">Send message</button>
          <div class="pl-note pl-note--white" data-contact-note hidden>
            <p><strong>This form is not connected to a mail server yet</strong>, so nothing was sent and
            nothing was stored. Please email <a href="mailto:${B.email}">${B.email}</a> or call
            <a href="${B.phoneHref}">${B.phone}</a> instead — we would still very much like to hear from
            you.</p>
          </div>
        </fieldset>
      </form>

      <aside class="pl-panel" aria-label="Other ways to reach us">
        <h2 class="pl-h3">Other ways to reach us</h2>

        <h3>Email</h3>
        <p><a href="mailto:${B.email}">${B.email}</a><br>
        <span class="meta-line">${esc(B.responseTime)}</span></p>

        <h3>Phone</h3>
        <p><a href="${B.phoneHref}">${B.phone}</a><br>
        <span class="meta-line">${esc(B.hours)}</span><br>
        <span class="meta-line">Outside those hours, leave a message and we will call back the next
        business day.</span></p>

        <h3>Post</h3>
        <address>
          ${esc(B.legalName)}<br>
          ${esc(B.address.line1)}<br>
          ${esc(B.address.city)}, ${B.address.state} ${B.address.zip}<br>
          ${esc(B.address.country)}
        </address>
        <p class="meta-line">This is also the returns address. Please email us for a return number before
        sending anything back — see the <a href="/policies/refund-returns.html">Refund &amp; Return
        Policy</a>.</p>

        <h3>Privacy requests</h3>
        <p class="meta-line">To access, correct or delete your information, email ${B.email} with
        &ldquo;Privacy request&rdquo; in the subject, or call the number above. You do not need an
        account. See the <a href="/policies/privacy.html">Privacy Policy</a>.</p>

        <h3>Accessibility</h3>
        <p class="meta-line">If any part of this site is hard to use, tell us and we will fix it and reply
        within five business days. See the
        <a href="/policies/accessibility.html">Accessibility Statement</a>.</p>

        <h3>Order by phone</h3>
        <p class="meta-line">We are happy to take an order over the phone. Standard shipping is
        ${esc(T.standardShipping)}, free over ${esc(T.freeShippingOver)}, and we ship within
        ${esc(T.processing)}.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- faq */

const FAQ = [
  {
    group: 'Orders',
    items: [
      ['Do I need an account to buy something?', `No. There is no account system on this site at all. You enter a delivery address at checkout and that is it. Nothing is kept behind a login.`],
      ['Can I order over the phone instead?', `Yes. Call ${B.phone} during ${B.hours} and we will take the order, read the prices back to you and confirm the total before anything is charged. We can post a paper receipt with the parcel if you would like one.`],
      ['How do I change or cancel an order?', `Email ${B.email} or call ${B.phone} as soon as you can. If the parcel has not been handed to the carrier we will change or cancel it and refund you in full. If it has already gone, treat it as a return — see the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.`],
      ['Is everything on the site actually in stock?', `Yes. We only list what we can ship. Every product page says &ldquo;In stock&rdquo; because that is the only state we list. If something sells out it comes off the site until it is back.`],
    ],
  },
  {
    group: 'Shipping',
    items: [
      ['How quickly do you ship?', `We ship your order within ${T.processing} of receiving it. That is a commitment, not an average. After it ships, standard delivery takes ${T.standardDelivery} and expedited takes ${T.expeditedDelivery} — those are the carrier&rsquo;s transit times.`],
      ['What does shipping cost?', `Standard shipping is ${T.standardShipping}, and it is free on orders over ${T.freeShippingOver}. Expedited shipping is ${T.expeditedPrice} on any order. There are no handling fees, no oversize fees and no surcharges — the raised planter ships at the same rate as a pair of gloves. Sales tax is calculated at checkout from your delivery address.`],
      ['Where do you ship to?', `The United States only, by ${T.carriers}. We do not ship internationally, to APO/FPO addresses, or oversized items to PO Boxes. Full detail is in the <a href="/policies/shipping.html">Shipping Policy</a>.`],
      ['What if my order is going to be late?', `If we find we cannot ship within ${T.processing} we contact you before that deadline, give you a definite new shipping date, and offer you the choice of waiting or cancelling for a full refund. If we cannot give a firm date, or the delay is more than 30 days, we cancel and refund unless you tell us otherwise. This is required by the Federal Trade Commission&rsquo;s Mail, Internet, or Telephone Order Merchandise Rule and we follow it.`],
    ],
  },
  {
    group: 'Returns',
    items: [
      ['How long do I have to return something?', `${T.returnWindow} from the day it is delivered, unused and in its original packaging. Email ${B.email} for a return number before you send anything back. We give longer than most shops because a tool bought in winter may not be used until spring.`],
      ['Who pays the return shipping?', `If you have changed your mind, you do. If the item arrived damaged, faulty, or is not what you ordered, we do — we send a prepaid label and you are not out of pocket.`],
      ['When do I get my money back?', `We inspect returns within ${T.inspectionTime} of arrival and refund to your original payment method within ${T.refundTime} of that. Your bank may then take a few days to show it. If you paid by cash equivalent we refund within seven working days, as the FTC rule requires.`],
      ['Is anything not returnable?', `Gloves worn in the garden and hoses or cans that have been filled cannot come back, for hygiene and resale reasons, and neither can anything assembled with the fixings used. Nothing else is excluded. The full list is in the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.`],
    ],
  },
  {
    group: 'Payments',
    items: [
      ['What can I pay with?', `Once our payment processor is connected, major credit and debit cards. Card details go straight to the processor over an encrypted connection — they never touch our servers and we never see or store a card number.`],
      ['Is the checkout working right now?', `Not yet. This site is complete but no payment processor has been connected, so the checkout stops at the order review and tells you so plainly. We will not show a fake confirmation. Until it is live, order by phone on ${B.phone}.`],
      ['Will I be charged anything extra?', `No. The price on the product page is the price charged. Shipping is shown in the cart before you go to checkout, and sales tax is calculated at the payment step from your delivery address. There is nothing else.`],
    ],
  },
  {
    group: 'Accounts and privacy',
    items: [
      ['What do you do with my details?', `We use your name, address and email to fulfil the order and to contact you about it. We do not sell or share personal information. Order records are kept for seven years for tax purposes; newsletter addresses are kept until you unsubscribe. Full detail, including your California rights, is in the <a href="/policies/privacy.html">Privacy Policy</a>.`],
      ['How do I unsubscribe from the newsletter?', `Use the unsubscribe link in any message, or email ${B.email} and ask. We act on it within ten business days and we never require anything beyond your email address.`],
    ],
  },
  {
    group: 'Accessibility',
    items: [
      ['Is this site built for people who find small type hard?', `That is the point of it. Body text is 18px with a 1.65 line height, contrast meets WCAG 2.1 AA, every button is at least 44 pixels tall with a printed word on it, and the whole site works from the keyboard with a visible focus outline. Nothing moves on its own and nothing pops up over what you are reading.`],
      ['Something on the site is still hard to use. What now?', `Tell us. Email ${B.email} with &ldquo;Accessibility&rdquo; in the subject or call ${B.phone}. We reply within five business days and we will take the order over the phone in the meantime. See the <a href="/policies/accessibility.html">Accessibility Statement</a>.`],
    ],
  },
];

export function faq() {
  const body = FAQ.map(
    (g, gi) => `<h2 class="pl-h2">${esc(g.group)}</h2>
${g.items
  .map(
    ([q, a], i) => `<div class="pl-acc">
  <h3><button class="pl-acc__btn" type="button" aria-expanded="${gi === 0 && i === 0}" aria-controls="acc-${gi}-${i}" id="accbtn-${gi}-${i}">
    ${esc(q)}<span class="pl-acc__sign" aria-hidden="true">${gi === 0 && i === 0 ? '−' : '+'}</span>
  </button></h3>
  <div class="pl-acc__panel" id="acc-${gi}-${i}" role="region" aria-labelledby="accbtn-${gi}-${i}"${gi === 0 && i === 0 ? '' : ' hidden'}>
    <p>${a}</p>
  </div>
</div>`,
  )
  .join('')}`,
  ).join('\n');

  return {
    file: 'faq.html',
    path: '/faq.html',
    current: '/faq.html',
    title: 'Frequently asked questions',
    description: `Answers on orders, shipping (${T.processing} to ship), returns (${T.returnWindow}), payments, accounts and accessibility at Pottering Lane.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Frequently asked questions</h1>
    <p class="lede">If your question is not here, email <a href="mailto:${B.email}">${B.email}</a> or call
    <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}.</p>
    ${body}
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- credits */

export function credits(creditRows) {
  const rows = creditRows
    .map(
      (c) => `<tr>
  <th scope="row" class="pl-mono">${esc(c.file)}</th>
  <td>${c.source ? `<a href="${esc(c.source)}" rel="noopener">${esc(c.title)}</a>` : esc(c.title)}</td>
  <td>${esc(c.creator)}</td>
  <td>${esc(c.license)}</td>
</tr>`,
    )
    .join('');

  return {
    file: 'credits.html',
    path: '/credits.html',
    current: '',
    title: 'Photo credits',
    description: 'Credits and licence details for every photograph used on Pottering Lane, with a link to each original source.',
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Photo credits</h1>
    <p class="lede">Every image on this site is stored on our own server — we do not load pictures from
    anyone else&rsquo;s. The photographs below are used under Creative Commons licences, which ask that
    the photographer is credited. This page is that credit.</p>

    <div class="pl-note">
      <p><strong>These are illustrative photographs, not our own product shots.</strong> They show the
      kind of item described, not the exact unit we will ship. If the precise finish matters to you, call
      <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)} and we will describe it.</p>
    </div>

    <div class="table-scroll">
      <table>
        <caption class="visually-hidden">Photograph credits and licences</caption>
        <thead><tr><th scope="col">File</th><th scope="col">Photograph</th><th scope="col">By</th><th scope="col">Licence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    <h2 class="pl-h2">About the licences</h2>
    <p><strong>CC BY</strong> allows reuse, including commercially, provided the creator is credited.
    <strong>CC BY-SA</strong> adds that adaptations must be shared under the same licence; the crops and
    re-encodings on this site are adaptations and are offered under CC BY-SA 4.0 accordingly.
    <strong>CC0</strong> and <strong>Public domain</strong> carry no conditions, and we credit them
    anyway.</p>
    <p>Images were sourced through <a href="https://commons.wikimedia.org/" rel="noopener">Wikimedia
    Commons</a> and <a href="https://openverse.org/" rel="noopener">Openverse</a>, filtered to licences
    that permit commercial use. Each was downloaded, fitted to a 4:3 frame, resized to at most 1200
    pixels wide and re-encoded as WebP.</p>

    <h2 class="pl-h2">Questions about an image</h2>
    <p>If you are the photographer of anything here and would like the credit corrected or the image
    removed, email <a href="mailto:${B.email}">${B.email}</a> and we will act the same working day.</p>

    <p class="pl-more"><a class="pl-btn" href="/shop.html">Back to the shop</a></p>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- 404 */

export function notFound() {
  return {
    file: '404.html',
    path: '/404.html',
    current: '',
    title: 'Page not found',
    description: 'That page does not exist on Pottering Lane. Here are the places you might have been looking for.',
    body: `
<section class="section pl-404">
  <div class="wrap--narrow">
    <h1>We could not find that page</h1>
    <p class="lede">The address may have been mistyped, or the page may have moved. Nothing is broken on
    your end.</p>
    <ul class="pl-404__links">
      <li><a class="pl-btn pl-btn--solid" href="/index.html">Home</a></li>
      <li><a class="pl-btn" href="/shop.html">Shop</a></li>
      <li><a class="pl-btn" href="/faq.html">FAQ</a></li>
      <li><a class="pl-btn" href="/contact.html">Contact</a></li>
    </ul>
    <p>If you followed a link from somewhere on this site, please tell us where it was — email
    <a href="mailto:${B.email}">${B.email}</a> or call <a href="${B.phoneHref}">${B.phone}</a> during
    ${esc(B.hours)} — and we will fix it.</p>
  </div>
</section>
`,
  };
}
