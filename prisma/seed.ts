import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const interests = [
  'Daily Life',
  'Small Talk',
  'Emotions',
  'Relationships',
  'Greetings',
  'Time and Date',

  'Travel',
  'Countries and Nationalities',
  'Geography',
  'Languages',
  'Holidays',
  'Customs and Traditions',

  'Education',
  'Exams and Tests',
  'Academic Vocabulary',
  'School Subjects',
  'Study Abroad',

  'Jobs',
  'Office',
  'Business',
  'CV and Interview',
  'Freelancing',
  'Workplace Communication',

  'Technology',
  'Science',
  'Space',
  'AI and Machine Learning',
  'Engineering',
  'Medicine',

  'Shopping',
  'Food and Drinks',
  'Restaurants and Cafes',
  'Money and Prices',
  'Customer Service',

  'Home',
  'Furniture',
  'Housework',
  'Appliances',

  'City Life',
  'Transportation',
  'Directions',
  'Traffic',
  'Public Transport',

  'Movies',
  'Music',
  'Books',
  'Video Games',
  'Social Media',
  'Celebrities',

  'Health',
  'Fitness',
  'Mental Health',
  'Sports',
  'Nutrition',
  'Body Parts',

  'Nature',
  'Animals',
  'Weather',
  'Environment',
  'Plants and Trees',

  'Finance',
  'Investments',
  'Economics',
  'Marketing',
  'Startups',

  'Art',
  'Literature',
  'Theater',
  'Photography',
  'Fashion',
  'Design',

  'Family',
  'Parenting',
  'Pregnancy',
  'Childhood',

  'Immigration',
  'Real Estate',
  'Bureaucracy',
  'Legal Terms',
  'Banking Abroad',
];

async function main() {
  const createdInterests = await prisma.interest.createMany({
    data: interests.map((name) => ({ name })),
    skipDuplicates: true,
  });

  console.log(`✅ Created ${createdInterests.count} interests`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
