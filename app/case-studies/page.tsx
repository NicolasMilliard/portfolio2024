// Containers
import { CaseStudies } from "@app/containers/Home";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies | Nicolas Milliard",
  description: "My latest case studies.",
};

const CaseStudiesPage = () => {
  return <CaseStudies />;
};

export default CaseStudiesPage;
