const seedPins = [
  {
    id: "seed-0",
    title: "Malviya Nagar",
    area: "New Delhi",
    areaKey: "new-delhi",
    zip: "110017",
    price: 22000,
    label: "₹22k",
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Yellow Line",
    furnished: false,
    verified: true,
    score: "Strong local signal",
    latHint: 28.5355,
    lngHint: 77.21,
    facts: [
      "2 BHK in a low-rise lane",
      "10 min walk to metro",
      "Community says fair pricing this week"
    ]
  },
  {
    id: "seed-1",
    title: "Sector 137",
    area: "Noida",
    areaKey: "noida",
    zip: "201305",
    price: 31000,
    label: "₹31k",
    bhk: "3",
    type: "whole-flat",
    metro: true,
    metroLine: "Blue Line",
    furnished: true,
    verified: true,
    score: "Strong local signal",
    latHint: 28.5128,
    lngHint: 77.4081,
    facts: [
      "3 BHK in high-rise society",
      "Fully furnished",
      "Good for metro + expressway commute"
    ]
  },
  {
    id: "seed-2",
    title: "Patel Nagar",
    area: "New Delhi",
    areaKey: "new-delhi",
    zip: "110008",
    price: 14500,
    label: "Room",
    bhk: "2",
    type: "room",
    metro: true,
    metroLine: "Blue Line",
    furnished: true,
    verified: false,
    score: "Shared flat setup",
    latHint: 28.6517,
    lngHint: 77.1582,
    facts: [
      "Room available in a shared 2 BHK",
      "Works best for metro commuters",
      "No public phone visible"
    ]
  },
  {
    id: "seed-3",
    title: "Daryaganj",
    area: "Old Delhi",
    areaKey: "old-delhi",
    zip: "110002",
    price: 19500,
    label: "₹20k",
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Violet Line",
    furnished: false,
    verified: false,
    score: "Fresh local signal",
    latHint: 28.6439,
    lngHint: 77.2422,
    facts: [
      "2 BHK in an older mixed-use pocket",
      "Walkable to central old-city markets",
      "Compare upkeep and noise before deciding"
    ]
  },
  {
    id: "seed-4",
    title: "DLF Phase 2",
    area: "Gurgaon",
    areaKey: "gurgaon",
    zip: "122002",
    price: 38000,
    label: "₹38k",
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Yellow Line",
    furnished: true,
    verified: true,
    score: "Strong local signal",
    latHint: 28.4989,
    lngHint: 77.0896,
    facts: [
      "High-demand furnished listing",
      "Near Cyber City side commute",
      "Low broker-noise comments"
    ]
  },
  {
    id: "seed-5",
    title: "Alpha 1",
    area: "Greater Noida",
    areaKey: "greater-noida",
    zip: "201310",
    price: 24000,
    label: "₹24k",
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Aqua Line",
    furnished: false,
    verified: true,
    score: "Strong local signal",
    latHint: 28.4744,
    lngHint: 77.503,
    facts: [
      "2 BHK in a quieter township pocket",
      "More space for the rent",
      "Good option near the Aqua Line corridor"
    ]
  },
  {
    id: "seed-6",
    title: "Sector 15",
    area: "Faridabad",
    areaKey: "faridabad",
    zip: "121007",
    price: 18000,
    label: "₹18k",
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Violet Line",
    furnished: false,
    verified: false,
    score: "Fresh local signal",
    latHint: 28.3924,
    lngHint: 77.3197,
    facts: [
      "2 BHK in an older residential block",
      "Close to metro access",
      "Common choice for budget-focused renters"
    ]
  },
  {
    id: "seed-7",
    title: "Indirapuram",
    area: "Ghaziabad",
    areaKey: "ghaziabad",
    zip: "201014",
    price: 27000,
    label: "₹27k",
    bhk: "3",
    type: "whole-flat",
    metro: false,
    metroLine: "No nearby metro",
    furnished: true,
    verified: true,
    score: "Strong local signal",
    latHint: 28.6462,
    lngHint: 77.3698,
    facts: [
      "3 BHK in a dense family pocket",
      "Furnished stock is common here",
      "Popular with renters comparing value against Delhi"
    ]
  },
  {
    id: "seed-8",
    title: "Chandni Chowk",
    area: "Old Delhi",
    areaKey: "old-delhi",
    zip: "110006",
    price: 21000,
    label: "₹21k",
    bhk: "2",
    type: "room",
    metro: true,
    metroLine: "Yellow Line",
    furnished: false,
    verified: false,
    score: "Fresh local signal",
    latHint: 28.6562,
    lngHint: 77.2303,
    facts: [
      "Older building stock in dense market lanes",
      "Strong access to old-city markets and metro",
      "Compare carefully on ventilation and building upkeep"
    ]
  }
];

const seedFlatLets = [
  {
    id: "seed-let-0",
    kind: "flat-let",
    title: "Lotus Zing",
    buildingName: "Lotus Zing",
    area: "Greater Noida",
    areaKey: "greater-noida",
    zip: "201310",
    price: 41000,
    bhk: "3",
    type: "whole-flat",
    metro: true,
    metroLine: "Aqua Line",
    furnished: true,
    verified: false,
    gatedLabel: "Gated",
    availableFrom: "ASAP",
    score: "Live flat let",
    contactEmail: "host+lotuszing@delhirent.in",
    contactPhone: "+91 9876543210",
    latHint: 28.4652,
    lngHint: 77.5091,
    facts: [
      "3 BHK • Furnished",
      "Gated • Aqua Line",
      "Available now in Lotus Zing"
    ]
  },
  {
    id: "seed-let-1",
    kind: "flat-let",
    title: "DLF Phase 2 Room",
    buildingName: "DLF Phase 2",
    area: "Gurgaon",
    areaKey: "gurgaon",
    zip: "122002",
    price: 18500,
    bhk: "2",
    type: "room",
    metro: true,
    metroLine: "Yellow Line",
    furnished: true,
    verified: false,
    gatedLabel: "Gated",
    availableFrom: "Next month",
    score: "Live flat let",
    contactEmail: "host+dlfphase2@delhirent.in",
    contactPhone: "+91 9876501234",
    latHint: 28.4994,
    lngHint: 77.0878,
    facts: [
      "Room in 2 BHK • Furnished",
      "Gated • Yellow Line",
      "Move-in next month"
    ]
  },
  {
    id: "seed-let-2",
    kind: "flat-let",
    title: "Indirapuram Family Flat",
    buildingName: "ATS Advantage",
    area: "Ghaziabad",
    areaKey: "ghaziabad",
    zip: "201014",
    price: 29500,
    bhk: "3",
    type: "whole-flat",
    metro: false,
    metroLine: "No nearby metro",
    furnished: false,
    verified: false,
    gatedLabel: "Gated",
    availableFrom: "Flexible",
    score: "Live flat let",
    contactEmail: "host+indirapuram@delhirent.in",
    contactPhone: "+91 9811112233",
    latHint: 28.6407,
    lngHint: 77.3727,
    facts: [
      "3 BHK • Unfurnished",
      "Gated • No nearby metro",
      "Flexible move-in"
    ]
  }
];

const seedFlatHunts = [
  {
    id: "seed-hunt-0",
    kind: "flat-hunt",
    title: "Flat hunt",
    buildingName: "",
    area: "Greater Noida",
    areaKey: "greater-noida",
    zip: "",
    price: 42000,
    bhk: "3",
    type: "whole-flat",
    metro: true,
    metroLine: "Aqua Line",
    furnished: true,
    verified: false,
    gatedLabel: "Must have gated",
    timeline: "ASAP",
    score: "Live flat hunt",
    contactEmail: "hunter+gn@delhirent.in",
    contactPhone: "+91 9898989898",
    latHint: 28.4645,
    lngHint: 77.5078,
    facts: [
      "3 BHK preferred • Furnished",
      "Must have gated • Aqua Line",
      "Looking to move now"
    ]
  },
  {
    id: "seed-hunt-1",
    kind: "flat-hunt",
    title: "Room hunt",
    buildingName: "",
    area: "New Delhi",
    areaKey: "new-delhi",
    zip: "",
    price: 17000,
    bhk: "2",
    type: "room",
    metro: true,
    metroLine: "Blue Line",
    furnished: true,
    verified: false,
    gatedLabel: "No preference",
    timeline: "Within 30 days",
    score: "Live flat hunt",
    contactEmail: "hunter+delhi@delhirent.in",
    contactPhone: "+91 9765432100",
    latHint: 28.6481,
    lngHint: 77.1604,
    facts: [
      "Room in 2 BHK • Furnished",
      "No gated preference • Blue Line",
      "Move-in within 30 days"
    ]
  },
  {
    id: "seed-hunt-2",
    kind: "flat-hunt",
    title: "Flat hunt",
    buildingName: "",
    area: "Faridabad",
    areaKey: "faridabad",
    zip: "",
    price: 22000,
    bhk: "2",
    type: "whole-flat",
    metro: true,
    metroLine: "Violet Line",
    furnished: false,
    verified: false,
    gatedLabel: "No preference",
    timeline: "Flexible",
    score: "Live flat hunt",
    contactEmail: "hunter+faridabad@delhirent.in",
    contactPhone: "+91 9780011223",
    latHint: 28.3938,
    lngHint: 77.3175,
    facts: [
      "2 BHK preferred • Unfurnished",
      "No gated preference • Violet Line",
      "Flexible move-in"
    ]
  }
];

let pinEntries = seedPins.map((point) => ({ ...point, kind: "pin" }));
let flatLetEntries = seedFlatLets.map((point) => ({ ...point, kind: "flat-let" }));
let flatHuntEntries = seedFlatHunts.map((point) => ({ ...point, kind: "flat-hunt" }));
let points = [...pinEntries];

const filters = {
  area: "all",
  bhk: "all",
  type: "all",
  metro: false,
  furnished: false,
  verified: false
};

const layerVisibility = {
  pins: true,
  flatLets: true,
  flatHunts: true
};

const copyButton = document.querySelector(".copy-button");
const shareMessage = document.querySelector("#share-message");
const modal = document.querySelector("[data-modal]");
const openLearnButtons = document.querySelectorAll("[data-open-learn]");
const openLegalButtons = Array.from(document.querySelectorAll("[data-open-legal]"));
const startAppButton = document.querySelector("[data-start-app]");
const entryScreen = document.querySelector("[data-entry-screen]");
const appShellNodes = Array.from(document.querySelectorAll("[data-app-shell]"));
const startGuide = document.querySelector("[data-start-guide]");
const closeStartGuideButtons = Array.from(document.querySelectorAll("[data-close-start-guide]"));
const legalModal = document.querySelector("[data-legal-modal]");
const closeLegalButton = document.querySelector("[data-close-legal]");
const legalTabs = Array.from(document.querySelectorAll("[data-legal-tab]"));
const legalPanels = Array.from(document.querySelectorAll("[data-legal-panel]"));
const closeLearnButton = document.querySelector("[data-close-learn]");
const nextStepButton = document.querySelector("[data-next-step]");
const prevStepButton = document.querySelector("[data-prev-step]");
const stepScreens = Array.from(document.querySelectorAll(".step-screen"));
const stepDots = Array.from(document.querySelectorAll(".step-dot"));

const pointsLayer = document.querySelector("[data-points-layer]");
const realMapElement = document.querySelector("[data-real-map]");
const mapCanvas = document.querySelector("[data-map-canvas]");
const detailPanel = document.querySelector("[data-detail-panel]");
const closeDetailButton = document.querySelector("[data-close-detail]");
const detailArea = document.querySelector("[data-detail-area]");
const detailTitle = document.querySelector("[data-detail-title]");
const detailPrice = document.querySelector("[data-detail-price]");
const detailMeta = document.querySelector("[data-detail-meta]");
const detailFacts = document.querySelector("[data-detail-facts]");
const detailScore = document.querySelector("[data-detail-score]");
const detailChips = document.querySelector("[data-detail-chips]");
const detailShareButton = document.querySelector("[data-detail-share]");
const detailInterestSection = document.querySelector("[data-detail-interest]");
const detailInterestKicker = document.querySelector("[data-detail-interest-kicker]");
const detailInterestCopy = document.querySelector("[data-detail-interest-copy]");
const detailInterestEmailInput = document.querySelector("[data-detail-interest-email]");
const detailInterestButton = document.querySelector("[data-detail-interest-button]");
const detailInterestFeedback = document.querySelector("[data-detail-interest-feedback]");

const statVisible = document.querySelector("[data-stat-visible]");
const statAverage = document.querySelector("[data-stat-average]");
const statMetro = document.querySelector("[data-stat-metro]");
const statVisibleCta = document.querySelector("[data-stat-visible-cta]");
const statTotalRent = document.querySelector("[data-stat-total-rent]");

const areaButtons = Array.from(document.querySelectorAll("[data-area]"));
const bhkButtons = Array.from(document.querySelectorAll("[data-bhk]"));
const typeButtons = Array.from(document.querySelectorAll("[data-type]"));
const signalToggles = Array.from(document.querySelectorAll("[data-signal]"));
const layerToggles = Array.from(document.querySelectorAll("[data-layer]"));
const clearFiltersButton = document.querySelector("[data-clear-filters]");
const zipSearchInput = document.querySelector("[data-zip-search]");
const searchSuggestions = document.querySelector("[data-search-suggestions]");
const runSearchButton = document.querySelector("[data-run-search]");
const summaryGrid = document.querySelector("[data-summary-grid]");
const toggleFiltersButton = document.querySelector("[data-toggle-filters]");
const filtersDrawer = document.querySelector("[data-filters-drawer]");
const closeFiltersButton = document.querySelector("[data-close-filters]");
const statVisibleInline = document.querySelector("[data-stat-visible-inline]");
const jumpAddPinButtons = Array.from(document.querySelectorAll("[data-jump-add-pin]"));
const jumpFlatHuntButtons = Array.from(document.querySelectorAll("[data-jump-flat-hunt]"));
const jumpFlatLetButtons = Array.from(document.querySelectorAll("[data-jump-flat-let]"));
const addPinSection = document.querySelector("[data-add-pin-section]");
const closeAddPinButton = document.querySelector("[data-close-add-pin]");
const addPinBackdrop = document.querySelector("[data-add-pin-backdrop]");
const contributePanels = Array.from(document.querySelectorAll("[data-contribute-panel]"));
const contributeHelpPanels = Array.from(document.querySelectorAll("[data-contribute-help]"));
const contributeKicker = document.querySelector("[data-contribute-kicker]");
const contributeTitle = document.querySelector("[data-contribute-title]");
const openLiveStatsButtons = Array.from(document.querySelectorAll("[data-open-live-stats]"));
const liveStatsBackdrop = document.querySelector("[data-live-stats-backdrop]");
const closeLiveStatsButton = document.querySelector("[data-close-live-stats]");
const liveLeaderboard = document.querySelector("[data-live-leaderboard]");
const liveAverages = document.querySelector("[data-live-averages]");
const liveStatsHelper = document.querySelector("[data-live-stats-helper]");
const liveStatsSubcopy = document.querySelector("[data-live-stats-subcopy]");
const liveModeButtons = Array.from(document.querySelectorAll("[data-live-mode]"));

const workflowTabs = Array.from(document.querySelectorAll("[data-flow]"));
const workflowPanels = Array.from(document.querySelectorAll("[data-flow-panel]"));
const forms = Array.from(document.querySelectorAll("[data-form]"));

let activeStep = 0;
let supabaseClient = null;
let realMap = null;
let selectedPointId = null;
let searchQuery = "";
let mapReady = false;
let pickedLocation = null;
let reverseGeocodeLastAt = 0;
const reverseGeocodeCache = new Map();
let googleGeocoder = null;
let projectionOverlay = null;
let googleMapsApiPromise = null;
let AdvancedMarkerElementClass = null;
let AutocompleteSuggestionClass = null;
let AutocompleteSessionTokenClass = null;
const advancedMarkers = new Map();
let latestVisiblePoints = [...points];
let liveStatsMode = "overall";
let userLocation = null;
let contributionMode = "add-pin";
let hasShownStartGuide = false;
let legalMode = "privacy";
let searchSuggestionItems = [];
let highlightedSuggestionIndex = -1;
let searchDebounceTimer = null;
let autocompleteSessionToken = null;
const GROUPED_MARKER_EXPAND_ZOOM = 13.5;
let interestSubmissionPending = false;

function rebuildPointsCollection() {
  points = [
    ...(layerVisibility.pins ? pinEntries : []),
    ...(layerVisibility.flatLets ? flatLetEntries : []),
    ...(layerVisibility.flatHunts ? flatHuntEntries : [])
  ];
}

function getConfig() {
  return window.DELHI_RENT_CONFIG || {};
}

function hasSupabaseConfig() {
  const config = getConfig();
  return Boolean(config.SUPABASE_URL && config.SUPABASE_ANON_KEY);
}

function initSupabase() {
  if (!hasSupabaseConfig() || !window.supabase) {
    return null;
  }

  const config = getConfig();
  return window.supabase.createClient(
    config.SUPABASE_URL,
    config.SUPABASE_ANON_KEY
  );
}

function getGoogleMapsConfig() {
  const config = getConfig();
  return {
    apiKey: config.GOOGLE_MAPS_API_KEY || "",
    mapId: config.GOOGLE_MAP_ID || "DEMO_MAP_ID"
  };
}

const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#0b1020" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0b1020" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#7782a0" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#2b3148" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#12182b" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#697590" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#182033" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#121929" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8c97b3" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#12182b" }] },
  { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#697590" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#08111f" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#41506f" }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#0d1324" }] }
];

function formatCurrency(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function formatCompactCurrency(value) {
  const amount = Number(value) || 0;
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1).replace(/\.0$/, "")}Cr`;
  }

  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, "")}L`;
  }

  if (amount >= 1000) {
    return `₹${Math.round(amount / 1000)}k`;
  }

  return formatCurrency(amount);
}

function compactPrice(value) {
  const amount = Number(value) || 0;

  if (amount >= 10000000) {
    return `${(amount / 10000000).toFixed(1).replace(/\.0$/, "")}Cr`;
  }

  if (amount >= 100000) {
    return `${(amount / 100000).toFixed(1).replace(/\.0$/, "")}L`;
  }

  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }

  return String(Math.round(amount));
}

function formatFlatType(point) {
  if (point.type === "room") {
    return "Room";
  }

  return `${point.bhk} BHK`;
}

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getPointTone(point) {
  if (point.kind === "flat-let") {
    return "let";
  }

  if (point.kind === "flat-hunt") {
    return "hunt";
  }

  if (point.score.toLowerCase().includes("caution")) {
    return "flagged";
  }

  if (point.type === "room") {
    return "warn";
  }

  return "good";
}

function computeFallbackPosition(point, index) {
  if (typeof point.latHint === "number" && typeof point.lngHint === "number") {
    const top = 82 - (point.latHint - 28.45) * 120;
    const left = 15 + (point.lngHint - 77.0) * 85;
    return {
      top: `${Math.max(10, Math.min(82, top))}%`,
      left: `${Math.max(12, Math.min(82, left))}%`
    };
  }

  const fallback = [
    { top: "18%", left: "21%" },
    { top: "46%", left: "60%" },
    { top: "31%", left: "49%" },
    { top: "63%", left: "33%" },
    { top: "72%", left: "73%" }
  ];

  return fallback[index % fallback.length];
}

function buildPointMarkup(point) {
  const bhkLabel = point.type === "room" ? "ROOM" : `${point.bhk}BHK`;
  const rentLabel = compactPrice(point.price);

  if (point.kind === "flat-let") {
    return `
      <span>FLAT LET</span>
      <strong>${bhkLabel} ${rentLabel}</strong>
    `;
  }

  if (point.kind === "flat-hunt") {
    return `
      <span>FLAT HUNT</span>
      <strong>${bhkLabel} ${rentLabel}</strong>
    `;
  }

  return `
    <strong>${bhkLabel} ${rentLabel}</strong>
  `;
}

function getCoordinateKey(point) {
  if (typeof point.latHint !== "number" || typeof point.lngHint !== "number") {
    return null;
  }

  return `${point.latHint.toFixed(6)}|${point.lngHint.toFixed(6)}`;
}

function buildCoordinateGroups(list) {
  const coordinateGroups = new Map();

  list.forEach((point) => {
    const key = getCoordinateKey(point);
    if (!key) {
      return;
    }

    const existing = coordinateGroups.get(key) || [];
    existing.push(point);
    coordinateGroups.set(key, existing);
  });

  return coordinateGroups;
}

function averageGroupPosition(group) {
  const total = group.reduce(
    (accumulator, point) => {
      return {
        lat: accumulator.lat + Number(point.latHint || 0),
        lng: accumulator.lng + Number(point.lngHint || 0)
      };
    },
    { lat: 0, lng: 0 }
  );

  return {
    lat: total.lat / group.length,
    lng: total.lng / group.length
  };
}

function buildNearbyGroups(list, thresholdKm) {
  const mappable = list.filter(
    (point) =>
      typeof point.latHint === "number" && typeof point.lngHint === "number"
  );
  const groups = [];
  const visited = new Set();

  mappable.forEach((point) => {
    if (visited.has(String(point.id))) {
      return;
    }

    const group = [point];
    visited.add(String(point.id));

    mappable.forEach((candidate) => {
      if (visited.has(String(candidate.id))) {
        return;
      }

      if (
        distanceInKm(
          { lat: point.latHint, lng: point.lngHint },
          { lat: candidate.latHint, lng: candidate.lngHint }
        ) <= thresholdKm
      ) {
        group.push(candidate);
        visited.add(String(candidate.id));
      }
    });

    groups.push(group);
  });

  return groups;
}

function buildScreenGroups(list, thresholdPx) {
  if (!projectionOverlay) {
    return [];
  }

  const projection = projectionOverlay.getProjection();
  if (!projection) {
    return [];
  }

  const mappable = list
    .filter(
      (point) =>
        typeof point.latHint === "number" && typeof point.lngHint === "number"
    )
    .map((point) => {
      const pixel = projection.fromLatLngToDivPixel(
        new window.google.maps.LatLng(point.latHint, point.lngHint)
      );
      return pixel ? { point, pixel } : null;
    })
    .filter(Boolean);

  const groups = [];

  mappable.forEach((entry) => {
    const matchingGroup = groups.find((group) =>
      group.entries.some((candidate) => {
        const dx = candidate.pixel.x - entry.pixel.x;
        const dy = candidate.pixel.y - entry.pixel.y;
        return Math.hypot(dx, dy) <= thresholdPx;
      })
    );

    if (matchingGroup) {
      matchingGroup.entries.push(entry);
      return;
    }

    groups.push({ entries: [entry] });
  });

  return groups.map((group) => group.entries.map((entry) => entry.point));
}

function spreadDuplicateCoordinates(group) {
  if (!Array.isArray(group) || group.length === 0) {
    return new Map();
  }

  const baseLat = group[0].latHint;
  const baseLng = group[0].lngHint;
  const spread = new Map();

  if (group.length === 1) {
    spread.set(String(group[0].id), { lat: baseLat, lng: baseLng });
    return spread;
  }

  const baseRadius = group.length <= 3 ? 0.0008 : 0.0011;
  const lngScale = 1 / Math.max(Math.cos((baseLat * Math.PI) / 180), 0.35);

  group.forEach((point, index) => {
    const ring = Math.floor(index / 6);
    const indexInRing = index % 6;
    const pointsInRing = Math.min(6, group.length - ring * 6);
    const radius = baseRadius * (1 + ring * 0.7);
    const angle = (Math.PI * 2 * indexInRing) / pointsInRing - Math.PI / 2;
    spread.set(String(point.id), {
      lat: baseLat + Math.sin(angle) * radius,
      lng: baseLng + Math.cos(angle) * radius * lngScale
    });
  });

  return spread;
}

function buildMarkerPositionMap(list) {
  const coordinateGroups = buildCoordinateGroups(list);
  const markerPositions = new Map();

  coordinateGroups.forEach((group) => {
    const spread = spreadDuplicateCoordinates(group);
    spread.forEach((position, pointId) => {
      markerPositions.set(pointId, position);
    });
  });

  return markerPositions;
}

function createPointButton(point, positionStyles = "") {
  return `
    <button
      class="map-point map-point--${getPointTone(point)}"
      type="button"
      ${positionStyles}
      data-point-id="${point.id}"
    >
      ${buildPointMarkup(point)}
    </button>
  `;
}

function clearAdvancedMarkers() {
  advancedMarkers.forEach(({ marker }) => {
    marker.map = null;
  });
  advancedMarkers.clear();
}

function createGroupedMarker(group) {
  if (!realMap || !AdvancedMarkerElementClass || !Array.isArray(group) || group.length === 0) {
    return;
  }

  const center = averageGroupPosition(group);
  const kinds = new Set(group.map((point) => point.kind));
  const clusterLabel =
    kinds.size === 1 && kinds.has("flat-hunt")
      ? group.length === 1 ? "hunt" : "hunts"
      : kinds.size === 1 && kinds.has("flat-let")
        ? group.length === 1 ? "let" : "lets"
        : group.length === 1
          ? "pin"
          : "pins";
  const content = document.createElement("button");
  content.type = "button";
  content.className = "map-point map-point--cluster";
  content.innerHTML = `
    <strong>${group.length}</strong>
    <span>${clusterLabel}</span>
  `;
  content.setAttribute("aria-label", `${group.length} ${clusterLabel} in this area. Zoom in to expand.`);
  content.setAttribute("title", "Zoom in to expand");
  content.disabled = true;

  const marker = new AdvancedMarkerElementClass({
    map: realMap,
    position: center,
    content,
    zIndex: 1200,
    collisionBehavior: window.google?.maps?.CollisionBehavior?.REQUIRED
  });

  advancedMarkers.set(`group:${group.map((point) => point.id).join("|")}`, {
    marker,
    content,
    point: null
  });
}

function createAdvancedMarker(point, positionOverride) {
  if (
    !realMap ||
    !AdvancedMarkerElementClass ||
    typeof point.latHint !== "number" ||
    typeof point.lngHint !== "number"
  ) {
    return;
  }

  const content = document.createElement("button");
  content.type = "button";
  content.className = `map-point map-point--${getPointTone(point)}`;
  content.dataset.pointId = String(point.id);
  content.innerHTML = buildPointMarkup(point);
  content.addEventListener("click", (event) => {
    event.stopPropagation();
    if (matchesFilters(point) && matchesSearch(point)) {
      openDetail(point);
    }
  });

  const marker = new AdvancedMarkerElementClass({
    map: realMap,
    position: positionOverride || { lat: point.latHint, lng: point.lngHint },
    content,
    zIndex: 1000 + Number(String(point.id).replace(/\D/g, "").slice(-4) || 0),
    collisionBehavior: window.google?.maps?.CollisionBehavior?.REQUIRED
  });

  advancedMarkers.set(String(point.id), { marker, content, point });
}

function renderPoints(targetPoints = points) {
  clearAdvancedMarkers();

  if (realMap && AdvancedMarkerElementClass) {
    const activePoints = Array.isArray(targetPoints) ? targetPoints : points;
    const currentZoom = realMap.getZoom() || 0;
    const markerPositions = buildMarkerPositionMap(activePoints);

    if (pointsLayer) {
      pointsLayer.innerHTML = "";
    }

    if (currentZoom < GROUPED_MARKER_EXPAND_ZOOM) {
      const nearbyGroups =
        buildScreenGroups(
          activePoints,
          currentZoom < 15 ? 180 : currentZoom < 17 ? 140 : 112
        ).filter((group) => group.length > 0) ||
        buildNearbyGroups(
          activePoints,
          currentZoom < 15 ? 0.28 : currentZoom < 17 ? 0.18 : 0.1
        );
      const renderedPointIds = new Set();

      nearbyGroups.forEach((group) => {
        if (group.length > 1) {
          createGroupedMarker(group);
          group.forEach((point) => {
            renderedPointIds.add(String(point.id));
          });
        }
      });

      activePoints.forEach((point) => {
        if (!renderedPointIds.has(String(point.id))) {
          createAdvancedMarker(point, markerPositions.get(String(point.id)));
        }
      });
    } else {
      activePoints.forEach((point) => {
        createAdvancedMarker(point, markerPositions.get(String(point.id)));
      });
    }

    latestVisiblePoints = activePoints;
    highlightSelectedPoint();
    return;
  }

  const activePoints = Array.isArray(targetPoints) ? targetPoints : points;

  if (!pointsLayer) {
    return;
  }

  pointsLayer.innerHTML = activePoints
    .map((point, index) => {
      const position = computeFallbackPosition(point, index);
      return createPointButton(
        point,
        `style="top: ${position.top}; left: ${position.left}"`
      );
    })
    .join("");
}

function pointsToGeoJson(visiblePoints) {
  return {
    type: "FeatureCollection",
    features: visiblePoints
      .filter(
        (point) =>
          typeof point.lngHint === "number" && typeof point.latHint === "number"
      )
      .map((point) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [point.lngHint, point.latHint]
        },
        properties: {
          id: String(point.id),
          title: point.title,
          label: point.label,
          tone: getPointTone(point)
        }
      }))
  };
}

function updateMapSourceData(visiblePoints) {
  void visiblePoints;
  updateProjectedPositions();
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function fallbackCopyText(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "true");
  helper.style.position = "fixed";
  helper.style.top = "0";
  helper.style.left = "0";
  helper.style.opacity = "0";
  helper.style.pointerEvents = "none";
  document.body.appendChild(helper);
  helper.focus();
  helper.select();
  helper.setSelectionRange(0, helper.value.length);

  const copied = document.execCommand("copy");
  document.body.removeChild(helper);
  return copied;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  return fallbackCopyText(text);
}

function getSelectedPoint() {
  return points.find((point) => String(point.id) === String(selectedPointId)) || null;
}

function updateDetailActionState(point = getSelectedPoint()) {
  if (detailShareButton) {
    detailShareButton.setAttribute("title", "Share");
    detailShareButton.setAttribute("aria-label", "Share");
  }
}

function getPinLink(point) {
  if (!point) {
    return window.location.href;
  }

  const url = new URL(window.location.href);
  url.hash = `pin=${encodeURIComponent(point.id)}`;
  return url.toString();
}

function syncPinHash(point) {
  const url = new URL(window.location.href);
  if (point) {
    url.hash = `pin=${encodeURIComponent(point.id)}`;
  } else {
    url.hash = "";
  }
  window.history.replaceState({}, "", url.toString());
}

function getPointIdFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash.startsWith("pin=")) {
    return null;
  }

  return decodeURIComponent(hash.slice(4));
}

function getDisplayEntries(entryList) {
  return entryList.filter(matchesFilters);
}

function getVisiblePinsOnly() {
  return getDisplayEntries(pinEntries);
}

function updateLocationInputs(lat, lng) {
  document.querySelectorAll('input[name="latitudeHint"]').forEach((input) => {
    input.value = String(lat);
  });
  document.querySelectorAll('input[name="longitudeHint"]').forEach((input) => {
    input.value = String(lng);
  });
}

function updatePickedLocationMessage(message) {
  document.querySelectorAll("[data-picked-location]").forEach((node) => {
    node.textContent = message;
  });
}

function fillAddressFields(result) {
  const address = result.address || {};
  const areaValue =
    address.suburb ||
    address.neighbourhood ||
    address.city_district ||
    address.residential ||
    address.quarter ||
    address.city ||
    address.town ||
    "";
  const zipValue = address.postcode || "";

  document.querySelectorAll('input[name="area"]').forEach((input) => {
    if (!input.value.trim()) {
      input.value = areaValue;
    }
  });

  document.querySelectorAll('input[name="zip"]').forEach((input) => {
    if (!input.value.trim()) {
      input.value = zipValue;
    }
  });

  const labelParts = [areaValue, zipValue].filter(Boolean);
  if (labelParts.length > 0) {
    updatePickedLocationMessage(
      `Approximate map location attached: ${labelParts.join(" • ")}`
    );
  }
}

function updateProjectedPositions() {
  if (advancedMarkers.size > 0) {
    return;
  }

  if (!realMap || !projectionOverlay) {
    return;
  }

  const projection = projectionOverlay.getProjection();
  if (!projection) {
    return;
  }

  getMapButtons().forEach((button) => {
    const point = points.find((entry) => String(entry.id) === String(button.dataset.pointId));
    if (!point || typeof point.lngHint !== "number" || typeof point.latHint !== "number") {
      return;
    }

    const projected = projection.fromLatLngToDivPixel(
      new window.google.maps.LatLng(point.latHint, point.lngHint)
    );
    if (!projected) {
      return;
    }

    button.style.left = `${projected.x}px`;
    button.style.top = `${projected.y}px`;
    button.style.transform = "translate(-50%, -100%)";
  });
}

function highlightSelectedPoint() {
  if (advancedMarkers.size > 0) {
    advancedMarkers.forEach(({ content }, pointId) => {
      content.classList.toggle(
        "map-point--selected",
        String(pointId) === String(selectedPointId)
      );
    });
    return;
  }

  getMapButtons().forEach((button) => {
    button.classList.toggle(
      "map-point--selected",
      String(button.dataset.pointId) === String(selectedPointId)
    );
  });
}

function loadGoogleMapsApi() {
  if (window.google?.maps?.importLibrary) {
    return Promise.resolve(window.google.maps);
  }

  if (googleMapsApiPromise) {
    return googleMapsApiPromise;
  }

  const { apiKey } = getGoogleMapsConfig();
  if (!apiKey) {
    return Promise.reject(new Error("Missing Google Maps API key"));
  }

  googleMapsApiPromise = new Promise((resolve, reject) => {
    const callbackName = "__delhiRentGoogleMapsInit";
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&callback=${callbackName}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    window[callbackName] = () => {
      delete window[callbackName];
      resolve(window.google.maps);
    };
    document.head.appendChild(script);
  });

  return googleMapsApiPromise;
}

function createProjectionOverlay(map) {
  const overlay = new window.google.maps.OverlayView();
  overlay.onAdd = () => {};
  overlay.draw = () => {
    mapReady = true;
    updateProjectedPositions();
  };
  overlay.onRemove = () => {};
  overlay.setMap(map);
  return overlay;
}

function normalizeGoogleAddress(result) {
  const components = result.address_components || [];
  const getLongName = (...types) => {
    const match = components.find((component) =>
      types.every((type) => component.types.includes(type))
    );
    return match?.long_name || "";
  };

  return {
    address: {
      suburb:
        getLongName("sublocality_level_1", "sublocality") ||
        getLongName("neighborhood") ||
        getLongName("locality"),
      city_district:
        getLongName("administrative_area_level_2") ||
        getLongName("administrative_area_level_3"),
      city: getLongName("locality") || getLongName("administrative_area_level_2"),
      postcode: getLongName("postal_code")
    }
  };
}

async function reverseGeocode(lat, lng) {
  const cacheKey = `${lat.toFixed(4)},${lng.toFixed(4)}`;
  if (reverseGeocodeCache.has(cacheKey)) {
    return reverseGeocodeCache.get(cacheKey);
  }

  if (!googleGeocoder) {
    throw new Error("Google geocoder is not ready");
  }

  const now = Date.now();
  const elapsed = now - reverseGeocodeLastAt;
  if (elapsed < 250) {
    await wait(250 - elapsed);
  }

  reverseGeocodeLastAt = Date.now();
  const response = await googleGeocoder.geocode({
    location: { lat, lng }
  });
  const firstResult = response.results?.[0];
  if (!firstResult) {
    throw new Error("No reverse geocode result");
  }

  const normalized = normalizeGoogleAddress(firstResult);
  reverseGeocodeCache.set(cacheKey, normalized);
  return normalized;
}

async function initRealMap() {
  if (!realMapElement) {
    return null;
  }

  const { mapId } = getGoogleMapsConfig();
  const mapsNamespace = await loadGoogleMapsApi();
  const { Map } = await mapsNamespace.importLibrary("maps");
  const { Geocoder } = await mapsNamespace.importLibrary("geocoding");
  const { AdvancedMarkerElement } = await mapsNamespace.importLibrary("marker");
  const { ColorScheme } = await mapsNamespace.importLibrary("core");
  const { AutocompleteSuggestion, AutocompleteSessionToken } =
    await mapsNamespace.importLibrary("places");

  googleGeocoder = new Geocoder();
  AdvancedMarkerElementClass = AdvancedMarkerElement;
  AutocompleteSuggestionClass = AutocompleteSuggestion;
  AutocompleteSessionTokenClass = AutocompleteSessionToken;
  resetAutocompleteSession();

  const mapOptions = {
    center: { lat: 28.6139, lng: 77.209 },
    zoom: 10.1,
    minZoom: 4,
    maxZoom: 20,
    colorScheme: ColorScheme.DARK,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: true,
    clickableIcons: false,
    gestureHandling: "greedy"
  };

  if (mapId && mapId !== "DEMO_MAP_ID") {
    mapOptions.mapId = mapId;
  } else {
    mapOptions.styles = darkMapStyles;
  }

  const map = new Map(realMapElement, mapOptions);

  projectionOverlay = createProjectionOverlay(map);

  if (realMapElement.parentElement) {
    realMapElement.parentElement.classList.add("map-canvas--google");
  }

  map.addListener("idle", updateProjectedPositions);
  map.addListener("zoom_changed", () => {
    renderPoints(latestVisiblePoints);
    updateProjectedPositions();
  });
  map.addListener("drag", updateProjectedPositions);
  map.addListener("click", (event) => {
    if (!event.latLng) {
      return;
    }

    pickedLocation = {
      lat: Number(event.latLng.lat().toFixed(6)),
      lng: Number(event.latLng.lng().toFixed(6))
    };

    updateLocationInputs(pickedLocation.lat, pickedLocation.lng);
    updatePickedLocationMessage(
      `Approximate map location attached: ${pickedLocation.lat}, ${pickedLocation.lng}. Looking up area and ZIP...`
    );

    reverseGeocode(pickedLocation.lat, pickedLocation.lng)
      .then(fillAddressFields)
      .catch(() => {
        updatePickedLocationMessage(
          `Approximate map location attached: ${pickedLocation.lat}, ${pickedLocation.lng}. Fill area and ZIP manually if needed.`
        );
      });
  });

  return map;
}

function getMapButtons() {
  return Array.from(document.querySelectorAll("[data-point-id]"));
}

function setActiveChip(buttons, attribute, value) {
  buttons.forEach((button) => {
    button.classList.toggle("chip--active", button.dataset[attribute] === value);
  });
}

function matchesFilters(point) {
  const layerMatch =
    (point.kind === "pin" && layerVisibility.pins) ||
    (point.kind === "flat-let" && layerVisibility.flatLets) ||
    (point.kind === "flat-hunt" && layerVisibility.flatHunts);
  const areaMatch = filters.area === "all" || point.areaKey === filters.area;
  const bhkMatch = filters.bhk === "all" || point.bhk === filters.bhk;
  const typeMatch = filters.type === "all" || point.type === filters.type;
  const metroMatch = !filters.metro || point.metro;
  const furnishedMatch = !filters.furnished || point.furnished;
  const verifiedMatch = !filters.verified || point.kind !== "pin" || point.verified;

  return layerMatch && areaMatch && bhkMatch && typeMatch && metroMatch && furnishedMatch && verifiedMatch;
}

function matchesSearch(point, query = searchQuery) {
  if (!query) {
    return true;
  }

  const haystack = [
    point.zip,
    point.title,
    point.area,
    point.buildingName,
    point.metroLine,
    point.score,
    ...(Array.isArray(point.facts) ? point.facts : [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function resetAutocompleteSession() {
  autocompleteSessionToken = AutocompleteSessionTokenClass
    ? new AutocompleteSessionTokenClass()
    : null;
}

function closeSearchSuggestions() {
  searchSuggestionItems = [];
  highlightedSuggestionIndex = -1;

  if (searchSuggestions) {
    searchSuggestions.hidden = true;
    searchSuggestions.innerHTML = "";
  }
}

function renderSearchSuggestions() {
  if (!searchSuggestions || searchSuggestionItems.length === 0) {
    closeSearchSuggestions();
    return;
  }

  searchSuggestions.hidden = false;
  searchSuggestions.innerHTML = searchSuggestionItems
    .map((item, index) => {
      const prediction = item.placePrediction;
      const mainText =
        prediction?.mainText?.toString() || prediction?.text?.toString() || "";
      const secondaryText = prediction?.secondaryText?.toString() || "";

      return `
        <button
          class="map-search-suggestion ${index === highlightedSuggestionIndex ? "map-search-suggestion--active" : ""}"
          type="button"
          data-suggestion-index="${index}"
        >
          <strong>${mainText}</strong>
          <span>${secondaryText}</span>
        </button>
      `;
    })
    .join("");
}

async function applyPlaceSuggestion(item) {
  const prediction = item?.placePrediction;
  if (!prediction) {
    return;
  }

  const place = prediction.toPlace();
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "location", "viewport"]
  });

  if (zipSearchInput) {
    zipSearchInput.value =
      place.displayName || prediction.text?.toString() || zipSearchInput.value;
  }

  applyFilters();
  closeSearchSuggestions();
  resetAutocompleteSession();

  if (place.viewport && realMap) {
    realMap.fitBounds(place.viewport, 72);
    return;
  }

  if (place.location && realMap) {
    realMap.panTo(place.location);
    realMap.setZoom(15);
  }
}

async function updateSearchSuggestions() {
  if (!zipSearchInput || !AutocompleteSuggestionClass) {
    return;
  }

  const input = zipSearchInput.value.trim();
  if (input.length < 2) {
    closeSearchSuggestions();
    return;
  }

  if (!autocompleteSessionToken) {
    resetAutocompleteSession();
  }

  try {
    const request = {
      input,
      includedRegionCodes: ["in"],
      sessionToken: autocompleteSessionToken
    };

    if (realMap) {
      const bounds = realMap.getBounds();
      if (bounds) {
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();
        request.locationBias = {
          north: northEast.lat(),
          east: northEast.lng(),
          south: southWest.lat(),
          west: southWest.lng()
        };
      }
    }

    const { suggestions } =
      await AutocompleteSuggestionClass.fetchAutocompleteSuggestions(request);

    searchSuggestionItems = suggestions || [];
    highlightedSuggestionIndex = searchSuggestionItems.length > 0 ? 0 : -1;
    renderSearchSuggestions();
  } catch (error) {
    console.warn("Autocomplete suggestions failed", error);
    closeSearchSuggestions();
  }
}

async function geocodeSearchQuery(query) {
  if (!googleGeocoder || !query) {
    return null;
  }

  const response = await googleGeocoder.geocode({
    address: query,
    region: "IN"
  });

  return response.results?.[0] || null;
}

async function resolveSubmissionCoordinates(values) {
  const explicitLat = Number(values.latitudeHint || 0);
  const explicitLng = Number(values.longitudeHint || 0);

  if (explicitLat && explicitLng) {
    return { lat: explicitLat, lng: explicitLng, source: "manual" };
  }

  const query = [
    values.building,
    values.area,
    values.zip,
    "Delhi NCR",
    "India"
  ]
    .filter(Boolean)
    .join(", ");

  if (!query) {
    return { lat: null, lng: null, source: "missing" };
  }

  try {
    const result = await geocodeSearchQuery(query);
    const location = result?.geometry?.location;
    const lat = typeof location?.lat === "function" ? location.lat() : location?.lat;
    const lng = typeof location?.lng === "function" ? location.lng() : location?.lng;

    if (typeof lat === "number" && typeof lng === "number") {
      return { lat, lng, source: "geocoded" };
    }
  } catch (error) {
    console.warn("Submission geocoding failed", error);
  }

  return { lat: null, lng: null, source: "missing" };
}

async function hydratePointCoordinates(list) {
  const hydrated = await Promise.all(
    list.map(async (point) => {
      if (typeof point.latHint === "number" && typeof point.lngHint === "number") {
        return point;
      }

      const resolved = await resolveSubmissionCoordinates({
        building: point.buildingName,
        area: point.area,
        zip: point.zip
      });

      if (typeof resolved.lat === "number" && typeof resolved.lng === "number") {
        return {
          ...point,
          latHint: resolved.lat,
          lngHint: resolved.lng
        };
      }

      return point;
    })
  );

  return hydrated;
}

function zoomToPoints(targetPoints) {
  if (!realMap || !Array.isArray(targetPoints) || targetPoints.length === 0) {
    return;
  }

  const mappablePoints = targetPoints.filter(
    (point) =>
      typeof point.lngHint === "number" && typeof point.latHint === "number"
  );

  if (mappablePoints.length === 0) {
    return;
  }

  if (mappablePoints.length === 1) {
    const [point] = mappablePoints;
    realMap.panTo({ lat: point.latHint, lng: point.lngHint });
    realMap.setZoom(Math.max(realMap.getZoom() || 10, 12.4));
    return;
  }

  const bounds = new window.google.maps.LatLngBounds();
  mappablePoints.forEach((point) => {
    bounds.extend({ lat: point.latHint, lng: point.lngHint });
  });

  realMap.fitBounds(bounds, 72);

  window.setTimeout(() => {
    if ((realMap.getZoom() || 0) > 13.2) {
      realMap.setZoom(13.2);
    }
  }, 120);
}

function renderStats(visiblePoints) {
  const total = visiblePoints.length;
  const average =
    total > 0
      ? Math.round(
          visiblePoints.reduce((sum, point) => sum + point.price, 0) / total
        )
      : 0;
  const nearMetro = visiblePoints.filter((point) => point.metro).length;

  if (statVisible) {
    statVisible.textContent = String(total);
  }
  if (statAverage) {
    statAverage.textContent = total ? formatCurrency(average) : "No match";
  }
  if (statMetro) {
    statMetro.textContent = String(nearMetro);
  }
  if (statVisibleInline) {
    statVisibleInline.textContent = `${total} pins in view`;
  }
}

function renderDirectoryTotals() {
  const overallCount = pinEntries.length;
  const overallRent = pinEntries.reduce((sum, point) => sum + Number(point.price || 0), 0);

  if (statVisibleCta) {
    statVisibleCta.textContent = `${overallCount} listings`;
  }

  if (statTotalRent) {
    statTotalRent.textContent = `${formatCompactCurrency(overallRent)} total rent`;
  }
}

function distanceInKm(from, to) {
  const rad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = rad(to.lat - from.lat);
  const dLng = rad(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(from.lat)) *
      Math.cos(rad(to.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getLiveStatsPoints() {
  const visiblePins = latestVisiblePoints.filter((point) => point.kind === "pin");
  if (liveStatsMode !== "nearby" || !userLocation) {
    return visiblePins;
  }

  const nearbyPoints = visiblePins.filter(
    (point) =>
      typeof point.latHint === "number" &&
      typeof point.lngHint === "number" &&
      distanceInKm(userLocation, { lat: point.latHint, lng: point.lngHint }) <= 5
  );

  return nearbyPoints;
}

function renderEmptyLiveStats(message) {
  if (liveLeaderboard) {
    liveLeaderboard.innerHTML = `<article class="live-stat-card live-stat-card--empty">${message}</article>`;
  }
  if (liveAverages) {
    liveAverages.innerHTML = `<article class="live-stat-card live-stat-card--empty">Try a broader search or fewer filters.</article>`;
  }
}

function renderLiveStats() {
  const activePoints = getLiveStatsPoints();
  if (!liveLeaderboard || !liveAverages || !liveStatsHelper || !liveStatsSubcopy) {
    return;
  }

  liveModeButtons.forEach((button) => {
    button.classList.toggle("live-stats-pill--active", button.dataset.liveMode === liveStatsMode);
  });

  if (liveStatsMode === "nearby") {
    liveStatsSubcopy.textContent = "Pins within 5 km of your current location.";
    liveStatsHelper.textContent = userLocation
      ? "Using pins within 5 km."
      : "Location not available yet. Showing the full map view.";
  } else {
    liveStatsSubcopy.textContent = "Live numbers from the pins on screen.";
    liveStatsHelper.textContent = "Based on the current map view.";
  }

  if (activePoints.length === 0) {
    renderEmptyLiveStats("No pins match this view right now.");
    return;
  }

  const leaderboard = [...activePoints]
    .filter((point) => Number(point.price) > 0)
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);

  liveLeaderboard.innerHTML = leaderboard
    .map((point, index) => {
      const tag = point.furnished ? "Furnished" : "Unfurnished";
      return `
        <article class="live-stat-card">
          <div class="live-stat-card__rank">#${index + 1}</div>
          <div class="live-stat-card__copy">
            <strong>${formatFlatType(point)} · ${point.title}</strong>
            <span>${tag} · ${point.area}</span>
          </div>
          <div class="live-stat-card__value">
            <strong>${formatCurrency(point.price)}</strong>
            <span>rent</span>
          </div>
        </article>
      `;
    })
    .join("");

  const averagesByBhk = Object.entries(
    activePoints.reduce((accumulator, point) => {
      const key = point.bhk || "Unknown";
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(point);
      return accumulator;
    }, {})
  )
    .sort((a, b) => Number(a[0]) - Number(b[0]));

  liveAverages.innerHTML = averagesByBhk
    .map(([bhk, bhkPoints]) => {
      const avg = Math.round(
        bhkPoints.reduce((sum, point) => sum + Number(point.price || 0), 0) / bhkPoints.length
      );
      return `
        <article class="live-stat-card live-stat-card--compact">
          <div class="live-stat-card__copy">
            <strong>${bhk} BHK</strong>
            <span>${bhkPoints.length} entries</span>
          </div>
          <div class="live-stat-card__value">
            <strong>${formatCurrency(avg)}</strong>
            <span>avg</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSummaries(visiblePoints) {
  const pinPoints = visiblePoints.filter((point) => point.kind === "pin");
  if (!summaryGrid) {
    return;
  }

  if (pinPoints.length === 0) {
    summaryGrid.innerHTML = `
      <article class="summary-card">
        <p class="section-kicker">No matches</p>
        <h4>Widen the map or clear a filter</h4>
        <p>Nothing in view matches this filter mix yet.</p>
      </article>
    `;
    return;
  }

  const grouped = pinPoints.reduce((accumulator, point) => {
    if (!accumulator[point.area]) {
      accumulator[point.area] = [];
    }
    accumulator[point.area].push(point);
    return accumulator;
  }, {});

  summaryGrid.innerHTML = Object.entries(grouped)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 6)
    .map(([area, areaPoints]) => {
      const average = Math.round(
        areaPoints.reduce((sum, point) => sum + point.price, 0) / areaPoints.length
      );
      const nearMetro = areaPoints.filter((point) => point.metro).length;
      const typicalBhk = areaPoints[0].bhk;
      return `
        <article class="summary-card">
          <p class="section-kicker">${areaPoints.length} pins</p>
          <h4>${area}</h4>
          <p>Mostly ${typicalBhk} BHK • ${
            areaPoints.some((point) => point.furnished) ? "mixed furnishing" : "mostly unfurnished"
          }</p>
          <strong>${formatCurrency(average)}</strong>
          <small>${nearMetro} near metro in this view</small>
        </article>
      `;
    })
    .join("");
}

function closeDetail() {
  if (detailPanel) {
    detailPanel.hidden = true;
  }

  selectedPointId = null;
  syncPinHash(null);
  updateDetailActionState(null);
  resetInterestUi();
  highlightSelectedPoint();
  document
    .querySelector("[data-map-canvas]")
    ?.classList.remove("map-canvas--detail-open");
}

function resetInterestUi() {
  if (detailInterestSection) {
    detailInterestSection.hidden = true;
  }
  if (detailInterestEmailInput) {
    detailInterestEmailInput.value = "";
  }
  if (detailInterestFeedback) {
    detailInterestFeedback.hidden = true;
    detailInterestFeedback.textContent = "";
    detailInterestFeedback.classList.remove(
      "map-detail__interest-feedback--success",
      "map-detail__interest-feedback--error"
    );
  }
  if (detailInterestButton) {
    detailInterestButton.disabled = false;
    detailInterestButton.textContent = "I’m interested";
  }
  interestSubmissionPending = false;
}

function showInterestUi(point) {
  if (!detailInterestSection || !detailInterestKicker || !detailInterestCopy || !detailInterestButton) {
    return;
  }

  if (point.kind === "flat-let") {
    detailInterestSection.hidden = false;
    detailInterestKicker.textContent = "Interested";
    detailInterestCopy.textContent =
      "Leave your email and we will send this flat let contact to you there.";
    detailInterestButton.textContent = "I’m interested";
    return;
  }

  if (point.kind === "flat-hunt") {
    detailInterestSection.hidden = false;
    detailInterestKicker.textContent = "This could work";
    detailInterestCopy.textContent =
      "Leave your email and we will send this flat hunt contact to you there.";
    detailInterestButton.textContent = "Send me the contact";
    return;
  }

  detailInterestSection.hidden = true;
}

function setInterestFeedback(message, tone = "success") {
  if (!detailInterestFeedback) {
    return;
  }

  detailInterestFeedback.hidden = false;
  detailInterestFeedback.textContent = message;
  detailInterestFeedback.classList.remove(
    "map-detail__interest-feedback--success",
    "map-detail__interest-feedback--error"
  );
  detailInterestFeedback.classList.add(
    tone === "success"
      ? "map-detail__interest-feedback--success"
      : "map-detail__interest-feedback--error"
  );
}

function openDetail(point) {
  if (!detailPanel) {
    return;
  }

  resetInterestUi();

  if (point.kind === "flat-hunt") {
    detailPrice.textContent = `${formatCurrency(point.price)} budget`;
    detailTitle.textContent = point.title;
    detailArea.textContent = point.area;
    detailMeta.innerHTML = `
      <span>${point.bhk} preferred</span>
      <span>${point.metro ? point.metroLine || "Near metro" : "Metro flexible"}</span>
      <span>${point.timeline || "Timeline flexible"}</span>
    `;
    if (detailChips) {
      detailChips.innerHTML = [
        { label: point.type === "room" ? "Looking for room" : "Looking for flat", tone: "gold" },
        { label: `${point.bhk} preference`, tone: "purple" },
        { label: point.furnished ? "Furnished preferred" : "No furnishing preference", tone: "green" },
        { label: point.gatedLabel || "Gated flexible", tone: "gold" }
      ]
        .map((chip) => `<span class="map-detail__chip map-detail__chip--${chip.tone}">${chip.label}</span>`)
        .join("");
    }
  } else if (point.kind === "flat-let") {
    detailPrice.textContent =
      point.type === "room"
        ? `${formatCurrency(point.price)} for a room`
        : `${formatCurrency(point.price)} for a ${point.bhk} BHK`;
    detailTitle.textContent = point.title;
    detailArea.textContent = `${point.area}, ${point.zip}`;
    detailMeta.innerHTML = `
      <span>${point.bhk} BHK</span>
      <span>${point.metro ? point.metroLine || "Near metro" : "No nearby metro"}</span>
      <span>${point.availableFrom || "Availability flexible"}</span>
    `;
    if (detailChips) {
      detailChips.innerHTML = [
        { label: point.type === "room" ? "Room let" : "Whole flat let", tone: "green" },
        { label: point.furnished ? "Furnished" : "Unfurnished", tone: "green" },
        { label: point.gatedLabel || "Not gated", tone: "purple" },
        { label: point.metro ? "Near metro" : "No nearby metro", tone: "purple" }
      ]
        .map((chip) => `<span class="map-detail__chip map-detail__chip--${chip.tone}">${chip.label}</span>`)
        .join("");
    }
  } else {
    detailPrice.textContent =
      point.type === "room"
        ? `${formatCurrency(point.price)} for a room`
        : `${formatCurrency(point.price)} for a ${point.bhk} BHK`;
    detailTitle.textContent = point.title;
    detailArea.textContent = `${point.area}, ${point.zip}`;
    detailMeta.innerHTML = `
      <span>${point.bhk} BHK</span>
      <span>${point.metro ? point.metroLine || "Near metro" : "No nearby metro"}</span>
      <span>Recently added</span>
    `;
    if (detailChips) {
      const chips = [
        { label: `${point.bhk} BHK`, tone: "purple" },
        { label: point.furnished ? "Furnished" : "Unfurnished", tone: "green" },
        { label: point.type === "room" ? "Room listing" : "Whole flat", tone: "green" },
        { label: point.metro ? "Near metro" : "No nearby metro", tone: "purple" },
        { label: point.score.toLowerCase().includes("caution") ? "Check carefully" : "Seen on the map", tone: "gold" }
      ];
      detailChips.innerHTML = chips
        .map(
          (chip) =>
            `<span class="map-detail__chip map-detail__chip--${chip.tone}">${chip.label}</span>`
        )
        .join("");
    }
  }
  detailFacts.innerHTML = point.facts.map((fact) => `<li>${fact}</li>`).join("");
  detailScore.textContent = point.score;
  selectedPointId = point.id;
  syncPinHash(point);
  updateDetailActionState(point);
  showInterestUi(point);
  highlightSelectedPoint();
  document
    .querySelector("[data-map-canvas]")
    ?.classList.add("map-canvas--detail-open");
  detailPanel.hidden = false;

  if (realMap && typeof point.lngHint === "number" && typeof point.latHint === "number") {
    realMap.panTo({ lat: point.latHint, lng: point.lngHint });
    realMap.setZoom(Math.max(realMap.getZoom() || 10, 11.8));
  }
}

function buildInterestRequestPayload(point, requesterEmail) {
  const targetType = point.kind === "flat-let" ? "flat_let" : "flat_hunt";
  const requesterType = point.kind === "flat-let" ? "flat_hunt" : "flat_let";

  return {
    requester_type: requesterType,
    requester_email: requesterEmail,
    target_type: targetType,
    target_id: point.id,
    target_title: point.title,
    target_area: point.area,
    target_email: point.contactEmail || null,
    target_phone: point.contactPhone || null,
    target_price: Number(point.price || 0),
    status: "pending"
  };
}

async function triggerInterestEmail(payload) {
  if (!supabaseClient) {
    return { ok: false, reason: "missing_supabase" };
  }

  try {
    const { error } = await supabaseClient.functions.invoke("send-interest-email", {
      body: payload
    });

    if (error) {
      return { ok: false, reason: "invoke_failed", error };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, reason: "invoke_failed", error };
  }
}

async function submitInterestRequest(point, requesterEmail) {
  if (!supabaseClient) {
    return { ok: false, reason: "preview" };
  }

  const payload = buildInterestRequestPayload(point, requesterEmail);
  const { error } = await supabaseClient.from("interest_requests").insert(payload);

  if (error) {
    return { ok: false, reason: "db_error", error };
  }

  const emailResult = await triggerInterestEmail(payload);
  return { ok: true, emailSent: emailResult.ok, emailError: emailResult.error };
}

function applyFilters() {
  const filteredPoints = points.filter(matchesFilters);

  if (advancedMarkers.size > 0) {
    renderPoints(filteredPoints);
  } else {
    renderPoints(filteredPoints);
  }

  renderStats(filteredPoints);
  renderDirectoryTotals();
  latestVisiblePoints = filteredPoints;
  renderLiveStats();
  renderSummaries(filteredPoints);
  updateMapSourceData(filteredPoints);
  closeDetail();

  return filteredPoints;
}

async function runZipSearch() {
  if (!zipSearchInput) {
    return;
  }

  const rawQuery = zipSearchInput.value.trim();
  const filteredPoints = applyFilters();

  if (!realMap) {
    return;
  }

  if (!rawQuery) {
    zoomToPoints(points.filter(matchesFilters));
    return;
  }

  if (filteredPoints.length > 0) {
    zoomToPoints(filteredPoints);
    return;
  }

  try {
    const result = await geocodeSearchQuery(rawQuery);
    const viewport = result?.geometry?.viewport;
    const location = result?.geometry?.location;

    if (viewport) {
      realMap.fitBounds(viewport, 72);
      return;
    }

    if (location) {
      realMap.panTo(location);
      realMap.setZoom(15);
    }
  } catch (error) {
    console.warn("Search geocoding failed", error);
  }
}

function syncSteps() {
  stepScreens.forEach((screen, index) => {
    screen.classList.toggle("step-screen--active", index === activeStep);
  });

  stepDots.forEach((dot, index) => {
    dot.classList.toggle("step-dot--active", index <= activeStep);
  });

  if (prevStepButton) {
    prevStepButton.disabled = activeStep === 0;
  }

  if (nextStepButton) {
    nextStepButton.textContent =
      activeStep === stepScreens.length - 1 ? "Done" : "Next";
  }
}

function openLearnModal() {
  if (!modal) {
    return;
  }

  closeLiveStatsModal();
  closeAddPinPanel();
  modal.hidden = false;
  document.body.classList.add("modal-open");
  activeStep = 0;
  syncSteps();
}

function openLiveStatsModal() {
  if (!liveStatsBackdrop) {
    return;
  }

  closeDetail();
  closeAddPinPanel();
  renderLiveStats();
  liveStatsBackdrop.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLiveStatsModal() {
  if (!liveStatsBackdrop) {
    return;
  }

  liveStatsBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
}

function requestUserLocationForStats() {
  if (!navigator.geolocation) {
    renderLiveStats();
    return;
  }

  liveStatsHelper.textContent = "Getting your location...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      renderLiveStats();
    },
    () => {
      liveStatsHelper.textContent = "Location blocked. Showing the full map view.";
      renderLiveStats();
    },
    { enableHighAccuracy: false, timeout: 6000, maximumAge: 300000 }
  );
}

function closeLearnModal() {
  if (!modal) {
    return;
  }

  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function setLegalMode(mode) {
  legalMode = mode;
  legalTabs.forEach((button) => {
    button.classList.toggle("legal-tab--active", button.dataset.legalTab === mode);
  });
  legalPanels.forEach((panel) => {
    panel.classList.toggle("legal-panel--active", panel.dataset.legalPanel === mode);
  });
}

function openLegalModal(mode = "privacy") {
  if (!legalModal) {
    return;
  }

  setLegalMode(mode);
  legalModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeLegalModal() {
  if (!legalModal) {
    return;
  }

  legalModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openStartGuide() {
  if (!startGuide) {
    return;
  }

  startGuide.hidden = false;
  document.body.classList.add("modal-open");
}

function closeStartGuide() {
  if (!startGuide) {
    return;
  }

  startGuide.hidden = true;
  document.body.classList.remove("modal-open");
}

function setWorkflow(flow) {
  workflowTabs.forEach((tab) => {
    tab.classList.toggle("workflow-tab--active", tab.dataset.flow === flow);
  });

  workflowPanels.forEach((panel) => {
    panel.classList.toggle("flow-panel--active", panel.dataset.flowPanel === flow);
  });
}

function openAppShell() {
  if (entryScreen) {
    entryScreen.hidden = true;
  }

  appShellNodes.forEach((node) => {
    node.hidden = false;
  });

  if (realMap) {
    window.setTimeout(() => {
      if (window.google?.maps?.event) {
        window.google.maps.event.trigger(realMap, "resize");
      }
      updateProjectedPositions();
    }, 60);
  }

  closeAddPinPanel();

  if (!hasShownStartGuide) {
    hasShownStartGuide = true;
    window.setTimeout(openStartGuide, 120);
  }
}

window.startDelhiRentApp = openAppShell;

function setContributionMode(mode) {
  contributionMode = mode;

  contributePanels.forEach((panel) => {
    panel.classList.toggle("contribute-panel--active", panel.dataset.contributePanel === mode);
  });

  contributeHelpPanels.forEach((panel) => {
    panel.classList.toggle("contribute-help-panel--active", panel.dataset.contributeHelp === mode);
  });

  if (contributeKicker) {
    contributeKicker.textContent =
      mode === "flat-hunt" ? "Flat hunt" : mode === "flat-let" ? "Flat let" : "Add pin";
  }

  if (contributeTitle) {
    contributeTitle.textContent =
      mode === "flat-hunt"
        ? "Show what kind of place you want"
        : mode === "flat-let"
          ? "Post a room or flat that is available now"
          : "Share what you pay where you live";
  }
}

function openAddPinPanel(mode = "add-pin") {
  openAppShell();
  closeDetail();
  closeLiveStatsModal();
  setContributionMode(mode);
  if (addPinSection) {
    addPinSection.classList.add("add-pin-section--open");
  }
  if (addPinBackdrop) {
    addPinBackdrop.hidden = false;
  }
}

function closeAddPinPanel() {
  if (addPinSection) {
    addPinSection.classList.remove("add-pin-section--open");
  }
  if (addPinBackdrop) {
    addPinBackdrop.hidden = true;
  }
}

function buildSuccessMessage(formName, values) {
  if (formName === "flat-hunt") {
    return `
      <strong>Flat hunt preview ready</strong>
      <p>
        This would post a hunt around ${values.preferredArea || "your target area"} with a budget of
        ${formatCurrency(Number(values.budget || 0))}.
      </p>
    `;
  }

  if (formName === "flat-let") {
    return `
      <strong>Flat let preview ready</strong>
      <p>
        This would post a ${values.listingIntent === "room" ? "room" : "whole-flat"} listing in
        ${values.area || "your area"} at ${formatCurrency(Number(values.rent || 0))}.
      </p>
    `;
  }

  if (formName === "list") {
    return `
      <strong>Flat let preview ready</strong>
      <p>
        This would place a ${values.listingIntent === "room" ? "room" : "whole-flat"}
        listing in ${values.area} at ${formatCurrency(Number(values.rent || 0))}.
      </p>
    `;
  }

  return `
    <strong>Flat hunt preview ready</strong>
    <p>
      This would place a hunt around ${values.area} up to ${formatCurrency(
        Number(values.budget || 0)
      )}.
    </p>
  `;
}

function maybeOpenPinnedDetailFromHash() {
  const pinnedId = getPointIdFromHash();
  if (!pinnedId) {
    return;
  }

  const point = points.find((entry) => String(entry.id) === String(pinnedId));
  if (point && matchesFilters(point)) {
    openDetail(point);
  }
}

function mapRowToPoint(row, index) {
  const title = row.building_name || row.area;
  return {
    id: row.id || `remote-${index}`,
    kind: "pin",
    title,
    buildingName: row.building_name || "",
    area: row.area,
    areaKey: row.area_key || slugify(row.area),
    zip: row.zip_code,
    price: row.monthly_rent,
    label: row.listing_type === "room" ? "Room" : compactPrice(row.monthly_rent),
    bhk: row.bhk,
    type: row.listing_type,
    metro: Boolean(row.metro),
    metroLine: row.metro_line || "Unknown metro",
    furnished: row.furnishing !== "Unfurnished",
    verified: Boolean(row.verified),
    score: row.verified ? "Seen on the map" : "Fresh pin",
    latHint: row.latitude_hint == null ? undefined : Number(row.latitude_hint),
    lngHint: row.longitude_hint == null ? undefined : Number(row.longitude_hint),
    contactEmail: row.email || "",
    contactPhone: row.phone || "",
    facts: [
      `${row.bhk} BHK • ${row.furnishing}`,
      `${row.gated} • ${row.maintenance_included ? "Maintenance included" : "Maintenance extra"} • ${row.metro_line || "Unknown metro"}`,
      row.note || "Rent pin from the map"
    ]
  };
}

function mapFlatLetRowToPoint(row, index) {
  const title = row.building_name || row.area;
  return {
    id: row.id || `flat-let-${index}`,
    kind: "flat-let",
    title,
    buildingName: row.building_name || "",
    area: row.area,
    areaKey: row.area_key || slugify(row.area),
    zip: row.zip_code,
    price: row.monthly_rent,
    bhk: row.bhk,
    type: row.listing_intent,
    metro: Boolean(row.metro_line && row.metro_line !== "No nearby metro"),
    metroLine: row.metro_line || "No nearby metro",
    furnished: row.furnishing !== "Unfurnished",
    verified: false,
    gatedLabel: row.gated,
    availableFrom: row.available_from || "",
    score: "Live flat let",
    latHint: row.latitude_hint == null ? undefined : Number(row.latitude_hint),
    lngHint: row.longitude_hint == null ? undefined : Number(row.longitude_hint),
    contactEmail: row.email || "",
    contactPhone: row.phone || "",
    facts: [
      `${row.bhk} BHK • ${row.furnishing}`,
      `${row.gated} • ${row.metro_line || "Metro not specified"}`,
      row.note || "Available flat or room"
    ]
  };
}

function mapFlatHuntRowToPoint(row, index) {
  return {
    id: row.id || `flat-hunt-${index}`,
    kind: "flat-hunt",
    title: row.need_type === "room" ? "Room hunt" : "Flat hunt",
    buildingName: "",
    area: row.preferred_area,
    areaKey: row.area_key || slugify(row.preferred_area),
    zip: "",
    price: row.budget,
    bhk: row.bhk_preference || "Any",
    type: row.need_type,
    metro: row.metro_need === "Yes",
    metroLine: row.metro_need || "Metro flexible",
    furnished: row.furnishing_need !== "No preference",
    verified: false,
    gatedLabel: row.gated_need || "Gated flexible",
    timeline: row.timeline || "",
    score: "Live flat hunt",
    latHint: row.latitude_hint == null ? undefined : Number(row.latitude_hint),
    lngHint: row.longitude_hint == null ? undefined : Number(row.longitude_hint),
    contactEmail: row.email || "",
    contactPhone: row.phone || "",
    facts: [
      `${row.bhk_preference || "Any"} preference • ${row.furnishing_need}`,
      `${row.gated_need || "Gated flexible"} • ${row.metro_need || "Metro flexible"}`,
      row.note || "Looking for a place in this pocket"
    ]
  };
}

async function loadSupabaseListings() {
  if (!supabaseClient) {
    rebuildPointsCollection();
    renderPoints();
    attachPointHandlers();
    updateProjectedPositions();
    renderDirectoryTotals();
    applyFilters();
    return;
  }

  const { data, error } = await supabaseClient
    .from("pins")
    .select(
      "id, area, area_key, zip_code, listing_type, bhk, monthly_rent, maintenance_included, furnishing, gated, building_name, note, metro, verified, latitude_hint, longitude_hint"
      + ", metro_line"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  const { data: flatLetData, error: flatLetError } = await supabaseClient
    .from("flat_lets")
    .select(
      "id, area, area_key, zip_code, listing_intent, bhk, monthly_rent, furnishing, gated, building_name, deposit_text, note, metro_line, available_from, latitude_hint, longitude_hint, email, phone"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  const { data: flatHuntData, error: flatHuntError } = await supabaseClient
    .from("flat_hunts")
    .select(
      "id, preferred_area, area_key, need_type, budget, bhk_preference, timeline, metro_need, furnishing_need, gated_need, parking_need, pet_need, lift_need, backup_need, note, latitude_hint, longitude_hint, email, phone"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  if (!error && Array.isArray(data)) {
    pinEntries = data.length > 0 ? await hydratePointCoordinates(data.map(mapRowToPoint)) : seedPins.map((point) => ({ ...point, kind: "pin" }));
  }

  if (!flatLetError && Array.isArray(flatLetData)) {
    flatLetEntries = flatLetData.length > 0
      ? await hydratePointCoordinates(flatLetData.map(mapFlatLetRowToPoint))
      : [];
  }

  if (!flatHuntError && Array.isArray(flatHuntData)) {
    flatHuntEntries = flatHuntData.length > 0
      ? await hydratePointCoordinates(flatHuntData.map(mapFlatHuntRowToPoint))
      : [];
  }

  rebuildPointsCollection();

  renderPoints();
  attachPointHandlers();
  updateProjectedPositions();
  renderDirectoryTotals();
  applyFilters();
}

async function submitAddPin(values) {
  if (!supabaseClient) {
    return { ok: false, mode: "preview" };
  }

  const resolvedCoordinates = await resolveSubmissionCoordinates(values);

  const payload = {
    zip_code: values.zip,
    area: values.area,
    listing_type: values.listingType,
    bhk: values.bhk,
    monthly_rent: Number(values.rent || 0),
    maintenance_included: values.maintenance === "Included",
    furnishing: values.furnishing,
    gated: values.gated,
    deposit_text: values.deposit,
    building_name: values.building,
    available_from: values.availableFrom,
    email: values.email,
    phone: values.phone,
    note: values.note,
    metro: values.metroLine !== "No nearby metro",
    metro_line: values.metroLine,
    moderation_status: "pending",
    latitude_hint: resolvedCoordinates.lat,
    longitude_hint: resolvedCoordinates.lng,
    pin_label:
      values.listingType === "room"
        ? "Room"
        : compactPrice(Number(values.rent || 0))
  };

  const { error } = await supabaseClient.from("pins").insert(payload);

  if (error) {
    return { ok: false, mode: "error", error };
  }

  await loadSupabaseListings();
  return { ok: true, mode: "supabase", locationSource: resolvedCoordinates.source };
}

async function submitFlatHunt(values) {
  if (!supabaseClient) {
    return { ok: false, mode: "preview" };
  }

  const geocodedArea = await resolveSubmissionCoordinates({
    area: values.preferredArea,
    zip: values.preferredArea
  });

  const payload = {
    preferred_area: values.preferredArea,
    need_type: values.needType,
    budget: Number(values.budget || 0),
    bhk_preference: values.bhkPreference,
    timeline: values.timeline,
    metro_need: values.metroNeed,
    furnishing_need: values.furnishingNeed,
    gated_need: values.gatedNeed,
    parking_need: values.parkingNeed,
    pet_need: values.petNeed,
    lift_need: values.liftNeed,
    backup_need: values.backupNeed,
    email: values.email,
    phone: values.phone,
    note: values.note,
    moderation_status: "pending",
    latitude_hint: geocodedArea.lat,
    longitude_hint: geocodedArea.lng
  };

  const { error } = await supabaseClient.from("flat_hunts").insert(payload);

  if (error) {
    return { ok: false, mode: "error", error };
  }

  await loadSupabaseListings();
  return { ok: true, mode: "supabase", locationSource: geocodedArea.source };
}

async function submitFlatLet(values) {
  if (!supabaseClient) {
    return { ok: false, mode: "preview" };
  }

  const resolvedCoordinates = await resolveSubmissionCoordinates({
    building: values.building,
    area: values.area,
    zip: values.zip
  });

  const payload = {
    area: values.area,
    zip_code: values.zip,
    listing_intent: values.listingIntent,
    bhk: values.bhk,
    monthly_rent: Number(values.rent || 0),
    available_from: values.availableFrom,
    furnishing: values.furnishing,
    gated: values.gated,
    metro_line: values.metroLine,
    building_name: values.building,
    deposit_text: values.deposit,
    email: values.email,
    phone: values.phone,
    note: values.note,
    moderation_status: "pending",
    latitude_hint: resolvedCoordinates.lat,
    longitude_hint: resolvedCoordinates.lng
  };

  const { error } = await supabaseClient.from("flat_lets").insert(payload);

  if (error) {
    return { ok: false, mode: "error", error };
  }

  await loadSupabaseListings();
  return { ok: true, mode: "supabase", locationSource: resolvedCoordinates.source };
}

function attachPointHandlers() {
  if (advancedMarkers.size > 0) {
    return;
  }

  getMapButtons().forEach((button) => {
    if (button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const point = points.find((entry) => String(entry.id) === String(button.dataset.pointId));
      if (point && matchesFilters(point)) {
        openDetail(point);
      }
    });
  });
}

function attachGlobalMapWheelZoom() {
  if (!mapCanvas) {
    return;
  }

  mapCanvas.addEventListener(
    "wheel",
    (event) => {
      if (!realMap) {
        return;
      }

      if (
        event.target.closest(
          ".add-pin-section, .live-stats-modal, .legal-modal, .start-guide, .learn-modal, input, textarea, select"
        )
      ) {
        return;
      }

      event.preventDefault();
      const currentZoom = realMap.getZoom() || 10;
      const nextZoom = event.deltaY < 0 ? currentZoom + 0.45 : currentZoom - 0.45;
      realMap.setZoom(Math.max(5, Math.min(17, nextZoom)));
    },
    { passive: false }
  );
}

if (copyButton && shareMessage) {
  copyButton.addEventListener("click", async () => {
    const message = shareMessage.textContent.trim();

    try {
      const copied = await copyText(message);
      if (!copied) {
        throw new Error("Copy failed");
      }
      copyButton.setAttribute("aria-label", "Copied");
      copyButton.setAttribute("title", "Copied");
      copyButton.dataset.copyFeedback = "Copied";
      copyButton.style.opacity = "1";
    } catch {
      copyButton.setAttribute("aria-label", "Could not copy");
      copyButton.setAttribute("title", "Copy failed");
      copyButton.dataset.copyFeedback = "Copy failed";
    }

    window.setTimeout(() => {
      copyButton.setAttribute("aria-label", "Copy message");
      copyButton.setAttribute("title", "Copy message");
      copyButton.dataset.copyFeedback = "Copy message";
    }, 1600);
  });
}

if (startAppButton) {
  startAppButton.addEventListener("click", openAppShell);
}

document.addEventListener("click", (event) => {
  const startTrigger = event.target.closest("[data-start-app]");
  if (startTrigger) {
    openAppShell();
  }
});

jumpAddPinButtons.forEach((button) => {
  button.addEventListener("click", () => openAddPinPanel("add-pin"));
});

jumpFlatHuntButtons.forEach((button) => {
  button.addEventListener("click", () => openAddPinPanel("flat-hunt"));
});

jumpFlatLetButtons.forEach((button) => {
  button.addEventListener("click", () => openAddPinPanel("flat-let"));
});

openLiveStatsButtons.forEach((button) => {
  button.addEventListener("click", openLiveStatsModal);
});

if (closeAddPinButton) {
  closeAddPinButton.addEventListener("click", closeAddPinPanel);
}

if (addPinBackdrop) {
  addPinBackdrop.addEventListener("click", closeAddPinPanel);
}

if (closeLiveStatsButton) {
  closeLiveStatsButton.addEventListener("click", closeLiveStatsModal);
}

if (liveStatsBackdrop) {
  liveStatsBackdrop.addEventListener("click", (event) => {
    if (event.target === liveStatsBackdrop) {
      closeLiveStatsModal();
    }
  });
}

closeStartGuideButtons.forEach((button) => {
  button.addEventListener("click", closeStartGuide);
});

openLegalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openLegalModal(button.dataset.openLegal);
  });
});

if (closeLegalButton) {
  closeLegalButton.addEventListener("click", closeLegalModal);
}

legalTabs.forEach((button) => {
  button.addEventListener("click", () => {
    setLegalMode(button.dataset.legalTab);
  });
});

if (startGuide) {
  startGuide.addEventListener("click", (event) => {
    if (event.target === startGuide) {
      closeStartGuide();
    }
  });
}

if (legalModal) {
  legalModal.addEventListener("click", (event) => {
    if (event.target === legalModal) {
      closeLegalModal();
    }
  });
}

openLearnButtons.forEach((button) => {
  button.addEventListener("click", openLearnModal);
});

if (closeLearnButton) {
  closeLearnButton.addEventListener("click", closeLearnModal);
}

if (nextStepButton) {
  nextStepButton.addEventListener("click", () => {
    if (activeStep === stepScreens.length - 1) {
      closeLearnModal();
      return;
    }

    activeStep += 1;
    syncSteps();
  });
}

if (prevStepButton) {
  prevStepButton.addEventListener("click", () => {
    if (activeStep === 0) {
      return;
    }

    activeStep -= 1;
    syncSteps();
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeLearnModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeLearnModal();
  }

  if (event.key === "Escape" && addPinSection?.classList.contains("add-pin-section--open")) {
    closeAddPinPanel();
  }

  if (event.key === "Escape" && liveStatsBackdrop && !liveStatsBackdrop.hidden) {
    closeLiveStatsModal();
  }

  if (event.key === "Escape" && startGuide && !startGuide.hidden) {
    closeStartGuide();
  }

  if (event.key === "Escape" && legalModal && !legalModal.hidden) {
    closeLegalModal();
  }
});

liveModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    liveStatsMode = button.dataset.liveMode;
    if (liveStatsMode === "nearby" && !userLocation) {
      requestUserLocationForStats();
      return;
    }
    renderLiveStats();
  });
});

if (closeDetailButton) {
  closeDetailButton.addEventListener("click", closeDetail);
}

if (detailShareButton) {
  detailShareButton.addEventListener("click", async () => {
    const point = getSelectedPoint();
    if (!point) {
      return;
    }

    const pinLink = getPinLink(point);

    try {
      const copied = await copyText(pinLink);
      if (!copied) {
        throw new Error("Link copy failed");
      }

      detailShareButton.textContent = "Copied";
      detailShareButton.setAttribute("title", "Copied");
      detailShareButton.setAttribute("aria-label", "Copied");
    } catch {
      detailShareButton.textContent = "Failed";
      detailShareButton.setAttribute("title", "Share failed");
      detailShareButton.setAttribute("aria-label", "Share failed");
    }

    window.setTimeout(() => {
      detailShareButton.textContent = "↗";
      updateDetailActionState();
    }, 1400);
  });
}

if (detailInterestButton && detailInterestEmailInput) {
  detailInterestButton.addEventListener("click", async () => {
    const point = getSelectedPoint();
    const requesterEmail = detailInterestEmailInput.value.trim();

    if (!point || (point.kind !== "flat-let" && point.kind !== "flat-hunt")) {
      return;
    }

    if (!requesterEmail) {
      setInterestFeedback("Add your email first.", "error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(requesterEmail)) {
      setInterestFeedback("Enter a valid email.", "error");
      return;
    }

    if (!point.contactEmail && !point.contactPhone) {
      setInterestFeedback("This entry has no contact details yet.", "error");
      return;
    }

    if (interestSubmissionPending) {
      return;
    }

    interestSubmissionPending = true;
    detailInterestButton.disabled = true;
    detailInterestButton.textContent = "Sending...";
    setInterestFeedback("Saving your interest...", "success");

    const result = await submitInterestRequest(point, requesterEmail);

    interestSubmissionPending = false;
    detailInterestButton.disabled = false;
    detailInterestButton.textContent =
      point.kind === "flat-let" ? "I’m interested" : "Send me the contact";

    if (!result.ok && result.reason === "preview") {
      setInterestFeedback(
        "Hook up Supabase to log interest requests and send the email.",
        "error"
      );
      return;
    }

    if (!result.ok) {
      setInterestFeedback(
        `Could not save interest yet.${result.error?.message ? ` ${result.error.message}` : ""}`,
        "error"
      );
      return;
    }

    setInterestFeedback(
      result.emailSent
        ? "Done. Check your inbox for the contact details."
        : "Interest saved. Contact sharing will go live once email is connected.",
      "success"
    );
  });
}

areaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filters.area = button.dataset.area;
    setActiveChip(areaButtons, "area", filters.area);
    const filteredPoints = applyFilters();
    zoomToPoints(filteredPoints);
  });
});

bhkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filters.bhk = button.dataset.bhk;
    setActiveChip(bhkButtons, "bhk", filters.bhk);
    applyFilters();
  });
});

typeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filters.type = button.dataset.type;
    setActiveChip(typeButtons, "type", filters.type);
    applyFilters();
  });
});

signalToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    filters[toggle.dataset.signal] = toggle.checked;
    applyFilters();
  });
});

layerToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    layerVisibility[toggle.dataset.layer] = toggle.checked;
    rebuildPointsCollection();
    applyFilters();
  });
});

if (clearFiltersButton) {
  clearFiltersButton.addEventListener("click", () => {
    filters.area = "all";
    filters.bhk = "all";
    filters.type = "all";
    filters.metro = false;
    filters.furnished = false;
    filters.verified = false;

    setActiveChip(areaButtons, "area", "all");
    setActiveChip(bhkButtons, "bhk", "all");
    setActiveChip(typeButtons, "type", "all");

    signalToggles.forEach((toggle) => {
      toggle.checked = false;
    });

    layerVisibility.pins = true;
    layerVisibility.flatLets = true;
    layerVisibility.flatHunts = true;
    layerToggles.forEach((toggle) => {
      toggle.checked = true;
    });

    if (zipSearchInput) {
      zipSearchInput.value = "";
    }
    rebuildPointsCollection();
    applyFilters();
  });
}

if (toggleFiltersButton && filtersDrawer) {
  toggleFiltersButton.addEventListener("click", () => {
    filtersDrawer.hidden = !filtersDrawer.hidden;
  });
}

if (closeFiltersButton && filtersDrawer) {
  closeFiltersButton.addEventListener("click", () => {
    filtersDrawer.hidden = true;
  });
}

if (runSearchButton) {
  runSearchButton.addEventListener("click", runZipSearch);
}

if (zipSearchInput) {
  zipSearchInput.addEventListener("input", () => {
    window.clearTimeout(searchDebounceTimer);
    searchDebounceTimer = window.setTimeout(() => {
      void updateSearchSuggestions();
    }, 180);
  });

  zipSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && searchSuggestionItems.length > 0) {
      event.preventDefault();
      highlightedSuggestionIndex =
        highlightedSuggestionIndex >= searchSuggestionItems.length - 1
          ? 0
          : highlightedSuggestionIndex + 1;
      renderSearchSuggestions();
      return;
    }

    if (event.key === "ArrowUp" && searchSuggestionItems.length > 0) {
      event.preventDefault();
      highlightedSuggestionIndex =
        highlightedSuggestionIndex <= 0
          ? searchSuggestionItems.length - 1
          : highlightedSuggestionIndex - 1;
      renderSearchSuggestions();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (searchSuggestionItems.length > 0 && highlightedSuggestionIndex >= 0) {
        void applyPlaceSuggestion(searchSuggestionItems[highlightedSuggestionIndex]);
        return;
      }
      runZipSearch();
    }

    if (event.key === "Escape") {
      closeSearchSuggestions();
    }
  });
}

if (searchSuggestions) {
  searchSuggestions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-suggestion-index]");
    if (!button) {
      return;
    }

    const item = searchSuggestionItems[Number(button.dataset.suggestionIndex)];
    if (item) {
      void applyPlaceSuggestion(item);
    }
  });
}

document.addEventListener("click", (event) => {
  if (
    zipSearchInput &&
    !event.target.closest("[data-zip-search]") &&
    !event.target.closest("[data-search-suggestions]")
  ) {
    closeSearchSuggestions();
  }
});

workflowTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setWorkflow(tab.dataset.flow);
  });
});

function buildSupabaseErrorHtml(error) {
  const errorDetail = error?.message ? `<br /><span>${error.message}</span>` : "";
  return `
    <strong>Could not post this yet</strong>
    <p>
      The database rejected this entry. Usually this means the latest
      supabase.sql has not been run, a required field is missing, or Supabase permissions still need an update.${errorDetail}
    </p>
  `;
}

forms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const target = document.querySelector(`[data-success="${form.dataset.form}"]`);

    if (!target) {
      return;
    }

    if (form.dataset.form === "add-pin") {
      const result = await submitAddPin(values);

      if (result.mode === "supabase" && result.ok) {
        target.innerHTML = `
          <strong>Rent pin posted</strong>
          <p>
            Your rent pin is live on the map for ${values.area}. It starts as pending so obvious spam can be filtered.
          </p>
        `;
      } else if (result.mode === "error") {
        target.innerHTML = buildSupabaseErrorHtml(result.error);
      } else {
        target.innerHTML = `
          <strong>Preview only</strong>
          <p>
            Add your Supabase URL and anon key in config.js to save this for real.
          </p>
        `;
      }
    } else if (form.dataset.form === "flat-hunt") {
      const result = await submitFlatHunt(values);

      if (result.mode === "supabase" && result.ok) {
        target.innerHTML = `
          <strong>Flat hunt posted</strong>
          <p>
            Your hunt for ${values.preferredArea || "Delhi NCR"} is now on the map and marked pending for review.
          </p>
        `;
      } else if (result.mode === "error") {
        target.innerHTML = buildSupabaseErrorHtml(result.error);
      } else {
        target.innerHTML = `
          <strong>Preview only</strong>
          <p>
            Add your Supabase URL and anon key in config.js to save this for real.
          </p>
        `;
      }
    } else if (form.dataset.form === "flat-let") {
      const result = await submitFlatLet(values);

      if (result.mode === "supabase" && result.ok) {
        target.innerHTML = `
          <strong>Flat let posted</strong>
          <p>
            Your ${values.listingIntent === "room" ? "room" : "flat"} in ${values.area}
            is now on the map and marked pending for review.
          </p>
        `;
      } else if (result.mode === "error") {
        target.innerHTML = buildSupabaseErrorHtml(result.error);
      } else {
        target.innerHTML = `
          <strong>Preview only</strong>
          <p>
            Add your Supabase URL and anon key in config.js to save this for real.
          </p>
        `;
      }
    } else {
      target.innerHTML = buildSuccessMessage(form.dataset.form, values);
    }

    target.hidden = false;
  });
});

async function initApp() {
  supabaseClient = initSupabase();
  syncSteps();
  setWorkflow("browse");
  setContributionMode("add-pin");
  rebuildPointsCollection();
  renderDirectoryTotals();
  renderPoints();
  attachPointHandlers();

  try {
    realMap = await initRealMap();
    attachGlobalMapWheelZoom();
  } catch (error) {
    console.error("Google Maps failed to load", error);
    updatePickedLocationMessage(
      "Google Maps is not live yet. Add your API key in config.js."
    );
  }

  await loadSupabaseListings();
  maybeOpenPinnedDetailFromHash();
}

initApp();
