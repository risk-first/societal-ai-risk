// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Societal AI Risk',
  tagline: 'A Risk Framework for Societal-Level AI Risks',
  favicon: 'img/favicon.ico',

  url: 'https://societal-ai-risk.riskfirst.org',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'risk-first',
  projectName: 'societal-ai-risk',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/risk-first/societal-ai-risk/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'Risk-First Software Development Second Edition - Available Now! <a target="_blank" rel="noopener noreferrer" href="https://riskfirst.org/Risk-First-Second-Edition">Click here for details</a>',
        backgroundColor: '#166534',
        textColor: '#ffffff',
        isCloseable: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'Societal AI Risk',
        logo: {
          alt: 'Risk First Logo',
          src: 'img/R1_logo_round_white.svg',
          srcDark: 'img/R1_logo_round_black.svg',
        },
        items: [
          { to: '/risks', label: 'Risks', position: 'left' },
          { to: '/practices', label: 'Practices', position: 'left' },
          {
            href: 'https://riskfirst.org',
            label: 'Risk-First',
            position: 'right',
          },
          {
            href: 'https://github.com/risk-first/societal-ai-risk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Framework',
            items: [
              { label: 'Risks', to: '/risks' },
              { label: 'Practices', to: '/practices' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Risk-First', href: 'https://riskfirst.org' },
              { label: 'GitHub', href: 'https://github.com/risk-first/societal-ai-risk' },
            ],
          },
          {
            title: 'Related Frameworks',
            items: [
              { label: 'MIT AI Risk Database', href: 'https://airisk.mit.edu' },
              { label: 'NIST AI RMF', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
              { label: 'Agentic SDLC', href: 'https://agentic-software-development.riskfirst.org' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Risk-First. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    './src/plugins/gemara-metadata',
    './src/plugins/category-listing',
  ],
};

export default config;
