/**
 * SINGLE SOURCE OF TRUTH — Pottering Lane Garden Co.
 *
 * SAMPLE DATA — replace with real, verifiable business details before launching
 * or running ads. See ../../BUSINESS_INFO.md for the full list and launch blockers.
 *
 * Every one of the 27 generated pages interpolates from this file. Nothing here is
 * retyped anywhere: change a value, re-run `node _generator/build.mjs`, and the
 * whole site updates. The compliance audit fails the build if a stray variant appears.
 */

export const business = {
  brandName: 'Pottering Lane Garden Co.',
  shortName: 'Pottering Lane',
  legalName: 'Pottering Lane Garden Co.',
  tagline: 'Garden tools for people who would rather sit down to weed',
  descriptor: 'Easy gardening',

  address: {
    line1: '715 Hollis Creek Road, Unit B',
    city: 'Asheville',
    state: 'NC',
    zip: '28801',
    country: 'United States',
  },
  addressOneLine: '715 Hollis Creek Road, Unit B, Asheville, NC 28801',

  email: 'hello@potteringlane.com',
  phone: '(828) 555-0167',
  phoneHref: 'tel:+18285550167',
  hours: 'Mon–Fri, 8:30 AM–5:30 PM ET; Sat, 9:00 AM–1:00 PM ET',
  responseTime: 'We answer email within one business day.',

  effectiveDate: 'August 18, 2026',
  governingState: 'North Carolina',
  governingVenue: 'Buncombe County, North Carolina',
  siteUrl: 'https://www.potteringlane.com',
};

export const terms = {
  returnWindow: '45 days',
  returnWindowDays: 45,
  freeShippingOver: '$75',
  standardShipping: '$7.95',
  processing: '1–3 business days',
  standardDelivery: '5–8 business days',
  expeditedPrice: '$16.95',
  expeditedDelivery: '2–3 business days',
  carriers: 'USPS and UPS',
  inspectionTime: '2 business days',
  refundTime: '5–10 business days',
  currencySymbol: '$',
};

export const shippingMethods = [
  {
    id: 'standard',
    label: 'Standard shipping',
    price: 7.95,
    priceLabel: terms.standardShipping,
    estimate: terms.standardDelivery,
    note: `Free on orders over ${terms.freeShippingOver}.`,
  },
  {
    id: 'expedited',
    label: 'Expedited shipping',
    price: 16.95,
    priceLabel: terms.expeditedPrice,
    estimate: terms.expeditedDelivery,
    note: 'Flat rate on every order.',
  },
];

export const freeShippingThreshold = 75;

export const shippingSummary =
  `We ship your order within ${terms.processing} of receiving it. ` +
  `Standard shipping is ${terms.standardShipping}, free on orders over ${terms.freeShippingOver}, ` +
  `and arrives in ${terms.standardDelivery} after it ships.`;

export const returnSummary =
  `Return anything unused in its original packaging within ${terms.returnWindow} of delivery. ` +
  `We refund to your original payment method within ${terms.refundTime} of inspecting the return.`;

/** Store-specific policy details the generic policy templates need. */
export const policyDetail = {
  excludedDestinations: [
    'Outside the United States.',
    'To APO, FPO or DPO military addresses.',
    'To US territories including Puerto Rico, Guam and the US Virgin Islands.',
    'Oversized items to PO Boxes — the raised planter, the garden cart and the kneeler seat need a street address. Smaller tools go to a PO Box without trouble.',
  ],
  nonReturnable: [
    {
      title: 'Gloves that have been worn in the garden',
      detail:
        'for hygiene reasons. Trying a pair on indoors with clean hands is fine and does not affect your return.',
    },
    {
      title: 'Hoses and watering cans that have been filled',
      detail:
        'because we cannot resell them as new once water has been through them. Unboxing and checking the fittings is fine.',
    },
    {
      title: 'Anything assembled with the fixings used',
      detail:
        'such as a raised planter that has been screwed together. Dry-fit it first if you are unsure about the size.',
    },
  ],
  cartKey: 'pottering-lane-cart',
  cookieKey: 'pottering-lane-cookie',
};
