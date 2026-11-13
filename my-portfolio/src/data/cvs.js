import overviewCv from '../assets/cv/arjun-ramphal-one-page-cv.pdf?url';
import detailedCv from '../assets/cv/arjun-ramphal-detailed-cv.pdf?url';

export const cvVersions = [
  {
    id: 'overview',
    title: 'One-page CV',
    description: 'A quick overview of my education, achievements and programming skills.',
    pages: 1,
    href: overviewCv,
  },
  {
    id: 'detailed',
    title: 'Detailed CV',
    description: 'My academic background in more detail, including module results and interests.',
    pages: 2,
    href: detailedCv,
  },
];
