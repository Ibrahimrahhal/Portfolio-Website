// All copy and data for the page. Edit here, not in the sections.

export const nav = [
  { label: 'Now', href: '#now' },
  { label: 'Wiley', href: '#before' },
  { label: 'The shift', href: '#shift' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Photos', href: '#photos' },
  { label: 'Notes', href: '#notes' },
  { label: 'Code', href: '#code' },
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
  line: 'I spent seven years shipping the journals 2.5 million scientists read every morning, then ran the team that built them. Now I build AI that hacks for the good guys.',
  also: 'Also: SpeakLens, Open Mate, Leasifier and Nomad Quest on the side, co-host of Bit wa Byte, and the one with the camera.',
  primary: { label: 'See the work', href: '#now' },
  secondary: { label: 'Résumé', href: '/resume.pdf' },
};

export const marquee = ['Corgea', 'Y Combinator', 'Wiley', 'Science.org', 'PNAS', 'SpeakLens', 'Open Mate', 'Leasifier', 'Nomad Quest', 'Bit wa Byte', 'University of Jordan'];

export const now = {
  numeral: '01',
  eyebrow: 'NOW · 2024 →',
  heading: 'Hundreds of attack agents, shipped on launch day.',
  emphasis: 'shipped',
  lead: 'Corgea is a YC-backed AppSec platform. Its AI Pentest sends hundreds of agents to map an app, attack it in parallel and write an auditor-ready report in hours rather than days. I\'m a founding engineer there. I built the pentester and demoed it in the launch video.',
  shot: { src: '/shots/pentest-agents.webp', url: 'Corgea Pentest Agents · live run', href: 'https://corgea.com/products/ai-pentest', align: 'top' },
  video: {
    id: 'wzvUiEr8I2c',
    title: 'Introducing AI Pentesting',
    eyebrow: 'LAUNCH VIDEO',
    heading: 'Introducing AI Pentesting.',
    emphasis: 'Pentesting.',
    text: 'The launch demo. I walk through one pentest from reconnaissance to the finished report.',
    href: 'https://www.youtube.com/watch?v=wzvUiEr8I2c',
  },
  stats: [
    { value: '7h', label: 'for a full pentest, not 7 days' },
    { value: 'YC', label: 'backed' },
    { value: 'IDC', label: 'Innovator, autonomous pentesting' },
  ],
  products: [
    { title: 'AI Pentest', text: 'Agents map the endpoints and auth flows, then split up by vulnerability class, attack in parallel and chain what they find. It tests both logged-in and anonymous paths and writes one report you can share.', tags: ['LLM agents', 'Attack chaining', 'Launch demo'], href: 'https://corgea.com/products/ai-pentest' },
    { title: 'Skills Scanning & Registry', text: 'AI agents load third-party skills before they run. The scanner reads each skill first, and the registry keeps the ones that passed.', tags: ['Agent security', 'Registry', 'Demo video'] },
  ],
};

export const before = {
  numeral: '02',
  eyebrow: 'BEFORE · WILEY · 2017 TO 2024',
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
    { title: 'Science.org', year: '2021', role: 'Lead engineer', text: 'The flagship rebuild, matched to the Figma files and shipped on time. 2.5 million people read it every day.', stack: ['Node', 'Java', 'Spring', 'TypeScript'], shot: { src: '/shots/science.jpg', url: 'science.org', href: 'https://www.science.org' } },
    { title: 'PNAS', year: '2022', role: 'Lead developer', text: 'One of the most-cited journals in the world, moved onto the platform on a short deadline.', stack: ['Node', 'Spring', 'TypeScript'], shot: { src: '/shots/pnas.jpg', url: 'pnas.org', href: 'https://www.pnas.org' } },
  ],
  more: { label: 'And on the same platform:', items: ['ASM Journals', 'Canadian Science Publishing', 'and a dozen more publishers'] },
  team: {
    eyebrow: 'ENGINEERING MANAGEMENT',
    heading: 'The best part was the team.',
    emphasis: 'team.',
    text: 'I hired and coached the Amman engineers who kept those journals online, and shipped alongside them. The cake says "Best manager & friend". I did not bake it, but I kept the plaque.',
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
    { from: '2.5M readers a day', to: 'findings a security team can act on' },
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
  heading: 'Things I build on the side.',
  emphasis: 'side.',
  lead: 'A podcast and four products, built in the evenings and on weekends.',
  podcast: {
    eyebrow: 'CO-HOST · PODCAST',
    heading: 'Bit wa Byte.',
    emphasis: 'Byte.',
    arabic: 'بت وبايت',
    text: 'An Arabic-language tech podcast I co-host, with episodes for people starting out and for people who have been at it for years. We record wherever the lighting is strangest.',
    platforms: ['Apple Podcasts', 'Spotify', 'YouTube', 'Pocket Casts', 'RSS'],
    site: { src: '/story/podcast-site.png', url: 'bit wa byte', alt: 'The Bit wa Byte podcast website' },
    photos: [
      { src: '/story/podcast-cave.webp', alt: 'Recording an episode in a cave-like studio', caption: 'On set, take one' },
      { src: '/story/podcast-neon.webp', alt: 'Recording an episode under neon lights', caption: 'On set, take two' },
    ],
  },
  productsEyebrow: 'PRODUCTS',
  products: [
    { eyebrow: 'FOUNDER · EARLY ACCESS', name: 'SpeakLens', emphasis: 'SpeakLens', text: 'Your meetings are your English lessons. A desktop app that listens to your real calls, no bot in the room, then shows what you were trying to say, the mistakes you repeat and how your level moves from one meeting to the next.', tags: ['Mac & Windows', 'Speech AI', 'CEFR tracking'], href: 'https://www.speaklens.si', site: { src: '/story/speaklens.jpg', url: 'speaklens.si', alt: 'The SpeakLens website: your meetings are your English lessons' } },
    { eyebrow: 'FOUNDER · EARLY ACCESS', name: 'Open Mate', emphasis: 'Mate', text: 'Hire a team, not a chatbot. Five specialist AI helpers for training, meals, money, mood and trips. They remember what you tell them, keep count of what you log and check in on a schedule.', tags: ['iOS', 'Android', 'Web', 'AI agents'], href: 'https://openmate.si', site: { src: '/story/openmate.jpg', url: 'openmate.si', alt: 'The Open Mate website: hire a team, not a chatbot' } },
    { eyebrow: 'CO-FOUNDER · BETA', name: 'Leasifier', emphasis: 'Leasifier', text: 'Renting in Jordan, without the phone calls. AI-ranked listings and a map search, then contracts signed online, rent collected online, tenant screening and legal representation included.', tags: ['Proptech', 'AI matching', 'Online payments'], href: 'https://leasifier.com', site: { src: '/story/leasifier.jpg', url: 'leasifier.com', alt: 'The Leasifier website' } },
    { eyebrow: 'FOUNDER · LIVE', name: 'Nomad Quest', emphasis: 'Quest', text: 'Every country you have set foot in, stamped into a digital passport. Log a trip and it lights up gold on a 3D globe. You start as a Dreamer and work up to Atlas, with a leaderboard for settling arguments with friends.', tags: ['iOS', 'Android', '3D globe', 'Free'], href: 'https://nomadquest.app', site: { src: '/story/nomadquest.jpg', url: 'nomadquest.app', alt: 'The Nomad Quest website: your world, your story' } },
  ],
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
  numeral: '06',
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
  numeral: '05',
  eyebrow: 'WRITING',
  heading: 'Notes from the road.',
  emphasis: 'road',
  lead: 'Eight pieces on Medium, mostly about build tooling, React and getting better at the job.',
  medium: 'https://medium.com/@ibrahim.rahhal',
  posts: [
    { title: 'The software engineer\'s survival guide to 2025\'s competitive job market', dek: 'AI is changing engineering jobs. What to learn so you stay useful, from the tools to the soft skills.', topic: 'Career', date: 'Jan 2025', read: '6 min', href: 'https://medium.com/@ibrahim.rahhal/the-software-engineers-survival-guide-to-2025-s-competitive-job-market-993748f3ee1e' },
    { title: 'ReactJS: beginner to senior-level developer, part 1', dek: 'What React gives you and what it costs, plus the idea it is built on: keep state and view in sync.', topic: 'React', date: 'Dec 2024', read: '5 min', href: 'https://medium.com/@ibrahim.rahhal/reactjs-beginner-to-senior-level-developer-part-1-getting-started-32948b762e28' },
    { title: 'This could have been an email', dek: 'How to spot the meeting that should not exist, and how to decline it without making enemies.', topic: 'Leadership', date: 'Dec 2024', read: '6 min', href: 'https://medium.com/@ibrahim.rahhal/this-could-have-been-an-email-4d417e74a9ee' },
    { title: 'Ninja your way to the top: 7 tips I wish I knew for your tech career', dek: 'Prioritise impact, build soft skills, switch jobs on purpose, take initiative, ship in the open.', topic: 'Career', date: 'Mar 2023', read: '9 min', href: 'https://medium.com/@ibrahim.rahhal/ninja-your-way-to-the-top-10-tips-i-wish-i-knew-for-crushing-it-in-your-tech-career-4960b7d58b44' },
    { title: 'Speeding up webpack: our story of 95% faster builds', dek: 'Cache the dependencies and parallelise across CPU cores. Our builds got 95% faster.', topic: 'Build tooling', date: 'Mar 2023', read: '6 min', href: 'https://medium.com/@ibrahim.rahhal/speeding-up-webpack-build-times-our-success-story-of-95-faster-builds-55a4742d6ad3' },
    { title: 'Why algorithms are equally important for front-end engineers', dek: 'Where data structures and algorithms turned up in real front-end projects, and what to study.', topic: 'Fundamentals', date: 'Jan 2023', read: '7 min', href: 'https://medium.com/@ibrahim.rahhal/why-algorithms-are-equally-important-for-front-end-engineers-10938a2aa568' },
    { title: 'Unleashing the power of JavaScript ASTs', dek: 'What an abstract syntax tree is, and how it powers Babel plugins, ESLint rules and codemods.', topic: 'JavaScript', date: 'Jan 2023', read: '8 min', href: 'https://medium.com/@ibrahim.rahhal/unleashing-the-power-of-javascript-asts-fb727d9fe34f' },
    { title: 'The complete webpack guide for beginners', dek: 'Loaders, plugins and a first config file, explained from zero.', topic: 'Build tooling', date: 'Jan 2023', read: '6 min', href: 'https://medium.com/@ibrahim.rahhal/the-complete-webpack-guide-for-beginners-9a15838bc6d3' },
  ],
};

export const contact = {
  heading: 'Build something worth breaking.',
  emphasis: 'breaking.',
  lead: 'I\'m in Amman and online everywhere. Founders, security teams, publishers with a front end on fire: say hi.',
};
