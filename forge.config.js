module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [{
    name: '@electron-forge/publisher-github',
    platforms: ['windows', 'linux'],
    config: {
      repository: {
        owner: 'me',
        name: 'markit'
      }
    },
    prerelease: true
  }]
};
