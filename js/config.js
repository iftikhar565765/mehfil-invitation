/* ═══════════════════════════════════════════════════════════════
   Mehfil · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "mehfil",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Ayesha",                     // SAMPLE
    partnerTwo: "Imran",                      // SAMPLE
    initials:  "A · I",                     // SAMPLE — used on seals & monograms
    namesLine: "Ayesha & Imran"                // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"                    */
  wedding: {
    iso: "2027-11-20T19:00:00+05:30",                                     // EDIT
    endIso: "2027-11-21T23:30:00+05:30",                                    // EDIT — end of the celebration
    display: "Saturday, 20 November 2027 · the Nikah begins at 7:00 PM, after Isha",   // EDIT
    zoneLabel: "IST",                                                       // EDIT — optional note for guests abroad
    words: "Saturday · The Twentieth of November · Two Thousand Twenty-Seven",   // EDIT
    numerals: "20 · 11 · 2027",                                              // EDIT
    weekday: "Saturday",                                                    // EDIT — the ornamental date row
    month: "November",                                                        // EDIT
    day: "20",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "Nikah",                                                   // EDIT
    muhurat: "seven in the evening, after Isha",                  // EDIT
    eventTitle: "Ayesha & Imran — Nikah"                                       // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Darbar Mahal",                                 // SAMPLE
    address: "8 Palace Gate, Qaisar Bagh, Old City, Lucknow, Uttar Pradesh 226001", // SAMPLE
    mapsQuery: "Darbar Mahal, Palace Gate, Qaisar Bagh, Lucknow",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Ayesha & Imran · 20 November 2027 — A Nikah Invitation in Garnet & Gold",
    pageDescription: "Ayesha and Imran request the honour of your presence at The Darbar Mahal, Lucknow — the mayun, the mehndi and the Nikah at 7:00 on Saturday the twentieth of November 2027. Open your invitation.",
    socialTitle: "Ayesha & Imran — A Nikah Invitation · 20.11.2027",
    socialDescription: "A garnet envelope, a golden darbar seal and a blessed union — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Dua",
    openingEyebrow: "With the blessings of Allah Almighty, you are invited to the wedding of",
    openingHint: "Touch the seal to break it",
    openButton: "Enter the Darbar",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    invitationEyebrow: "With the blessings of our families",
    invitationLead: "We joyfully invite you to celebrate the Nikah of",
    invitationAnd: "and",
    invitationClosing: "Your presence is our greatest blessing",
    heroVenueLabel: "Venue",
    sceneSignboard: "Written in the garnet darbar",
    invitationVenueSuffix: "· Lucknow",
    storyKicker: "The Chronicle",
    storyTitle: "Two hearts,",
    storyTitleScript: "one dua answered",
    storyParagraphOne: "Every royal story begins with a dua whispered quietly, and ours was whispered one Jumma evening in the old city library, over a borrowed book of Faiz and a cup of kahwa neither of us finished. One conversation that outlasted the Adhan, one rooftop shared through the December fog — and somehow, that evening decided the rest of our lives.",
    storyParagraphTwo: "Seven years and two cities later, our families gathered beneath one roof to give their blessing, and the date was written with dates and water — the sunnah way. Nothing would mean more than to have you standing beside us as we say Qubool Hai, and begin a home built on sakinah, mawaddah and mercy.",
    storyQuote: "Lovers don't finally meet somewhere. They're in each other all along.",
    storyQuoteLabel: "— Rumi — the line we read to each other that first evening",
    storyNote: "chapter one, and every chapter after",
    storyNoteCredit: "— pencilled on the back of a wedding date card",
    storyCaptionOne: "the evening of kahwa and Faiz",
    storyCaptionTwo: "one rooftop in the December fog",
    storyCaptionFour: "the Qubool Hai",
    storyAside: "and they lived",
    ayatKicker: "The Blessed Verse",
    ayatArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    ayatTranslation: "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.",
    ayatReference: "Surah Ar-Rūm · 30:21",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "the mayun, the mehndi, the Nikah & the Walima",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Four blessed days with our families — at a glance.",
    eventOneLabel: "The Mayun",
    eventOneTime: "Thursday, 18 November 2027 · eleven in the morning",
    eventOneNote: "The bride is showered in flowers and yellow silk — the first day of blessings at the family home.",
    eventTwoLabel: "The Mehndi",
    eventTwoTime: "Friday, 19 November 2027 · four in the afternoon",
    eventTwoNote: "Henna vines, dholki songs and rose sherbet in the courtyard — wear garnet and gold.",
    eventThreeLabel: "The Nikah",
    eventThreeTime: "Saturday, 20 November 2027 · 7:00 PM, after Isha",
    eventThreeNote: "The Nikah ceremony and the Qubool Hai, led by the Imam, followed by dinner in the grand hall.",
    eventFourLabel: "The Rukhsati",
    eventFourTime: "Saturday, 20 November 2027 · half past nine in the evening",
    eventFourNote: "The bride's farewell — dua, tears of joy, and the send-off under a canopy of lights.",
    eventFiveLabel: "The Walima",
    eventFiveTime: "Sunday, 21 November 2027 · eight in the evening",
    eventFiveNote: "The groom's family hosts the grand reception banquet — a feast of celebration and welcome.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garnet, gold & ivory",
    particularsAttireNote: "Sherwanis, shalwar kameez and formal wear are most welcome — dress as though the darbar could blush.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the twentieth of October, 2027",
    particularsCarriagesNote: "So the banquet count is right and every seat is saved.",
    paletteKicker: "The Colours of the Day",
    paletteTitleFirst: "The garnet",
    paletteTitleSecond: "darbar",
    paletteIntro: "Deep garnet and antique gold, pearl ivory and aged copper — the colours of the darbar, worn by our favourite people.",
    dressCodeLabel: "Attire · Garnet & Gold",
    dressCodeTitle: "Colours of the darbar",
    dressCodeNote: "Garnet velvets, gold zardozi and pearl ivory are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "The Place",
    venueDescription: "A royal mehfil of velvet halls and jharokha arches — brass chandeliers at dusk, shehnai light at noon, the sweet Adhan of gratitude, and roses on every divan.",
    venueCeremonyLabel: "Nikah",
    venueCeremonyText: "in the grand hall, after Isha, led by the Imam",
    venueReceptionLabel: "Walima",
    venueReceptionText: "a candlelit banquet in the velvet courtyard",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Fatima Khan",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Halal, vegetarian, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Duas, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "Counting the hours until",
    countdownPromise: "the Nikah begins",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. May our home be filled with sakinah, mawaddah and rahmah — tranquillity, love and mercy — and may every guest who walks through our door leave with a blessing. Your presence completes our celebration.",
    closingDua: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingDuaTranslation: "May Allah bless you both, and shower His blessings upon you, and unite you both in goodness.",
    footerTagline: "Garnet & gold — sealed in the darbar."
  },

  palette: [
    { name: "Garnet Velvet",  color: "#6B1224" },
    { name: "Antique Gold",   color: "#C2A052" },
    { name: "Pearl Ivory",    color: "#F7F1E3" },
    { name: "Aged Copper",    color: "#7A4A3A" },
    { name: "Deep Gold Ink",  color: "#6E5622" },
    { name: "Rose Blush",     color: "#EBC7B2" }
  ],
  theme: "mehfil",
  themeColors: {},
  fonts: {
    editorial: "playfair",
    display: "rozhaOne",
    script: "parisienne",
    hand: "laBelle",
    body: "lora"
  },

  /* ── Wedding festivities — SAMPLE words for the string of lights.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Mayun", "The Mehndi", "The Nikah", "The Rukhsati", "The Walima", "The Duas"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the twentieth of October, 2027"        // SAMPLE
  },

  /* ── Countdown wording (live, invalid or passed dates) ───────── */
  countdown: {
    summaryText: "each hour brings the Qubool Hai closer",
    invalidMessage: "The Nikah is still being finalised — see the celebrations below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
