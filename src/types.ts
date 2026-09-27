export type NavTab = 'home' | 'about' | 'tech' | 'ecosystem' | 'contact';

export interface AcademicItem {
  id: string;
  period: string;
  badge: string;
  institution: string;
  degree: string;
  description: string;
  tags: string[];
  glowColor: 'primary' | 'secondary' | 'tertiary';
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  glowColor: 'primary' | 'secondary' | 'tertiary' | 'cyan';
  skills: string[];
}

export interface EcosystemItem {
  id: string;
  category: string;
  title: string;
  handle: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction: {
    label: string;
    url: string;
    icon: string;
  };
  secondaryAction?: {
    label: string;
    url: string;
    icon: string;
  };
  glowColor: 'red' | 'cyan' | 'violet' | 'emerald';
}

export interface CodeSnippet {
  fileName: string;
  language: string;
  code: string;
}

export interface TestCase {
  id: string;
  title: string;
  suite: 'Frontend React' | 'Backend API' | 'SQA Automation' | 'Phonics Engine';
  status: 'passed' | 'running' | 'idle';
  duration: string;
  details: string;
}
