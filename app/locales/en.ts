import { Kopo, SmartVote } from './en/case-studies';
import { Homepage } from './en/homepage';
import { Menu } from './en/menu';
import { Resume } from './en/resume';

export default {
  Menu,
  Homepage,
  Resume,
  CaseStudies: {
    Kopo,
    SmartVote,
  },
} as const;
