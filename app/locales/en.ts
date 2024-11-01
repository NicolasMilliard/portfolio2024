import { Kopo } from './en/case-studies/kopo';
import { Homepage } from './en/homepage';
import { Menu } from './en/menu';
import { Resume } from './en/resume';

export default {
  Menu,
  Homepage,
  Resume,
  CaseStudies: {
    Kopo,
  },
} as const;
