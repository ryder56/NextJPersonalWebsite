import covid_image from '../public/covid_img.jpg';
import huffman_image from '../public/h-compression.png';
import r6_image from '../public/r6.jpg';
import SVD_image from '../public/SVD.jpeg';
import ninja_image from '../public/ninja2.png';
import selfie from '../public/me.jpg';
import gca from '../public/GilbertClassicalAcademy.png';
import asu from '../public/ASU.png';
import uasp from '../public/UASP.jpg';
import amazon from '../public/amazon.jpg';
import aws from '../public/aws.jpg';
import frameworks from '../public/holy_framework.png';
import languages from '../public/programming_languages.jpg';
import a_plus from '../public/a_plus.png';

// Constants for project display props
export const Covid_Visualizer_Title = 'Covid AR Visualizer';
export const Covid_Visualizer_Description =
    'This is a project that uses augmented reality (AR) to allow a map of the United States to be placed into AR ' +
    'and then track the rise of COVID-19 cases in the United States with bars seen in AR. It pulls the data from ' +
    'a data set in Google Big Query and then stores it in an object that holds each state\'s data.';
export const Covid_Visualizer_Tech = 'Google Big Query, C#, Unity';
export const Covid_Visualizer_Link = 'https://github.com/JackHaehl/CovidARVisualizer';
export const Covid_Visualizer_Image = covid_image;

export const Huffman_Compression_Title = 'Huffman Compression';
export const Huffman_Compression_Description =
    'An implementation of the huffman compression algorithm on an inputted text file or text string. It ' +
    'can print the huffman compression into a file or the console (if it is small enough), and then ' +
    'returns the compression rate from it.';
export const Huffman_Compression_Tech = 'C++';
export const Huffman_Compression_Link = 'https://github.com/ryder56/HuffmanCompression';
export const Huffman_Compression_Image = huffman_image;

export const R6_Character_Chooser_Title = 'R6 Character Chooser';
export const R6_Character_Chooser_Description =
    'This project is built around the concept of choosing the optimal characters, sites, and reinforcements for the map and current ' +
    'team composition for a game of Rainbow Six Siege given what your team is currently playing. The data ' +
    'currently entered in it is based off of professional games from the 2019 season. This project utilizes data structures to ' +
    'categorize objects, characters, and maps.';
export const R6_Character_Chooser_Tech = 'Java';
export const R6_Character_Chooser_Link = 'https://github.com/ryder56/R6CharChooser';
export const R6_Character_Chooser_Image = r6_image;

export const Video_DMD_Title = 'Video DMD';
export const Video_DMD_Description =
    'This project took a video and used dynamic mode decomposition to turn the video into an equation, ' +
    'then rebuilt and interpolated the video. The result was not perfect, but I gained more experience in ' +
    'Matlab as well as gaining a deeper understanding of how videos and pictures are stored and manipulated.';
export const Video_DMD_Tech = 'Matlab';
export const Video_DMD_Link = 'https://github.com/ryder56/videoDMD';
export const Video_DMD_Image = SVD_image;

export const Resume_Website_Title = 'Resume/Personal Website';
export const Resume_Website_Description =
    'This project used NextJS to provide SSR to webpages built into react. The goal of this was ' +
    'to work within a modern framework that used react as well as gained the benefits of SSR. ' +
    'This project also used tailwind and sass to provide additional css ease and utility. ' +
    '(excuse the typo in the repo\'s title)';
export const Resume_Website_Tech = 'TypeScript, NextJS, Sass, Tailwind';
export const Resume_Website_Link = 'https://github.com/ryder56/NextJPersonalWebsite';
export const Resume_Website_Image = ninja_image;

export const Self_Title = 'About Me';
export const Self_Description = 'Hi! I am Ryder Roth, a computer science student at ASU. My interests are in full stack development and ' +
                                'cloud architecture. I am always wanting to tackle a new project and love when I learn something ' +
                                'that causes me to make a complete 180 on how I think about a topic! My hobbies (outside of CS) are lifting, hiking, ' +
                                'cooking, and biking. (click on this component to view my github and see some projects I have worked on)';
export const Self_Link = 'https://github.com/ryder56';
export const Self_Image = selfie;

export const High_School_Title = 'High School Diploma';
export const High_School_Description = 'Graduated from Gilbert Classical Academy (GCA) with a 4.5 GPA. ' +
                                       'I attended GCA from 2014 - 2019.';
export const High_School_Link = 'https://www.gilbertschools.net/gilbertclassicalacademy';
export const High_School_Image = gca;

export const College_Degree_Title = 'B.S. Computer Science';
export const College_Degree_Description = 'I currently have a 3.99 GPA at Arizona State University (ASU) while being a part of the honors college. ' +
                                          'I started in Fall of 2019 and will be graduating in Fall of 2022.';
export const College_Degree_Link = 'https://www.asu.edu/';
export const College_Degree_Image = asu;

export const UASP_Title = 'ASU Tutor';
export const UASP_Description = 'I am currently a Subject Area Tutor through University Academic Success Programs (UASP) at ASU. ' +
                                'I began in November of 2020. I tutor Computer Science and Mathematics and aim to think ' +
                                'about fundamentals with students to coconstruct knowledge for complext topics. I am ' +
                                'constantly reviewing topics and am finding new ways to think about topics in order to improve ' +
                                'the student\'s understanding of a topic (as well as my own).';
export const UASP_Link = 'https://tutoring.asu.edu/';
export const UASP_Image = uasp;

export const Amazon_Title = 'Software Dev Engineer I Intern';
export const Amazon_Description = 'I worked as a Software Dev Engineer I Intern at Amazon in the from May 2021 to July 2021. At this position, ' +
                                  'I used Natve AWS Services to design and build a scalable solution to a given problem. ' +
                                  'I worked on both front and back end technologies within an agile environment. ' +
                                  'Additionally, I implemented new technologies to debug services utilizing a serverless ' +
                                  'architecture and made sure to maintain thorough documentation through every step of the process.';
export const Amazon_Link = 'https://www.amazon.com/';
export const Amazon_Image = amazon;

export const Languages_Title = 'Languages';
export const Languages_Description = 'Here is a (not exhaustive) list of programming laguages I have experience with: ' +
                                     'TypeScript, JavaScript, Java, C, C++, C#, Python. See my Github for some projects ' +
                                     'done with these languages.';
export const Languages_Link = 'https://github.com/ryder56';
export const Languages_Image = languages;

export const AWS_Technologies_Title = 'AWS';
export const AWS_Technologies_Description = 'I have done a fair bit of work with AWS. I have a lot of experience in ' +
                                            'the following services: API Gateway, DynamoDB, Lambda, S3, CloudFront, ' +
                                            'CodePipeline, CodeBuild, Route53, CDK. See my Github for some projects that ' +
                                            'utilize a few of these services.';
export const AWS_Technologies_Link = 'https://aws.amazon.com/';
export const AWS_Technologies_Image = aws;

export const Frameworks_And_Tools_Title = 'Frameworks and Tools';
export const Frameworks_And_Tools_Description = 'I have done some work and am experienced with the following frameworks ' +
                                                'and tools: React, Smithy (API IDL), OpenAPI, Git, Jest (unit testing), ' +
                                                'JUnit, NextJS (React SSR). See my Github for some projects that utilize these.';
export const Frameworks_And_Tools_Link = 'https://github.com/ryder56';
export const Frameworks_And_Tools_Image = frameworks;

export const Deans_List_Title = 'Deans List';
export const Deans_List_Description = 'A recognition for having a GPA higher than 3.5 I have achieved this' +
                                      'from Fall 2020 to Spring 2021';
export const Deans_List_Link = 'https://catalog.asu.edu/retention_standing';
export const Deans_List_Image = a_plus;

export const Best_AR_Hack_Title = 'Best AR Hack';
export const Best_AR_Hack_Description = 'Won Best AR Hack at Sunhacks for an AR map that displayed a bar ' +
                                        'that represented the number of covid cases for each state over a ' +
                                        'period of time.';
export const Best_AR_Hack_Link = 'https://devpost.com/software/covid-19-augmented-reality-visualizer';
export const Best_AR_Hack_Image = covid_image;

// Tailwind container size constants
export const SM_TAILWIND_CONTAINER = 640;
export const MD_TAILWIND_CONTAINER = 768;
export const LG_TAILWIND_CONTAINER = 1024;
export const XL_TAILWIND_CONTAINER = 1280;
export const TWO_XL_TAILWIND_CONTAINER = 1536;