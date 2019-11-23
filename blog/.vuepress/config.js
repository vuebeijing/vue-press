module.exports = {
  title: 'Vue Beijing Workshops',
  description: 'This is a blog example built by VuePress',
  theme: 'Layout',//'@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  // plugins: ['@dovyp/vuepress-plugin-clipboard-copy', true],
  themeConfig: {
    alias () {
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch
          ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
          : path.resolve(__dirname, 'noopModule.js')
      }
    },

    plugins: [
      // ['@vuepress/active-header-links', options.activeHeaderLinks],
      '@vuepress/search',
      '@vuepress/plugin-nprogress',
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '警告'
        }
      }],
      // ['smooth-scroll', enableSmoothScroll]
    ],
  //   /**
  //    * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
  //    */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
  //   /**
  //    * Ref: https://vuepress-theme-blog.ulivz.com/#nav
  //    */
    nav: [
      {
        text: 'Posts',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
  //   /**
  //    * Ref: https://vuepress-theme-blog.ulivz.com/#footer
  //    */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
}
