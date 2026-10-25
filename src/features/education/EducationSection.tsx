import { useMemo } from 'react';
import { SegmentedControl } from '../../components/SegmentedControl';
import { useContent } from '../../content/ContentContext';
import { groupByYear } from '../../domain';
import { useStoredState } from '../../hooks/useStoredState';
import { useLocale } from '../../i18n/LocaleContext';
import { EducationCompact } from './EducationCompact';
import { EducationDetailed } from './EducationDetailed';

type EducationView = 'detailed' | 'compact';

const isEducationView = (value: string): value is EducationView =>
  value === 'detailed' || value === 'compact';

export function EducationSection() {
  const items = useContent().getEducation();
  const groups = useMemo(() => groupByYear(items), [items]);
  const { views } = useLocale().messages.education;
  const [view, setView] = useStoredState<EducationView>(
    'educationView',
    'detailed',
    isEducationView,
  );

  return (
    <>
      <div className="view-toggle">
        <SegmentedControl
          groupLabel={views.label}
          value={view}
          onChange={setView}
          options={[
            { value: 'detailed', label: views.detailed },
            { value: 'compact', label: views.compact },
          ]}
        />
      </div>
      {view === 'detailed' ? (
        <EducationDetailed groups={groups} />
      ) : (
        <EducationCompact groups={groups} />
      )}
    </>
  );
}
