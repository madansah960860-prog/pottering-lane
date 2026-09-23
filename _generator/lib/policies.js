/**
 * The five policy pages, generated from the single source of truth.
 *
 * Nothing in here types a business value or a policy term as a literal — every one
 * is interpolated, so a change in data/business.js updates all five pages and the
 * rest of the site at the same time. Section lists follow the store-policy-pages
 * skill; the build rules they satisfy are cited in POLICY_RESEARCH.md.
 */

import { business, terms, policyDetail } from '../data/business.js';
import { esc } from './layout.js';

const B = business;
const T = terms;

const contactBlock = `<h2>Contact</h2>
<p>
  ${esc(B.legalName)}<br>
  ${esc(B.addressOneLine)}<br>
  <a href="mailto:${B.email}">${B.email}</a><br>
  <a href="${B.phoneHref}">${B.phone}</a><br>
  ${esc(B.hours)}
</p>`;

const effective = `<p class="meta-line"><strong>Effective date:</strong> ${esc(B.effectiveDate)}</p>`;

/* ------------------------------------------------------------------ privacy */

const privacy = {
  slug: 'privacy',
  title: 'Privacy Policy',
  description: `How ${B.legalName} collects, uses, keeps and shares personal information, including your California CCPA and CPRA rights and how to make a privacy request.`,
  body: `
<h1>Privacy Policy</h1>
${effective}
<p class="lede">This policy explains what ${esc(B.legalName)} collects about you, why, how long we keep
it, who else sees it, and what you can tell us to do about it. It is written to be read.</p>

<h2>Who we are</h2>
<p>${esc(B.legalName)} is a mail-order garden shop. Our mailing address, which is also our returns
address, is ${esc(B.addressOneLine)}. You can email <a href="mailto:${B.email}">${B.email}</a> or call
<a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}. We are the business responsible for the
personal information described here.</p>
<p>We sell garden tools and equipment to customers in the United States. We are not an advertising
business, we do not run an advertising network, and we have no interest in building a profile of you.</p>

<h2>What we collect</h2>
<p>We collect four kinds of information, and no more than these.</p>
<div class="table-scroll"><table>
<caption class="visually-hidden">Categories of personal information collected and why</caption>
<thead><tr><th scope="col">Category</th><th scope="col">What it includes</th><th scope="col">Why we collect it</th></tr></thead>
<tbody>
<tr><th scope="row">Identifiers and contact details</th><td>Your name, delivery address, email address and, if you give it, a phone number.</td><td>To take, pack, ship and support your order, and to reach you if there is a problem with the delivery.</td></tr>
<tr><th scope="row">Commercial information</th><td>What you ordered, the price, the shipping method and the order date.</td><td>To fulfil the order, handle returns and refunds, and keep the tax records we are legally required to keep.</td></tr>
<tr><th scope="row">Payment information</th><td>Handled by our payment processor. We receive a confirmation and the last four digits of the card — never the full number, never the security code.</td><td>To confirm that payment succeeded and to issue refunds to the original method.</td></tr>
<tr><th scope="row">Technical information</th><td>IP address, browser type, the pages visited and the time of the visit.</td><td>To keep the site working, to detect abuse, and to count visits in aggregate.</td></tr>
</tbody></table></div>
<p>We do not collect health information, biometric information, precise location, racial or ethnic
origin, religious beliefs, union membership, or any other category that US law treats as sensitive. We
do not ask for a date of birth. We have no account system, so we hold no passwords.</p>

<h2>How we use it</h2>
<ul>
<li>To take payment for, pack and ship the things you order.</li>
<li>To email you an order confirmation and a shipping notification.</li>
<li>To answer your emails and phone calls, and to process returns and refunds.</li>
<li>To send our monthly newsletter — but only if you asked for it.</li>
<li>To keep accounting and tax records, which US law requires us to retain.</li>
<li>To detect and prevent fraud and abuse of the website.</li>
</ul>
<p>We do not use your information to build advertising profiles, to score you, or to make any automated
decision that produces a legal or similarly significant effect.</p>

<h2>Cookies and similar technologies</h2>
<p>This site sets a very small number of things in your browser:</p>
<ul>
<li><strong>Your cart.</strong> Stored in your browser&rsquo;s local storage so the cart survives a
reload. It never leaves your device until you place an order.</li>
<li><strong>The cookie notice state.</strong> One value recording that you dismissed the notice, so it
does not reappear on every page.</li>
<li><strong>Aggregate visit counting.</strong> A first-party measure of how many people visited which
pages. It is not tied to your name or your order.</li>
</ul>
<p>There are no advertising cookies, no tracking pixels, no social-media widgets and no third-party
analytics scripts on this site. You can block or delete cookies in your browser settings; the shop will
still work, but your cart will empty when you close the tab. The cookie notice on this site can be
dismissed and never covers the page content.</p>
<p><strong>Global Privacy Control.</strong> If your browser sends a Global Privacy Control signal we
treat it as a valid opt-out of any sale or sharing of personal information. Because we do not sell or
share personal information at all, there is nothing for the signal to switch off — but it is honoured.</p>

<h2>Who we share it with</h2>
<p>We share the minimum needed to get a parcel to you, and only with businesses that process
information on our instructions:</p>
<ul>
<li><strong>Our payment processor</strong>, which takes and holds the card details we never see.</li>
<li><strong>The carriers</strong> — we ship by ${esc(T.carriers)} — which receive the delivery name,
address and phone number printed on the label.</li>
<li><strong>Our email provider</strong>, which sends order confirmations and, if you asked for it, the
newsletter.</li>
<li><strong>Our accountant and, where the law compels it, a government authority</strong> — for example
a valid subpoena or a tax audit.</li>
</ul>
<p><strong>We do not sell personal information, and we do not share it for cross-context behavioural
advertising.</strong> We have never done so and we have no plans to. If that ever changed we would
update this policy and give notice before the change took effect.</p>

<h2>How long we keep it</h2>
<div class="table-scroll"><table>
<caption class="visually-hidden">Retention periods</caption>
<thead><tr><th scope="col">Information</th><th scope="col">Kept for</th><th scope="col">Reason</th></tr></thead>
<tbody>
<tr><th scope="row">Order records and invoices</th><td>7 years from the order date</td><td>US tax and accounting record-keeping requirements</td></tr>
<tr><th scope="row">Support emails and call notes</th><td>24 months</td><td>So we can look up a past problem if you contact us again</td></tr>
<tr><th scope="row">Newsletter subscription</th><td>Until you unsubscribe, then a suppression record only</td><td>So we do not email you again by accident</td></tr>
<tr><th scope="row">Aggregate visit counts</th><td>14 months</td><td>To compare one season with the last</td></tr>
<tr><th scope="row">Cart contents</th><td>In your browser only, until you clear it</td><td>It is never sent to us unless you order</td></tr>
</tbody></table></div>

<h2 id="california">Your California privacy rights (CCPA and CPRA)</h2>
<p>If you live in California, the California Consumer Privacy Act as amended by the California Privacy
Rights Act gives you the following rights. We extend all of them to every US customer, because
operating two standards would be more trouble than it is worth.</p>
<ul>
<li><strong>The right to know.</strong> You can ask what categories of personal information we collected
about you, where it came from, why we collected it, who we disclosed it to, and you can ask for the
specific pieces of information we hold. You may make this request twice in a twelve-month period at no
charge.</li>
<li><strong>The right to delete.</strong> You can ask us to delete the personal information we hold
about you. We must keep order and tax records for the seven years described above, so we will delete
everything we are not legally required to retain and tell you exactly what we kept and why.</li>
<li><strong>The right to correct.</strong> You can ask us to fix personal information that is
inaccurate.</li>
<li><strong>The right to opt out of sale or sharing.</strong> See the section below.</li>
<li><strong>The right to limit the use of sensitive personal information.</strong> We do not collect any
sensitive personal information, so there is nothing to limit — but the right stands.</li>
<li><strong>The right not to be discriminated against.</strong> We will not charge you a different
price, give you a lower level of service, or refuse to sell to you because you exercised a privacy
right. Ever.</li>
</ul>

<h3>How to make a request</h3>
<p>Email <a href="mailto:${B.email}">${B.email}</a> with &ldquo;Privacy request&rdquo; in the subject
line, or call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}. Both channels work for
every right listed above.</p>
<p><strong>You do not need an account to make a request</strong> — there is no account system on this
site and we would not require one in any case. To protect you, we will ask you to confirm details we
already hold, such as the email address and delivery address on a recent order, so that we do not hand
your information to somebody else.</p>
<p><strong>Authorised agents.</strong> Somebody may make a request on your behalf. We will ask the agent
for written permission signed by you, and we may contact you directly to confirm that you authorised
it.</p>
<p><strong>How long we take.</strong> We acknowledge your request within ten business days and respond
substantively within <strong>45 calendar days</strong>. If a request is genuinely complicated we may
take one further 45-day extension — a maximum of 90 days — and we will tell you before the first 45
days are up, with the reason.</p>

<h2 id="do-not-sell">Do Not Sell or Share My Personal Information</h2>
<p><strong>${esc(B.legalName)} does not sell personal information and does not share it for
cross-context behavioural advertising.</strong> There is no advertising network on this site, no
tracking pixel and no data broker relationship. That is why this link leads to an explanation rather
than a switch: there is nothing to switch off.</p>
<p>You can still record an opt-out with us, and we will honour it permanently. Email
<a href="mailto:${B.email}">${B.email}</a> with &ldquo;Do not sell or share&rdquo; in the subject line,
or call <a href="${B.phoneHref}">${B.phone}</a>. We will confirm in writing. As described above, a
Global Privacy Control signal from your browser is treated the same way.</p>

<h2>Other US state privacy rights</h2>
<p>Residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana and other states with
comprehensive privacy laws have rights of access, correction, deletion, portability and opt-out that
closely mirror the California rights above. We apply the same process and the same timescales to every
request regardless of where you live, and we use the same two contact channels. Where a state law gives
you a right to appeal a refused request, you may appeal by replying to our decision email; we will
review it and respond within 45 days.</p>

<h2>Children</h2>
<p>This shop is intended for adults. We do not knowingly collect personal information from anyone under
16, and we have no account system that a child could sign up to. If you believe a child has given us
information, email ${B.email} and we will delete it.</p>

<h2>Security</h2>
<p>The site is served over an encrypted HTTPS connection. Card details are entered directly into our
payment processor&rsquo;s systems and never reach ours. Access to order records is limited to the people
who need it to pack parcels and answer the phone. No system is perfectly secure, and we will not claim
otherwise; if a breach affects your information, we will tell you and the relevant authorities as the
law requires.</p>

<h2>Changes to this policy</h2>
<p>If we change this policy we will update the effective date at the top and, where the change is
significant, say so on the home page for at least 30 days. We will never apply a materially different
use to information we already hold without telling you first.</p>

${contactBlock}
<p class="meta-line">See also the <a href="/policies/terms.html">Terms of Service</a>, the
<a href="/policies/shipping.html">Shipping Policy</a>, the
<a href="/policies/refund-returns.html">Refund &amp; Return Policy</a> and the
<a href="/policies/accessibility.html">Accessibility Statement</a>.</p>
`,
};

/* -------------------------------------------------------------------- terms */

const tos = {
  slug: 'terms',
  title: 'Terms of Service',
  description: `The terms on which ${B.legalName} sells garden tools and equipment: ordering, pricing, payment, shipping, returns, liability and governing law.`,
  body: `
<h1>Terms of Service</h1>
${effective}
<p class="lede">These are the terms on which ${esc(B.legalName)} sells to you. They are written in
ordinary English on purpose. If something here is unclear, call
<a href="${B.phoneHref}">${B.phone}</a> and ask before you order.</p>

<h2>Agreement to these terms</h2>
<p>By browsing this website or placing an order you agree to these terms, together with our
<a href="/policies/privacy.html">Privacy Policy</a>,
<a href="/policies/shipping.html">Shipping Policy</a> and
<a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>, which form part of this
agreement. If you do not agree, please do not order.</p>

<h2>Eligibility</h2>
<p>You must be at least 18 years old and able to enter a binding contract, and you must give a delivery
address in the United States. We ship within the United States only and cannot accept orders for
delivery elsewhere.</p>

<h2>Accounts</h2>
<p>You do not need an account to buy from us and this site does not offer one. There is no login, no
password and no membership. If we introduce accounts in future we will publish the terms that apply to
them before you can create one.</p>

<h2>Product descriptions and images</h2>
<p>We describe every product by its measurements, weight, materials and what is in the box, and we try
to be exact. Timber is a natural material: cedar varies in grain and colour between boards and weathers
to grey outdoors, which is normal and not a fault. Measurements are given to the nearest stated unit and
may vary slightly between production batches.</p>
<p>The photographs on this site are licensed stock images that show the kind of item described, not the
individual unit you will receive. Colours also vary between screens. If the precise shade or finish
matters to you, email <a href="mailto:${B.email}">${B.email}</a> before ordering and we will describe it.</p>
<p>We describe what our products are and how they are built. We do not make claims about health,
medical outcomes or treatment of any condition, and nothing on this site should be read as such a claim.
Our goods are ordinary garden tools and equipment.</p>

<h2>Pricing and pricing errors</h2>
<p>All prices are in US dollars and are the price you will be charged for the item. Shipping is added in
the cart and shown before you reach the checkout. Sales tax is calculated at the payment step from your
delivery address. There are no handling fees, service fees or surcharges of any kind.</p>
<p>We may change prices at any time, but never for an order already placed. If a price is listed in
obvious error — a decimal point in the wrong place, for example — we may cancel the affected order and
refund you in full. We will contact you first, and <strong>we will never charge you a higher price than
the one you agreed to</strong> without your express consent.</p>

<h2>Order acceptance</h2>
<p>Your order is an offer to buy. The confirmation email we send is an acknowledgement that we received
it, not an acceptance. The contract forms when we ship the goods. Until then we may decline an order —
for example if an item is out of stock, if we cannot verify the delivery address, or if we suspect fraud
— and if we do, you are charged nothing, or refunded in full if a charge has already been taken.</p>

<h2>Payment</h2>
<p>Payment is taken by a third-party payment processor over an encrypted connection. We do not receive
or store your full card number or security code. You warrant that you are authorised to use the payment
method you present.</p>
<p>At the time of writing, no payment processor has been connected to this website. The checkout
therefore stops at the order review and says so plainly. Until it is live, please order by telephone on
<a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}.</p>

<h2>Shipping, title and risk</h2>
<p>We ship your order within ${esc(T.processing)} of receiving it, by ${esc(T.carriers)}, within the
United States. Delivery estimates are the carrier&rsquo;s transit times after shipment and are estimates,
not guarantees. Full detail is in the <a href="/policies/shipping.html">Shipping Policy</a>, including
what happens if we cannot meet the shipping time.</p>
<p>Title and risk of loss pass to you when the carrier delivers the parcel to the address you gave. If a
parcel is lost or damaged in transit, contact us and we will deal with the carrier — see the Shipping
Policy.</p>

<h2>Returns and refunds</h2>
<p>You may return an unused item in its original packaging within ${esc(T.returnWindow)} of delivery.
The full process, the exclusions and who pays return shipping are set out in the
<a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>, which is incorporated into these
terms.</p>

<h2>Safe use of tools</h2>
<p>Garden tools have edges, points and moving parts. Read the instructions supplied with each item,
keep blades away from children, and do not exceed a stated load rating — the kneeler seat is rated to
330 lb and the garden cart to 300 lb, and those figures are limits rather than targets. Assembly items
must be built with the fixings supplied and the fixings fully tightened. We are not responsible for
injury or damage caused by use contrary to the supplied instructions.</p>

<h2>Prohibited uses</h2>
<ul>
<li>Use this site for any unlawful purpose or to break any applicable regulation.</li>
<li>Attempt to gain unauthorised access to the site, its server, or any connected system.</li>
<li>Introduce malware, interfere with the site&rsquo;s operation, or place an excessive automated load
on it.</li>
<li>Scrape, copy or republish the site&rsquo;s content, images or product descriptions for commercial
use.</li>
<li>Buy our products for resale as new without our written agreement, or misrepresent yourself as
connected to this business.</li>
<li>Submit a fraudulent order or a fraudulent payment instrument.</li>
</ul>

<h2>Intellectual property</h2>
<p>The Pottering Lane name, the site design, the illustrations and the product descriptions are owned by
${esc(B.legalName)}. You may print or save pages for your own personal use. Any other reproduction,
republication or commercial use needs our written permission. Photographs are licensed from their
creators; see the <a href="/credits.html">photo credits</a>.</p>

<h2>Content you send us</h2>
<p>If you send us a message, a photograph of a damaged item, or any other content, you keep ownership of
it and you grant us permission to use it for the purpose you sent it for — handling your enquiry or your
claim. We will not publish anything you send us as a testimonial or a review without asking you first
and telling you where it will appear.</p>

<h2>Third-party links</h2>
<p>This site links to a small number of external pages, such as government and regulator resources and
the sources of our photographs. We do not control those sites and are not responsible for their content
or their privacy practices.</p>

<h2>Disclaimer of warranties</h2>
<p>We sell our products as they are described on the product page. Beyond those descriptions and any
warranty the law gives you that cannot be excluded, we make no other warranties — express or implied —
including implied warranties of merchantability or fitness for a particular purpose. We do not warrant
that this website will be uninterrupted or free of error.</p>
<p>Nothing in these terms limits your rights under state or federal consumer protection law. Some states
do not allow the exclusion of implied warranties, so parts of this section may not apply to you.</p>

<h2>Limitation of liability</h2>
<p>To the extent the law allows, ${esc(B.legalName)} is not liable for indirect, incidental, special or
consequential losses arising from your use of this site or from any product you buy — for example lost
time, lost plants, or the cost of arranging an alternative. Our total liability for any claim relating to
an order is limited to the amount you paid for that order.</p>
<p>This limit does not apply to liability that cannot be limited by law, including liability for death or
personal injury caused by our negligence, or for fraud.</p>

<h2>Indemnity</h2>
<p>You agree to indemnify ${esc(B.legalName)} against claims, losses and reasonable legal costs arising
from your breach of these terms or your misuse of this website.</p>

<h2>Governing law and venue</h2>
<p>These terms are governed by the laws of the State of ${esc(B.governingState)}, without regard to its
conflict-of-laws rules. Any dispute that cannot be resolved between us will be brought in the state or
federal courts sitting in ${esc(B.governingVenue)}, and we both consent to that jurisdiction.</p>

<h2>Resolving a dispute</h2>
<p>Please contact us first. Almost everything is settled with one phone call. Email
<a href="mailto:${B.email}">${B.email}</a> or call <a href="${B.phoneHref}">${B.phone}</a> and give us 30
days to put it right before starting any formal proceeding.</p>
<p><strong>Small claims.</strong> Nothing in these terms prevents either of us from bringing an
individual claim in a small-claims court, and we will not object to you doing so.</p>

<h2>Severability and waiver</h2>
<p>If any part of these terms is found unenforceable, the rest continues to apply. If we do not enforce a
term on one occasion, that is not a waiver of our right to enforce it later.</p>

<h2>Changes to these terms</h2>
<p>We may update these terms. The version in force for your order is the version published on the day you
placed it, and we keep a dated copy of each version. Changes are never applied retrospectively to an
order already placed.</p>

${contactBlock}
`,
};

/* ----------------------------------------------------------------- refunds */

const refunds = {
  slug: 'refund-returns',
  title: 'Refund & Return Policy',
  description: `Return an unused item within ${T.returnWindow} of delivery. Step-by-step process, who pays return shipping, and refunds within ${T.refundTime} of inspection.`,
  body: `
<h1>Refund &amp; Return Policy</h1>
${effective}
<p class="lede">If something is not right, send it back. You have ${esc(T.returnWindow)} from the day it
is delivered, and the process below takes about five minutes to start.</p>

<h2>The return window</h2>
<p>You may return an item within <strong>${esc(T.returnWindow)} of delivery</strong>. The clock starts on
the day the carrier records the parcel as delivered, and it is the date you <em>tell us</em> you want to
return that counts — not the date the parcel reaches us. Contact us inside the ${esc(T.returnWindow)} and
you are inside the window, even if the parcel takes another week to come back.</p>
<p>${esc(T.returnWindow)} is deliberately longer than most shops give, because a tool bought in February
may not be used until April. Buy the kneeler in winter, try it when the ground thaws, and you are still
covered.</p>

<h2>Condition we need it in</h2>
<ul>
<li>Unused, and not assembled, fitted or taken into the garden.</li>
<li>In its original packaging, with any tags, manuals and fixings.</li>
<li>Complete — everything listed under &ldquo;what is in the box&rdquo; on the product page.</li>
<li>Undamaged by use. Ordinary opening of the box is expected; we do not mind an opened carton.</li>
</ul>
<p>If an item comes back short of this, we will contact you before doing anything. Where the item is
still saleable at a lower value we may offer a partial refund, with the reason and the figure stated, and
you can tell us to send it back to you instead at no charge.</p>

<h2>Non-returnable items</h2>
<p>This list is short and we do not add to it quietly. The following cannot be returned unless they are
faulty, damaged in transit, or not what you ordered:</p>
<ul>
${policyDetail.nonReturnable
  .map((n) => `<li><strong>${esc(n.title)}</strong>, ${esc(n.detail)}</li>`)
  .join('\n')}
</ul>
<p>Everything else in the shop can be returned. Nothing is excluded because it was reduced, because it
was the last one, or because you have returned something before.</p>

<h2>How to return something</h2>
<ol>
<li><strong>Tell us.</strong> Email <a href="mailto:${B.email}">${B.email}</a> with &ldquo;Return&rdquo;
and your order number in the subject line, or call <a href="${B.phoneHref}">${B.phone}</a> during
${esc(B.hours)}. Say what you are sending back and why. &ldquo;Changed my mind&rdquo; is a complete
answer and we will not press you further.</li>
<li><strong>We send you a return number.</strong> Within one business day you will get a return
authorisation number and the address to send to, in writing.</li>
<li><strong>Pack it.</strong> Use the original packaging if you still have it, or any box that protects
the item. Write the return number clearly on the outside and put a note with it inside.</li>
<li><strong>Send it to the returns address</strong>, which is the same as our mailing address:
<br><br>
${esc(B.legalName)}<br>
Returns — quote your return number<br>
${esc(B.address.line1)}<br>
${esc(B.address.city)}, ${B.address.state} ${B.address.zip}
<br><br>
Please use a tracked service. Until it reaches us it is still your parcel, and a tracking number is the
only way to prove where it got to.</li>
<li><strong>We inspect and refund.</strong> See the timings below.</li>
</ol>

<h2>Who pays return shipping</h2>
<div class="table-scroll"><table>
<caption class="visually-hidden">Who pays return shipping in each case</caption>
<thead><tr><th scope="col">Reason for the return</th><th scope="col">Who pays the postage</th><th scope="col">Original shipping refunded?</th></tr></thead>
<tbody>
<tr><th scope="row">You changed your mind</th><td>You do</td><td>No — the original shipping charge is not refunded</td></tr>
<tr><th scope="row">It arrived damaged</th><td>We do — we send a prepaid label</td><td>Yes, in full</td></tr>
<tr><th scope="row">It is faulty</th><td>We do — we send a prepaid label</td><td>Yes, in full</td></tr>
<tr><th scope="row">We sent the wrong item</th><td>We do — we send a prepaid label</td><td>Yes, in full</td></tr>
<tr><th scope="row">It does not match its description on this site</th><td>We do — we send a prepaid label</td><td>Yes, in full</td></tr>
</tbody></table></div>
<p>We never charge a restocking fee. If we made the mistake, you should not be out of pocket for any
part of putting it right.</p>

<h2>Damaged, faulty or wrong items</h2>
<p><strong>Tell us within 7 days of delivery</strong> if a parcel arrives damaged or the contents are
broken, so we can make a claim with the carrier while the evidence is fresh. Email ${B.email} with:</p>
<ul>
<li>Your order number.</li>
<li>A photograph of the damage.</li>
<li>A photograph of the outer box, including the label.</li>
</ul>
<p>We will send a replacement or refund you in full — your choice — and we pay the return postage. If you
would rather keep a slightly marked item at a reduced price, say so and we will agree a figure with you.
We will not ask you to deal with the carrier yourself.</p>
<p>If a fault appears later, contact us anyway. Outside the ${esc(T.returnWindow)} we are no longer
obliged to take it back, but we would rather hear about it than not, and in practice we usually help.</p>

<h2>Refunds</h2>
<p><strong>Method.</strong> We refund to the payment method you used. We do not issue store credit unless
you ask for it.</p>
<p><strong>Timing.</strong> We inspect returns within ${esc(T.inspectionTime)} of the parcel arriving, and
issue the refund within <strong>${esc(T.refundTime)}</strong> of that inspection. We email you when the
refund is sent. Your bank or card issuer may then take a few more days to show it on your statement,
which is out of our hands.</p>
<p><strong>Where the Federal Trade Commission&rsquo;s timings are shorter, they apply.</strong> If you
paid by cash, cheque or money order, we refund within seven working days of accepting the return. If you
paid on a store credit account, we credit it within one billing cycle. If we cancel an order before
shipping it, the refund is issued immediately and always within seven working days.</p>

<h2>Exchanges</h2>
<p>We do not run a formal exchange process, because in practice it is slower for you. Return the item for
a refund and place a new order for the one you want — that way the new item ships straight away instead
of waiting for the old one to arrive. If you would rather we held the new item for you, call and we
will.</p>

<h2>Cancelling before it ships</h2>
<p>If you change your mind before the parcel is handed to the carrier, email ${B.email} or call
${B.phone} and we will cancel it and refund you in full. Since we ship within ${esc(T.processing)},
please do get in touch quickly.</p>

<h2>If a delivery is late or does not arrive</h2>
<p>That is handled in the <a href="/policies/shipping.html">Shipping Policy</a>, which sets out what we do
if we cannot meet the shipping time, and how lost parcels are traced. In short: you can always cancel for
a full refund rather than wait.</p>

${contactBlock}
<p class="meta-line">This policy sits alongside our <a href="/policies/terms.html">Terms of Service</a>
and does not affect the rights state and federal consumer law gives you.</p>
`,
};

/* ---------------------------------------------------------------- shipping */

const shipping = {
  slug: 'shipping',
  title: 'Shipping Policy',
  description: `We ship within ${T.processing} of receiving your order, across the United States, by ${T.carriers}. Standard shipping ${T.standardShipping}, free over ${T.freeShippingOver}.`,
  body: `
<h1>Shipping Policy</h1>
${effective}
<p class="lede"><strong>We ship your order within ${esc(T.processing)} of receiving it.</strong> That is a
commitment, not an average — and if we ever cannot meet it, the section on delays below explains exactly
what we do.</p>

<h2>Where we ship</h2>
<p>We ship to street addresses in all 50 US states and the District of Columbia. We do not currently
ship:</p>
<ul>
${policyDetail.excludedDestinations.map((d) => `<li>${esc(d)}</li>`).join('\n')}
</ul>
<p>If your address falls into one of these categories the checkout will not be able to complete. Call
<a href="${B.phoneHref}">${B.phone}</a> and we will tell you honestly whether we can help.</p>

<h2>Processing time — when we ship</h2>
<p>We ship your order within <strong>${esc(T.processing)}</strong> of receiving it. Business days are
Monday to Friday and exclude federal holidays. An order placed on a Friday afternoon ships by the
following Wednesday at the latest.</p>
<p>You will get an email with a tracking number when the parcel is handed to the carrier. If you have not
had that email by the end of the third business day, contact us — something has gone wrong and we would
like to know.</p>

<h2>Carriers</h2>
<p>We ship by <strong>${esc(T.carriers)}</strong>. We choose the carrier based on the size and weight of
the parcel and the destination; you cannot currently select one. Most parcels do not need a signature.
The carrier decides whether to leave a parcel unattended, and we cannot override that decision from
here.</p>

<h2>Delivery estimates and costs</h2>
<p>These are the carrier&rsquo;s transit times <em>after</em> the parcel ships. Add the
${esc(T.processing)} processing time above to work out when something will arrive.</p>
<div class="table-scroll"><table>
<caption class="visually-hidden">Shipping methods, costs and delivery times</caption>
<thead><tr><th scope="col">Method</th><th scope="col">Cost</th><th scope="col">Transit time after shipping</th></tr></thead>
<tbody>
<tr><th scope="row">Standard shipping</th><td>${esc(T.standardShipping)} — <strong>free on orders over ${esc(T.freeShippingOver)}</strong></td><td>${esc(T.standardDelivery)}</td></tr>
<tr><th scope="row">Expedited shipping</th><td>${esc(T.expeditedPrice)}, flat rate on any order</td><td>${esc(T.expeditedDelivery)}</td></tr>
</tbody></table></div>
<p>The free-shipping threshold of ${esc(T.freeShippingOver)} is calculated on the item subtotal before
tax, and applies to standard shipping only. Expedited shipping is ${esc(T.expeditedPrice)} regardless of
the order value.</p>
<p><strong>There are no other charges.</strong> No handling fee, no fuel surcharge, no packaging fee, no
oversize fee — the raised planter and the garden cart ship at the same rate as a pair of gloves. Shipping
is shown in your cart before you reach the checkout, and sales tax is calculated at the payment step from
your delivery address. Nothing is added after that.</p>

<h2>Delivery delays and your right to cancel</h2>
<p>The Federal Trade Commission&rsquo;s Mail, Internet, or Telephone Order Merchandise Rule governs what
happens when a seller cannot ship on time. Here is exactly what we do.</p>
<ol>
<li><strong>We tell you before the deadline passes.</strong> If we realise we cannot ship within
${esc(T.processing)}, we contact you before that period expires — not afterwards.</li>
<li><strong>We give you a definite new shipping date</strong>, or say plainly that we cannot give
one.</li>
<li><strong>We offer you the choice.</strong> Accept the new date, or cancel for a full refund. The
refund includes any shipping you paid.</li>
<li><strong>If the new date is more than 30 days later, or we cannot give a date at all, we need your
explicit agreement to continue.</strong> If you do not reply, we cancel the order and refund you
automatically. We will not sit on your money waiting for stock.</li>
<li><strong>Refunds for cancelled orders are issued immediately</strong>, and always within seven working
days.</li>
</ol>
<p>You can cancel a delayed order at any point before it ships simply by emailing
<a href="mailto:${B.email}">${B.email}</a> or calling <a href="${B.phoneHref}">${B.phone}</a>. You do not
need a reason.</p>

<h2>Tracking your order</h2>
<p>Every parcel ships with tracking, and the number is in your shipping email. If tracking has not updated
for three business days, contact us and we will open a trace with the carrier on your behalf. You do not
have to call the carrier yourself.</p>

<h2>Lost packages</h2>
<p>If tracking shows no movement for <strong>seven business days</strong>, or shows
&ldquo;delivered&rdquo; but nothing arrived, tell us. We ask you to check with anyone else at the address
and look in the usual places first, because most of these turn up within a day.</p>
<p>After that we open a formal trace with the carrier. Traces usually take five to eight business days.
<strong>We do not make you wait for the outcome</strong> — once the trace is open we send a replacement or
refund you in full, whichever you prefer, and we deal with the carrier ourselves.</p>

<h2>Damaged packages</h2>
<p>If a parcel arrives visibly damaged, photograph it before opening if you can. Email ${B.email} within
seven days of delivery with a photograph of the damage and of the outer box including the label. We will
send a replacement or a full refund, and we pay the return postage. The full process is in the
<a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.</p>

<h2>Incorrect or incomplete addresses</h2>
<p>Please check the address at checkout — a missing apartment number is the most common cause of a failed
delivery. If a parcel is returned to us as undeliverable because of an address error, we will contact you
and re-send it once you confirm the correct address; we will ask you to cover the second postage. If you
would rather cancel at that point, we refund the item price in full.</p>
<p>If you spot a mistake in your address, call ${B.phone} straight away. If the parcel has not left us we
will simply correct it at no cost.</p>

<h2>Multiple items</h2>
<p>We ship an order in one parcel wherever it fits. Longer items such as the weeder and the watering can
may travel separately from a flat-packed planter; if we split an order you will get a tracking number for
each parcel, and you are never charged twice for shipping.</p>

${contactBlock}
<p class="meta-line">See also the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>
and the <a href="/policies/terms.html">Terms of Service</a>.</p>
`,
};

/* ----------------------------------------------------------- accessibility */

const accessibility = {
  slug: 'accessibility',
  title: 'Accessibility Statement',
  description: `${B.legalName} aims to meet WCAG 2.1 Level AA. What we have done, what we know is imperfect, and how to tell us about a problem.`,
  body: `
<h1>Accessibility Statement</h1>
${effective}
<p class="lede">Most of our customers are over sixty, and a good many of them came to us because bending
and kneeling got harder. Building a site that is hard to read would be a strange way to run this
business.</p>

<h2>Our commitment</h2>
<p>${esc(B.legalName)} is committed to making this website usable by as many people as possible, including
people who use a screen reader, who navigate by keyboard, who magnify the page, who need high contrast, or
who find small targets difficult to hit accurately. If you cannot complete something here, that is a fault
on our side, and we want to hear about it.</p>

<h2>Conformance target</h2>
<p>We aim to meet <strong>Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>, published
by the World Wide Web Consortium. This is the standard US courts and the Department of Justice have
treated as the practical benchmark for websites under the Americans with Disabilities Act.</p>
<p>We consider this site to be <strong>substantially conformant</strong> with WCAG 2.1 Level AA: it meets
the standard throughout, with the known exceptions listed further down.</p>

<h2>What we have done</h2>
<ul>
<li><strong>Text size.</strong> Body text is set at 18 pixels with a line height of 1.65, and no text
anywhere on the site is smaller than 16 pixels. The layout is built in relative units, so it holds together
if you set a larger default size in your browser.</li>
<li><strong>Contrast.</strong> Every text and background pair meets or exceeds the 4.5:1 ratio WCAG
requires for body text, and 3:1 for large headings and interface components. We check each pair rather than
assuming.</li>
<li><strong>Zoom and reflow.</strong> The site can be zoomed to 200 percent without losing content or
function, and reflows to a single column at a 320-pixel width with no horizontal scrolling.</li>
<li><strong>Keyboard.</strong> Everything on this site can be operated with a keyboard alone, in a logical
order, with a clearly visible focus outline. We have not removed focus indicators anywhere.</li>
<li><strong>Skip link.</strong> The first thing a keyboard reaches on every page is a &ldquo;Skip to main
content&rdquo; link that jumps past the navigation.</li>
<li><strong>Structure.</strong> Pages use real landmarks — header, navigation, main, footer — with one
first-level heading per page and headings in order, so a screen reader can list the page and jump around
it.</li>
<li><strong>Targets.</strong> Every button and link is at least 44 by 44 pixels, and main buttons are
larger, with space between them so a near-miss does not trigger the wrong thing.</li>
<li><strong>Labels, not guesswork.</strong> Every form field has a visible label that stays visible while
you type. We do not use placeholder text as a label, because it disappears the moment you start typing.</li>
<li><strong>Errors in words.</strong> If a form is not accepted we say what is wrong, next to the field it
is wrong in, in text — never with colour alone — and we move the keyboard focus to the first problem.</li>
<li><strong>Buttons say what they do.</strong> Controls carry printed words, not icons alone. Links
describe their destination, so you will not find a &ldquo;click here&rdquo; anywhere on this site.</li>
<li><strong>Images.</strong> Every meaningful image has a text description. Decorative shapes — the leaf
rules and the botanical stem in the hero — are hidden from screen readers so they are not read out as
noise.</li>
<li><strong>Nothing moves on its own.</strong> No carousels that rotate, no auto-playing video or sound, no
animation beyond a brief colour change, and no pop-up that covers the page when you arrive. If your system
asks for reduced motion, we honour it.</li>
<li><strong>No time limits.</strong> Nothing on this site expires while you read it. Your cart is kept in
your own browser and waits for you.</li>
</ul>

<h2>Known limitations</h2>
<p>We would rather tell you these than let you discover them.</p>
<ul>
<li><strong>The payment step.</strong> Payment will be handled by a third-party processor on its own hosted
page. We will choose a processor that publishes a WCAG 2.1 AA conformance report, but we do not control
that page and cannot guarantee its behaviour. If you have difficulty at the payment step, call us and we
will take the payment over the phone.</li>
<li><strong>Product photographs.</strong> These are licensed stock images. They show the kind of item, not
the exact unit, and they cannot convey weight or the feel of a grip. Every product page therefore carries
the dimensions, weight, materials and load ratings in text, and you can always call and ask us to describe
an item.</li>
<li><strong>Specification tables.</strong> These scroll sideways inside their own box on a narrow screen.
The page itself never scrolls sideways, but a table may. We are looking at a stacked layout for these.</li>
</ul>

<h2>How we test</h2>
<p>We check every page with an automated accessibility scanner and with Lighthouse, and then by hand,
because automated tools catch only part of the picture. Manual testing covers keyboard-only navigation of a
complete purchase, 200 percent zoom, a 320-pixel-wide viewport, and a read-through of each page with a
screen reader. Any page that fails is fixed before it goes live rather than added to a list.</p>

<h2>Order by phone</h2>
<p>You never have to fight this website to buy something. Call <a href="${B.phoneHref}">${B.phone}</a>
during ${esc(B.hours)} and we will take the whole order, read the prices and the total back to you, and
post a paper receipt with the parcel if you would like one. It costs the same and it takes about four
minutes.</p>

<h2>Feedback — tell us about a problem</h2>
<p>We want to know. There is no wrong way to report this.</p>
<ul>
<li>Email <a href="mailto:${B.email}">${B.email}</a> with &ldquo;Accessibility&rdquo; in the subject
line.</li>
<li>Call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}.</li>
<li>Write to ${esc(B.addressOneLine)}.</li>
</ul>
<p>Tell us the page and what happened, and what you were using if you know it — the browser, or the screen
reader, or simply &ldquo;my phone&rdquo;. That is enough.</p>
<p><strong>We acknowledge every accessibility report within five business days</strong> and tell you what we
intend to do and roughly when. If a fix will take longer than a fortnight we will offer you a way around the
problem in the meantime.</p>

${contactBlock}
<p class="meta-line">This statement was prepared on ${esc(B.effectiveDate)} and is reviewed whenever the
site changes. See also the <a href="/policies/terms.html">Terms of Service</a> and the
<a href="/policies/privacy.html">Privacy Policy</a>.</p>
`,
};

export const policies = [privacy, tos, refunds, shipping, accessibility];
