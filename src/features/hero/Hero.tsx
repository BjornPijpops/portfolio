import { Link } from 'react-router-dom';
import { imageUrl } from '../../content/assets';
import { useContent } from '../../content/ContentContext';
import { formatDuration, totalExperienceMonths } from '../../domain';
import { useLocale } from '../../i18n/LocaleContext';

export function Hero() {
  const { getProfile, getEmployers } = useContent();
  const { locale, messages } = useLocale();
  const profile = getProfile();
  const duration = formatDuration(totalExperienceMonths(getEmployers()), locale);

  return (
    <section className="hero" data-has-photo={Boolean(profile.photo)} aria-label={profile.name}>
      {profile.photo && (
        <img
          className="hero__photo"
          src={imageUrl(profile.photo)}
          alt={profile.name}
          width="300"
          height="400"
        />
      )}
      <div className="hero__content">
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__meta">{messages.hero.experienceLine(duration)}</p>
        {profile.summary.map((paragraph) => (
          <p key={paragraph} className="hero__summary">
            {paragraph}
          </p>
        ))}
        <div className="hero__actions">
          <Link to="/experience" className="button button--primary">
            {messages.hero.seeJourney}
          </Link>
          <Link to="/projects" className="button">
            {messages.hero.exploreProjects}
          </Link>
          <Link to="/contact" className="button">
            {messages.hero.getInTouch}
          </Link>
        </div>
      </div>
    </section>
  );
}
