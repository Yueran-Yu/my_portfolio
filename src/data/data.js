import happyFamilyApp from '../assets/images/happyFamilyMockUp.png';
import spendingApp from '../assets/images/SpendingMockUp.png';
import myPortfolio from '../assets/images/myPortfolio.png'

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Spending App',
    content: 'I have the habit of recording my spending every time I go shopping or buy groceries. This habit has been stuck for more than ten years since I went to university.  So in the process of learning React, I came up with the idea of making my own Spending App. It is written with typescript, the UI was designed by myself. You can do addition, subtraction, clear, with the calculator. Each entry can be viewed, edited, or deleted in the first Tab. I will gradually add more functions to make this app more perfect in the future.',
    projectUrl: '#',
    githubUrl: '#',
    skills: ['React', 'Typescript', 'UI/UX', 'Custom-Hooks', 'Local-Storage', 'Apache-ECharts', 'React-Icons', 'Webpack'],
    img: spendingApp,
    alt: 'spending App'
  },
  {
    id: 2,
    title: 'Happy Family Clothing',
    content: 'This is an E-Commerce Project that I learned from Andrei Neagoie and Yihua Zhang in Udemy. This course included Redux, Hooks, HOC, GraphQL,  Payment API, and so on. I have done some changes, like the data source, which I grabbed from Rapid API. Part of the design and layout also has been modified. ',
    projectUrl: '#',
    githubUrl: '#',
    skills: ['React', 'Firebase', 'Rapid-API', 'Stripe-API', 'Redux', 'Authentication', 'Styled-Components'],
    img: happyFamilyApp,
    alt: 'Happy Family Clothing'
  },
  {
    id: 3,
    title: 'Grace Portfolio',
    content: 'This was my first time doing a personal portfolio and I had no clue at first. After doing a lot of studying I gradually got the inspiration. Despite my limited design skills, I did a lot of work to design what I ultimately wanted the site to look like. I chose a one-page presentation because it was straightforward, simple and clear.',
    projectUrl: '#',
    githubUrl: '#',
    skills: ['React', 'Custom-Hooks', 'UI/UX', 'Figma', 'Framer-Motion', 'Animations', 'TailwindCss', 'Local-Storage', 'React-Lazy'],
    img: myPortfolio,
    alt: 'Grace Portfolio'
  }
]


