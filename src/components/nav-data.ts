export const sections = [
  { id: "about", label: "About" },
  { id: "pantera", label: "Experience", match: ["pantera", "messari", "structural"] },
  { id: "side-projects", label: "Side Projects" },
  { id: "education", label: "Education" },
  { id: "resume", label: "The Full Record" },
  { id: "contact", label: "Contact" },
] as const;

// Every DOM section id the active-section observer should watch, including the
// chapter sections that collapse under the single "Experience" nav entry.
export const observedSectionIds = sections.flatMap((s) =>
  "match" in s ? [...s.match] : [s.id]
);

export type SectionId = (typeof sections)[number]["id"];
