import Container from '@/components/Container';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Container title={'About me | Zong xun'} description={'About Page'}>
      <div className="flex flex-col items-center  ">
        <div
          className="w-48 h-48 rounded-full bg-center bg-cover"
          style={{ backgroundImage: 'url(/avatar.png)' }}
        />
        <h3>Lee Zong Xun</h3>
        <p className="lighter mx-auto">Computer Science and Statistics, NUS</p>
      </div>
      <p className="mx-auto text-justify">
        I am a believer in the power of fundamentals. I love working with
        low-level development tools, and I derive meaning from building learning
        resources. I grew up in urban Singapore and currently go to school at
        the National University of Singapore, studying towards a degree in
        Computer Science. I spend my free time slipping and sliding in vim,
        building websites, and enjoying time with friends and family.
      </p>
    </Container>
  );
};

export default About;
