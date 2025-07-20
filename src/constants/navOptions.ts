export interface NavOption {
  path: string;
  label: string;
  icon?: string; // Optional icon for each option
}

export const navOptions: NavOption[] = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/status', label: 'Status', icon: '🌍' },
  { path: '/news', label: 'News', icon: '📰' },
  { path: '/campaign', label: 'Campaign', icon: '🌌' },
  { path: '/major-orders', label: 'Major Orders', icon: '🎯' },
  { path: '/planets', label: 'Planets', icon: '🪐' },
];
