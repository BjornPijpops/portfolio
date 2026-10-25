import { Photo } from '../../components/Photo';
import { useContent } from '../../content/ContentContext';
import { useLocale } from '../../i18n/LocaleContext';

/** A small, clearly separate personal note after the career content. */
export function InterestsSection() {
  const interests = useContent().getInterests();
  const { title, intro } = useLocale().messages.interests;

  return (
    <section className="interests" aria-labelledby="interests-title">
      <h2 id="interests-title" className="interests__title">
        {title}
      </h2>
      <p className="interests__intro">{intro}</p>
      <div className="interests__grid">
        {interests.map((interest) => (
          <article key={interest.id} className="interest">
            <Photo photo={interest.photo} className="interest__photo" />
            <div className="interest__body">
              <h3 className="interest__title">{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
