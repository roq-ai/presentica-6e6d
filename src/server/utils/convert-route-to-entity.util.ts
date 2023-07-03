const mapping: Record<string, string> = {
  companies: 'company',
  presentations: 'presentation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
