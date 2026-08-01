export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const base = '/testimonials';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Paul Bäumler',
    role: 'CEO & Co-Founder, Arbio',
    avatar: `${base}/arbio_paul.jpeg`,
    quote:
      "I had the privilege of working with Vlad for almost a year at Arbio. Vlad is an exceptionally experienced full-stack engineer whose dedication and work ethic left a significant mark on our team. His technical expertise is unparalleled, and his ability to independently tackle complex challenges made him a cornerstone of our engineering projects. Vlad is humble, proactive, and an excellent collaborator, always willing to support his team and share his knowledge. His calm demeanor and problem-solving skills made him a pleasure to work with — I wholeheartedly recommend him to any team looking for a highly skilled and dedicated engineer.",
  },
  {
    name: 'Kerrin Sofie Spintig',
    role: 'Product Manager, Arbio',
    avatar: `${base}/arbio_kerrin.jpeg`,
    quote:
      "I had the privilege of working closely with Vlad after he joined our team in March. As a backend developer, he not only brought deep technical expertise but also an impressive ability to connect with stakeholders across the company. He was supportive, approachable, patient and valued. Vlad showed outstanding commitment, often dedicating extra hours to ensure smooth deployments and was always available to discuss requirements or implementation details. He played a pivotal role in building critical backend infrastructure and led the development of our internal CMS with a sophisticated role-based access control system, tailored to both our team and external clients. I have no doubt he'll make a significant impact wherever he goes next.",
  },
  {
    name: 'Maciej Pieczara',
    role: 'Engineering Manager, Moonfare',
    avatar: `${base}/moonfare_maciej.jpeg`,
    quote:
      "Having had the pleasure of working closely with Vlad, I can confidently say he was an invaluable asset to our team. His depth of technical expertise, coupled with his strong problem-solving abilities, consistently drove projects to success. What truly sets Vlad apart is his exceptional communication skills and willingness to collaborate across team members and departments, making him not only a standout senior developer but also a trusted mentor to junior team members. If you're seeking a seasoned professional who can deliver results while fostering a positive team environment, look no further than Vlad.",
  },
  {
    name: 'Diogo Reis E. Santo',
    role: 'Senior Backend Developer, Moonfare',
    avatar: `${base}/moonfare_diogo.jpeg`,
    quote:
      "During our time working together, Vladimir has shown expertise in his field, eagerness to learn, strong communication skills, great autonomy and never faulted with a positive attitude. He consistently contributed valuable ideas, supported the team whenever required — regardless of the time or amount of work on his hands — and always had a great attitude towards anything he faced. I know he will brighten the day of any team he joins and will enhance any work he gets his hands on.",
  },
  {
    name: 'Yevhen Huba',
    role: 'Resource Director, Andersen',
    avatar: `${base}/andersen_yevhen.jpeg`,
    quote:
      "During his time at Andersen, Vladimir has shown himself to be an exceptional professional: he efficiently and skillfully completed his tasks, lending a hand to his colleagues when needed. Vladimir consistently delivered high-quality work and demonstrated a willingness to seek guidance and accept feedback constructively. He operates independently within the team, taking responsibility for his assignments and producing results autonomously. He also actively participated in professional development, completing courses in both technical and people-management domains.",
  },
  {
    name: 'J. Agustin Carrique',
    role: 'Engineering Manager, Moonfare',
    avatar: `${base}/moonfare_agustin.jpeg`,
    quote:
      "During our time working together, Vladimir was an essential member of the team who demonstrated flexibility and expertise in various areas. His contributions helped build a great product. I think Vladimir is a great team player and can adapt to different work environments. I really recommend him to be part of any team or project.",
  },
];
