import { ContentData } from './types';

export const defaultContent: ContentData = {
  personalInfo: {
    email: 'hasan.49.5012@gmail.com',
    phone: '+90 555 555 5555',
    linkedinUrl: 'https://www.linkedin.com/in/hasan-emir-caglar',
    cvUrl: '/hasan-emir-caglar-cv_last.pdf',
    instagramUrl: 'https://www.instagram.com/caglaremirr',
    githubUrl: 'https://www.github.com/Hcaglar32',
  },
  heroBanner: {
    title: 'Hasan Emir Caglar',
    subtitle: 'Frontend Developer',
    description: 'Merhaba, ben Hasan Emir Çağlar. 1 yıllık Jr. Frontend Developer deneyimimle kurumsal web siteleri ve uygulamalar geliştirdim. UI/UX tasarımlarını koda dönüştürdüm. Hedefim, kendimi geliştirerek sektörde ilerlemek ve yeni iş fırsatları bulmak',
    imageUrl: '/ben.JPG',
  },
  projects: [
    {
      id: 1,
      title: 'Cags Movie',
      description: 'Kullanıcıların Üye girişi yapabildikleri bir film bilgilendirme ve listeleme sitesi. Kullanılan teknolojiler: React.js , tailwind.css',
      image: '/movie.jpg',
      tag: ['All', 'Frontend'],
      gitUrl: 'https://github.com/Hcaglar32/movie-project',
      previewUrl: '/',
    },
    {
      id: 2,
      title: 'Hava Durumu',
      description: 'Kullanıcıların dünyadaki bütün şehirleri aratarak o şehrin hava durumunu öğrenebileceği bir uygulama. Kullanılan teknoloji:vite.js',
      image: '/weatherapp.jpg',
      tag: ['All', 'Frontend'],
      gitUrl: 'https://github.com/Hcaglar32/WeatherApp',
      previewUrl: '/',
    },
  ],
};
