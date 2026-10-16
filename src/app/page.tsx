import { achievements, education, experience, profile, skills, summary, teaching, type Entry } from "@/data/content";
import styles from "./page.module.css";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const linkedinText = profile.linkedin.replace("https://www.", "").replace(/\/$/, "");
const githubText = profile.github.replace("https://", "");

function Item({ entry }: { entry: Entry }) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHead}>
        <h3 className={styles.role}>
          {entry.title}
          <span className={styles.org}>, {entry.organisation}</span>
        </h3>
        <p className={styles.when}>
          {entry.location} | {entry.period}
        </p>
      </div>
      {entry.context && <p className={styles.context}>{entry.context}</p>}
      <ul className={styles.list}>
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.heading}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main" className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.links}>
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download>
                Résumé (PDF)
              </a>
            )}
          </p>
        </header>

        <Section id="summary" title="Professional summary">
          <p className={styles.prose}>{summary.join(" ")}</p>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <Item key={e.organisation} entry={e} />
          ))}
        </Section>

        <Section id="teaching" title="Teaching & leadership">
          {teaching.map((e) => (
            <Item key={e.organisation} entry={e} />
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <article key={e.institution} className={styles.entry}>
              <div className={styles.entryHead}>
                <h3 className={styles.role}>
                  {e.institution}
                  <span className={styles.org}>, {e.location}</span>
                </h3>
                <p className={styles.when}>{e.period}</p>
              </div>
              <p className={styles.prose}>{e.qualification}</p>
              {e.note && <p className={styles.context}>{e.note}</p>}
            </article>
          ))}
        </Section>

        <Section id="achievements" title="Selected achievements">
          {achievements.map((a) => (
            <article key={a.title} className={styles.entry}>
              <div className={styles.entryHead}>
                <h3 className={styles.role}>{a.title}</h3>
                <p className={styles.when}>
                  {a.organisation && `${a.organisation} | `}
                  {a.period}
                </p>
              </div>
              <p className={styles.prose}>{a.body}</p>
            </article>
          ))}
        </Section>

        <Section id="skills" title="Technical skills, languages and certifications">
          <dl className={styles.skills}>
            {skills.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <dl className={styles.skills}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <ExternalLink href={profile.linkedin}>{linkedinText}</ExternalLink>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <ExternalLink href={profile.github}>{githubText}</ExternalLink>
              </dd>
            </div>
          </dl>
        </Section>
      </main>
    </>
  );
}
