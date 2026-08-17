export interface Job {
  company: string;
  period: string;
  location: string;
  points: string[];
}

export const EXPERIENCE: Job[] = [
  {
    company: 'Arbio GmbH',
    period: '2024 — Present',
    location: 'Remote, Contract, Germany',
    points: [
      'Integrating AI into core operations — building a smart call center and help desk system on LLMs and NestJS.',
      'Built the internal CMS from scratch for a B2B2C rental platform, supporting tools that helped secure €3M in funding.',
      'Designed RESTful APIs and integrated third-party services; maintained AWS CI/CD pipelines via GitHub Actions.',
    ],
  },
  {
    company: 'Moonfare GmbH',
    period: '2022 — 2024',
    location: 'Remote, Outsource contract, Germany',
    points: [
      'Broke down a monolithic system into microservices, improving scalability and deployment stability.',
      'Owned and delivered a key product feature that contributed to $3.5M in annual revenue.',
      'Mentored junior developers; co-authored internal NPM modules and microservice boilerplate.',
    ],
  },
];
