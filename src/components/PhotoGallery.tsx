import building from "@/assets/building.jpg";
import openOffice from "@/assets/open-office.png";
import agent from "@/assets/agent.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import developers from "@/assets/developers.jpg";
import training from "@/assets/training.png";
import officeTeam from "@/assets/office-team.png";
import heroEuro from "@/assets/hero-euro.jpg";
import clientCall from "@/assets/client-call.jpg";
import leaders from "@/assets/leaders.jpg";
import handshake from "@/assets/handshake.jpg";
import whiteboard from "@/assets/whiteboard.jpg";
import coffeeBreak from "@/assets/coffee-break.jpg";
import coaching from "@/assets/coaching.jpg";
import newHires from "@/assets/new-hires.jpg";
import interview from "@/assets/interview.jpg";
import terrace from "@/assets/terrace.jpg";
import backOffice from "@/assets/back-office.jpg";
import creativeTeam from "@/assets/creative-team.jpg";
import supportAgent from "@/assets/support-agent.jpg";
import serverRoom from "@/assets/server-room.jpg";
import reception from "@/assets/reception.png";
import projectWalk from "@/assets/project-walk.jpg";
import insightsReader from "@/assets/insights-reader.jpg";
import helpDesk from "@/assets/help-desk.jpg";
import antsirabe from "@/assets/antsirabe.jpg";
import industryTeam from "@/assets/industry-team.jpg";
import dedicatedTeam from "@/assets/dedicated-team.jpg";

export const photos = {
  building: { src: building, w: 1536, h: 1024, alt: "Modern office building in Antsirabe, Madagascar", label: "Our building" },
  openOffice: { src: openOffice, w: 1536, h: 1024, alt: "Bright open-plan office with professionals at work", label: "Open workspace" },
  agent: { src: agent, w: 1024, h: 1280, alt: "Smiling customer service agent wearing a headset", label: "Customer care" },
  teamMeeting: { src: teamMeeting, w: 1536, h: 1024, alt: "Team collaborating in a meeting room", label: "Team spirit" },
  developers: { src: developers, w: 1024, h: 1280, alt: "Two developers working together at dual monitors", label: "IT & development" },
  training: { src: training, w: 1536, h: 1024, alt: "Trainer presenting to young professionals", label: "Training" },
  officeTeam: { src: officeTeam, w: 1024, h: 1280, alt: "Professionals at modern workstations", label: "Daily operations" },
  heroEuro: { src: heroEuro, w: 1024, h: 1280, alt: "European manager and Malagasy team lead reviewing work together", label: "Partnership" },
  clientCall: { src: clientCall, w: 1536, h: 1024, alt: "Team member on a video call with European clients", label: "Client calls" },
  leaders: { src: leaders, w: 1024, h: 1280, alt: "European and Malagasy leadership team", label: "Leadership" },
  handshake: { src: handshake, w: 1536, h: 1024, alt: "European visitors greeted by Malagasy managers", label: "Client visits" },
  whiteboard: { src: whiteboard, w: 1536, h: 1024, alt: "Mixed team brainstorming at a whiteboard", label: "Collaboration" },
  coffeeBreak: { src: coffeeBreak, w: 1536, h: 1024, alt: "Colleagues sharing a coffee break", label: "Team culture" },
  coaching: { src: coaching, w: 1536, h: 1024, alt: "Quality manager coaching a customer service agent", label: "Coaching" },
  newHires: { src: newHires, w: 1536, h: 1024, alt: "New hires celebrating together", label: "New talent" },
  interview: { src: interview, w: 1536, h: 1024, alt: "Candidate in a job interview", label: "Recruitment" },
  terrace: { src: terrace, w: 1536, h: 1024, alt: "Professional working on a terrace overlooking Antsirabe", label: "Work in Antsirabe" },
  backOffice: { src: backOffice, w: 1536, h: 1024, alt: "Back-office team reviewing data with a supervisor", label: "Back office" },
  creativeTeam: { src: creativeTeam, w: 1536, h: 1024, alt: "Creative team reviewing a design", label: "Digital & creative" },
  supportAgent: { src: supportAgent, w: 1536, h: 1024, alt: "Smiling support agent with headset", label: "Customer support" },
  serverRoom: { src: serverRoom, w: 1536, h: 1024, alt: "Technician checking network equipment", label: "Infrastructure" },
  reception: { src: reception, w: 1536, h: 1024, alt: "Visitor welcomed at the office reception", label: "Reception" },
  projectWalk: { src: projectWalk, w: 1536, h: 1024, alt: "Project manager and team lead in discussion", label: "Project follow-up" },
  insightsReader: { src: insightsReader, w: 1536, h: 1024, alt: "Businesswoman reading on a tablet", label: "Insights" },
  helpDesk: { src: helpDesk, w: 1536, h: 1024, alt: "Help desk agent answering customers", label: "Help desk" },
  antsirabe: { src: antsirabe, w: 1536, h: 1024, alt: "Aerial view of Antsirabe, Madagascar", label: "Antsirabe" },
  industryTeam: { src: industryTeam, w: 1536, h: 1024, alt: "Industry team handling logistics operations", label: "Industry expertise" },
  dedicatedTeam: { src: dedicatedTeam, w: 1536, h: 1024, alt: "Dedicated team at their workstations", label: "Dedicated teams" },
} as const;

type Key = keyof typeof photos;

function Tile({ k, className = "" }: { k: Key; className?: string }) {
  const p = photos[k];
  return (
    <figure className={`group relative overflow-hidden rounded-xl border border-border shadow-elevate ${className}`}>
      <img
        src={p.src}
        width={p.w}
        height={p.h}
        alt={p.alt}
        loading="lazy"
        className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-3 left-3 border-l-4 border-accent bg-navy/85 px-3 py-1.5 text-[12px] font-semibold text-navy-foreground backdrop-blur">
        {p.label}
      </figcaption>
    </figure>
  );
}

/** Bento-style photo mosaic: building, offices and people. */
export function PhotoGallery({
  title = "Life at Optiline Mada",
  subtitle = "Real workspaces, real people — a modern environment where teams grow.",
  keys = ["building", "agent", "openOffice", "teamMeeting", "developers", "training"] as Key[],
}: {
  title?: string;
  subtitle?: string;
  keys?: Key[];
}) {
  const [a, b, c, d, e, f] = keys;
  return (
    <section className="py-16 md:py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Gallery</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4">
        {a && <Tile k={a} className="col-span-2 row-span-2" />}
        {b && <Tile k={b} className="row-span-2" />}
        {c && <Tile k={c} />}
        {d && <Tile k={d} />}
        {e && <Tile k={e} className="col-span-2 row-span-2" />}
        {f && <Tile k={f} className="col-span-2 row-span-2" />}
      </div>
    </section>
  );
}

/** Wide single photo banner. */
export function PhotoBanner({ k, caption }: { k: Key; caption?: string }) {
  const p = photos[k];
  return (
    <figure className="relative my-12 overflow-hidden rounded-xl border border-border shadow-elevate">
      <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" className="aspect-[21/9] w-full object-cover object-[center_25%]" />
      {caption && (
        <figcaption className="absolute bottom-4 left-4 border-l-4 border-coral bg-navy px-5 py-3 text-[14px] font-bold text-navy-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Two photos side by side — portrait-friendly, faces kept in frame. */
export type PhotoKey = Key;

export function PhotoDuo({ a, b }: { a: Key; b: Key }) {
  return (
    <div className="my-12 grid gap-4 md:grid-cols-2">
      <Tile k={a} className="aspect-[4/3]" />
      <Tile k={b} className="aspect-[4/3]" />
    </div>
  );
}
