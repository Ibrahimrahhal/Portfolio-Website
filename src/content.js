// All copy and data for the page. Edit here, not in the sections.

export const nav = [
  { label: 'Now', href: '#now' },
  { label: 'Wiley', href: '#before' },
  { label: 'The shift', href: '#shift' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Photos', href: '#photos' },
  { label: 'Code', href: '#code' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
];

export const links = {
  email: 'mailto:hello@rahhalesta.com',
  linkedin: 'https://www.linkedin.com/in/ibrahim-rahhal',
  github: 'https://github.com/IbrahimRahhal',
  npm: 'https://www.npmjs.com/~ibrahim.rahhal',
  resume: '/resume.pdf',
};

export const hero = {
  eyebrow: 'Founding engineer · Corgea (YC) · Amman, Jordan',
  name: 'Ibrahim Rahhal.',
  emphasis: 'Rahhal.',
  line: 'Seven years shipping the journals 2.5 million scientists read every morning, then running the team that built them. Now building the AI that finds what pentesters miss.',
  also: 'Also: co-founder of Leasifier, co-host of Bit wa Byte, and the one with the camera.',
  primary: { label: 'See the work', href: '#now' },
  secondary: { label: 'Résumé', href: '/resume.pdf' },
};

export const marquee = ['Corgea', 'Y Combinator', 'Wiley', 'Science.org', 'PNAS', 'Leasifier', 'Bit wa Byte', 'University of Jordan'];

export const now = {
  numeral: '01',
  eyebrow: 'NOW · 2024 →',
  heading: 'Hundreds of attack agents, shipped on launch day.',
  emphasis: 'shipped',
  lead: 'Corgea is a YC-backed, AI-native AppSec platform. Its AI Pentest sends hundreds of agents to map an app, attack it in parallel and hand back an auditor-ready report in hours instead of weeks. I\'m a founding engineer. I built it and demoed it in the launch video.',
  shot: { src: '/shots/pentest-agents.webp', url: 'Corgea Pentest Agents · live run', href: 'https://corgea.com/products/ai-pentest', align: 'top' },
  video: {
    id: 'wzvUiEr8I2c',
    title: 'Introducing AI Pentesting',
    eyebrow: 'LAUNCH VIDEO',
    heading: 'Introducing AI Pentesting.',
    emphasis: 'Pentesting.',
    text: 'The launch demo: me, a microphone and hundreds of attack agents. Reconnaissance to report in one take.',
    href: 'https://www.youtube.com/watch?v=wzvUiEr8I2c',
  },
  stats: [
    { value: '7h', label: 'for a full pentest, not 7 days' },
    { value: 'YC', label: 'backed' },
    { value: 'IDC', label: 'Innovator, autonomous pentesting' },
  ],
  products: [
    { title: 'AI Pentest', text: 'Reconnaissance, attack, report. Agents map endpoints and auth flows, then work in parallel by vulnerability class and chain what they find. Authenticated and unauthenticated, one shareable report.', tags: ['LLM agents', 'Attack chaining', 'Launch demo'], href: 'https://corgea.com/products/ai-pentest' },
    { title: 'Skills Scanning & Registry', text: 'Agents load skills. Somebody has to read them first. A scanner and a registry so the agent you trust runs code you trust.', tags: ['Agent security', 'Registry', 'Demo video'] },
  ],
};

export const before = {
  numeral: '02',
  eyebrow: 'BEFORE · WILEY · 2017 — 2024',
  heading: 'Seven years at Wiley. Lead engineer, then engineering manager.',
  emphasis: 'manager.',
  lead: 'I joined Wiley\'s Amman office as a front-end engineer, led the Science.org rebuild, and ended up running the engineering team behind some of the most-read scientific publishers on the web.',
  counter: { value: 2500000, label: 'daily readers on science.org alone', format: (n) => (n >= 1000000 ? (n / 1000000).toFixed(1) + 'M' : Math.round(n / 1000) + 'K') },
  facts: [
    { value: '95%', label: 'faster webpack builds' },
    { value: 'EM', label: 'engineering manager of the Amman team' },
    { value: '7', label: 'years, one platform' },
  ],
  sites: [
    { title: 'Science.org', year: '2021', role: 'Lead engineer', text: 'The rebuild of the flagship. Figma-exact, on time, and read by 2.5 million people a day.', stack: ['Node', 'Java', 'Spring', 'TypeScript'], shot: { src: '/shots/science.jpg', url: 'science.org', href: 'https://www.science.org' } },
    { title: 'PNAS', year: '2022', role: 'Lead developer', text: 'Open access to one of the most-cited journals in the world, delivered in an exceptional timeframe.', stack: ['Node', 'Spring', 'TypeScript'], shot: { src: '/shots/pnas.jpg', url: 'pnas.org', href: 'https://www.pnas.org' } },
  ],
  more: { label: 'And on the same platform:', items: ['ASM Journals', 'Canadian Science Publishing', 'and a dozen more publishers'] },
  team: {
    eyebrow: 'ENGINEERING MANAGEMENT',
    heading: 'The best part was the team.',
    emphasis: 'team.',
    text: 'Hiring, mentoring and shipping with the Amman engineers who kept those journals online every morning. The cake says "Best manager & friend". I did not bake it, but I kept the plaque.',
    photos: [
      { src: '/story/wiley-team-office.webp', alt: 'The Wiley Amman engineering team in the office', caption: 'The team, Wiley Amman', wide: true },
      { src: '/story/wiley-team-event.webp', alt: 'The team at a Wiley event', caption: 'Team night out' },
      { src: '/story/wiley-cake.webp', alt: 'A blueberry cake reading Best manager & friend', caption: '"Best manager & friend"' },
    ],
  },
};

export const shift = {
  eyebrow: 'THE SHIFT',
  from: 'Engineering manager',
  to: 'Founding engineer',
  lines: [
    { from: 'optimise the build', to: 'decide what to build' },
    { from: 'match the Figma', to: 'own it end to end, demo included' },
    { from: '2.5M readers a day', to: 'a security team\'s trust, one finding at a time' },
  ],
  commit: {
    hash: '0xYC',
    meta: 'Ibrahim · 2024',
    message: 'feat: join Corgea as founding engineer',
    deletions: ['title: Engineering Manager, Wiley'],
    additions: ['title: Founding Engineer, Corgea', 'location: Amman → everywhere'],
  },
};

export const ventures = {
  numeral: '03',
  eyebrow: 'VENTURES',
  heading: 'Two things I started on the side.',
  emphasis: 'side.',
  podcast: {
    eyebrow: 'CO-HOST · PODCAST',
    heading: 'Bit wa Byte.',
    emphasis: 'Byte.',
    arabic: 'بت وبايت',
    text: 'An Arabic-language tech podcast I co-host. Episodes for people starting out and for the veterans, recorded wherever the lighting is strangest.',
    platforms: ['Apple Podcasts', 'Spotify', 'YouTube', 'Pocket Casts', 'RSS'],
    site: { src: '/story/podcast-site.png', url: 'bit wa byte', alt: 'The Bit wa Byte podcast website' },
    photos: [
      { src: '/story/podcast-cave.webp', alt: 'Recording an episode in a cave-like studio', caption: 'On set, take one' },
      { src: '/story/podcast-neon.webp', alt: 'Recording an episode under neon lights', caption: 'On set, take two' },
    ],
  },
  startup: {
    eyebrow: 'CO-FOUNDER',
    heading: 'Leasifier.',
    emphasis: 'Leasifier.',
    text: 'Renting in Jordan, without the phone calls. Leasifier matches landlords and tenants with AI-ranked listings and a map search, then handles the rest: contracts signed online, rent collected online, tenant screening and legal representation included.',
    href: 'https://leasifier.com',
    site: { src: '/story/leasifier.jpg', url: 'leasifier.com', alt: 'The Leasifier website' },
    tags: ['Proptech', 'AI matching', 'Online payments', 'Legal'],
  },
};

export const photos = {
  numeral: '04',
  eyebrow: 'OFF THE CLOCK',
  heading: 'A camera and a boarding pass.',
  emphasis: 'camera',
  lead: 'I travel when I can and shoot what I see. Some of it from Italy and Austria, some from a 360 camera held at arm\'s length.',
  items: [
    { src: '/photos/rome-kiss.jpg', alt: 'A couple kissing in front of St Peter\'s Basilica at dusk', caption: 'Rome, at dusk', size: 'wide' },
    { src: '/photos/tiny-planet-alps.jpg', alt: 'A 360 tiny-planet photo on a mountain deck in the Alps', caption: 'The Alps, from above', size: 'tall' },
    { src: '/photos/varenna.jpg', alt: 'Varenna on Lake Como', caption: 'Varenna, Lake Como' },
    { src: '/photos/swiss-guard.jpg', alt: 'Two Swiss Guards talking to a child', caption: 'Vatican, two guards and a question' },
    { src: '/photos/hallstatt.jpg', alt: 'Hallstatt across the lake, framed by branches', caption: 'Hallstatt', size: 'wide' },
    { src: '/photos/tiny-planet-venice.jpg', alt: 'A 360 tiny-planet photo over the Grand Canal in Venice', caption: 'Venice, from above', size: 'tall' },
    { src: '/photos/lake-bench.jpg', alt: 'A person on a bench facing a lake and mountains', caption: 'A bench with a view', size: 'wide' },
    { src: '/photos/rgb-shadows.jpg', alt: 'Three coloured shadows of one person on a wall', caption: 'Three shadows, one me' },
    { src: '/photos/blue-arch.jpg', alt: 'A portrait under a blue vaulted light installation', caption: 'After hours' },
    { src: '/photos/cobblestones.jpg', alt: 'A street scene on cobblestones in Rome', caption: 'Street, Rome', size: 'wide' },
  ],
};

export const code = {
  numeral: '05',
  eyebrow: 'OPEN SOURCE',
  heading: 'Small tools, still maintained.',
  emphasis: 'still',
  repos: [
    { name: 'react-image-curves-editor', text: 'Photoshop-style curves and levels for images, as React components.', stat: '300+ weekly', href: 'https://www.npmjs.com/package/react-image-curves-editor' },
    { name: 'babel-plugin-minify-mangle-names', text: 'A fork that mangles JSX variable names too.', stat: '300+ weekly', href: 'https://www.npmjs.com/package/babel-plugin-minify-mangle-names' },
    { name: 'jordan-cities-geojson', text: 'GeoJSON for every city in Jordan.', stat: '300+ weekly', href: 'https://www.npmjs.com/package/jordan-cities-geojson' },
    { name: 'inject-global-sass', text: 'Inject Sass files globally into every loaded stylesheet.', stat: '200+ weekly', href: 'https://www.npmjs.com/package/inject-global-sass' },
    { name: 'webpack-file-inherit', text: 'Extend any file and override one block, like Pug extends.', stat: '100+ weekly', href: 'https://www.npmjs.com/package/webpack-file-inherit' },
    { name: 'webpack-extend-json', text: 'A loader that lets JSON files extend each other.', stat: '100+ weekly', href: 'https://www.npmjs.com/package/webpack-extend-json' },
    { name: 'css-lens', text: 'A model that spots sites with their CSS missing, from a screenshot.', stat: 'Deep learning', href: 'https://github.com/IbrahimRahhal' },
    { name: 'broken-sites-screenshots-dataset', text: '20K labelled screenshots of broken and working sites.', stat: 'Dataset', href: 'https://github.com/IbrahimRahhal' },
  ],
};

export const notes = {
  numeral: '06',
  eyebrow: 'WRITING',
  heading: 'Notes from the road.',
  emphasis: 'road',
  posts: [
    { title: 'Speeding up webpack: our story of 95% faster builds', read: '8 min', href: '#' },
    { title: 'Unleashing the power of JavaScript ASTs', read: '11 min', href: '#' },
    { title: 'Why algorithms matter for front-end engineers too', read: '6 min', href: '#' },
    { title: 'Seven tips I wish I knew for a tech career', read: '7 min', href: '#' },
    { title: 'The complete webpack guide for beginners', read: '14 min', href: '#' },
  ],
};

export const contact = {
  heading: 'Build something worth breaking.',
  emphasis: 'breaking.',
  lead: 'I\'m in Amman and online everywhere. Founders, security teams, publishers with a front end on fire: say hi.',
};
