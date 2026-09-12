const copy = {
  id: {
    nav: { work: 'Keahlian', experience: 'Inisiatif', connect: 'Kolaborasi' },
    heroEyebrow: 'Portofolio profesional & agrowisata',
    hero: '20+ Tahun di Dunia Teknologi.<br /><span>Kini Membangun Masa Depan Agrikultur.</span>',
    lede: 'Mengintegrasikan pengalaman panjang dalam arsitektur sistem skala besar dan ekosistem startup digital untuk merevolusi budidaya durian premium Indonesia berbasis agritech.',
    primary: 'Mari berdiskusi', secondary: 'Lihat inisiatif',
    aboutLabel: 'Tentang',
    about: 'Dari Baris Kode ke Tanah<br />Subur Nusantara.',
    intro: 'Dua dekade dihabiskan untuk merancang arsitektur sistem informasi, memimpin tim engineering, dan menavigasi dinamika startup teknologi di Indonesia. Perjalanan ini melahirkan pemahaman mendalam tentang bagaimana teknologi harus memecahkan masalah nyata.<br /><br />Kini, fokus dialihkan ke sektor yang paling mendasar namun potensial: agrikultur. Melalui modernisasi pengelolaan perkebunan durian premium dan pengembangan startup agritech, misi utamanya adalah meningkatkan nilai tambah hasil bumi Indonesia hingga kelas dunia.',
    values: [['20+', 'Tahun pengalaman startup & IT.'], ['3', 'Inisiatif bisnis berjalan saat ini.'], ['50+ Hektar', 'Luasan perkebunan durian terintegrasi.'], ['15+', 'Arsitektur sistem enterprise dirancang.']],
    workLabel: 'Pilar kompetensi', work: 'Keahlian & penguasaan teknologi.',
    cases: [
      ['System Integration', 'Menghubungkan sensor IoT lapangan, data meteorologi, dan sistem logistik gudang ke dalam satu dashboard analitik terpadu.'],
      ['Startup Building & Scaling', 'Membangun model bisnis digital, merekrut tim engineering, dan mempersiapkan fondasi yang siap bertumbuh.'],
      ['IT Infrastructure', 'Arsitektur cloud tangguh, edge-computing untuk area kebun minim sinyal, dan keamanan data supply chain hulu-ke-hilir.']
    ],
    expLabel: 'Inisiatif bisnis utama', exp: 'Kolektif bisnis aktif.',
    roles: [
      ['Duren Signature', 'Toko Durian Premium', 'E-commerce premium', 'Pusat distribusi durian kualitas terbaik hasil kurasi berbasis sensor kualitas.', 'Jawa Barat'],
      ['Pratama Farms', 'Kebun Durian Modern', 'Agrowisata & perkebunan', 'Perkebunan durian modern dengan implementasi IoT otomatis untuk penyiraman, pemupukan, dan deteksi dini hama.', 'Jawa Barat'],
      ['Tanisinergi', 'Startup AgriTech', 'Platform teknologi', 'Membangun platform supply chain digital yang menghubungkan perkebunan rakyat dengan pasar premium global.', 'Indonesia']
    ],
    contactLabel: 'Visi & filosofi', contact: '“Teknologi terbaik bukan teknologi yang paling rumit, tetapi yang paling berdampak langsung saat menyentuh akar kehidupan manusia.”', contactText: 'Terbuka untuk konsultasi system integrator, advisory dan mentoring startup, serta kemitraan kebun & agritech.', contactButton: 'Mari terhubung di LinkedIn', copyright: '© 2026 Denny Musa Irawan. Dennyspace.'
  },
  en: {
    nav: { work: 'Expertise', experience: 'Initiatives', connect: 'Collaborate' },
    heroEyebrow: 'Professional portfolio & agrotourism',
    hero: '20+ Years in Technology.<br /><span>Now Building the Future of Agriculture.</span>',
    lede: 'Combining deep experience in large-scale systems architecture and digital startup ecosystems to reimagine premium Indonesian durian cultivation through agritech.',
    primary: 'Let’s talk', secondary: 'Explore initiatives',
    aboutLabel: 'About',
    about: 'From Lines of Code to<br />Fertile Indonesian Soil.',
    intro: 'Two decades have been spent designing information systems architecture, leading engineering teams, and navigating Indonesia’s technology startup landscape. That journey formed a deep understanding of how technology must solve real problems.<br /><br />The focus now turns to a foundational sector with immense potential: agriculture. Through modernising premium durian estates and building agritech ventures, the mission is to raise the value of Indonesian produce to a world-class level.',
    values: [['20+', 'Years of startup & IT experience.'], ['3', 'Active business initiatives.'], ['50+ hectares', 'Integrated durian estate area.'], ['15+', 'Enterprise system architectures designed.']],
    workLabel: 'Core expertise', work: 'Expertise & technology mastery.',
    cases: [
      ['System Integration', 'Connecting field IoT sensors, meteorological data, and warehouse logistics into one integrated analytics dashboard.'],
      ['Startup Building & Scaling', 'Building digital business models, recruiting engineering teams, and preparing foundations that can grow.'],
      ['IT Infrastructure', 'Resilient cloud architecture, edge computing for low-connectivity estates, and end-to-end supply-chain data security.']
    ],
    expLabel: 'Core business initiatives', exp: 'An active business collective.',
    roles: [
      ['Duren Signature', 'Premium Durian Store', 'Premium e-commerce', 'A premium durian distribution centre with produce curated using quality-sensor data.', 'West Java'],
      ['Pratama Farms', 'Modern Durian Estate', 'Agrotourism & estate', 'A modern durian estate implementing IoT for irrigation, fertilisation, and early pest detection.', 'West Java'],
      ['Tanisinergi', 'AgriTech Startup', 'Technology platform', 'Building a digital supply-chain platform that connects community estates with global premium markets.', 'Indonesia']
    ],
    contactLabel: 'Vision & philosophy', contact: '“The best technology is not the most complex, but the one that makes the greatest impact when it touches the roots of people’s lives.”', contactText: 'Open to system-integrator consulting, startup advisory and mentoring, and orchard & agritech partnerships.', contactButton: 'Connect on LinkedIn', copyright: '© 2026 Denny Musa Irawan. Dennyspace.'
  }
};

const locale = document.documentElement.dataset.locale || 'id';
const t = copy[locale];
const other = locale === 'id' ? 'en' : 'id';
const linkedIn = 'https://www.linkedin.com/in/octaviadenny/';

const arrow = '<span class="arrow" aria-hidden="true">›</span>';
const values = t.values.map(([number, text]) => `<article class="value"><div class="value-number">${number}</div><p>${text}</p></article>`).join('');
const cards = t.cases.map(([title, text], i) => `<article class="case ${['one','two','three'][i]}"><small>0${i + 1}</small><h3>${title}</h3><p>${text}</p><div class="shapes" aria-hidden="true"><i></i><i></i><i></i></div></article>`).join('');
const roles = t.roles.map(([time, title, org, description, place]) => `<article class="role"><time>${time}</time><div><h3>${title}</h3><p>${org} · ${description}</p></div><div class="role-location">${place}</div></article>`).join('');

document.querySelector('#app').innerHTML = `
  <nav class="nav" aria-label="Primary navigation">
    <a class="brand" href="#top" aria-label="Dennyspace home">denny<span class="brand-mark">space</span></a>
    <div class="nav-links">
      <a href="#focus">${t.nav.work}</a><a href="#journey">${t.nav.experience}</a><a href="#connect">${t.nav.connect}</a>
      <a class="locale" href="/${other}/" aria-label="Switch to ${other === 'id' ? 'Bahasa Indonesia' : 'English'}"><span class="${locale === 'id' ? 'is-current' : ''}">ID</span><span class="${locale === 'en' ? 'is-current' : ''}">EN</span></a>
    </div>
  </nav>
  <a class="mobile-locale" href="/${other}/" aria-label="Switch to ${other === 'id' ? 'Bahasa Indonesia' : 'English'}">${other.toUpperCase()}</a>
  <section class="hero" id="top"><div class="orbit" aria-hidden="true"></div><div class="hero-inner">
    <p class="eyebrow">${t.heroEyebrow}</p><h1>${t.hero}</h1><p class="lede">${t.lede}</p>
    <div class="hero-actions"><a class="button" href="#connect">${t.primary} ${arrow}</a><a class="text-link" href="#journey">${t.secondary} ${arrow}</a></div>
  </div></section>
  <section class="section"><div class="section-inner"><p class="section-label">${t.aboutLabel}</p><h2>${t.about}</h2><p class="intro">${t.intro}</p><div class="values">${values}</div></div></section>
  <section class="section work" id="focus"><div class="section-inner"><p class="section-label">${t.workLabel}</p><h2>${t.work}</h2><div class="work-grid">${cards}</div></div></section>
  <section class="section experience" id="journey"><div class="section-inner"><p class="section-label">${t.expLabel}</p><h2>${t.exp}</h2><div class="timeline">${roles}</div></div></section>
  <section class="section contact" id="connect"><div class="contact-ring" aria-hidden="true"></div><div class="section-inner" style="position:relative"><p class="section-label">${t.contactLabel}</p><h2>${t.contact}</h2><p class="intro">${t.contactText}</p><a class="button" href="${linkedIn}" target="_blank" rel="noopener noreferrer">${t.contactButton} ${arrow}</a></div></section>
  <footer class="footer"><div class="footer-inner"><span>${t.copyright}</span><a href="${linkedIn}" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></footer>`;
