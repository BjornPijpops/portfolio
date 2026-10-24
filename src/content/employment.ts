import type { RawEmployer } from './raw';

export const employers: RawEmployer[] = [
  {
    id: 'elia',
    name: 'Elia',
    industry: { en: 'Energy & Utilities', nl: 'Energie & Utilities' },
    consultancy: { label: 'Cerios', url: 'https://www.cerios.com/en' },
    roles: [
      {
        title: 'Quality Assurance Engineer',
        period: { start: '2025-05' },
        context: {
          en: 'Test Automation Engineer for two product teams working in Agile/Scrum via Azure DevOps: PHI (the public TraXes website, the digital access point for Elia Group energy services) and META (the technical core of the Consumer Centricity Platform, with 9 critical REST API components from authentication to document management).',
          nl: 'Test Automation Engineer voor twee productteams die in Agile/Scrum werken via Azure DevOps: PHI (de publieke website TraXes, het digitale toegangspunt voor alle energieservices binnen Elia Group) en META (de technische kern van het Consumer Centricity Platform, met 9 kritische REST API-componenten van authenticatie tot documentmanagement).',
        },
        responsibilities: {
          en: [
            'Verified and reviewed all new functionality (PBIs) for PHI and META through functional, integration and system tests.',
            'Performed release, regression and exploratory testing across multiple components.',
            'API-tested 9 REST API components based on Swagger/OpenAPI documentation.',
            'Built a complete automation suite for the 9 API components and the TraXes website with Robot Framework and Playwright.',
            'Set up CI/CD and continuous testing pipelines in Azure DevOps, with nightly regression pipelines and separate test repositories under Git.',
            'Ran performance tests with JMeter on API endpoints via Kong Gateway.',
            'Enforced and guarded the Definition of Ready and Definition of Done in both teams.',
            'Took part in refinement, sprint planning and retrospectives, aligning with developers, BAs and POs (3 Amigos).',
            'Acted as contact point for teams beyond PHI and META thanks to broad technical knowledge.',
            'Raised code quality through coding standards, spot checks, testing maturity checks and coaching fellow testers.',
          ],
          nl: [
            'Verifiëren, testen en beoordelen van alle nieuwe functionaliteiten (PBI’s) voor PHI en META via functionele, integratie- en systeemtesten.',
            'Uitvoeren van release-, regressie- en exploratory testing over meerdere componenten.',
            'API-testing van 9 REST API-componenten op basis van Swagger/OpenAPI-documentatie.',
            'Opzetten van een volledige testautomatiseringssuite voor de 9 API-componenten en de TraXes-website met Robot Framework en Playwright.',
            'Inrichten van CI/CD- en continuous testing-pipelines in Azure DevOps, met nightly regression pipelines en gescheiden testrepositories onder Git.',
            'Uitvoeren van performance testing met JMeter op API-endpoints via Kong Gateway.',
            'Afdwingen en bewaken van Definition of Ready en Definition of Done binnen beide teams.',
            'Deelnemen aan refinement, sprint planning en retrospectives, en afstemmen met developers, BA’s en PO’s (3 Amigo’s).',
            'Fungeren als aanspreekpunt voor teams buiten PHI en META dankzij brede technische kennis.',
            'Verbeteren van de codekwaliteit via coding standards, spot checks, testing maturity checks en het coachen van collega-testers.',
          ],
        },
        results: {
          en: [
            'Set up multiple Azure DevOps test repositories, each with its own nightly regression pipeline.',
            'Standardised automation on Robot Framework and later Playwright, significantly increasing test coverage and stability.',
            'Identified performance bottlenecks with JMeter, leading to optimisations in the APIs and Kong configuration.',
            'More predictable, higher-quality deliveries thanks to structural DoR/DoD guarding.',
            'Became a central knowledge holder and connection point between teams.',
            'Measurably raised code quality at Elia through standards, coaching and quality checks.',
          ],
          nl: [
            'Meerdere Azure DevOps-testrepositories opgezet, elk met een eigen nightly regression pipeline.',
            'Automatisering gestandaardiseerd met Robot Framework en later Playwright, wat de testdekking en stabiliteit aanzienlijk verhoogde.',
            'Performance bottlenecks geïdentificeerd met JMeter, wat leidde tot optimalisaties in de API’s en de Kong-configuratie.',
            'Voorspelbaardere en kwalitatievere opleveringen dankzij structurele bewaking van DoR en DoD.',
            'Groeide uit tot centrale kennisdrager en verbindingspunt tussen teams.',
            'Verhoogde aantoonbaar de codekwaliteit binnen Elia via standaarden, coaching en kwaliteitscontroles.',
          ],
        },
        technologies: [
          'Robot Framework',
          'Playwright',
          'Azure DevOps',
          'JMeter',
          'Kong Gateway',
          'Swagger/OpenAPI',
          'Git',
        ],
      },
    ],
  },
  {
    id: 'johnson-and-johnson',
    name: 'Johnson & Johnson',
    industry: { en: 'Pharma & Life Sciences', nl: 'Farma & Life Sciences' },
    consultancy: { label: 'Capgemini', url: 'https://www.capgemini.com/be-en/' },
    roles: [
      {
        title: 'Test Automation Engineer',
        period: { start: '2024-03', end: '2025-05' },
        context: {
          en: 'Global centralisation of laboratory data through the eLIMS application, which supports quality control orders, stability studies and environmental monitoring. Rolled out to more than 25 sites worldwide.',
          nl: 'Wereldwijde centralisatie van laboratoriumgegevens via de eLIMS-applicatie, die kwaliteitscontroleorders, stabiliteitsstudies en milieumonitoring ondersteunt. Succesvol uitgerold op meer dan 25 locaties wereldwijd.',
        },
        responsibilities: {
          en: [
            'Analysed code and designed and implemented improvements based on agreed guidelines.',
            'Maintained and extended the Robot Framework (Python) and Selenium test automation framework.',
            'Validated requirements and guaranteed system stability with functional and regression tests on every release.',
            'Migrated test data from Excel to a database and wrote SQL scripts to simplify releases.',
            'Wrote technical documentation for all tools and processes.',
            'Applied and guarded BDD, Gherkin and pull request review standards.',
          ],
          nl: [
            'Code analyseren en verbeteringen ontwerpen en implementeren op basis van gestelde richtlijnen.',
            'Onderhouden en uitbreiden van het Test Automation Framework met Robot Framework (Python) en Selenium.',
            'Valideren van requirements en waarborgen van de systeemstabiliteit via functionele en regressietesten bij elke release.',
            'Migreren van testdata van Excel naar de database en schrijven van SQL-scripts om releaseprocessen te vereenvoudigen.',
            'Schrijven van technische documentatie voor alle tools en processen.',
            'Toepassen en bewaken van BDD-, Gherkin- en pull request review-standaarden.',
          ],
        },
        results: {
          en: [
            'eLIMS was rolled out successfully worldwide.',
            'More reliable and efficient test and release processes.',
            'Documentation and guidelines let new team members onboard faster.',
          ],
          nl: [
            'eLIMS werd wereldwijd succesvol uitgerold.',
            'Betrouwbaardere en efficiëntere test- en releaseprocessen.',
            'Documentatie en richtlijnen lieten nieuwe teamleden sneller aansluiten.',
          ],
        },
        technologies: ['Robot Framework', 'Python', 'Selenium', 'SQL', 'Gherkin', 'Git'],
      },
      {
        title: 'Test Automation Engineer',
        period: { start: '2021-10', end: '2024-03' },
        context: {
          en: 'Data science project testing a web application that lets end users configure country-specific settings and rules, a key step before AI/ML pipelines could be triggered via Argo.',
          nl: 'Data science-project waarin een webapplicatie werd getest waarmee eindgebruikers landspecifieke configuraties en regels instellen, een cruciale stap voordat AI/ML-pipelines via Argo konden worden geactiveerd.',
        },
        responsibilities: {
          en: [
            'Designed a scalable, low-maintenance test environment with SauceLabs for cross-browser testing.',
            'Performed functional and regression testing against the requirements.',
            'Ran basic performance tests with Lighthouse.',
            'Maintained and extended Robot Framework and Selenium automation.',
            'Collaborated with UI/UX designers and developers in an Agile environment.',
          ],
          nl: [
            'Ontwerpen van een schaalbare testomgeving met weinig onderhoud, met SauceLabs voor cross-browser testing.',
            'Uitvoeren van functionele en regressietesten tegen de requirements.',
            'Uitvoeren van basis performance tests met Lighthouse.',
            'Onderhouden en uitbreiden van de Robot Framework- en Selenium-automatisering.',
            'Samenwerken met UI/UX-designers en developers in een Agile-omgeving.',
          ],
        },
        results: {
          en: [
            'Delivered the test environment with direct multi-browser support and Lighthouse integration.',
            'Created a permanent communication line between testers, developers, data analysts and designers.',
          ],
          nl: [
            'De testomgeving opgeleverd met directe multi-browserondersteuning en Lighthouse-integratie.',
            'Een permanente communicatielijn gecreëerd tussen testers, developers, data-analisten en designers.',
          ],
        },
        technologies: ['Robot Framework', 'Selenium', 'SauceLabs', 'Lighthouse'],
      },
    ],
  },
  {
    id: 'liberty-global',
    name: 'Liberty Global',
    industry: { en: 'Telecom & Media', nl: 'Telecom & Media' },
    consultancy: { label: 'Devoteam', url: 'https://www.devoteam.com/be/' },
    roles: [
      {
        title: 'Test Automation Engineer',
        period: { start: '2020-05', end: '2021-10' },
        context: {
          en: 'Developing and testing next-generation media box applications for a broadband, video and mobile leader serving over 85 million subscribers in Europe and the UK.',
          nl: 'Ontwikkelen en testen van next-gen mediaboxapplicaties voor een wereldleider in breedband, video en mobiele communicatie met meer dan 85 miljoen abonnees in Europa en het Verenigd Koninkrijk.',
        },
        responsibilities: {
          en: [
            'Automated functional and technical tests with JavaScript, Node.js and Mocha.js.',
            'Implemented image comparison checks (colours, positions, layout) where direct DOM access was impossible.',
            'Scripted and analysed memory usage on Raspberry Pi (Linux, command line) to find bottlenecks.',
            'Led and coached a team of three testers.',
          ],
          nl: [
            'Automatiseren van functionele en technische tests met JavaScript, Node.js en Mocha.js.',
            'Implementeren van image comparison-controles (kleuren, locaties, layout) waar directe DOM-toegang niet mogelijk was.',
            'Scripten en analyseren van geheugengebruik op Raspberry Pi (Linux, command line) om bottlenecks te vinden.',
            'Aansturen en coachen van een team van drie testers.',
          ],
        },
        results: {
          en: [
            'Contributed to the launch of two new media boxes in nine countries.',
            'Memory analysis and optimisation noticeably improved application performance.',
            'Designed an architecture that supported three additional countries, keeping the test approach scalable.',
          ],
          nl: [
            'Droeg bij aan de lancering van twee nieuwe mediaboxen in negen landen.',
            'Geheugenanalyse en optimalisatie verbeterden de applicatieprestaties merkbaar.',
            'Ontwierp een architectuur waarmee drie extra landen ondersteund konden worden, voor een schaalbare testaanpak.',
          ],
        },
        technologies: ['JavaScript', 'Node.js', 'Mocha.js', 'Linux', 'Raspberry Pi'],
      },
    ],
  },
  {
    id: '12go-systems',
    name: '12GO Systems',
    industry: { en: 'Transport & Logistics', nl: 'Transport & Logistiek' },
    consultancy: { label: 'Nexios IT', url: 'https://nexiosit.com/' },
    roles: [
      {
        title: 'Fullstack Developer',
        period: { start: '2019-08', end: '2020-05' },
        context: {
          en: 'Built tools for a transport management software vendor, integrating seamlessly with TAS-tms.',
          nl: 'Ontwikkelde tools voor een leverancier van transportmanagementsoftware, naadloos geïntegreerd met TAS-tms.',
        },
        responsibilities: {
          en: [
            'Finished and improved a PDF reader/scanner in C#/.NET.',
            'Developed a QR code generator in C#/.NET, compatible with the PDF reader.',
            'Designed and built the Planner front end (approval management) with Angular, Angular Material and TypeScript, integrated with a C# backend through Azure DevOps CI/CD.',
          ],
          nl: [
            'Afwerken en verbeteren van een PDF-reader/scanner in C#/.NET.',
            'Ontwikkelen van een QR-codegenerator in C#/.NET, compatibel met de PDF-reader.',
            'Ontwerpen en bouwen van de Planner-frontend (goedkeuringsmanagement) met Angular, Angular Material en TypeScript, geïntegreerd met een C#-backend via Azure DevOps CI/CD.',
          ],
        },
        results: {
          en: [
            'A considerably simpler and more efficient process for the customer.',
            'Higher reliability, saved time and cost, and a noticeably better user experience.',
          ],
          nl: [
            'Een aanzienlijk eenvoudiger en efficiënter proces voor de klant.',
            'Hogere betrouwbaarheid, tijd- en kostenbesparing en een merkbaar betere gebruikerservaring.',
          ],
        },
        technologies: ['C#', '.NET', 'Angular', 'TypeScript', 'Azure DevOps'],
      },
    ],
  },
];
