import { window as globalWindow } from 'global';
import { addons } from '@storybook/addons';
import { STORY_ERRORED, STORY_MISSING } from '@storybook/core-events';

import { datadogRum } from '@datadog/browser-rum'

addons.register('storybook/datadog-rum', (api) => {
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
