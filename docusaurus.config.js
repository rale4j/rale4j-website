// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rale4J',
  tagline: 'Rate Limiting Enhancement 4 Java Devs',
  favicon: 'img/favicon.ico',

  url: 'https://rale4j.com',
  baseUrl: '/',

  organizationName: 'rale4j',
  projectName: 'rale4j-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: 
  ({
    image: 'img/social-card.jpg',
    navbar: {
      logo: {
        alt: 'Rale4J Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://central.sonatype.com/artifact/com.rale4j/rale4j-core',
          position: 'right',
          className: 'custom-navbar-img-link',
          html: `<a href="https://central.sonatype.com/artifact/com.rale4j/rale4j-core" target='_blank'>
       <img src="https://img.shields.io/maven-central/v/com.rale4j/rale4j-core.svg" alt='Maven central Rale4J Version'/>
       </a>`,
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Rale4J Logo',
        src: 'img/logo.svg',
        href: 'https://rale4j.com',
        width: 80,
        height: 40,
      },
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Tutorial', to: '/docs/intro' },
            { label: 'Java Doc', href: 'https://docs.rale4j.com/javadoc' },
          ],
        },
        {
          title: 'Featured',
          items: [
            { label: 'Maven Central', href: 'https://central.sonatype.com/namespace/com.rale4j' },
            { label: 'Slack', href: 'https://join.slack.com/t/rale4j/shared_invite/zt-318wq5hk1-SlDjF5LBLGMI6AbnSXypEg' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/rale4j' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rale4J`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
