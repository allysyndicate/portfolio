// Shared social-link data (used by both the server-rendered Contact section
// and the client-side Hero), split out so the client bundle doesn't pull in
// the whole Sections module for two SVG icons.
export const socials = [
  {
    label: "Twitter / X",
    handle: "@0xallyzach",
    href: "https://twitter.com/0xallyzach",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    ),
  },
  {
    label: "LinkedIn",
    handle: "alexandra-zach",
    href: "https://www.linkedin.com/in/alexandra-zach-32714474",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    ),
  },
] as const;

// Telegram lives outside `socials` so surfaces can opt in (Hero and Contact
// show it; other uses of `socials` stay Twitter + LinkedIn).
export const telegram = {
  label: "Telegram",
  handle: "allyzach1",
  href: "https://t.me/allyzach1",
  icon: (
    <path d="M9.993 15.675 9.596 21c.568 0 .814-.244 1.109-.537l2.664-2.545 5.522 4.044c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714L1.696 10.497C.243 11.061.265 11.871 1.45 12.239l5.443 1.693L19.53 6.027c.595-.394 1.136-.176.69.218L9.993 15.675Z" />
  ),
} as const;

export const email = {
  label: "Email",
  handle: "allyzach28@gmail.com",
  href: "mailto:allyzach28@gmail.com",
  icon: (
    <path d="M12 12.713 1.015 5.4A2 2 0 0 1 3 4h18a2 2 0 0 1 1.985 1.4L12 12.713Zm0 2.574L1 7.955V18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7.955l-11 7.332Z" />
  ),
} as const;
