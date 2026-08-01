export interface Project {
  name: string;
  status: string;
  live?: boolean;
  description: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'Binance Trading Bot',
    status: 'Live',
    live: true,
    description:
      'Automated trading bot on the Binance API — configurable strategies, signal detection and risk management, trained on historical market data. Taught me a lot about financial data pipelines and the realities of algorithmic trading.',
    stack: ['Node.js', 'TypeScript', 'Binance API', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'New Year Resolutions App',
    status: 'In progress',
    description:
      'A mobile app for setting, tracking and sharing resolutions — built to run the full product loop myself, from UX to an App Store release.',
    stack: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
  },
];
