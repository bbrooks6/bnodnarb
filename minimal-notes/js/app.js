/* ==========================================================================
   app.js: content as DATA, rendering as CODE.
   Edit only the `site` object to make this site yours.
   ========================================================================== */

const site = {
  bios: {
    default: "I’m a developer and writer. I build web tools and write about what I learn, mostly about making software easier to understand.",
    long: "I’m a developer and writer. I’ve spent years building web applications and the last few teaching others how they work. I care about clear writing, small tools, and software that respects the people using it. Outside of work I read, cook, and collect records. Replace this paragraph with your own story."
  },
  notes: [
    { title: "How I learn new tools",  href: "#" },
    { title: "Writing clear code",     href: "#" },
    { title: "Working in public",      href: "#" },
    { title: "Notes on testing",       href: "#" }
  ],
  blogs: [
    { title: "Building my first full-stack app", date: "June 2026",     href: "#" },
    { title: "What I got wrong about CSS",       date: "March 2026",    href: "#" },
    { title: "A small guide to Git branches",    date: "November 2025", href: "#" },
    { title: "Why I still write plain HTML",     date: "August 2025",   href: "#" }
  ]
};

/* Helper: create an <li><a>…</a></li>. textContent (not innerHTML) keeps
   text from ever being parsed as HTML, which prevents XSS. */
function link(item, withDate) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.href;
  const t = document.createElement("span");
  t.textContent = item.title;
  a.append(t);
  if (withDate) {
    const d = document.createElement("span");
    d.className = "date";
    d.textContent = item.date;
    a.append(d);
  }
  li.append(a);
  return li;
}

/* Render the two lists */
site.notes.forEach(n => document.getElementById("notes").append(link(n, false)));
site.blogs.forEach(b => document.getElementById("blogs").append(link(b, true)));

/* BEHAVIOR: the Default/Long switch.
   One function sets the text AND updates aria-pressed on both buttons.
   CSS reads aria-pressed to highlight the active one. */
const bio = document.getElementById("bio");
const buttons = document.querySelectorAll(".switch button");

function setBio(mode) {
  bio.textContent = site.bios[mode];
  buttons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.mode === mode)));
}
buttons.forEach(b => b.addEventListener("click", () => setBio(b.dataset.mode)));
setBio("default");   // initial state on page load

/* --------------------------------------------------------------------------
   PORTING TO NEXT.JS (how the original-style stack would do it):
   - site.bios        -> a client component using useState("default")
   - site.blogs       -> .mdx files with frontmatter, read at build time
   - each blog link   -> app/[slug]/page.tsx + generateStaticParams()
   - <meta og:image>  -> app/opengraph-image.tsx (next/og ImageResponse)
   - deploy           -> push to GitHub, import into Vercel
   -------------------------------------------------------------------------- */
