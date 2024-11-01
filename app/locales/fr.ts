import { Kopo } from './fr/case-studies/kopo';
import { Homepage } from './fr/homepage';
import { Menu } from './fr/menu';
import { Resume } from './fr/resume';

export default {
  Menu,
  Homepage,
  Resume,
  CaseStudies: {
    Kopo,
  },
} as const;
