/**
 * Product catalogue — Pottering Lane Garden Co.
 *
 * The price here is the price charged. Copy describes reach, weight, materials and
 * fastenings — never a health outcome, never a superlative, never an origin claim.
 * A kneeler seat is furniture for a garden, not a medical aid, and it is described
 * that way. See POLICY_RESEARCH.md rules B14, B15 and B28.
 */

export const categories = [
  {
    id: 'sit-and-kneel',
    name: 'Sit & Kneel',
    blurb: 'Get down to the bed and back up again without a debate about it.',
    image: 'cat-kneel.webp',
    alt: 'A padded folding kneeler seat on a garden path.',
  },
  {
    id: 'tools-in-hand',
    name: 'Tools in Hand',
    blurb: 'Long handles, fat grips, and steel that keeps an edge.',
    image: 'cat-tools.webp',
    alt: 'Garden hand tools with wooden handles laid out on a bench.',
  },
  {
    id: 'beds-and-pots',
    name: 'Beds & Pots',
    blurb: 'Raised, waist-high and reachable from a chair.',
    image: 'cat-beds.webp',
    alt: 'A raised wooden planter box filled with growing plants.',
  },
  {
    id: 'watching-and-watering',
    name: 'Watching & Watering',
    blurb: 'Feeders, gauges and hoses light enough to carry one-handed.',
    image: 'cat-water.webp',
    alt: 'A watering can beside a garden bed.',
  },
];

export const products = [
  {
    sku: 'PLG-201',
    slug: 'kneelwell-folding-garden-kneeler-seat',
    name: 'Kneelwell Folding Garden Kneeler Seat',
    price: 58.0,
    category: 'sit-and-kneel',
    image: 'plg-201.webp',
    alt: 'A padded folding garden kneeler seat with tubular steel side handles.',
    summary: 'Turn it one way to kneel on, turn it over to sit on. Two heights, one frame.',
    description:
      'The Kneelwell is a powder-coated steel frame with a 1.5-inch foam pad. One way up it is a ' +
      'kneeler with the pad on the ground and the side rails at hand height; flip it over and the ' +
      'pad becomes a 17-inch seat. It folds flat to three inches for hanging on a shed wall, and ' +
      'two zip pouches clip to the rails for secateurs and string.',
    features: [
      'Flips between a kneeling pad and a 17 in seat',
      '1.5 in high-density foam pad, wipe-clean EVA cover',
      'Side rails at 19 in to push up against',
      'Folds flat to 3 in; hanging hook in the frame',
      'Two removable zip pouches included',
      'Frame rated to 330 lb (150 kg)',
    ],
    specs: {
      'Open size': '23 × 11 × 19 in (58 × 28 × 48 cm)',
      'Folded thickness': '3 in (7.6 cm)',
      'Seat height': '17 in (43 cm)',
      'Pad size': '17 × 11 in, 1.5 in thick',
      'Weight': '7.9 lb (3.6 kg)',
      'Load rating': '330 lb (150 kg)',
      'Materials': 'Powder-coated steel tube, EVA foam pad, polyester pouches',
    },
    inBox: ['Kneeler seat frame', 'Two clip-on tool pouches', 'Assembly guide in 16 pt type'],
  },
  {
    sku: 'PLG-202',
    slug: 'easygrip-hand-tool-set-4-piece',
    name: 'Easygrip Hand Tool Set, 4 Piece',
    price: 36.0,
    category: 'tools-in-hand',
    image: 'plg-202.webp',
    alt: 'A set of four garden hand tools with thick moulded grips.',
    summary: 'Trowel, transplanter, cultivator and weeder, all on the same 1.4-inch handle.',
    description:
      'Four stainless heads on four identical handles, so whichever one you pick up feels the same ' +
      'in the hand. The grip is 1.4 inches around — considerably fatter than a standard trowel — ' +
      'with a thumb rest moulded into the top and a wrist strap through the end. Depth marks are ' +
      'stamped into the trowel and transplanter blades.',
    features: [
      'Trowel, transplanter, three-prong cultivator and fork weeder',
      '1.4 in over-moulded grip with a thumb rest',
      'Depth marks stamped at 1, 2, 3 and 4 in',
      'Wrist strap through each handle end',
      'One-piece stainless heads — no riveted joint to work loose',
      'Dishwasher safe',
    ],
    specs: {
      'Length': '12 in (30 cm) each',
      'Grip circumference': '1.4 in (3.6 cm)',
      'Blade': '3 mm stainless steel, one piece',
      'Weight': '5.6 oz (159 g) per tool',
      'Set weight': '1.4 lb (640 g)',
      'Care': 'Rinse and dry; dishwasher safe on the top rack',
    },
    inBox: ['Trowel', 'Transplanter', 'Cultivator', 'Fork weeder', 'Care card'],
  },
  {
    sku: 'PLG-203',
    slug: 'larkspur-raised-planter-30-inch',
    name: 'Larkspur Raised Planter, 30 inch',
    price: 129.0,
    category: 'beds-and-pots',
    image: 'plg-203.webp',
    alt: 'A raised wooden planter box on legs, filled with soil and plants.',
    summary: 'A waist-high bed on legs — 30 inches to the rim, with a shelf underneath.',
    description:
      'Cedar boards on a braced frame, with the rim at 30 inches so you can work standing or from ' +
      'a chair without bending. The liner is a slotted plastic tray rather than fabric, so it does ' +
      'not sag in the middle when wet, and there is a slatted shelf below for pots and a watering ' +
      'can. It arrives flat with the boards pre-drilled.',
    features: [
      'Rim at 30 in — workable standing or seated',
      'Planting area 30 × 16 in, 8 in deep',
      'Slotted drainage tray liner, not fabric',
      'Slatted lower shelf for pots and cans',
      'Cedar boards, pre-drilled; assembles with the hex key supplied',
      'Holds about 1.7 cubic feet of compost',
    ],
    specs: {
      'Overall size': '34 × 18 × 30 in (86 × 46 × 76 cm)',
      'Planting area': '30 × 16 in, 8 in deep',
      'Soil capacity': '1.7 cu ft (48 L)',
      'Weight empty': '24 lb (10.9 kg)',
      'Materials': 'Western red cedar, galvanised fixings, polypropylene liner tray',
      'Assembly': 'About 30 minutes; hex key included',
    },
    inBox: ['Pre-drilled cedar boards', 'Leg frame and braces', 'Drainage tray liner', 'Fixings and hex key', 'Illustrated guide'],
  },
  {
    sku: 'PLG-204',
    slug: 'hollycreek-hummingbird-feeder',
    name: 'Hollycreek Hummingbird Feeder',
    price: 27.0,
    category: 'watching-and-watering',
    image: 'plg-204.webp',
    alt: 'A glass hummingbird feeder with red feeding ports hanging from a hook.',
    summary: 'A 16 oz glass feeder that comes apart in four pieces for washing.',
    description:
      'Blown glass reservoir, a wide screw base and four ports with built-in perches, because a ' +
      'bird that can sit still is easier to watch than one that has to hover. The whole thing ' +
      'separates into four pieces with no narrow tubes, so it can actually be cleaned. The hanger ' +
      'is a 6-inch S-hook that fits a shepherd&rsquo;s crook or a branch.',
    features: [
      '16 oz blown glass reservoir',
      'Four ports, each with a perch',
      'Separates into four pieces — no narrow tubes to scrub',
      'Built-in ant moat at the top',
      'Wide screw base, easy to grip when wet',
      'Includes a 6 in S-hook',
    ],
    specs: {
      'Capacity': '16 fl oz (473 ml)',
      'Height': '9.5 in (24 cm) excluding hook',
      'Diameter': '5 in (13 cm)',
      'Weight empty': '1.2 lb (545 g)',
      'Materials': 'Blown glass, ABS base, silicone gaskets',
      'Care': 'Hand wash; all four parts dishwasher safe on the top rack',
    },
    inBox: ['Glass reservoir', 'Base with four ports', 'Ant moat', 'S-hook', 'Cleaning brush'],
  },
  {
    sku: 'PLG-205',
    slug: 'clearmark-rain-gauge-6-inch-dial',
    name: 'Clearmark Rain Gauge, 6 inch Dial',
    price: 19.0,
    category: 'watching-and-watering',
    image: 'plg-205.webp',
    alt: 'A rain gauge with a large clearly marked dial on a garden stake.',
    summary: 'A 6-inch dial you can read from the kitchen window, not a thin plastic tube.',
    description:
      'Most rain gauges are a narrow tube with hairline markings you have to walk out and squint ' +
      'at. This one has a 6-inch dial with a black pointer and half-inch numerals, so the reading ' +
      'is visible from the back door. It reads to 5 inches, empties by tipping, and the stake ' +
      'pushes into soft ground by hand.',
    features: [
      '6 in dial with a black pointer',
      'Numerals 0.5 in tall, marked in inches and millimetres',
      'Reads to 5 in (125 mm)',
      'Empties by tipping — no unscrewing',
      '24 in stake, pushes in by hand',
      'UV-stable housing; freeze-tolerant',
    ],
    specs: {
      'Dial diameter': '6 in (15 cm)',
      'Range': '0–5 in (0–125 mm)',
      'Graduations': '0.1 in (2.5 mm)',
      'Total height': '32 in (81 cm) with stake',
      'Weight': '13 oz (369 g)',
      'Materials': 'UV-stabilised ABS, aluminium stake, acrylic lens',
    },
    inBox: ['Rain gauge head', 'Two-part stake', 'Fitting card'],
  },
  {
    sku: 'PLG-206',
    slug: 'brookhat-wide-brim-sun-hat',
    name: 'Brookhat Wide-Brim Sun Hat',
    price: 32.0,
    category: 'tools-in-hand',
    image: 'plg-206.webp',
    alt: 'A wide-brimmed woven sun hat with a chin cord.',
    summary: 'A 4-inch brim, a chin cord and a crown that packs flat without creasing.',
    description:
      'Paper-braid straw with a cotton sweatband and a 4-inch brim all the way round, including ' +
      'the back of the neck. The internal drawcord adjusts the fit through about an inch, and the ' +
      'chin cord keeps it on in a breeze. Roll it and it springs back — it is meant to live on a ' +
      'hook by the back door.',
    features: [
      '4 in brim, even all the way round',
      'Internal drawcord adjusts about 1 in of fit',
      'Removable chin cord with a slider',
      'Cotton sweatband',
      'Packs flat and springs back',
      'UPF 50+ rated fabric',
    ],
    specs: {
      'Brim width': '4 in (10 cm)',
      'Sizes': 'One size, 22–24 in head, drawcord adjusted',
      'Crown depth': '4.3 in (11 cm)',
      'Weight': '4.6 oz (130 g)',
      'Materials': 'Paper braid with a cotton sweatband and polyester cord',
      'Care': 'Spot clean; reshape damp and air dry',
    },
    inBox: ['Sun hat', 'Removable chin cord', 'Care card'],
  },
  {
    sku: 'PLG-207',
    slug: 'featherline-expandable-garden-hose-50ft',
    name: 'Featherline Expandable Garden Hose, 50 ft',
    price: 44.0,
    category: 'watching-and-watering',
    image: 'plg-207.webp',
    alt: 'A coiled expandable garden hose with brass fittings and a spray nozzle.',
    summary: 'Weighs 2.4 lb empty and shrinks to 17 ft on the hook.',
    description:
      'A latex core in a woven polyester jacket that stretches to 50 feet under pressure and pulls ' +
      'back to 17 when you turn the tap off, so there is no coiling and no 12-pound reel to drag. ' +
      'The fittings are solid brass, not plated plastic, and the shut-off valve at the tap end ' +
      'means you can stop the flow without walking back.',
    features: [
      '17 ft at rest, 50 ft under pressure',
      '2.4 lb empty — liftable one-handed',
      'Solid brass fittings with rubber washers',
      'Shut-off valve at the connector',
      'Eight-pattern spray nozzle included',
      'Rated to 145 psi; not for hot water',
    ],
    specs: {
      'Length': '17 ft relaxed, 50 ft expanded',
      'Weight': '2.4 lb (1.1 kg) empty',
      'Fittings': '3/4 in solid brass, standard US hose thread',
      'Pressure rating': '145 psi maximum',
      'Core': 'Double-layer latex in a woven polyester jacket',
      'Storage': 'Drain and hang; do not leave pressurised in freezing weather',
    },
    inBox: ['50 ft expandable hose', 'Eight-pattern spray nozzle', 'Spare washers', 'Hanging hook'],
  },
  {
    sku: 'PLG-208',
    slug: 'pottering-lane-long-handled-weeder',
    name: 'Pottering Lane Long-Handled Weeder',
    price: 38.0,
    category: 'tools-in-hand',
    image: 'plg-208.webp',
    alt: 'A long-handled weeding tool with a foot plate and forked head.',
    summary: 'Pull a dandelion out of the lawn standing up, using your foot instead of your back.',
    description:
      'A 39-inch ash shaft with a four-claw stainless head and a foot plate above it. Push the ' +
      'claws in with your foot, lever the handle back, and the root comes with it; the ejector ' +
      'rod on the shaft drops the weed without you touching it. The handle is a T-bar, not a ' +
      'single knob, so both hands can pull.',
    features: [
      '39 in shaft — used standing',
      'Four-claw stainless head with a foot plate',
      'Thumb-operated ejector rod drops the weed',
      'T-bar handle for a two-handed pull',
      'Ash shaft with a lacquered finish',
      'Head is replaceable',
    ],
    specs: {
      'Length': '39 in (99 cm)',
      'Head width': '2.4 in (6 cm)',
      'Claw depth': '4 in (10 cm)',
      'Weight': '2.1 lb (950 g)',
      'Materials': 'Ash shaft, stainless steel head, aluminium foot plate',
      'Care': 'Wipe dry after use; oil the shaft once a season',
    },
    inBox: ['Long-handled weeder', 'Care card'],
  },
  {
    sku: 'PLG-209',
    slug: 'seedstart-windowsill-propagator-tray',
    name: 'Seedstart Windowsill Propagator Tray',
    price: 22.0,
    category: 'beds-and-pots',
    image: 'plg-209.webp',
    alt: 'A seed propagator tray with a clear vented lid on a windowsill.',
    summary: 'Twenty-four cells and a vented lid, sized to fit a standard windowsill.',
    description:
      'Twenty-four cells in a rigid tray with a clear lid and two adjustable vents. It is 5.5 ' +
      'inches deep front to back, which fits a normal windowsill rather than hanging off the edge. ' +
      'The cells push out from underneath so seedlings come free without being pulled by the stem, ' +
      'and the tray stacks for storage.',
    features: [
      '24 cells, each 1.5 in square and 2.2 in deep',
      'Clear lid with two adjustable vents',
      '5.5 in deep — fits a standard windowsill',
      'Push-up cell bases release seedlings without pulling',
      'Watering reservoir in the base tray',
      'Stacks for storage; reusable for years',
    ],
    specs: {
      'Tray size': '15 × 5.5 × 2.4 in (38 × 14 × 6 cm)',
      'With lid': '15 × 5.5 × 5.9 in (38 × 14 × 15 cm)',
      'Cells': '24, each 1.5 in square, 2.2 in deep',
      'Weight': '1.3 lb (590 g)',
      'Materials': 'Recycled polypropylene tray, clear polystyrene lid',
      'Care': 'Wash in warm soapy water between sowings',
    },
    inBox: ['Base tray with reservoir', '24-cell insert', 'Vented clear lid', 'Set of plant labels'],
  },
  {
    sku: 'PLG-210',
    slug: 'barrowlite-two-wheel-garden-cart',
    name: 'Barrowlite Two-Wheel Garden Cart',
    price: 118.0,
    category: 'sit-and-kneel',
    image: 'plg-210.webp',
    alt: 'A two-wheeled garden cart with a fabric bed and a long pull handle.',
    summary: 'Two wheels instead of one, so it balances itself while you let go.',
    description:
      'A single-wheel barrow has to be held level; this has two pneumatic wheels set wide, so it ' +
      'stands where you leave it. The bed is a heavy coated fabric on a folding steel frame and ' +
      'holds four cubic feet. The handle is a pull bar at 33 inches rather than two shafts to ' +
      'lift, and the whole thing folds to 8 inches for the shed.',
    features: [
      'Two 10 in pneumatic wheels — stands on its own',
      '4 cu ft coated-fabric bed',
      'Pull handle at 33 in, not lifting shafts',
      'Folds flat to 8 in',
      'Load rating 300 lb (136 kg)',
      'Bed unclips for tipping and rinsing',
    ],
    specs: {
      'Open size': '48 × 24 × 33 in (122 × 61 × 84 cm)',
      'Folded thickness': '8 in (20 cm)',
      'Capacity': '4 cu ft (113 L)',
      'Load rating': '300 lb (136 kg)',
      'Weight': '21 lb (9.5 kg)',
      'Wheels': '10 in pneumatic, 2.5 in wide',
      'Materials': 'Powder-coated steel frame, 600D coated polyester bed',
    },
    inBox: ['Folding frame with wheels', 'Coated fabric bed', 'Pull handle', 'Fixings and spanner', 'Assembly guide'],
  },
  {
    sku: 'PLG-211',
    slug: 'thistleguard-coated-garden-gloves-2-pair',
    name: 'Thistleguard Coated Garden Gloves, 2 Pair',
    price: 21.0,
    category: 'tools-in-hand',
    image: 'plg-211.webp',
    alt: 'Two pairs of garden gloves with coated palms and knitted backs.',
    summary: 'Two pairs, nitrile palms, knitted backs — so one pair can dry while you use the other.',
    description:
      'A seamless knitted liner with a nitrile foam coating over the palm and fingertips. The back ' +
      'is left uncoated so your hand can breathe, and the cuff is a plain knit that pulls on ' +
      'without a fastening to fiddle with. Two pairs, because a wet glove takes a day to dry and ' +
      'the garden does not wait.',
    features: [
      'Two pairs per pack',
      'Nitrile foam palm and fingertips; breathable knitted back',
      'Seamless liner — no internal seams to rub',
      'Pull-on knit cuff, no fastenings',
      'Touchscreen-compatible index finger and thumb',
      'Machine washable cold; air dry',
    ],
    specs: {
      'Sizes': "Women's M/L, Men's M/L (state size at checkout)",
      'Liner': '13-gauge seamless nylon knit',
      'Coating': 'Nitrile foam, palm and fingertips',
      'Cuff': 'Knitted, 2 in',
      'Weight': '1.7 oz (48 g) per glove',
      'Care': 'Machine wash cold, air dry, do not tumble',
    },
    inBox: ['Two pairs of gloves', 'Size and care card'],
  },
  {
    sku: 'PLG-212',
    slug: 'dawnbell-watering-can-1-5-gallon',
    name: 'Dawnbell Watering Can, 1.5 Gallon',
    price: 34.0,
    category: 'watching-and-watering',
    image: 'plg-212.webp',
    alt: 'A metal watering can with a long spout and a two-handle design.',
    summary: 'Two handles — one over the top, one at the back — so a full can can be carried level.',
    description:
      'A 1.5-gallon can weighs about 13 pounds full, which is a lot on one handle. This one has a ' +
      'top handle for carrying and a rear handle for tipping, so the weight stays over your feet ' +
      'rather than out in front of you. The spout is long enough to reach the back of a bed, and ' +
      'the brass rose unscrews for a plain stream.',
    features: [
      'Two handles: over-the-top for carrying, rear for pouring',
      '1.5 gallon capacity, filled weight about 13 lb',
      '15 in spout reaches the back of a bed',
      'Removable brass rose for a fine spray',
      'Powder-coated galvanised steel',
      'Level marks pressed into the body',
    ],
    specs: {
      'Capacity': '1.5 US gallons (5.7 L)',
      'Filled weight': 'About 13 lb (5.9 kg)',
      'Spout length': '15 in (38 cm)',
      'Overall size': '20 × 8 × 14 in (51 × 20 × 36 cm)',
      'Empty weight': '2.6 lb (1.2 kg)',
      'Materials': 'Powder-coated galvanised steel, brass rose',
    },
    inBox: ['Watering can', 'Removable brass rose', 'Care card'],
  },
];

export const featuredSkus = ['PLG-201', 'PLG-208', 'PLG-203', 'PLG-212'];
