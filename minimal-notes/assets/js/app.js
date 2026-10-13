/* ==========================================================================
   app.js: content as DATA, rendering as CODE.
   Edit only the `site` object to make this site yours.
   ========================================================================== */

const site = {
  bios: {
    default: {
      paragraphs: [
        "I’m a developer and writer. I build web tools and write about what I learn, mostly about making software easier to understand."
      ]
    },
    long: {
      paragraphs: [
        "I’m an aspiring software developer, writer, and community builder. I enjoy turning ideas into small, useful tools and explaining what I learn along the way. My goal is to keep growing into a thoughtful, dependable developer.",
        "I’m learning computer languages such as HTML, CSS, and JavaScript by building projects and experimenting with how each part works. I’m also interested in learning spoken languages and exploring the cultures behind them; both kinds of learning reward curiosity, practice, and patience.",
        "Looking ahead, I hope to strengthen my skills in software design, accessibility, testing, databases, and APIs, and learn how to build secure, reliable applications. I want to keep learning new tools and work with others to make technology more useful and welcoming.",
        "Beyond the screen, one of my aspirations is to open a real-life restaurant. I’d love to bring together food, hospitality, and community, and perhaps use thoughtful technology to support the day-to-day experience. For now, I’m exploring the idea while building the skills to make it possible."
      ],
      image: {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "Laptop displaying code on a desk",
        caption: "A coding workspace (stock image via Unsplash)."
      }
    }
  },
  notes: [
    { title: "How I am learning to learn", href: "notes/how-i-learn-new-tools.html" },
    { title: "Writing renaissance" },
    { title: "Working in public" },
    { title: "On Artifical Intelligence" }
  ],
  blogs: [
    { title: "Are there useful vibe-coded apps?", date: "June 2026", href: "blogs/useful-vibe-coded-apps.html" },
    { title: "What we get wrong about tech", date: "March 2026" },
    { title: "A Git guide to my future projects", date: "November 2025" },
    { title: "Soy Sauce and Rice", date: "August 2025" }
  ]
};

/* Helper: create an <li><a>…</a></li>. textContent (not innerHTML) keeps
   text from ever being parsed as HTML, which prevents XSS. */
function link(item, withDate) {
  const li = document.createElement("li");
  const entry = document.createElement(item.href ? "a" : "span");
  if (item.href) entry.href = item.href;
  else entry.className = "entry";
  const t = document.createElement("span");
  t.textContent = item.title;
  entry.append(t);
  if (withDate) {
    const d = document.createElement("span");
    d.className = "date";
    d.textContent = item.date;
    entry.append(d);
  }
  li.append(entry);
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
  const content = site.bios[mode];
  bio.replaceChildren();
  content.paragraphs.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    bio.append(paragraph);
  });
  if (content.image) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.className = "bio-photo";
    image.src = content.image.src;
    image.alt = content.image.alt;
    image.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = content.image.caption;
    figure.append(image, caption);
    bio.append(figure);
  }
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
