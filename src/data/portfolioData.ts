import { AcademicItem, CapabilityItem, EcosystemItem, CodeSnippet, TestCase } from '../types';

export const PERSONAL_INFO = {
  name: 'Deshani Bandara',
  shortName: 'Deshani B.',
  title: 'BICT Undergraduate & SQA Enthusiast',
  headlineLead: 'Building Systems,',
  headlineSub: 'Ensuring Software Quality.',
  bio: 'Passionate Full-Stack Developer focusing on the React ecosystem and Back-End architecture. Experienced SQA evaluator coupled with specialized professional expertise in Phonics, Linguistics, and ICT delivery workflows.',
  email: 'deshanibandara2001@gmail.com',
  phone: '+94 74 153 4794',
  phoneClean: '+94741534794',
  location: 'Sri Lanka',
  status: 'Available for hire / SQA & Dev',
  linkedinUrl: 'https://www.linkedin.com/in/deshani-bandara-a0b733367/',
  githubUrl: 'https://github.com/DeshaniBandara',
  englishClassUrl: 'https://deshanibandara.github.io/English-Class/',
  youtubeUrl: 'https://www.youtube.com/@EnglishForKidsLk',
  telegramUrl: 'https://t.me/Englishforkids_Lk',
  facebookUrl: 'https://web.facebook.com/EnglishforkidszLk?_rdc=1&_rdr#',
  avatarImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByWbjvd07pCTt5mpe8wG5cy7TahlggaMAHmI1u-luvn6Pma2K65hY-e8Ij9W2LJ7_B67ersYlbLyafO2kOGLtjTffO6FyV0pvH23_PU98SjnalpX8x11cgcHLLjXrF1an6TLwM7sQsAyfr4R_Aysifim4tCxqvUToYV6uLV-J-dFxtIxwSjeUi82BJaBAe3vTuegOFfgnydLsiHEsOUeuPoAXRJJ3DYKojJmS1SE1BJfXKNWPJUphqJA'
};

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    fileName: 'deshani-stack.ts',
    language: 'typescript',
    code: `const engineer = {
  core: ['React', 'Node.js', 'Playwright'],
  focus: 'Full-Stack & Automated Testing',
  pedagogy: 'English for Kids (Phonics)',
  location: 'Sri Lanka',
  availability: 'Open for Hire (SQA & Full-Stack)'
};`
  },
  {
    fileName: 'qa-automated-suite.spec.ts',
    language: 'typescript',
    code: `import { test, expect } from '@playwright/test';

test('verify responsive render & state pipeline', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Building Systems');
  await expect(page.locator('#ecosystems')).toBeVisible();
  // Ensure all core SQA assertion benchmarks pass:
  const status = await page.getAttribute('#hire-status', 'data-active');
  expect(status).toBe('true');
});`
  },
  {
    fileName: 'phonics-pedagogy.json',
    language: 'json',
    code: `{
  "platform": "English For Kids LK",
  "methodology": "Systematic Synthetic Phonics",
  "audience": "Primary & Early Childhood",
  "resources": ["Digital Flashcards", "Audio Synthetics", "Workbooks"],
  "channel": "@EnglishForKidsLk"
}`
  }
];

export const ACADEMIC_TIMELINE: AcademicItem[] = [
  {
    id: 'univ-vavuniya',
    period: '2022 - PRESENT',
    badge: 'Undergraduate',
    institution: 'University of Vavuniya',
    degree: 'Bachelor of Information and Communication Technology Honours (BICT Hons)',
    description: 'Specialized path focused on system architecture models, automated testing paradigms, frontend states (React.js), and clean backend services.',
    tags: ['System Architecture', 'Automated Testing', 'React.js', 'Node.js', 'Database Engineering'],
    glowColor: 'primary'
  },
  {
    id: 'sliate',
    period: 'DIPLOMA LEVEL',
    badge: 'Linguistics',
    institution: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
    degree: 'Higher National Diploma in English',
    description: 'Advanced academic concentration in professional communication methods, Phonetics structure, and functional English Linguistics.',
    tags: ['Phonetics', 'Communication', 'Applied Linguistics', 'Grammar Pedagogy'],
    glowColor: 'secondary'
  },
  {
    id: 'rathnayake-college',
    period: 'COLLEGIATE FOUNDATION',
    badge: 'Secondary',
    institution: 'A. Rathnayake Central College',
    degree: 'Secondary Education Foundations',
    description: 'Developed critical foundations in technical teamwork operations, leadership roles, and linguistic skills.',
    tags: ['Team Leadership', 'Academic Excellence', 'Public Speaking'],
    glowColor: 'tertiary'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'react-ecosystem',
    title: 'React.js Ecosystem',
    subtitle: 'SPAs, Hooks, Context APIs',
    description: 'Modern frontend component architecture, responsive multi-device UIs, dynamic client state orchestration, and performance tuning.',
    iconName: 'devices',
    glowColor: 'primary',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'State Management', 'Web Accessibility']
  },
  {
    id: 'backend-logic',
    title: 'Back-End Logic',
    subtitle: 'Node architectures & REST APIs',
    description: 'Engineered server-side microservices, secure authentication flows, Express routing, and scalable database schemas.',
    iconName: 'dns',
    glowColor: 'secondary',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL / SQL', 'Authentication & JWT', 'Server Architecture']
  },
  {
    id: 'sqa-engineering',
    title: 'SQA Engineering',
    subtitle: 'Quality assurance & Test scripts',
    description: 'Systematic test plans, boundary testing, automated verification scripts, regression tracking, and end-to-end user journey validation.',
    iconName: 'bug_report',
    glowColor: 'tertiary',
    skills: ['Playwright', 'Jest / Vitest', 'Boundary Value Analysis', 'Regression Testing', 'Bug Tracking', 'CI/CD Verifications']
  },
  {
    id: 'phonics-linguistics',
    title: 'Phonics & Linguistics',
    subtitle: 'ICT and Language Tutoring',
    description: 'Professional phonetic delivery, interactive digital learning experiences, grammar pedagogy, and structured language curriculum development.',
    iconName: 'translate',
    glowColor: 'cyan',
    skills: ['Synthetic Phonics', 'IPA Notation', 'Child Literacy Pedagogy', 'Interactive Learning', 'Curriculum Design']
  }
];

export const ECOSYSTEMS: EcosystemItem[] = [
  {
    id: 'youtube-kids',
    category: 'Video Platform',
    title: 'English For Kids',
    handle: '@EnglishForKidsLk',
    badge: 'Phonics & Vocab Series',
    description: 'Dynamic video production curated to instill early phonetic values and structural language systems for young students.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAchynJzFYvaUNHsfDn7J4wFSZrmj1SCGUG0jFF4oyywrvlgXd53_j-0fmGZR9E_OJoFqEttah5nhgVt4spSZ68IT7K3elo-_Rpga6Zy3Ghfz_3sLyJfxq1DyiUD3WqLTBDoQagZCKvTTKnoCFI8bKJJYHjTDRyVBYMGoGdS-oOdtvULr5wuN7FmgpfOHvZuSD84B84MtrzeTNAYYOjzfsF7tR8IIZNHbYCjOFAO4S4Gh_km892SWbCSw',
    imageAlt: 'Futuristic animated digital classroom with glowing phonetic letters and audio waveform graphics',
    primaryAction: {
      label: 'Open YouTube Channel',
      url: 'https://www.youtube.com/@EnglishForKidsLk',
      icon: 'smart_display'
    },
    glowColor: 'red'
  },
  {
    id: 'telegram-hub',
    category: 'Broadcast Hub',
    title: 'Telegram Resource Hub',
    handle: 't.me/Englishforkids_Lk',
    badge: 'Instant PDF Handouts',
    description: 'Direct broadcast community set up to deliver customized educational handouts, work materials, and direct instructions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_2stsjANLHrj3BL2U83jdS5TeRUNcqY0zcG9aCY3d9BM8RTaQsH5bkJVvxSLkCd4Cyj-VcMbQZgcOjxQJW4kUmRHv6qWrt9c7q3wTXnEPN5bu4KU9SxFe0YCFGh6jXrQ3YGRXrGMhSy0eGs5DtaiOeBTZwudVNoE7a0y7umC8XB7ZyAa_g-PnqkUpoltBfkKuA2KIn07Vv67BIdHKFvZ0qayKZxu_LPY67-8M9FDxuvOnwgEdxXWFhA',
    imageAlt: 'Digital tablet worksheets, educational PDF handouts, and organized study resources',
    primaryAction: {
      label: 'Access Resources',
      url: 'https://t.me/Englishforkids_Lk',
      icon: 'send'
    },
    glowColor: 'cyan'
  },
  {
    id: 'facebook-platform',
    category: 'Social & Web Portal',
    title: 'Facebook Platform',
    handle: 'EnglishforkidszLk',
    badge: 'Live Community & Portal',
    description: 'Social content deployment, digital flashcards, program announcements, and interactive community update posts.',
    image: '',
    imageAlt: 'Social learning platform and educational community banner',
    primaryAction: {
      label: 'Follow Platform',
      url: 'https://web.facebook.com/EnglishforkidszLk?_rdc=1&_rdr#',
      icon: 'thumb_up'
    },
    secondaryAction: {
      label: 'Explore English Class Web',
      url: 'https://deshanibandara.github.io/English-Class/',
      icon: 'language'
    },
    glowColor: 'violet'
  }
];

export const INITIAL_TEST_CASES: TestCase[] = [
  {
    id: 'tc-1',
    title: 'React 19 Client Component Tree Hydration',
    suite: 'Frontend React',
    status: 'passed',
    duration: '14ms',
    details: 'Verified strict DOM hydration with zero unhandled layout shifts.'
  },
  {
    id: 'tc-2',
    title: 'Express REST Endpoint Payload Boundary Validation',
    suite: 'Backend API',
    status: 'passed',
    duration: '22ms',
    details: 'Schema validation confirmed 200 OK on sanitized inquiries.'
  },
  {
    id: 'tc-3',
    title: 'Playwright E2E Navigation & Mobile Touch Target Audit',
    suite: 'SQA Automation',
    status: 'passed',
    duration: '38ms',
    details: 'Touch targets >= 44px on all viewport thresholds (360px - 1440px).'
  },
  {
    id: 'tc-4',
    title: 'Phonics IPA Phoneme Mapping & Audio Dispatch',
    suite: 'Phonics Engine',
    status: 'passed',
    duration: '11ms',
    details: 'Accurate 44-phoneme chart synthesis and sound symbol validation.'
  }
];

export const PHONICS_SAMPLE_WORDS = [
  { word: 'Cat', ipa: '/kæt/', phonetic: 'c - a - t', blend: 'Short /æ/ vowel', category: 'CVC Phonics' },
  { word: 'Ship', ipa: '/ʃɪp/', phonetic: 'sh - i - p', blend: 'Consonant Digraph /ʃ/', category: 'Digraphs' },
  { word: 'Brain', ipa: '/breɪn/', phonetic: 'b - r - ai - n', blend: 'Long /eɪ/ vowel team', category: 'Vowel Teams' },
  { word: 'Star', ipa: '/stɑːr/', phonetic: 's - t - ar', blend: 'R-controlled /ɑːr/', category: 'R-Controlled' }
];
