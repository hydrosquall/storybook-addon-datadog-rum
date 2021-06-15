declare module "global" {
  export const window: {
    STORYBOOK_DATADOG_APPLICATION_ID: string;
    STORYBOOK_DATADOG_CLIENT_TOKEN: string;
    STORYBOOK_DATADOG_SITE: string;
    STORYBOOK_DATADOG_SERVICE?: string;
    STORYBOOK_DATADOG_SAMPLE_RATE?: number;
    STORYBOOK_DATADOG_TRACK_INTERACTIONS?: boolean;
  }
};
