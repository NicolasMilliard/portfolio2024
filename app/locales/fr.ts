import { Kopo, SmartVote } from './fr/case-studies';
import { Homepage } from './fr/homepage';
import { Menu } from './fr/menu';
import { Resume } from './fr/resume';

export default {
  Menu,
  Homepage,
  Resume,
  CaseStudies: {
    Kopo,
    SmartVote,
  },
} as const;
