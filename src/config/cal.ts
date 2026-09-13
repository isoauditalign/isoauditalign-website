// Cal.com booking config.
// eventType is optional — leave it '' to embed the general booking page (all event types),
// or set it to a specific event's slug (e.g. '45min-consultation') to embed just that one.
export const CAL_CONFIG = {
  username: 'prashant.sharma9-outlook.com',
  eventType: '',
  embedMode: 'inline' as const,
};

export const isCalConfigured = () => CAL_CONFIG.username !== 'REPLACE_WITH_CALCOM_USERNAME';
