import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img
      src="https://beta.bloxgrow.best/static/logo.png"
      alt="Blox-Grow Logo"
      style={{ height: 32, marginRight: 8 }}
      />
      <span>Blox-Grow Knowledge Base</span>
    </span>
  ),
  chat: {
    link: 'https://discord.bloxgrow.best/'
  },
  feedback: {
    content: null
  },
  editLink: {
    content: null
  },
  footer: {
    content: 'Blox-Grow © All rights reserved.'
  },
};

export default config;
