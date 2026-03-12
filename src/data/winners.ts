import type { Locale } from '../i18n/site';

export type WinnerAward = 'general' | 'kerstan' | 'woodhams';

export interface Winner {
  name: string;
  school?: string;
  award: WinnerAward;
  amount: string;
}

export interface WinnerYear {
  year: string;
  recipients: Winner[];
}

const awardLabels = {
  en: {
    general: 'Mensa Canada Scholarship',
    kerstan: 'Edgar Kerstan Memorial Scholarship',
    woodhams: 'Frank & Betty Woodhams Memorial Scholarship',
  },
  fr: {
    general: 'Bourse d\'études Mensa Canada',
    kerstan: 'Bourse commémorative Edgar Kerstan',
    woodhams: 'Bourse commémorative Frank et Betty Woodhams',
  },
} as const satisfies Record<Locale, Record<WinnerAward, string>>;

export const winnersByYear: WinnerYear[] = [
  {
    year: '2025',
    recipients: [
      { name: 'Kieran Bhaskara', school: 'McMaster University', award: 'woodhams', amount: '$2,800' },
      { name: 'Justin Yang', school: 'Western University', award: 'kerstan', amount: '$1,500' },
      { name: 'Alex Arkilanian', school: 'Memorial University', award: 'general', amount: '$1,000' },
      { name: 'Juliette Lacasse', school: 'Université de Sherbrooke', award: 'general', amount: '$1,000' },
    ],
  },
  {
    year: '2024',
    recipients: [
      { name: 'Silas Vriend', school: 'McMaster University', award: 'woodhams', amount: '$2,760' },
      { name: 'Declan McCloskey', school: 'Carleton University', award: 'kerstan', amount: '$1,500' },
      { name: 'Karim Bouzid', school: 'Laval University', award: 'general', amount: '$1,000' },
      { name: 'Meriem Khalfoun', school: 'Laval University', award: 'general', amount: '$1,000' },
    ],
  },
  {
    year: '2023',
    recipients: [
      { name: 'William Verreault', school: 'Université Laval', award: 'woodhams', amount: '$5,330' },
      { name: 'Thierry Judge', school: 'Université de Sherbrooke', award: 'kerstan', amount: '$1,500' },
      { name: 'Elliott Wong', school: 'University of Toronto', award: 'general', amount: '$1,000' },
      { name: 'Kate Bourne', school: 'University of Calgary', award: 'general', amount: '$1,000' },
    ],
  },
  {
    year: '2022',
    recipients: [
      { name: 'Esra Erkut', school: 'University of Toronto', award: 'kerstan', amount: '$1,500' },
      { name: 'Shaan Baig', school: 'Concordia University', award: 'general', amount: '$1,000' },
      { name: 'Maxime Teixeira', school: 'Université Laval', award: 'general', amount: '$1,000' },
    ],
  },
  {
    year: '2021',
    recipients: [
      { name: 'Andrew Guo', school: 'University of Waterloo', award: 'woodhams', amount: '$5,099' },
      { name: 'Sébastien Maheux', school: 'Western University', award: 'kerstan', amount: '$1,500' },
      { name: 'Hisham Mohammad', school: 'University of Waterloo', award: 'general', amount: '$1,000' },
      { name: 'Ann-Sophie Otis', school: 'Université du Québec', award: 'general', amount: '$1,000' },
    ],
  },
  {
    year: '2020',
    recipients: [
      { name: 'Rebecca Kozak', school: 'Western University', award: 'kerstan', amount: '$3,000' },
      { name: 'Ana Brennan', school: 'University of Ottawa', award: 'general', amount: '$2,000' },
    ],
  },
  {
    year: '2019',
    recipients: [
      { name: 'Vincent Chalifour', school: 'UQTR', award: 'woodhams', amount: '$5,492' },
      { name: 'Daniel Almeida', school: 'McGill University', award: 'kerstan', amount: '$3,000' },
      { name: 'Melissa Van Bussel', school: 'Trent University', award: 'general', amount: '$2,000' },
      { name: 'William Chevarie', school: 'Université Laval', award: 'general', amount: '$2,000' },
    ],
  },
  {
    year: '2018',
    recipients: [
      { name: 'Anam Qudrat', award: 'kerstan', amount: '$3,000' },
      { name: 'Ruis MacDonald', award: 'general', amount: '$2,000' },
      { name: 'Cynthia Rocha', award: 'general', amount: '$2,000' },
    ],
  },
  {
    year: '2017',
    recipients: [
      { name: 'Jean Simon Lemay', award: 'woodhams', amount: '$2,759' },
      { name: 'Brian Keller', award: 'kerstan', amount: '$3,000' },
      { name: 'Dylan Hickson', award: 'general', amount: '$2,000' },
      { name: 'Nick Santella', award: 'general', amount: '$2,000' },
    ],
  },
  {
    year: '2016',
    recipients: [
      { name: 'David Layden', award: 'woodhams', amount: '$10,119' },
      { name: 'Michael Skinnider', award: 'kerstan', amount: '$3,000' },
      { name: 'Jordan Squair', award: 'general', amount: '$1,000' },
      { name: 'Alex Szojka', award: 'general', amount: '$1,000' },
    ],
  },
];

export function getAwardLabel(locale: Locale, award: WinnerAward): string {
  return awardLabels[locale][award];
}
