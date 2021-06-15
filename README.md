# Datadog RUM / Storybook Add-on

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

A storybook add-on for using Datadog instrumentation to collect data about how your visitors are using your Storybook component documentation. Use this to find out which documentation pages are popular, and which pages have bugs.
## Demo

- _Insert link to a public Datadog Storybook using this addon_
- _Insert link to GIF showing storybook data inside of a Datadog dash_

## Installation

Install `plugin-name` with NPM

```bash
  yarn add @hydrosquall/storybook-datadog-rum
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. (See typings.d.ts for the most up-to-date list.)

```ts
{
    STORYBOOK_DATADOG_APPLICATION_ID: string;
    STORYBOOK_DATADOG_CLIENT_TOKEN: string;
    STORYBOOK_DATADOG_SITE: string;

    // The variables below are optional
    // Read about what they do here:
    STORYBOOK_DATADOG_SERVICE?: string;
    STORYBOOK_DATADOG_SAMPLE_RATE?: number;
    STORYBOOK_DATADOG_TRACK_INTERACTIONS?: boolean;
}
```

[Full initialization parameters documentation](https://docs.datadoghq.com/real_user_monitoring/browser/#initialization-parameters)
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Acknowledgements

- [README Generator](https://readme.so/editor)
- [Addon Kit Template](https://github.com/storybookjs/addon-kit)


## Authors

- [Cameron Yick](https://www.github.com/hydrosquall)


## Appendix

- Disable data collection when running locally
- Enable logging custom events
