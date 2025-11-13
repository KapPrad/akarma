export const programs = [
  {
    title: "Publishing Mentorship",
    slug: "publishing",
    tagline: "Shepherd conscious stories into the world.",
    summary:
      "Editorial partnership for authors weaving contemplative and socially engaged narratives.",
    benefits: [
      "Story architecture and developmental feedback",
      "Mindful creative practice support",
      "Publishing strategy and submissions coaching",
    ],
  },
  {
    title: "Meditation & Yoga Sangha",
    slug: "meditation-yoga",
    tagline: "Daily rituals to steady breath, body, and heart.",
    summary:
      "Accessible meditation, breathwork, and movement to restore nervous system balance.",
    benefits: [
      "Gentle somatic sequencing",
      "Guided contemplation and mantra",
      "Community accountability circles",
    ],
  },
  {
    title: "Holistic Counseling",
    slug: "holistic-counseling",
    tagline: "Therapeutic care rooted in compassion and neuroscience.",
    summary:
      "Integrative counseling that blends talk therapy, mindfulness, and creative expression.",
    benefits: [
      "Trauma-informed pacing",
      "Personal practices between sessions",
      "Hybrid virtual + in-person options",
    ],
  },
  {
    title: "Seminars & Retreats",
    slug: "seminars-retreats",
    tagline: "Immersive learning to pause, reset, and realign.",
    summary:
      "Seasonal gatherings that braid contemplative study with embodied play.",
    benefits: [
      "Customizable corporate offerings",
      "Onsite facilitation and curation",
      "Integration circles post-retreat",
    ],
  },
];

export const programDetails = {
  publishing: {
    hero: "Publishing Mentorship",
    promise: "Story stewardship for authors shaping regenerative futures.",
    overview:
      "Our publishing mentorship pairs authors with editors who understand contemplative language, social impact frameworks, and the realities of modern publishing. Across six months we move from deep listening to editorial refinement, culminating in a pitch-ready manuscript and outreach strategy.",
    expect: [
      "Editorial immersion to clarify narrative arc and reader promise",
      "Accountability sprints that honor creative ebb and flow",
      "Agent and publisher match-making plus submission support",
    ],
    audience: [
      "Debut authors crafting purpose-driven nonfiction or memoir",
      "Educators, healers, and community leaders sharing practice-based guides",
      "Publishing houses seeking culturally-sensitive developmental editors",
    ],
    format: "Hybrid video + asynchronous reviews",
    duration: "6-month container, bi-weekly editorial councils",
    pricing: "Sliding scale retainers; contact us for commissioning details.",
  },
  "meditation-yoga": {
    hero: "Meditation & Yoga Sangha",
    promise: "Daily rituals to ground the nervous system with tenderness.",
    overview:
      "Akarma Sangha is a gentle practice community weaving somatic flow, restorative breath, mantra, and contemplative dialogue. The curriculum honors trauma-informed sequencing and offers practices you can take into work, caregiving, and creative life.",
    expect: [
      "Guided meditations that emphasize body literacy and emotional granularity",
      "Low-impact asana with chair and prop variations",
      "Monthly dharma salons featuring guest facilitators and musicians",
    ],
    audience: [
      "Beginners seeking soft entry into meditation and yoga",
      "Activists and caregivers needing nervous system recovery",
      "Teams looking for mindful culture programs",
    ],
    format: "Live-stream + monthly in-person circles in Bengaluru",
    duration: "Rolling membership; join for 4, 8, or 12-week journeys",
    pricing: "Pay-what-you-can tiers starting at INR 4,500 / month.",
  },
  "holistic-counseling": {
    hero: "Holistic Counseling",
    promise: "Therapy that integrates modern psychology with contemplative arts.",
    overview:
      "Our counseling collective supports individuals and families navigating transition, burnout, or grief. Sessions weave polyvagal-informed talk therapy, embodiment practices, and creative reflection to restore a sense of agency and belonging.",
    expect: [
      "Collaborative intake that maps personal and systemic factors",
      "Somatic grounding techniques you can practice between sessions",
      "Referrals to trusted psychiatrists, herbalists, and bodyworkers when helpful",
    ],
    audience: [
      "Professionals moving through change or leadership fatigue",
      "Couples and families pursuing more empathic communication",
      "Students and creatives integrating identity shifts",
    ],
    format: "Virtual or in-person at the Akarma studio",
    duration: "Weekly or bi-weekly; 3-month minimum recommended",
    pricing: "Contact us for tiered pricing or sponsored sessions.",
  },
  "seminars-retreats": {
    hero: "Seminars & Retreats",
    promise: "Immersions that braid inquiry, craft, and contemplative play.",
    overview:
      "Retreats are designed as living labs where teams or communities pause from busy cycles and prototype new ways of collaborating. Themes range from regenerative leadership to creative devotion, with facilitators spanning artists, psychologists, and monastic teachers.",
    expect: [
      "Pre-retreat listening sessions and custom curriculum design",
      "Onsite facilitation, music, and movement experiences",
      "Integration plans with office hours for 30 days post-retreat",
    ],
    audience: [
      "Organizations adopting humane leadership practices",
      "Retreat centers seeking curated programming partners",
      "Learning communities that value cross-cultural dialogue",
    ],
    format: "On-location globally or virtual two-day immersions",
    duration: "1-5 day formats; seasonal residencies available",
    pricing: "Proposal-based; reach out for partnership deck.",
  },
};

export const sampleEvents = [
  {
    _id: "evt1",
    title: "Lotus & Ledger: Mindful Finance Salon",
    slug: { current: "lotus-ledger" },
    type: "Seminar",
    startDate: "2025-12-05",
    endDate: "2025-12-05",
    location: "Akarma Studio, Bengaluru",
    online: false,
    shortDesc:
      "An evening salon exploring values-aligned finance with breath-led pauses and reflective journaling.",
    registerUrl: "https://example.com/register",
  },
  {
    _id: "evt2",
    title: "Dawnlines Virtual Retreat",
    slug: { current: "dawnlines-virtual-retreat" },
    type: "Retreat",
    startDate: "2025-12-15",
    endDate: "2025-12-17",
    location: "Online",
    online: true,
    shortDesc:
      "Three mornings of mantra, mindful writing, and community check-ins to close the year with intention.",
    registerUrl: "",
  },
];

export const sampleTeachers = [
  {
    _id: "teacher-sahana",
    name: "Sahana Iyer",
    role: "Founding Director & Lead Facilitator",
    bio: "Meditation teacher, editor, and regenerative strategist bridging contemplative wisdom with organizational design.",
  },
  {
    _id: "teacher-arian",
    name: "Arian Matos",
    role: "Somatic Therapist",
    bio: "Somatic therapist and musician specializing in trauma-informed sound journeys and integrative counseling.",
  },
];

export const sampleTestimonials = [
  {
    _id: "testi-01",
    name: "Divya Raman",
    role: "Author & Activist",
    quote:
      "Akarma held my manuscript with reverence. Their editorial feedback felt like ceremony and strategy in equal measure.",
  },
  {
    _id: "testi-02",
    name: "Noah Lee",
    role: "People Ops Lead",
    quote:
      "Our leadership retreat surfaced new rituals for care. The team returned grounded, communicative, and inspired.",
  },
];

export const sampleSiteSettings = {
  title: "Akarma",
  tagline: "Cultivate clarity, compassion, and balance.",
  contactEmail: "hello@akarma.org",
  phone: "+91 98765 43210",
  address: "27 Sattva Lane, Bengaluru, India",
  socials: {
    instagram: "https://instagram.com/akarma",
    linkedin: "https://linkedin.com/company/akarma",
  },
};

export const getProgramFallback = (slug) => programDetails[slug];
