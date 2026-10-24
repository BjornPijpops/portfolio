import { HashRouter, Route, Routes } from 'react-router-dom';
import { ContentProvider } from './content/ContentContext';
import { LocaleProvider } from './i18n/LocaleContext';
import { SiteLayout } from './layout/SiteLayout';
import { ContactPage } from './pages/ContactPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';

// HashRouter keeps deep links working on static hosts (e.g. GitHub Pages) without server rewrites.
export function App() {
  return (
    <LocaleProvider>
      <ContentProvider>
        <HashRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<HomePage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="education" element={<EducationPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ContentProvider>
    </LocaleProvider>
  );
}
