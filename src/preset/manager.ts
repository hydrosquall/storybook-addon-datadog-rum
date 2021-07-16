// Based on GA addon
// https://github.com/storybookjs/addon-google-analytics/blob/next/src/register.ts
// No need to manually instrument page views due to usage of history API
//  - https://docs.datadoghq.com/real_user_monitoring/browser/data_collected/?tab=view#single-page-applications


import { window as globalWindow } from 'global';
import { addons } from '@storybook/addons';
import { STORY_ERRORED, STORY_MISSING } from '@storybook/core-events';

import { datadogRum } from '@datadog/browser-rum'

import { ADDON_ID } from '../constants';


addons.register(ADDON_ID, (api) => {
  datadogRum.init({
    applicationId: globalWindow.STORYBOOK_DATADOG_APPLICATION_ID,
    clientToken: globalWindow.STORYBOOK_DATADOG_CLIENT_TOKEN,
    site: globalWindow.STORYBOOK_DATADOG_SITE,
    service: globalWindow.STORYBOOK_DATADOG_SERVICE ?? 'storybook-default',
    //  env: 'production',
    //  version: '1.0.0',
    sampleRate: globalWindow.STORYBOOK_DATADOG_SAMPLE_RATE ?? 100,
    trackInteractions: globalWindow.STORYBOOK_DATADOG_TRACK_INTERACTIONS?? true,
  })

  api.on(STORY_ERRORED, ({ description }: { description: string }) => {
    datadogRum.addError( description )
  });
  api.on(STORY_MISSING, (id: string) => {
    const description = `attempted to render ${id}, but it is missing`
    datadogRum.addError(description);
  });
});
