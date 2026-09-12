const copy = {
  id: {
    nav: { work: 'Keahlian', experience: 'Perjalanan', connect: 'Terhubung' },
    heroEyebrow: 'Denny Musa Irawan',
    hero: 'Menjadikan teknologi <span>lebih andal.</span>',
    lede: 'Pemimpin IT Operations yang membangun fondasi aman dan siap tumbuh untuk bisnis yang bergerak cepat.',
    primary: 'Mari terhubung', secondary: 'Lihat perjalanan',
    aboutLabel: 'Tentang',
    about: 'Operasi yang tenang.<br />Dampak yang besar.',
    intro: 'Selama lebih dari dua dekade, saya menerjemahkan kompleksitas teknologi menjadi sistem, tim, dan pengalaman yang dapat diandalkan—dari kantor pusat hingga operasi lapangan di seluruh Indonesia.',
    values: [['20+', 'tahun pengalaman lintas industri dan operasi TI.'], ['13.500+', 'tenaga kerja yang didukung di seluruh grup perusahaan.'], ['9', 'anak perusahaan yang dihubungkan oleh standar bersama.']],
    workLabel: 'Fokus', work: 'Membuat skala terasa sederhana.',
    cases: [
      ['Operasi yang selalu siap', 'Merancang layanan TI ujung ke ujung yang menjaga tim tetap produktif—setiap hari.'],
      ['Keamanan & kepatuhan', 'Menyelaraskan praktik keamanan dengan kebutuhan bisnis dan regulasi Indonesia.'],
      ['Fondasi untuk tumbuh', 'Membangun infrastruktur kantor, jaringan, dan warehouse dari awal hingga siap berkembang.']
    ],
    expLabel: 'Perjalanan', exp: 'Pengalaman yang dibangun dari lapangan.',
    roles: [
      ['2021 — sekarang', 'Head of IT Operations', 'byOrange', 'Memimpin operasi TI dan dukungan end-to-end untuk grup holding dengan sembilan anak perusahaan di fintech, pembayaran digital, logistik, warehouse, dan BPO.', 'Jakarta'],
      ['2019 — 2021', 'IT Support Manager', 'OVO (PT Visionet Internasional)', 'Memimpin layanan TI, IAM, infrastruktur, dan kesiapan operasional untuk ribuan karyawan dan perangkat.', 'Jakarta'],
      ['2012 — 2019', 'IT Support & Operational Manager', 'PT Bilna · Orami & Berrybenka', 'Membangun dan menskalakan infrastruktur operasional untuk kantor pusat serta pusat fulfillment e-commerce.', 'Jakarta']
    ],
    contactLabel: 'Mari berbicara', contact: 'Membangun hal yang<br />dapat diandalkan.', contactText: 'Terbuka untuk percakapan tentang operasi TI, infrastruktur, keamanan, dan bagaimana teknologi dapat membantu bisnis bertumbuh.', contactButton: 'Kunjungi LinkedIn', copyright: '© 2026 Dennyspace. Dibuat dengan perhatian pada setiap detail.'
  },
  en: {
    nav: { work: 'Focus', experience: 'Journey', connect: 'Connect' },
    heroEyebrow: 'Denny Musa Irawan',
    hero: 'Making technology <span>more dependable.</span>',
    lede: 'An IT Operations leader building secure, scalable foundations for businesses that move fast.',
    primary: 'Let’s connect', secondary: 'Explore my journey',
    aboutLabel: 'About',
    about: 'Calm operations.<br />Meaningful impact.',
    intro: 'For more than two decades, I have translated technology complexity into reliable systems, teams, and experiences—from headquarters to field operations across Indonesia.',
    values: [['20+', 'years of experience across industries and IT operations.'], ['13,500+', 'people supported across a group of businesses.'], ['9', 'subsidiaries brought together by shared standards.']],
    workLabel: 'Focus', work: 'Making scale feel simple.',
    cases: [
      ['Operations that stay ready', 'Designing end-to-end IT services that keep teams productive—every day.'],
      ['Security & compliance', 'Aligning security practice with business needs and Indonesian regulation.'],
      ['Foundations for growth', 'Building office, network, and warehouse infrastructure from the ground up.']
    ],
    expLabel: 'Journey', exp: 'Experience built in the field.',
    roles: [
      ['2021 — present', 'Head of IT Operations', 'byOrange', 'Leading end-to-end IT Operations and Support for a holding group with nine subsidiaries in fintech, payments, logistics, warehousing, and BPO.', 'Jakarta'],
      ['2019 — 2021', 'IT Support Manager', 'OVO (PT Visionet Internasional)', 'Led IT service, IAM, infrastructure, and operational readiness for thousands of employees and devices.', 'Jakarta'],
      ['2012 — 2019', 'IT Support & Operational Manager', 'PT Bilna · Orami & Berrybenka', 'Built and scaled operational infrastructure for headquarters and e-commerce fulfillment centers.', 'Jakarta']
    ],
    contactLabel: 'Let’s talk', contact: 'Build what people<br />can depend on.', contactText: 'Open to conversations about IT operations, infrastructure, security, and how technology can help a business grow.', contactButton: 'Visit LinkedIn', copyright: '© 2026 Dennyspace. Made with attention to every detail.'
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
