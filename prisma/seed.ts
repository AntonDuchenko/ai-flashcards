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
  const createdFlashcards = await prisma.flashcard.createMany({
    data: [
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sky',
        answer: 'небо',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'car',
        answer: 'машина',
      },
      {
        question: 'water',
        answer: 'вода',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'friend',
        answer: 'друг',
      },
      {
        question: 'earth',
        answer: 'земля',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'house',
        answer: 'дом',
      },
      {
        question: 'book',
        answer: 'книга',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'moon',
        answer: 'луна',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'road',
        answer: 'дорога',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'fire',
        answer: 'огонь',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'dog',
        answer: 'собака',
      },
      {
        question: 'apple',
        answer: 'яблоко',
      },
      {
        question: 'food',
        answer: 'еда',
      },
      {
        question: 'drink',
        answer: 'напиток',
      },
      {
        question: 'tree',
        answer: 'дерево',
      },
      {
        question: 'music',
        answer: 'музыка',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
      {
        question: 'cat',
        answer: 'кот',
      },
      {
        question: 'phone',
        answer: 'телефон',
      },
      {
        question: 'love',
        answer: 'любовь',
      },
      {
        question: 'sun',
        answer: 'солнце',
      },
    ],
    skipDuplicates: true,
  });

  console.log(`✅ Created ${createdFlashcards.count} english flashcards`);

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
