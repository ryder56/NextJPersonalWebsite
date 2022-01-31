import covid_image from '../public/covid_img.jpg';
import huffman_image from '../public/h-compression.png';
import r6_image from '../public/r6.jpg';
import SVD_image from '../public/SVD.jpeg';
import ninja_image from '../public/ninja2.png';

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